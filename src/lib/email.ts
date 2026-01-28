import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 'demo-key');

/**
 * Email configuration
 */
const EMAIL_CONFIG = {
  from: process.env.EMAIL_FROM || 'Sinan AI <contact@sinan-ai.com>',
  replyTo: process.env.EMAIL_REPLY_TO || 'mustafa@sinan-ai.com',
  internalNotification: process.env.EMAIL_NOTIFICATION || 'mustafa@sinan-ai.com',
};

/**
 * Professional email template for prospect confirmation
 * Designed for Fortune 500 decision-makers
 */
function getProspectConfirmationTemplate(data: {
  name: string;
  company: string;
  message: string;
}): { subject: string; html: string; text: string } {
  const subject = 'Thank you for reaching out to Sinan AI';

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sinan AI - Discovery Conversation Request</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f8fafc; color: #1e293b;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
          <!-- Header -->
          <tr>
            <td style="padding: 40px 40px 20px; text-align: center; border-bottom: 1px solid #e2e8f0;">
              <h1 style="margin: 0; font-size: 24px; font-weight: 600; color: #0f172a;">Sinan AI</h1>
              <p style="margin: 8px 0 0; font-size: 14px; color: #64748b;">Execution Infrastructure for Enterprise Transformation</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding: 40px;">
              <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.6; color: #1e293b;">
                Dear ${data.name},
              </p>

              <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.6; color: #1e293b;">
                Thank you for reaching out to Sinan AI regarding ${data.company}'s transformation initiatives. We've received your inquiry and appreciate your interest in exploring how we can help close the execution gap between identified opportunities and realized value.
              </p>

              <div style="background-color: #f1f5f9; border-left: 4px solid #0ea5e9; padding: 20px; margin: 24px 0; border-radius: 4px;">
                <p style="margin: 0 0 12px; font-size: 14px; font-weight: 600; color: #0f172a;">Your Message:</p>
                <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #475569; font-style: italic;">
                  "${data.message.substring(0, 200)}${data.message.length > 200 ? '...' : ''}"
                </p>
              </div>

              <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.6; color: #1e293b;">
                A member of our team will review your inquiry and reach out within 24 hours to schedule a discovery conversation. During this conversation, we'll explore:
              </p>

              <ul style="margin: 0 0 24px; padding-left: 24px; color: #1e293b;">
                <li style="margin-bottom: 8px; font-size: 16px; line-height: 1.6;">Your current transformation challenges and execution gaps</li>
                <li style="margin-bottom: 8px; font-size: 16px; line-height: 1.6;">How our execution infrastructure approach can drive value realization</li>
                <li style="margin-bottom: 8px; font-size: 16px; line-height: 1.6;">Potential engagement models and next steps</li>
              </ul>

              <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.6; color: #1e293b;">
                In the meantime, you may find it helpful to review our case studies demonstrating how we've helped Fortune 500 enterprises close similar execution gaps.
              </p>

              <p style="margin: 0 0 8px; font-size: 16px; line-height: 1.6; color: #1e293b;">
                Best regards,
              </p>
              <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #1e293b; font-weight: 600;">
                Mustafa Sinan<br>
                <span style="font-weight: 400; color: #64748b; font-size: 14px;">Founder, Sinan AI</span><br>
                <span style="font-weight: 400; color: #64748b; font-size: 14px;">MIT '09 | ex-Palantir | ex-Strategy&</span>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 24px 40px; background-color: #f8fafc; border-top: 1px solid #e2e8f0; border-radius: 0 0 8px 8px;">
              <p style="margin: 0 0 8px; font-size: 12px; color: #64748b; text-align: center;">
                Sinan AI - Converting Strategy to Realized Dollars
              </p>
              <p style="margin: 0; font-size: 12px; color: #94a3b8; text-align: center;">
                This email was sent in response to your inquiry. If you have questions, reply to this email or contact us directly.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;

  const text = `
Dear ${data.name},

Thank you for reaching out to Sinan AI regarding ${data.company}'s transformation initiatives. We've received your inquiry and appreciate your interest in exploring how we can help close the execution gap between identified opportunities and realized value.

Your Message:
"${data.message}"

A member of our team will review your inquiry and reach out within 24 hours to schedule a discovery conversation. During this conversation, we'll explore:

- Your current transformation challenges and execution gaps
- How our execution infrastructure approach can drive value realization
- Potential engagement models and next steps

In the meantime, you may find it helpful to review our case studies demonstrating how we've helped Fortune 500 enterprises close similar execution gaps.

Best regards,
Mustafa Sinan
Founder, Sinan AI
MIT '09 | ex-Palantir | ex-Strategy&

---
Sinan AI - Converting Strategy to Realized Dollars
  `.trim();

  return { subject, html, text };
}

/**
 * Internal notification email template for new leads
 */
