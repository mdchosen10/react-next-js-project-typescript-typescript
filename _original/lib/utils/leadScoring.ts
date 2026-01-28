/**
 * Lead Scoring Utility
 *
 * Calculates lead score (0-100) based on multiple factors:
 * - Company size
 * - Urgency
 * - Budget indication
 * - Engagement level
 * - Source quality
 */

import type {
  LeadScoreFactors,
  LeadScoreResult,
  CompanySize,
  LeadUrgency,
} from '../types/lead.types';

// ============================================================================
// SCORING WEIGHTS
// ============================================================================

const WEIGHTS = {
  COMPANY_SIZE: 25,
  URGENCY: 20,
  BUDGET: 25,
  ENGAGEMENT: 15,
  SOURCE: 15,
} as const;

// ============================================================================
// SCORING FUNCTIONS
// ============================================================================

/**
 * Score based on company size (0-25 points)
 */
export function scoreCompanySize(companySize?: string | null): number {
  if (!companySize) return 10; // Default neutral score

  switch (companySize.toLowerCase()) {
    case 'enterprise':
      return 25; // Fortune 500 / Large enterprise
    case 'midmarket':
      return 20; // Mid-market ($1B+ revenue)
    case 'startup':
      return 10; // Startup/SMB
    default:
      return 10;
  }
}

/**
 * Score based on urgency level (0-20 points)
 */
export function scoreUrgency(urgency: string): number {
  switch (urgency.toLowerCase()) {
    case 'critical':
      return 20;
    case 'high':
      return 15;
    case 'normal':
      return 10;
    case 'low':
      return 5;
    default:
      return 10;
  }
}

/**
 * Score based on budget indication (0-25 points)
 */
export function scoreBudget(transformationBudget?: string | null): number {
  if (!transformationBudget) return 10; // No budget info = neutral

  const budget = transformationBudget.toLowerCase();

  // Look for budget ranges
  if (budget.includes('500k') || budget.includes('$500') || budget.includes('1m') || budget.includes('million')) {
    return 25; // $500K+
  }
  if (budget.includes('250k') || budget.includes('$250')) {
    return 20; // $250K-500K
  }
  if (budget.includes('100k') || budget.includes('$100')) {
    return 15; // $100K-250K
  }
  if (budget.includes('50k') || budget.includes('$50')) {
    return 10; // Under $100K
  }

  return 10; // Default if can't parse
}

/**
 * Score based on engagement level (0-15 points)
 * This is calculated from lead activities
 */
export function scoreEngagement(params: {
  meetingScheduled: boolean;
  emailResponseCount?: number;
  emailOpenCount?: number;
}): number {
  let score = 0;

  if (params.meetingScheduled) {
    score += 15; // Meeting scheduled = highest engagement
  } else if (params.emailResponseCount && params.emailResponseCount > 0) {
    score += 10; // Responded to email
  } else if (params.emailOpenCount && params.emailOpenCount > 0) {
    score += 5; // Opened email
  }

  return Math.min(score, 15); // Cap at 15
}

/**
 * Score based on lead source quality (0-15 points)
 */
export function scoreSource(source?: string | null): number {
  if (!source) return 8; // Default for website

  const sourceLower = source.toLowerCase();

  if (sourceLower.includes('referral')) {
    return 15; // Referral = highest quality
  }
  if (sourceLower.includes('direct')) {
    return 12; // Direct traffic
  }
  if (sourceLower.includes('linkedin')) {
    return 10; // LinkedIn
  }
  if (sourceLower.includes('organic') || sourceLower.includes('search')) {
    return 8; // Organic search
  }
  if (sourceLower.includes('paid') || sourceLower.includes('ad')) {
    return 5; // Paid advertising
  }

  return 8; // Default
}

// ============================================================================
// MAIN SCORING FUNCTION
// ============================================================================

export interface LeadScoringInput {
  companySize?: string | null;
  urgency: string;
  transformationBudget?: string | null;
  source?: string | null;
  meetingScheduled: boolean;
  emailResponseCount?: number;
  emailOpenCount?: number;
}

/**
 * Calculate comprehensive lead score
 */
export function calculateLeadScore(input: LeadScoringInput): LeadScoreResult {
  const factors: LeadScoreFactors = {
    companySize: scoreCompanySize(input.companySize),
    urgency: scoreUrgency(input.urgency),
    budget: scoreBudget(input.transformationBudget),
    engagement: scoreEngagement({
      meetingScheduled: input.meetingScheduled,
      emailResponseCount: input.emailResponseCount,
      emailOpenCount: input.emailOpenCount,
    }),
    source: scoreSource(input.source),
  };

  const totalScore = Object.values(factors).reduce((sum, score) => sum + score, 0);

  // Determine grade
  let grade: 'A' | 'B' | 'C' | 'D';
  if (totalScore >= 80) grade = 'A';
  else if (totalScore >= 60) grade = 'B';
  else if (totalScore >= 40) grade = 'C';
  else grade = 'D';

  // Determine priority
  let priority: 'high' | 'medium' | 'low';
  if (totalScore >= 70) priority = 'high';
  else if (totalScore >= 40) priority = 'medium';
  else priority = 'low';

  return {
    totalScore,
    factors,
    grade,
    priority,
  };
}

// ============================================================================
// SCORE ADJUSTMENT HELPERS
// ============================================================================

/**
 * Adjust lead score based on new activity
 */
export function adjustScoreForActivity(
  currentScore: number,
  activityType: string
): number {
  let adjustment = 0;

  switch (activityType) {
    case 'meeting_scheduled':
      adjustment = 10;
      break;
    case 'email_received':
      adjustment = 5;
      break;
    case 'call_received':
      adjustment = 8;
      break;
    case 'proposal':
      adjustment = 15;
      break;
    default:
      adjustment = 0;
  }

  return Math.min(currentScore + adjustment, 100); // Cap at 100
}

/**
 * Get score description for UI display
 */
export function getScoreDescription(score: number): string {
  if (score >= 80) {
    return 'Excellent - High priority lead with strong fit and engagement';
  } else if (score >= 60) {
    return 'Good - Qualified lead with moderate fit and engagement';
  } else if (score >= 40) {
    return 'Fair - Potential lead requiring more qualification';
  } else {
    return 'Low - Weak fit or low engagement, consider nurture campaign';
  }
}

/**
 * Get recommended next action based on score
 */
export function getRecommendedAction(score: number, leadStatus: string): string {
  if (score >= 80) {
    if (leadStatus === 'new') return 'Schedule discovery call immediately';
    if (leadStatus === 'contacted') return 'Send proposal within 48 hours';
    if (leadStatus === 'proposal') return 'Follow up on proposal status';
    return 'Move to next stage';
  } else if (score >= 60) {
    if (leadStatus === 'new') return 'Send personalized initial contact email';
    if (leadStatus === 'contacted') return 'Schedule qualification call';
    return 'Continue standard follow-up cadence';
  } else if (score >= 40) {
    return 'Add to nurture campaign, reassess in 30 days';
  } else {
    return 'Low priority - periodic check-in only';
  }
}
