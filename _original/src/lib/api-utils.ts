import { NextResponse } from 'next/server';

/**
 * Standardized API response types
 */
export type ApiResponse<T = any> = {
  success: boolean;
  message?: string;
  data?: T;
  error?: boolean;
  code?: string;
  details?: any;
};

/**
 * Create a success response
 */
export function successResponse<T>(
  data?: T,
  message?: string,
  status: number = 200
): NextResponse<ApiResponse<T>> {
  return NextResponse.json(
    {
      success: true,
      message,
      data,
    },
    { status }
  );
}

/**
 * Create an error response
 */
export function errorResponse(
  message: string,
  code?: string,
  details?: any,
  status: number = 400
): NextResponse<ApiResponse> {
  return NextResponse.json(
    {
      error: true,
      success: false,
      message,
      code,
      details,
    },
    { status }
  );
}

/**
 * HTTP status codes
 */
export const HttpStatus = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
} as const;

/**
 * Error codes for client handling
 */
export const ErrorCode = {
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  DUPLICATE_SUBMISSION: 'DUPLICATE_SUBMISSION',
  DATABASE_ERROR: 'DATABASE_ERROR',
  EMAIL_ERROR: 'EMAIL_ERROR',
  INVALID_JSON: 'INVALID_JSON',
  RATE_LIMITED: 'RATE_LIMITED',
  INTERNAL_ERROR: 'INTERNAL_ERROR',
  NOT_FOUND: 'NOT_FOUND',
} as const;

/**
 * Rate limiting helper (simple in-memory implementation)
 * For production, use Redis or similar distributed cache
 */
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

export function checkRateLimit(
  identifier: string,
  maxRequests: number = 5,
  windowMs: number = 60000 // 1 minute
): { allowed: boolean; remaining: number; resetAt: number } {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);

  if (!record || record.resetAt < now) {
    // New window
    const resetAt = now + windowMs;
    rateLimitMap.set(identifier, { count: 1, resetAt });
    return { allowed: true, remaining: maxRequests - 1, resetAt };
  }

  if (record.count >= maxRequests) {
    // Rate limit exceeded
    return { allowed: false, remaining: 0, resetAt: record.resetAt };
  }

  // Increment count
  record.count++;
  rateLimitMap.set(identifier, record);
  return { allowed: true, remaining: maxRequests - record.count, resetAt: record.resetAt };
}

/**
 * Clean up expired rate limit entries periodically
 */
setInterval(() => {
  const now = Date.now();
  for (const [key, value] of rateLimitMap.entries()) {
    if (value.resetAt < now) {
      rateLimitMap.delete(key);
    }
  }
}, 60000); // Clean up every minute

/**
 * Sanitize email for logging (mask domain)
 */
export function sanitizeEmail(email: string): string {
  const [localPart, domain] = email.split('@');
  if (!domain) return email;
  return `${localPart.substring(0, 2)}***@${domain}`;
}

/**
 * Validate environment variables
 */
export function validateEnvVars(): { valid: boolean; missing: string[] } {
  const required = ['DATABASE_URL', 'RESEND_API_KEY'];
  const missing = required.filter((key) => !process.env[key]);

  return {
    valid: missing.length === 0,
    missing,
  };
}
