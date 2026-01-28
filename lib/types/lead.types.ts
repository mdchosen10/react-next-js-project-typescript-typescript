/**
 * TypeScript Types for Lead Management System
 *
 * These types extend Prisma-generated types with application-level
 * enums, validation types, and utility types.
 */

// ============================================================================
// ENUMS
// ============================================================================

export enum LeadStatus {
  NEW = 'new',
  CONTACTED = 'contacted',
  QUALIFIED = 'qualified',
  PROPOSAL = 'proposal',
  NEGOTIATION = 'negotiation',
  WON = 'won',
  LOST = 'lost',
  ARCHIVED = 'archived',
}

export enum LeadUrgency {
  LOW = 'low',
  NORMAL = 'normal',
  HIGH = 'high',
  CRITICAL = 'critical',
}

export enum CompanySize {
  STARTUP = 'startup',
  MIDMARKET = 'midmarket',
  ENTERPRISE = 'enterprise',
}

export enum PreferredContactMethod {
  EMAIL = 'email',
  PHONE = 'phone',
  EITHER = 'either',
}

export enum ActivityType {
  EMAIL_SENT = 'email_sent',
  EMAIL_RECEIVED = 'email_received',
  CALL_MADE = 'call_made',
  CALL_RECEIVED = 'call_received',
  MEETING_SCHEDULED = 'meeting_scheduled',
  MEETING_COMPLETED = 'meeting_completed',
  NOTE_ADDED = 'note_added',
  STATUS_CHANGED = 'status_changed',
  SCORE_UPDATED = 'score_updated',
}

export enum EmailTemplateCategory {
  INITIAL_CONTACT = 'initial_contact',
  FOLLOW_UP = 'follow_up',
  PROPOSAL = 'proposal',
  CLOSING = 'closing',
  NURTURE = 'nurture',
}

// ============================================================================
// FORM INPUT TYPES (for validation)
// ============================================================================

export interface ContactFormInput {
  name: string;
  email: string;
  company: string;
  title?: string;
  phone?: string;
  message: string;
  preferredContactMethod?: PreferredContactMethod;
  industry?: string;
  companySize?: CompanySize;
  transformationBudget?: string;
  urgency?: LeadUrgency;
  source?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}

export interface LeadUpdateInput {
  leadStatus?: LeadStatus;
  leadScore?: number;
  qualificationNotes?: string;
  assignedTo?: string;
  expectedValue?: number;
  probability?: number;
  expectedCloseDate?: Date;
  nextFollowUpAt?: Date;
  meetingScheduled?: boolean;
  meetingDate?: Date;
  lostReason?: string;
}

export interface LeadActivityInput {
  leadId: string;
  activityType: ActivityType;
  description: string;
  performedBy?: string;
  metadata?: Record<string, any>;
}

// ============================================================================
// LEAD SCORING TYPES
// ============================================================================

export interface LeadScoreFactors {
  companySize: number; // 0-25
  urgency: number; // 0-20
  budget: number; // 0-25
  engagement: number; // 0-15
  source: number; // 0-15
}

export interface LeadScoreResult {
  totalScore: number; // 0-100
  factors: LeadScoreFactors;
  grade: 'A' | 'B' | 'C' | 'D'; // A: 80+, B: 60-79, C: 40-59, D: <40
  priority: 'high' | 'medium' | 'low';
}

// ============================================================================
// QUERY FILTER TYPES
// ============================================================================

export interface LeadFilters {
  status?: LeadStatus | LeadStatus[];
  assignedTo?: string;
  minScore?: number;
  maxScore?: number;
  tags?: string[];
  dateFrom?: Date;
  dateTo?: Date;
  search?: string; // Search by name, company, email
}

export interface LeadSortOptions {
  field: 'createdAt' | 'leadScore' | 'nextFollowUpAt' | 'expectedValue';
  order: 'asc' | 'desc';
}

export interface PaginationParams {
  page: number;
  limit: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// ============================================================================
// EXTENDED TYPES (with relations)
// ============================================================================

export interface LeadWithRelations {
  id: string;
  contactSubmissionId: string;
  createdAt: Date;
  updatedAt: Date;
  leadStatus: LeadStatus;
  leadScore: number;
  qualificationNotes?: string | null;
  assignedTo?: string | null;
  expectedValue?: number | null;
  probability?: number | null;
  expectedCloseDate?: Date | null;
  lastContactedAt?: Date | null;
  nextFollowUpAt?: Date | null;
  meetingScheduled: boolean;
  meetingDate?: Date | null;
  convertedAt?: Date | null;
  lostReason?: string | null;

  // Relations
  contactSubmission: {
    id: string;
    name: string;
    email: string;
    company: string;
    title?: string | null;
    phone?: string | null;
    message: string;
    industry?: string | null;
    companySize?: CompanySize | null;
  };
  activities: Array<{
    id: string;
    activityType: ActivityType;
    description: string;
    performedBy?: string | null;
    createdAt: Date;
  }>;
  tagAssignments: Array<{
    tag: {
      id: string;
      name: string;
      color?: string | null;
      category?: string | null;
    };
  }>;
}

// ============================================================================
// DASHBOARD/ANALYTICS TYPES
// ============================================================================

export interface LeadStats {
  total: number;
  byStatus: Record<LeadStatus, number>;
  averageScore: number;
  conversionRate: number; // Percentage of won deals
  totalValue: number; // Sum of expectedValue for all leads
  pipelineValue: number; // Sum of expectedValue * probability
}

export interface LeadPipeline {
  status: LeadStatus;
  count: number;
  totalValue: number;
  averageScore: number;
}

export interface ActivityTimeline {
  date: string; // ISO date string
  activities: Array<{
    id: string;
    leadId: string;
    leadName: string;
    company: string;
    activityType: ActivityType;
    description: string;
    performedBy?: string | null;
    createdAt: Date;
  }>;
}

export interface FollowUpTask {
  leadId: string;
  contactName: string;
  company: string;
  nextFollowUpAt: Date;
  daysOverdue: number;
  leadScore: number;
  assignedTo?: string | null;
}

// ============================================================================
// EMAIL TEMPLATE TYPES
// ============================================================================

export interface EmailTemplateVariables {
  name: string;
  company: string;
  title?: string;
  challengeSummary?: string;
  proposedDate?: string;
  alternateDate?: string;
  transformationType?: string;
  currentStateSummary?: string;
  gapAnalysis?: string;
  expectedOutcomes?: string;
  investmentRange?: string;
  [key: string]: string | undefined; // Allow dynamic variables
}

export interface RenderedEmail {
  subject: string;
  body: string;
}

// ============================================================================
// API RESPONSE TYPES
// ============================================================================

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    code: string;
    details?: any;
  };
}

export interface LeadCreateResponse {
  contactSubmission: {
    id: string;
    email: string;
  };
  lead: {
    id: string;
    leadScore: number;
    leadStatus: LeadStatus;
  };
}
