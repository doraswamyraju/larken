import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

let transporter = null;

if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export const emailService = {
  /**
   * Notify contracts@larkenit.com about a new enquiry
   */
  async notifyEnquiry(enquiry) {
    const receiver = process.env.NOTIFICATION_RECEIVER || 'contracts@larkenit.com';
    const subject = `[New Website Enquiry] ${enquiry.serviceInterest} - ${enquiry.fullName}`;

    const textContent = `
New Business Enquiry Received via larkenit.com

Full Name: ${enquiry.fullName}
Business Email: ${enquiry.email}
Phone Number: ${enquiry.phone}
Service Interest: ${enquiry.serviceInterest}
Submitted At: ${new Date().toISOString()}

Message:
${enquiry.message || 'No additional message provided.'}

Larken Technologies LLC | Overland Park, KS
    `.trim();

    if (transporter) {
      try {
        await transporter.sendMail({
          from: `"Larken Technologies Notification" <${process.env.SMTP_USER}>`,
          to: receiver,
          replyTo: enquiry.email,
          subject,
          text: textContent,
        });
        console.log(`✉️ Notification successfully sent to ${receiver}`);
      } catch (err) {
        console.error('Failed to dispatch notification email:', err.message);
      }
    } else {
      console.log(`[SMTP Not Configured] Notification to ${receiver}:\n`, textContent);
    }
  },

  /**
   * Notify contracts@larkenit.com about a new candidate application
   */
  async notifyApplication(application) {
    const receiver = process.env.NOTIFICATION_RECEIVER || 'contracts@larkenit.com';
    const subject = `[New Job Application] ${application.preferredRole || 'General Candidate'} - ${application.fullName}`;

    const textContent = `
New Candidate Application Received via larkenit.com

Candidate Name: ${application.fullName}
Email: ${application.email}
Phone: ${application.phone}
Location: ${application.location}
Preferred Role: ${application.preferredRole || 'Not specified'}
Experience: ${application.experience || 'Not specified'}
Skills: ${application.skills || 'Not specified'}
Resume Storage Key: ${application.resumeStorageKey || 'Attached / Provided'}

Message:
${application.additionalMessage || 'None'}

Larken Technologies LLC | Talent Acquisition
    `.trim();

    if (transporter) {
      try {
        await transporter.sendMail({
          from: `"Larken Technologies Careers" <${process.env.SMTP_USER}>`,
          to: receiver,
          replyTo: application.email,
          subject,
          text: textContent,
        });
        console.log(`✉️ Application notification sent to ${receiver}`);
      } catch (err) {
        console.error('Failed to dispatch application notification email:', err.message);
      }
    } else {
      console.log(`[SMTP Not Configured] Application notification to ${receiver}:\n`, textContent);
    }
  },
};
