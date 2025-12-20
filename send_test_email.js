import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

console.log('🔧 Testing Email Configuration...\n');

// Get environment variables
const smtpHost = process.env.SMTP_HOST;
const smtpPort = process.env.SMTP_PORT || '587';
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const toEmail = process.env.TO_EMAIL;

// Validate configuration
if (!smtpHost || !smtpUser || !smtpPass || !toEmail) {
  console.error('❌ ERROR: Missing required environment variables in .env file\n');
  console.log('Required variables:');
  console.log(`  SMTP_HOST: ${smtpHost ? '✓' : '✗ MISSING'}`);
  console.log(`  SMTP_USER: ${smtpUser ? '✓' : '✗ MISSING'}`);
  console.log(`  SMTP_PASS: ${smtpPass ? '✓' : '✗ MISSING'}`);
  console.log(`  TO_EMAIL: ${toEmail ? '✓' : '✗ MISSING'}\n`);
  console.log('Please update your .env file with the correct values.');
  console.log('See EMAIL_SETUP_GUIDE.md for instructions.\n');
  process.exit(1);
}

console.log('✓ Configuration found:');
console.log(`  SMTP Host: ${smtpHost}`);
console.log(`  SMTP Port: ${smtpPort}`);
console.log(`  SMTP User: ${smtpUser}`);
console.log(`  To Email: ${toEmail}\n`);

// Create transporter
const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: parseInt(smtpPort, 10),
  secure: smtpPort === '465',
  auth: {
    user: smtpUser,
    pass: smtpPass
  },
  tls: {
    rejectUnauthorized: false // Fix for self-signed certificate error
  }
});

console.log('📧 Attempting to send test email...\n');

// Send test email
transporter.sendMail({
  from: smtpUser,
  to: toEmail,
  subject: '✅ Test Email - SmartLabProjects Contact Form',
  text: `This is a test email from your SmartLabProjects contact form.

If you received this email, your email configuration is working correctly! 🎉

Configuration Details:
- SMTP Host: ${smtpHost}
- SMTP Port: ${smtpPort}
- From: ${smtpUser}
- To: ${toEmail}

Sent at: ${new Date().toLocaleString()}

You can now use the contact form on your website.`
})
  .then(info => {
    console.log('✅ SUCCESS! Test email sent successfully!\n');
    console.log(`Message ID: ${info.messageId}`);
    console.log(`\nCheck your inbox at: ${toEmail}`);
    console.log('(Don\'t forget to check spam folder if you don\'t see it)\n');
  })
  .catch(err => {
    console.error('❌ ERROR: Failed to send test email\n');
    console.error('Error details:', err.message);

    if (err.message.includes('Invalid login')) {
      console.log('\n💡 TIP: Make sure you\'re using a Gmail App Password, not your regular password.');
      console.log('See EMAIL_SETUP_GUIDE.md for instructions on creating an App Password.\n');
    } else if (err.message.includes('ECONNECTION') || err.message.includes('timeout')) {
      console.log('\n💡 TIP: Check your internet connection and firewall settings.');
      console.log('Some networks block SMTP ports. Try using port 465 with SMTP_SECURE=true\n');
    }

    process.exit(1);
  });
