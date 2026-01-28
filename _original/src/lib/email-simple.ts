import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
  timeline?: string;
  budget?: string;
}

export async function sendContactEmail(data: ContactFormData) {
  try {
    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'info@sinanai.dev',
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e293b;">New Contact Form Submission</h2>

          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #059669; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Company:</strong> ${data.company}</p>
            ${data.timeline ? `<p><strong>Timeline:</strong> ${data.timeline}</p>` : ''}
            ${data.budget ? `<p><strong>Budget:</strong> ${data.budget}</p>` : ''}
          </div>

          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0369a1; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${data.message}</p>
          </div>

          <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #92400e;">
              <strong>Next Steps:</strong> Reply to this email or schedule a call:
              <a href="https://calendly.com/mustafa-sinanai/30min" style="color: #0369a1;">Schedule Call</a>
            </p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}