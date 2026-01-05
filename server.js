import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('.')); // Serve static files from current directory

const PORT = process.env.PORT || 3000;

function getEnv(name) {
  return process.env[name] || null;
}

app.post('/send-local', async (req, res) => {
  console.log('📨 Received POST /send-local');
  console.log('Body:', JSON.stringify(req.body, null, 2));
  const data = req.body || {};
  const name = data.name || data.fullname || 'No name';
  const email = data.email || 'no-reply@example.com';
  const phone = data.phone || '';
  const domain = data.domain || '';
  const project = data.project_type || data.project_title || data.custom_project || '';
  const message = data.message || '';
  const timestamp = data.timestamp || new Date().toISOString();

  const smtpHost = getEnv('SMTP_HOST');
  const smtpPort = getEnv('SMTP_PORT') || '587';
  const smtpUser = getEnv('SMTP_USER');
  const smtpPass = getEnv('SMTP_PASS');
  const toEmail = getEnv('TO_EMAIL');

  if (!smtpHost || !smtpUser || !smtpPass || !toEmail) {
    return res.status(400).json({ error: 'SMTP configuration missing. Set SMTP_HOST, SMTP_USER, SMTP_PASS, TO_EMAIL.' });
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: parseInt(smtpPort, 10),
    secure: smtpPort === '465',
    auth: { user: smtpUser, pass: smtpPass },
    tls: {
      rejectUnauthorized: false // Fix for self-signed certificate error
    }
  });

  const subject = `New inquiry: ${domain} ${project}`.trim();
  const text = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nDomain: ${domain}\nProject: ${project}\nTime: ${timestamp}\n\nMessage:\n${message}`;

  try {
    const info = await transporter.sendMail({
      from: smtpUser,
      to: toEmail,
      replyTo: email,
      subject,
      text
    });
    return res.json({ ok: true, messageId: info.messageId });
  } catch (err) {
    console.error('Send failed', err);
    return res.status(500).json({ error: 'Send failed', details: err.message || String(err) });
  }
});

app.listen(PORT, () => console.log(`Local mail server listening on http://localhost:${PORT}`));
