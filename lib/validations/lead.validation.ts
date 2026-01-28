/**
 * Zod Validation Schemas for Lead Management
 *
 * These schemas validate input data for contact forms,
 * lead updates, and API requests.
 */

import { z } from 'zod';

// ============================================================================
// ENUMS
// ============================================================================

export const LeadStatusEnum = z.enum([
  'new',
  'contacted',
  'qualified',
  'proposal',
  'negotiation',
  'won',
  'lost',
  'archived',
]);

export const LeadUrgencyEnum = z.enum(['low', 'normal', 'high', 'critical']);

export const CompanySizeEnum = z.enum(['startup', 'midmarket', 'enterprise']);

export const PreferredContactMethodEnum = z.enum(['email', 'phone', 'either']);

export const ActivityTypeEnum = z.enum([
  'email_sent',
  'email_received',
  'call_made',
  'call_received',
  'meeting_scheduled',
  'meeting_completed',
  'note_added',
  'status_changed',
  'score_updated',
]);

export const EmailTemplateCategoryEnum = z.enum([
  'initial_contact',
  'follow_up',
  'proposal',
  'closing',
  'nurture',
]);

// ============================================================================
// CONTACT FORM VALIDATION
// ============================================================================

export const ContactFormSchema = z.object({
  // Required fields
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .trim(),

  email: z
    .string()
    .email('Please enter a valid email address')
    .toLowerCase()
    .trim(),

  company: z
    .string()
    .min(2, 'Company name must be at least 2 characters')
    .max(200, 'Company name must be less than 200 characters')
    .trim(),

  message: z
    .string()
    .min(20, 'Please provide at least 20 characters describing your challenge')
    .max(2000, 'Message must be less than 2000 characters')
    .trim(),

  // Optional fields
  title: z
    .string()
    .max(100, 'Title must be less than 100 characters')
    .trim()
    .optional()
    .nullable(),

  phone: z
    .string()
    .regex(
      /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/,
      'Please enter a valid phone number'
    )
    .optional()
    .nullable()
    .or(z.literal('')),

  preferredContactMethod: PreferredContactMethodEnum.default('email'),

  industry: z.string().max(100).trim().optional().nullable(),

  companySize: CompanySizeEnum.optional().nullable(),

  transformationBudget: z.string().max(100).optional().nullable(),

  urgency: LeadUrgencyEnum.default('normal'),

  // Source tracking
  source: z.string().max(50).default('website'),
  utmSource: z.string().max(100).optional().nullable(),
  utmMedium: z.string().max(100).optional().nullable(),
  utmCampaign: z.string().max(100).optional().nullable(),

  // Honeypot field for spam protection (should be empty)
  website_url: z.string().max(0).optional(),
});

export type ContactFormInput = z.infer<typeof ContactFormSchema>;

// ============================================================================
// LEAD UPDATE VALIDATION
// ============================================================================

export const LeadUpdateSchema = z.object({
  leadStatus: LeadStatusEnum.optional(),

  leadScore: z
    .number()
    .int()
    .min(0, 'Lead score must be between 0 and 100')
    .max(100, 'Lead score must be between 0 and 100')
    .optional(),

  qualificationNotes: z.string().max(2000).optional().nullable(),

  assignedTo: z.string().max(100).optional().nullable(),

  expectedValue: z
    .number()
    .positive('Expected value must be positive')
    .optional()
    .nullable(),

  probability: z
    .number()
    .int()
    .min(0, 'Probability must be between 0 and 100')
    .max(100, 'Probability must be between 0 and 100')
    .optional()
    .nullable(),

  expectedCloseDate: z.coerce.date().optional().nullable(),

  nextFollowUpAt: z.coerce.date().optional().nullable(),

  meetingScheduled: z.boolean().optional(),

  meetingDate: z.coerce.date().optional().nullable(),

  lostReason: z.string().max(500).optional().nullable(),
});

export type LeadUpdateInput = z.infer<typeof LeadUpdateSchema>;

// ============================================================================
// LEAD ACTIVITY VALIDATION
// ============================================================================

export const LeadActivitySchema = z.object({
  leadId: z.string().uuid('Invalid lead ID'),

  activityType: ActivityTypeEnum,

  description: z
    .string()
    .min(1, 'Description is required')
    .max(1000, 'Description must be less than 1000 characters')
    .trim(),

  performedBy: z.string().max(100).optional().nullable(),

  metadata: z.record(z.any()).optional().nullable(),
});

export type LeadActivityInput = z.infer<typeof LeadActivitySchema>;

// ============================================================================
// LEAD TAG VALIDATION
// ============================================================================

