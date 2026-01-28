import { z } from 'zod';

/**
 * Contact form validation schema
 * Professional validation for Fortune 500 prospects
 */
export const contactFormSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes'),

  title: z.string()
    .min(2, 'Title must be at least 2 characters')
    .max(100, 'Title must be less than 100 characters')
    .optional()
    .or(z.literal('')),

  company: z.string()
    .min(2, 'Company name must be at least 2 characters')
    .max(150, 'Company name must be less than 150 characters'),

  email: z.string()
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters')
    .toLowerCase()
    .refine(
      (email) => {
        // Block common temporary/disposable email domains
        const disposableDomains = ['tempmail.com', 'throwaway.email', '10minutemail.com'];
        const domain = email.split('@')[1];
        return !disposableDomains.includes(domain);
      },
      { message: 'Please use a business email address' }
    ),

  phone: z.string()
    .regex(/^[\d\s\-\+\(\)]+$/, 'Please enter a valid phone number')
    .min(10, 'Phone number must be at least 10 digits')
    .max(20, 'Phone number must be less than 20 characters')
    .optional()
    .or(z.literal('')),

  message: z.string()
    .min(20, 'Please provide at least 20 characters describing your transformation challenge')
    .max(2000, 'Message must be less than 2000 characters'),

  source: z.string()
    .max(50)
    .optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * API response types
 */
export const apiSuccessSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.any().optional(),
});

export const apiErrorSchema = z.object({
  error: z.boolean(),
  message: z.string(),
  code: z.string().optional(),
  details: z.any().optional(),
});

export type ApiSuccessResponse = z.infer<typeof apiSuccessSchema>;
export type ApiErrorResponse = z.infer<typeof apiErrorSchema>;
