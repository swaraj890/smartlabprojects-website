// Vercel-compatible serverless contact handler
// Reads JSON body and sends optional notifications via Slack, SendGrid or SMTP (configured via env vars)

import nodemailer from 'nodemailer';
import { contactDetails } from '../contact.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const data = req.body || {};
  const name = data.name || data.fullname || '';
  const email = data.email || '';
  const phone = data.phone || '';
  const domain = data.domain || '';
  const project_type = data.project_type || data.project_title || '';
  const message = data.message || '';
  const timestamp = data.timestamp || new Date().toISOString();

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields (name, email, message)' });
  }

  const summary = `New inquiry from ${name} <${email}>\nDomain: ${domain} | Project: ${project_type} | Phone: ${phone} | Time: ${timestamp}\n\n${message}`;

  // Send Slack notification if configured
  let sentAny = false;
  if (process.env.SLACK_WEBHOOK) {
    try {
      const r = await fetch(process.env.SLACK_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: `*New inquiry* \n${name} — ${email} — ${domain} / ${project_type}` })
      });
      if (r && (r.status === 200 || r.status === 204)) sentAny = true;
    } catch (err) {
      console.error('Slack notify failed', err);
    }
  }

  // Send email via SendGrid if configured
  const toEmail = process.env.TO_EMAIL || (contactDetails && contactDetails.email) || '';
  if (process.env.SENDGRID_API_KEY && toEmail) {
    try {
      const resp = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          personalizations: [{ to: [{ email: process.env.TO_EMAIL }] }],
          from: { email: process.env.TO_EMAIL },
          subject: `New inquiry: ${domain} / ${project_type}`,
          content: [{ type: 'text/plain', value: summary }]
        })
      });
      if (resp && (resp.status === 200 || resp.status === 202)) sentAny = true;
    } catch (err) {
      console.error('SendGrid email failed', err);
    }
  }

  // Send email via SMTP if configured (use env vars: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS)
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS && toEmail) {
    try {
      const portNum = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
      const secure = (process.env.SMTP_SECURE === 'true') || portNum === 465;

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: portNum,
        secure,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        },
        tls: {
          rejectUnauthorized: false // Fix for self-signed certificate error
        }
      });

      // Verify connection before attempting to send
      try {
        await transporter.verify();
      } catch (verifyErr) {
        console.error('SMTP verification failed:', verifyErr && verifyErr.stack ? verifyErr.stack : verifyErr);
        throw verifyErr;
      }

      const fromAddress = process.env.FROM_EMAIL || process.env.SMTP_USER;

      const info = await transporter.sendMail({
        from: fromAddress,
        to: toEmail,
        subject: `New inquiry: ${domain} / ${project_type}`,
        text: summary
      });
      if (info && info.messageId) sentAny = true;
    } catch (err) {
      console.error('SMTP send failed. Full error:');
      console.error(err && err.stack ? err.stack : err);
    }
  }

  // Optionally: log or persist to a DB here (not implemented)
  if (!sentAny) {
    // nothing was sent successfully
    console.error('No notification method succeeded. Check environment variables and provider logs.');
    return res.status(502).json({ status: 'error', message: 'No notification was delivered' });
  }

  return res.status(200).json({ status: 'ok' });
}
