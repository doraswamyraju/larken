import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env from possible paths
const serverEnv = path.resolve(__dirname, '.env');
const rootEnv = path.resolve(__dirname, '../.env');

if (fs.existsSync(serverEnv)) {
  dotenv.config({ path: serverEnv });
  console.log('📄 Loaded environment from:', serverEnv);
} else if (fs.existsSync(rootEnv)) {
  dotenv.config({ path: rootEnv });
  console.log('📄 Loaded environment from:', rootEnv);
} else {
  dotenv.config();
}

const user = (process.env.SMTP_USER || '').trim().replace(/['"\r\n]/g, '');
const rawPass = process.env.SMTP_PASS || '';
const pass = rawPass.trim().replace(/['"\s\r\n]/g, '');
const receiver = process.env.NOTIFICATION_RECEIVER || 'contracts@larkenit.com';

console.log('========================================================');
console.log('🔍 Larken Technologies - SMTP Diagnostic Tool');
console.log('========================================================');
console.log('👤 SMTP User:       ', user);
console.log('🔑 Pass Length:     ', pass.length, '(Expected: 16 characters)');
console.log('🔑 Pass Masked:     ', pass.slice(0, 3) + '••••••••••' + pass.slice(-3));
console.log('📬 Target Receiver: ', receiver);
console.log('========================================================\n');

async function verifyPort(port, secure) {
  const mode = secure ? 'SSL' : 'STARTTLS';
  console.log(`⏳ Testing connection to smtp.gmail.com:${port} (${mode})...`);

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port,
    secure,
    requireTLS: !secure,
    auth: { user, pass },
    tls: { rejectUnauthorized: false },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
  });

  try {
    await transporter.verify();
    console.log(`✅ SUCCESS! Authenticated cleanly on port ${port} (${mode})!\n`);

    console.log(`🚀 Sending live test email to ${receiver}...`);
    const info = await transporter.sendMail({
      from: `"Larken Technologies System" <${user}>`,
      to: receiver,
      replyTo: receiver,
      subject: `[Live Test] Larken Technologies Contact Form Dispatch`,
      text: `Congratulations! Form notification delivery is active and verified on port ${port}. Leads submitted on larkenit.com will now arrive directly in this inbox.`,
    });
    console.log(`🎉 TEST EMAIL SENT! MessageId: ${info.messageId}`);
    return true;
  } catch (err) {
    console.error(`❌ FAILED on port ${port} (${mode}):`, err.message);
    return false;
  }
}

async function run() {
  // Test port 465 SSL first
  const ok465 = await verifyPort(465, true);
  if (ok465) {
    console.log('\n========================================================');
    console.log('✅ Port 465 is working perfectly!');
    console.log('========================================================');
    return;
  }

  console.log('\nRetrying on Port 587 (TLS/STARTTLS)...');
  // Fallback test port 587 TLS
  const ok587 = await verifyPort(587, false);
  if (ok587) {
    console.log('\n========================================================');
    console.log('✅ Port 587 (TLS) is working! Update SMTP_PORT=587 in .env.');
    console.log('========================================================');
    return;
  }

  console.log('\n========================================================');
  console.log('⚠️ Both ports failed. Common solutions:');
  console.log('1. Go to your Google Account > Security and verify "Check activity" on the security alert email.');
  console.log('2. Ensure 2-Step Verification is ON, and create a fresh App Password at:');
  console.log('   https://myaccount.google.com/apppasswords');
  console.log('========================================================');
}

run();