function getInternalNotificationTemplate(data: {
  name: string;
  title?: string;
  company: string;
  email: string;
  phone?: string;
  message: string;
  source?: string;
  submissionId: string;
}): { subject: string; html: string; text: string } {
  const subject = `New Lead: ${data.company} - ${data.name}`;

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f8fafc; color: #1e293b;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
          <!-- Header -->
          <tr>
            <td style="padding: 24px 32px; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0; font-size: 20px; font-weight: 600; color: #ffffff;">New Contact Submission</h1>
              <p style="margin: 8px 0 0; font-size: 14px; color: #94a3b8;">Submission ID: ${data.submissionId.substring(0, 8)}</p>
            </td>
          </tr>

          <!-- Contact Info -->
          <tr>
            <td style="padding: 32px;">
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; width: 120px; font-size: 14px; font-weight: 600; color: #64748b;">Name:</td>
                  <td style="padding: 8px 0; font-size: 14px; color: #1e293b;">${data.name}</td>
                </tr>
                ${data.title ? `
                <tr>
                  <td style="padding: 8px 0; width: 120px; font-size: 14px; font-weight: 600; color: #64748b;">Title:</td>
                  <td style="padding: 8px 0; font-size: 14px; color: #1e293b;">${data.title}</td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 8px 0; width: 120px; font-size: 14px; font-weight: 600; color: #64748b;">Company:</td>
                  <td style="padding: 8px 0; font-size: 14px; color: #1e293b; font-weight: 600;">${data.company}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; width: 120px; font-size: 14px; font-weight: 600; color: #64748b;">Email:</td>
                  <td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${data.email}" style="color: #0ea5e9; text-decoration: none;">${data.email}</a></td>
                </tr>
                ${data.phone ? `
                <tr>
                  <td style="padding: 8px 0; width: 120px; font-size: 14px; font-weight: 600; color: #64748b;">Phone:</td>
                  <td style="padding: 8px 0; font-size: 14px;"><a href="tel:${data.phone}" style="color: #0ea5e9; text-decoration: none;">${data.phone}</a></td>
                </tr>
                ` : ''}
                ${data.source ? `
                <tr>
                  <td style="padding: 8px 0; width: 120px; font-size: 14px; font-weight: 600; color: #64748b;">Source:</td>
                  <td style="padding: 8px 0; font-size: 14px; color: #1e293b;">${data.source}</td>
                </tr>
                ` : ''}
              </table>

              <div style="margin-top: 24px; padding: 20px; background-color: #f8fafc; border-left: 4px solid #0ea5e9; border-radius: 4px;">
                <p style="margin: 0 0 12px; font-size: 14px; font-weight: 600; color: #0f172a;">Challenge Description:</p>
                <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #475569; white-space: pre-wrap;">${data.message}</p>
              </div>

              <div style="margin-top: 24px; padding: 16px; background-color: #fef3c7; border-left: 4px solid #f59e0b; border-radius: 4px;">
                <p style="margin: 0; font-size: 13px; font-weight: 600; color: #92400e;">Action Required:</p>
                <p style="margin: 4px 0 0; font-size: 13px; color: #78350f;">Respond within 24 hours to maintain enterprise-grade service expectations.</p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 16px 32px; background-color: #f8fafc; border-top: 1px solid #e2e8f0; border-radius: 0 0 8px 8px; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #64748b;">
                Sinan AI Internal Notification - Do Not Reply
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;

  const text = `
NEW CONTACT SUBMISSION
Submission ID: ${data.submissionId}

CONTACT INFORMATION
Name: ${data.name}
${data.title ? `Title: ${data.title}` : ''}
Company: ${data.company}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}` : ''}
${data.source ? `Source: ${data.source}` : ''}

CHALLENGE DESCRIPTION:
${data.message}

ACTION REQUIRED:
Respond within 24 hours to maintain enterprise-grade service expectations.

---
Sinan AI Internal Notification
  `.trim();

  return { subject, html, text };
}

/**
 * Send confirmation email to prospect
 */
export async function sendProspectConfirmation(data: {
  name: string;
  email: string;
  company: string;
  message: string;
}): Promise<{ success: boolean; messageId?: string; error?: string }> {
  try {
    const template = getProspectConfirmationTemplate(data);

    const result = await resend.emails.send({
      from: EMAIL_CONFIG.from,
      to: data.email,
      reply_to: EMAIL_CONFIG.replyTo,
      subject: template.subject,
      html: template.html,
      text: template.text,
    });

    if (result.error) {
      console.error('Failed to send prospect confirmation:', result.error);
      return { success: false, error: result.error.message };
    }

    return { success: true, messageId: result.data?.id };
  } catch (error) {
    console.error('Error sending prospect confirmation:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Send internal notification email to team
 */
export async function sendInternalNotification(data: {
  name: string;
  title?: string;
  company: string;
  email: string;
  phone?: string;
  message: string;
  source?: string;
  submissionId: string;
}): Promise<{ success: boolean; messageId?: string; error?: string }> {
  try {
    const template = getInternalNotificationTemplate(data);

    const result = await resend.emails.send({
      from: EMAIL_CONFIG.from,
      to: EMAIL_CONFIG.internalNotification,
      reply_to: data.email, // Allow direct reply to prospect
      subject: template.subject,
      html: template.html,
      text: template.text,
    });

    if (result.error) {
      console.error('Failed to send internal notification:', result.error);
      return { success: false, error: result.error.message };
    }

    return { success: true, messageId: result.data?.id };
  } catch (error) {
    console.error('Error sending internal notification:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Send both prospect confirmation and internal notification
 */
export async function sendContactEmails(data: {
  name: string;
  title?: string;
  company: string;
  email: string;
  phone?: string;
  message: string;
  source?: string;
  submissionId: string;
}): Promise<{
  prospectEmailSent: boolean;
  internalEmailSent: boolean;
  errors: string[];
}> {
  const errors: string[] = [];

  // Send prospect confirmation
  const prospectResult = await sendProspectConfirmation({
    name: data.name,
    email: data.email,
    company: data.company,
    message: data.message,
  });

  if (!prospectResult.success && prospectResult.error) {
    errors.push(`Prospect email: ${prospectResult.error}`);
  }

  // Send internal notification
  const internalResult = await sendInternalNotification(data);

  if (!internalResult.success && internalResult.error) {
    errors.push(`Internal notification: ${internalResult.error}`);
  }

  return {
    prospectEmailSent: prospectResult.success,
    internalEmailSent: internalResult.success,
    errors,
  };
}
