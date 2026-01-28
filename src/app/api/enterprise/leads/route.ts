import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Rate limiting storage (in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Rate limiting: 5 submissions per IP per hour
const RATE_LIMIT = 5;
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

// Input validation schema
const leadSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50),
  lastName: z.string().min(1, 'Last name is required').max(50),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  companyName: z.string().min(1, 'Company name is required').max(100),
  jobTitle: z.string().min(1, 'Job title is required').max(100),
  industry: z.string().min(1, 'Industry is required'),
  employeeCount: z.string().min(1, 'Company size is required'),
  useCase: z.string().min(10, 'Please provide more details about your use case').max(1000),
  timeline: z.string().min(1, 'Timeline is required'),
  budget: z.string().optional(),
});

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');

  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }

  if (realIP) {
    return realIP;
  }

  return request.ip || 'unknown';
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitMap.get(ip);

  if (!limit) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (limit.count >= RATE_LIMIT) {
    return false;
  }

  limit.count += 1;
  return true;
}

async function sendNotificationEmail(leadData: any) {
  // In production, integrate with your email service (SendGrid, Resend, etc.)
  // For now, we'll just log the notification
  console.log('📧 New enterprise lead notification:', {
    company: leadData.companyName,
    email: leadData.email,
    industry: leadData.industry,
    timeline: leadData.timeline,
    useCase: leadData.useCase.substring(0, 100) + '...',
  });

  // TODO: Implement actual email notification
  // Example with Resend:
  /*
  try {
    await resend.emails.send({
      from: 'noreply@sinanai.com',
      to: ['sales@sinanai.com'],
      subject: `New Enterprise Lead: ${leadData.companyName}`,
      html: `
        <h2>New Enterprise Assessment Request</h2>
        <p><strong>Company:</strong> ${leadData.companyName}</p>
        <p><strong>Contact:</strong> ${leadData.firstName} ${leadData.lastName}</p>
        <p><strong>Email:</strong> ${leadData.email}</p>
        <p><strong>Phone:</strong> ${leadData.phone || 'Not provided'}</p>
        <p><strong>Job Title:</strong> ${leadData.jobTitle}</p>
        <p><strong>Industry:</strong> ${leadData.industry}</p>
        <p><strong>Company Size:</strong> ${leadData.employeeCount}</p>
        <p><strong>Timeline:</strong> ${leadData.timeline}</p>
        <p><strong>Budget:</strong> ${leadData.budget || 'Not specified'}</p>
        <p><strong>Use Case:</strong></p>
        <p>${leadData.useCase}</p>
      `,
    });
  } catch (error) {
    console.error('Failed to send notification email:', error);
  }
  */
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting check
    const clientIP = getClientIP(request);
    if (!checkRateLimit(clientIP)) {
      return NextResponse.json(
        {
          message: 'Too many requests. Please try again in an hour.',
          code: 'RATE_LIMIT_EXCEEDED'
        },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validatedData = leadSchema.parse(body);

    // Calculate lead score (simple algorithm)
    let leadScore = 0;

    // Industry scoring
    const highValueIndustries = ['financial-services', 'healthcare', 'manufacturing'];
    if (highValueIndustries.includes(validatedData.industry)) {
      leadScore += 30;
    } else {
      leadScore += 15;
    }

    // Company size scoring
    const employeeCountScores: { [key: string]: number } = {
      '1-50': 10,
      '51-200': 20,
      '201-1000': 30,
      '1001-5000': 40,
      '5001-10000': 45,
      '10000+': 50
    };
    leadScore += employeeCountScores[validatedData.employeeCount] || 10;

    // Timeline urgency scoring
    const timelineScores: { [key: string]: number } = {
      'immediate': 30,
      '1-3-months': 25,
      '3-6-months': 20,
      '6-12-months': 15,
      '12+ months': 10
    };
    leadScore += timelineScores[validatedData.timeline] || 10;

    // Budget scoring
    const budgetScores: { [key: string]: number } = {
      'under-100k': 5,
      '100k-500k': 15,
      '500k-1m': 25,
      '1m-5m': 35,
      '5m+': 40,
      'not-sure': 10
    };
    if (validatedData.budget) {
      leadScore += budgetScores[validatedData.budget] || 5;
    }

    // Determine lead priority
    let priority: 'low' | 'medium' | 'high' | 'urgent';
    if (leadScore >= 80) {
      priority = 'urgent';
    } else if (leadScore >= 60) {
      priority = 'high';
    } else if (leadScore >= 40) {
      priority = 'medium';
    } else {
      priority = 'low';
    }

    // Log the lead data (replace with database save in production)
    const leadId = `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const leadData = {
      id: leadId,
      ...validatedData,
      leadScore,
      priority,
      source: 'enterprise-website',
      ipAddress: clientIP,
      userAgent: request.headers.get('user-agent') || '',
      timestamp: new Date().toISOString(),
    };

    console.log('🎯 New enterprise lead captured:', leadData);

    // Send notification email (async, don't wait)
    sendNotificationEmail(validatedData).catch(console.error);

    // Return success response
    return NextResponse.json({
      message: 'Assessment request submitted successfully',
      leadId: leadId,
      priority: priority,
    });

  } catch (error) {
    console.error('Error processing lead submission:', error);

    // Validation error
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          message: 'Validation error',
          errors: error.errors,
        },
        { status: 400 }
      );
    }


    // Generic error
    return NextResponse.json(
      {
        message: 'Internal server error. Please try again.',
      },
      { status: 500 }
    );
  }
}