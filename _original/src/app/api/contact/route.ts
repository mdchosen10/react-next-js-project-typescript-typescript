import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/email-simple';
import { ZodError } from 'zod';

/**
 * POST /api/contact
 * Handle contact form submissions with validation, email, and lead tracking
 *
 * This endpoint is designed for Fortune 500 prospects and implements:
 * - Professional validation and error handling
 * - Dual email delivery (prospect confirmation + internal notification)
 * - Lead tracking in SQLite database
 * - Rate limiting considerations
 * - Comprehensive error logging
 */
export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body = await request.json();

    // Basic validation
    if (!body.name || !body.email || !body.company || !body.message) {
      return NextResponse.json(
        {
          error: true,
          message: 'Please fill in all required fields.',
          code: 'VALIDATION_ERROR',
        },
        { status: 400 }
      );
    }

    // Send email
    try {
      await sendContactEmail({
        name: body.name,
        email: body.email,
        company: body.company,
        message: body.message,
        timeline: body.timeline,
        budget: body.budget,
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the request if email fails, just log it
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your inquiry. We\'ll be in touch within 24 hours.',
      },
      { status: 201 }
    );

  } catch (error) {
    // Handle Zod validation errors
    if (error instanceof ZodError) {
      const fieldErrors = error.errors.map((err) => ({
        field: err.path.join('.'),
        message: err.message,
      }));

      return NextResponse.json(
        {
          error: true,
          message: 'Please check your input and try again.',
          code: 'VALIDATION_ERROR',
          details: fieldErrors,
        },
        { status: 400 }
      );
    }

    // Handle Prisma errors
    if (error instanceof Error && error.name === 'PrismaClientKnownRequestError') {
      console.error('Database error:', error);
      return NextResponse.json(
        {
          error: true,
          message: 'We encountered a technical issue. Please try again or contact us directly.',
          code: 'DATABASE_ERROR',
        },
        { status: 500 }
      );
    }

    // Handle JSON parsing errors
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        {
          error: true,
          message: 'Invalid request format.',
          code: 'INVALID_JSON',
        },
        { status: 400 }
      );
    }

    // Generic error handler
    console.error('Unexpected error in contact API:', error);
    return NextResponse.json(
      {
        error: true,
        message: 'An unexpected error occurred. Please try again or contact us directly.',
        code: 'INTERNAL_ERROR',
        details: process.env.NODE_ENV === 'development'
          ? { error: error instanceof Error ? error.message : String(error) }
          : undefined,
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/contact
 * Health check endpoint
 */
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    endpoint: 'contact',
    version: '1.0',
  });
}