export const LeadTagSchema = z.object({
  name: z
    .string()
    .min(2, 'Tag name must be at least 2 characters')
    .max(50, 'Tag name must be less than 50 characters')
    .trim(),

  color: z
    .string()
    .regex(/^#[0-9A-Fa-f]{6}$/, 'Color must be a valid hex color (e.g., #10b981)')
    .optional()
    .nullable(),

  category: z.string().max(50).optional().nullable(),
});

export type LeadTagInput = z.infer<typeof LeadTagSchema>;

// ============================================================================
// EMAIL TEMPLATE VALIDATION
// ============================================================================

export const EmailTemplateSchema = z.object({
  name: z
    .string()
    .min(3, 'Template name must be at least 3 characters')
    .max(100, 'Template name must be less than 100 characters')
    .trim(),

  subject: z
    .string()
    .min(5, 'Subject must be at least 5 characters')
    .max(200, 'Subject must be less than 200 characters')
    .trim(),

  body: z
    .string()
    .min(20, 'Email body must be at least 20 characters')
    .max(5000, 'Email body must be less than 5000 characters')
    .trim(),

  category: EmailTemplateCategoryEnum,

  active: z.boolean().default(true),
});

export type EmailTemplateInput = z.infer<typeof EmailTemplateSchema>;

// ============================================================================
// QUERY FILTER VALIDATION
// ============================================================================

export const LeadFiltersSchema = z.object({
  status: z.union([LeadStatusEnum, z.array(LeadStatusEnum)]).optional(),

  assignedTo: z.string().max(100).optional(),

  minScore: z.number().int().min(0).max(100).optional(),

  maxScore: z.number().int().min(0).max(100).optional(),

  tags: z.array(z.string()).optional(),

  dateFrom: z.coerce.date().optional(),

  dateTo: z.coerce.date().optional(),

  search: z.string().max(200).optional(),
});

export type LeadFiltersInput = z.infer<typeof LeadFiltersSchema>;

// ============================================================================
// PAGINATION VALIDATION
// ============================================================================

export const PaginationSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),

  limit: z.coerce.number().int().min(1).max(100).default(20),
});

export type PaginationInput = z.infer<typeof PaginationSchema>;

// ============================================================================
// SORT OPTIONS VALIDATION
// ============================================================================

export const SortOptionsSchema = z.object({
  field: z.enum(['createdAt', 'leadScore', 'nextFollowUpAt', 'expectedValue']).default('createdAt'),

  order: z.enum(['asc', 'desc']).default('desc'),
});

export type SortOptionsInput = z.infer<typeof SortOptionsSchema>;

// ============================================================================
// COMBINED QUERY SCHEMA (for API endpoints)
// ============================================================================

export const LeadQuerySchema = LeadFiltersSchema.merge(PaginationSchema).merge(SortOptionsSchema);

export type LeadQueryInput = z.infer<typeof LeadQuerySchema>;

// ============================================================================
// VALIDATION HELPERS
// ============================================================================

/**
 * Validate and parse contact form data
 */
export function validateContactForm(data: unknown) {
  return ContactFormSchema.parse(data);
}

/**
 * Safe validation that returns errors instead of throwing
 */
export function validateContactFormSafe(data: unknown) {
  return ContactFormSchema.safeParse(data);
}

/**
 * Validate lead update data
 */
export function validateLeadUpdate(data: unknown) {
  return LeadUpdateSchema.parse(data);
}

/**
 * Validate lead activity data
 */
export function validateLeadActivity(data: unknown) {
  return LeadActivitySchema.parse(data);
}

/**
 * Custom validation: Ensure nextFollowUpAt is in the future
 */
export function validateFutureDate(date: Date | null | undefined, fieldName: string = 'Date'): boolean {
  if (!date) return true; // null/undefined is valid
  if (date <= new Date()) {
    throw new Error(`${fieldName} must be in the future`);
  }
  return true;
}

/**
 * Custom validation: Ensure probability matches lead status
 */
export function validateProbabilityForStatus(status: string, probability?: number | null): boolean {
  if (!probability) return true;

  switch (status) {
    case 'new':
      if (probability > 20) {
        throw new Error('New leads should have probability <= 20%');
      }
      break;
    case 'contacted':
      if (probability > 40) {
        throw new Error('Contacted leads should have probability <= 40%');
      }
      break;
    case 'won':
      if (probability !== 100) {
        throw new Error('Won leads must have probability = 100%');
      }
      break;
    case 'lost':
      if (probability !== 0) {
        throw new Error('Lost leads must have probability = 0%');
      }
      break;
  }

  return true;
}
