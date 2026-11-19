import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function loadEnv() {
  dotenv.config();
  const serverEnv = path.resolve(__dirname, '../../.env');
  if (fs.existsSync(serverEnv)) {
    dotenv.config({ path: serverEnv, override: true });
  }
  const rootEnv = path.resolve(__dirname, '../../../.env');
  if (fs.existsSync(rootEnv)) {
    dotenv.config({ path: rootEnv, override: true });
  }
}

// Initial load
loadEnv();

/**
 * Build dynamic transporter based on current process.env configuration.
 * Supports:
 *  1. Hostinger / Corporate SMTP (Port 465 SSL or Port 587 TLS)
 *  2. Linux local sendmail fallback (/usr/sbin/sendmail)
 */
function createTransporter() {
  loadEnv(); // Re-read in case .env was edited

  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = parseInt(process.env.SMTP_PORT || '465', 10);
  const secure = port === 465;
  const user = (process.env.SMTP_USER || '').trim().replace(/['"\r\n]/g, '');
  const rawPass = process.env.SMTP_PASS || '';
  // Strip quotes, spaces, newlines commonly introduced during copy/pasting in nano
  const pass = rawPass.trim().replace(/['"\s\r\n]/g, '');

  // Check if SMTP credentials are provided and not default placeholders
  const isConfigured = user && pass && pass !== 'your_email_password' && pass !== 'your_strong_password_here';

  if (isConfigured) {
    return nodemailer.createTransport({
      host,
      port,
      secure,
      requireTLS: !secure,
      auth: {
        user,
        pass,
      },
      tls: {
        rejectUnauthorized: false, // Prevent issues with self-signed or proxy TLS certs on VPS
      },
      connectionTimeout: 15000,
      greetingTimeout: 15000,
    });
  }

  // Fallback: If on Linux VPS and /usr/sbin/sendmail exists
  if (fs.existsSync('/usr/sbin/sendmail')) {
    try {
      return nodemailer.createTransport({
        sendmail: true,
        newline: 'unix',
        path: '/usr/sbin/sendmail',
      });
    } catch (e) {
      console.warn('⚠️ Could not initialize local sendmail transport:', e.message);
    }
  }

  return null;
}

export const emailService = {
  /**
   * Diagnostic test to verify SMTP connectivity
   */
  async verifyConnection() {
    const transporter = createTransporter();
    if (!transporter) {
      return {
        configured: false,
        message: 'SMTP credentials missing or set to placeholder in server/.env.',
        hint: 'Set SMTP_HOST, SMTP_PORT, SMTP_USER=contracts@larkenit.com, and SMTP_PASS in server/.env',
      };
    }

    try {
      await transporter.verify();
      return {
        configured: true,
        healthy: true,
        message: `SMTP connection established successfully with ${process.env.SMTP_HOST || 'smtp.gmail.com'}:${process.env.SMTP_PORT || 465} (Account: ${process.env.SMTP_USER})`,
      };
    } catch (err) {
      return {
        configured: true,
        healthy: false,
        message: `SMTP connection error: ${err.message}`,
        accountAttempted: process.env.SMTP_USER,
        hint: 'Verify that SMTP_USER matches the exact Google account email for this app password, and run pm2 restart larken --update-env.',
      };
    }
  },

  /**
   * Send a test verification email to contracts@larkenit.com
   */
  async sendTestEmail(targetEmail = null) {
    const receiver = targetEmail || process.env.NOTIFICATION_RECEIVER || 'contracts@larkenit.com';
    const transporter = createTransporter();

    if (!transporter) {
      throw new Error(
        'Email transporter not configured. Please set SMTP_USER and SMTP_PASS in /var/www/larken/server/.env'
      );
    }

    const sender = process.env.SMTP_USER || 'contracts@larkenit.com';
    const info = await transporter.sendMail({
      from: `"Larken Technologies System" <${sender}>`,
      to: receiver,
      subject: `[System Test] Larken Technologies Email Dispatch Verification`,
      text: `This is a verification email confirming that Larken Technologies notification system on Hostinger VPS (Port 5092) is active and routing correctly to ${receiver}.`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
          <div style="background-color: #071D3B; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
            <h2 style="color: #ffffff; margin: 0;">Larken Technologies LLC</h2>
            <p style="color: #43C5FF; margin: 5px 0 0 0; font-size: 13px;">Corporate Email Verification</p>
          </div>
          <div style="padding: 24px 16px; color: #334155; line-height: 1.6;">
            <p><strong>Status:</strong> Active & Connected</p>
            <p>This automated test confirms that the contact form notification engine is operational and will route all customer leads directly to <strong>${receiver}</strong>.</p>
            <p style="color: #64748b; font-size: 12px; margin-top: 24px; border-top: 1px solid #e2e8f0; padding-top: 12px;">
              Larken Technologies LLC • 10318 Conser St, Ste 1J, Overland Park, KS 66212 • contracts@larkenit.com
            </p>
          </div>
        </div>
      `,
    });

    return info;
  },

  /**
   * Notify contracts@larkenit.com about a new enquiry
   */
  async notifyEnquiry(enquiry) {
    const receiver = process.env.NOTIFICATION_RECEIVER || 'contracts@larkenit.com';
    const subject = `[New Website Lead] ${enquiry.serviceInterest} - ${enquiry.fullName}`;

    const textContent = `
=====================================================
NEW BUSINESS ENQUIRY - LARKEN TECHNOLOGIES LLC
=====================================================
Full Name:        ${enquiry.fullName}
Business Email:   ${enquiry.email}
Phone Number:     ${enquiry.phone || 'Not provided'}
Service Interest: ${enquiry.serviceInterest}
Submitted At:     ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })} (Central Time)

Message:
${enquiry.message || 'No additional message provided.'}

-----------------------------------------------------
Direct Reply: mailto:${enquiry.email}
Call Client:  tel:${enquiry.phone || ''}
Corporate Headquarters: 10318 Conser St, Ste 1J, Overland Park, KS 66212
=====================================================
    `.trim();

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Business Enquiry - Larken Technologies LLC</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f7fb; margin: 0; padding: 24px 12px;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td align="center">
        <table width="600" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border: 1px solid #e2e8f0;">
          
          <!-- Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #071D3B 0%, #0B2D52 100%); padding: 32px 30px; text-align: left;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <span style="display: inline-block; padding: 4px 10px; background-color: rgba(67, 197, 255, 0.15); border: 1px solid rgba(67, 197, 255, 0.4); border-radius: 20px; color: #43C5FF; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">
                      Website Enquiry Notification
                    </span>
                    <h1 style="color: #ffffff; font-size: 22px; font-weight: 800; margin: 4px 0 0 0; letter-spacing: -0.5px;">
                      Larken Technologies LLC
                    </h1>
                    <p style="color: #cbd5e1; font-size: 13px; margin: 4px 0 0 0;">
                      New business lead submitted via <a href="https://larkenit.com" style="color: #43C5FF; text-decoration: none;">larkenit.com</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Lead Details Table -->
          <tr>
            <td style="padding: 28px 30px;">
              <h2 style="font-size: 16px; font-weight: 700; color: #071D3B; margin: 0 0 16px 0; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">
                Prospect Information
              </h2>

              <table width="100%" border="0" cellspacing="0" cellpadding="8" style="font-size: 14px; color: #334155; margin-bottom: 20px;">
                <tr style="background-color: #f8fafc;">
                  <td width="35%" style="font-weight: 600; color: #64748b; border-radius: 6px 0 0 6px;">Full Name:</td>
                  <td width="65%" style="font-weight: 700; color: #071D3B; border-radius: 0 6px 6px 0;">${enquiry.fullName}</td>
                </tr>
                <tr>
                  <td style="font-weight: 600; color: #64748b;">Business Email:</td>
                  <td>
                    <a href="mailto:${enquiry.email}" style="color: #087DDB; font-weight: 600; text-decoration: none;">
                      ${enquiry.email}
                    </a>
                  </td>
                </tr>
                <tr style="background-color: #f8fafc;">
                  <td style="font-weight: 600; color: #64748b; border-radius: 6px 0 0 6px;">Phone Number:</td>
                  <td style="border-radius: 0 6px 6px 0;">
                    ${enquiry.phone ? `<a href="tel:${enquiry.phone}" style="color: #071D3B; text-decoration: none; font-weight: 600;">${enquiry.phone}</a>` : '<span style="color: #94a3b8;">Not provided</span>'}
                  </td>
                </tr>
                <tr>
                  <td style="font-weight: 600; color: #64748b;">Service Interest:</td>
                  <td>
                    <span style="display: inline-block; padding: 4px 12px; background-color: #eff6ff; color: #087DDB; border-radius: 6px; font-weight: 700; font-size: 13px;">
                      ${enquiry.serviceInterest}
                    </span>
                  </td>
                </tr>
                <tr style="background-color: #f8fafc;">
                  <td style="font-weight: 600; color: #64748b; border-radius: 6px 0 0 6px;">Submission Time:</td>
                  <td style="color: #475569; font-size: 13px; border-radius: 0 6px 6px 0;">
                    ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })} (Central Time)
                  </td>
                </tr>
              </table>

              <!-- Message Block -->
              <h3 style="font-size: 14px; font-weight: 700; color: #071D3B; margin: 20px 0 8px 0;">
                Project Overview / Requirements:
              </h3>
              <div style="background-color: #f8fafc; border-left: 4px solid #087DDB; padding: 14px 16px; border-radius: 0 8px 8px 0; color: #1e293b; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">
                ${enquiry.message || '<em style="color: #94a3b8;">No additional message entered by prospect.</em>'}
              </div>

              <!-- Quick Action Button -->
              <div style="margin-top: 28px; text-align: center;">
                <a href="mailto:${enquiry.email}?subject=Re:%20Larken%20Technologies%20-%20${encodeURIComponent(enquiry.serviceInterest)}" 
                   style="display: inline-block; background-color: #087DDB; color: #ffffff; font-weight: 700; font-size: 14px; padding: 12px 28px; border-radius: 10px; text-decoration: none; box-shadow: 0 4px 12px rgba(8, 125, 219, 0.3);">
                  Reply to ${enquiry.fullName} &rarr;
                </a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 20px 30px; border-top: 1px solid #e2e8f0; text-align: center; color: #64748b; font-size: 12px; line-height: 1.5;">
              <strong style="color: #071D3B;">Larken Technologies LLC</strong><br>
              10318 Conser St, Ste 1J, Overland Park, KS 66212, United States<br>
              Phone: +1 (913) 636-9902 • Email: <a href="mailto:contracts@larkenit.com" style="color: #087DDB; text-decoration: none;">contracts@larkenit.com</a><br>
              <span style="font-size: 11px; color: #94a3b8;">Confidential & Proprietary • Corporate Lead Routing Engine</span>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim();

    const transporter = createTransporter();

    if (transporter) {
      try {
        const sender = process.env.SMTP_USER || 'contracts@larkenit.com';
        const info = await transporter.sendMail({
          from: `"Larken Technologies Notification" <${sender}>`,
          to: receiver,
          replyTo: `"${enquiry.fullName}" <${enquiry.email}>`,
          subject,
          text: textContent,
          html: htmlContent,
        });

        console.log(`✅ [EMAIL DISPATCHED] Lead successfully sent to ${receiver} (MessageId: ${info.messageId})`);
        return { success: true, messageId: info.messageId };
      } catch (err) {
        console.error(`❌ [EMAIL DISPATCH FAILED] Error delivering to ${receiver}:`, err.message);
        return { success: false, error: err.message };
      }
    } else {
      console.warn(`⚠️ [SMTP NOT CONFIGURED] Email to ${receiver} was not dispatched through an active SMTP transport.`);
      console.warn(`ℹ️ Set SMTP_USER=contracts@larkenit.com and SMTP_PASS in /var/www/larken/server/.env on the VPS.`);
      console.log(`[Lead Record]:\n`, textContent);
      return { success: false, error: 'SMTP not configured in server/.env' };
    }
  },

  /**
   * Notify contracts@larkenit.com about a new candidate application
   */
  async notifyApplication(application) {
    const receiver = process.env.NOTIFICATION_RECEIVER || 'contracts@larkenit.com';
    const subject = `[New Job Application] ${application.preferredRole || 'Candidate'} - ${application.fullName}`;

    const textContent = `
=====================================================
NEW CANDIDATE APPLICATION - LARKEN TECHNOLOGIES LLC
=====================================================
Candidate Name:   ${application.fullName}
Email:            ${application.email}
Phone:            ${application.phone}
Location:         ${application.location || 'Not specified'}
Preferred Role:   ${application.preferredRole || 'General Opportunity'}
Experience:       ${application.experience || 'Not specified'}
Skills:           ${application.skills || 'Not specified'}
Resume Key:       ${application.resumeStorageKey || 'Attached / Uploaded'}
Submitted At:     ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })} (Central Time)

Candidate Message:
${application.additionalMessage || 'None'}

Direct Reply: mailto:${application.email}
=====================================================
    `.trim();

    const transporter = createTransporter();

    if (transporter) {
      try {
        const sender = process.env.SMTP_USER || 'contracts@larkenit.com';
        const info = await transporter.sendMail({
          from: `"Larken Technologies Careers" <${sender}>`,
          to: receiver,
          replyTo: `"${application.fullName}" <${application.email}>`,
          subject,
          text: textContent,
        });
        console.log(`✅ [APPLICATION DISPATCHED] Candidate alert sent to ${receiver} (MessageId: ${info.messageId})`);
        return { success: true, messageId: info.messageId };
      } catch (err) {
        console.error(`❌ [APPLICATION DISPATCH FAILED] Error sending to ${receiver}:`, err.message);
        return { success: false, error: err.message };
      }
    } else {
      console.warn(`⚠️ [SMTP NOT CONFIGURED] Candidate alert to ${receiver} could not be sent.`);
      return { success: false, error: 'SMTP not configured in server/.env' };
    }
  },
};
