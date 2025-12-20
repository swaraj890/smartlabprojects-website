# Deployment Guide — SmartLabProjects

This document explains how to deploy the site you have in this repository (static HTML/CSS/JS) to production, connect a purchased domain, and implement form handling and real‑time notifications for form submissions.

Contents
- Overview
- What to host
- Quick local run
- Recommended hosting options (Netlify, Vercel, GitHub Pages)
- DNS / domain setup (using your purchased domain)
- Form handling options (no-server and serverless) and secure setup
- Real-time notifications (Slack, Email, SMS, Push)
- Example implementations (Google Apps Script, Netlify/Vercel serverless, Slack webhook, nodemailer)
- Security & testing checklist

---

## Overview
Your repo is a static site (HTML + client-side JS). You can host the site on any static hosting provider (Netlify, Vercel, GitHub Pages). If you need server-side logic (send emails, integrate with third-party APIs), use serverless functions (Vercel, Netlify) or a small backend.

This guide shows both quick, no‑code deployment methods and production-ready serverless options, plus how to wire a purchased domain and configure notifications.

---

## What to host
Files to deploy (root):
- `index.html` (homepage)
- `project-details.html` (project detail page)
- `projects.js`, `main.js`, `contact.js`, `formFields.js` (client JS)
- `projects-section.css` (CSS)
- `prices.json` (data)
- any images or asset folders

If you add serverless functions, put them where your host expects them (Vercel: `/api/*.js`, Netlify: `/netlify/functions/*` or `netlify.toml`).

---

## Quick local run (test before deploy)
1. Open `index.html` directly in a browser for a quick visual check.
2. For a local static server (recommended):

```powershell
# from repository root
npx http-server -c-1 .  # or
python -m http.server 8080
```
Open `http://localhost:8080` and test interactions.

---

## Hosting options (short recommendations + steps)
Pick one based on needs:

A) Netlify (static + serverless functions)
- Pros: simple Git deploys, automatic SSL, Netlify Functions for serverless, easy custom domain setup.
- Steps:
  1. Push repo to GitHub.
  2. Create a Netlify account and "New site from Git" → connect your GitHub repo.
  3. Set build settings: for static site, deploy root (no build command). Click "Deploy site".
  4. In Site Settings → Domain management → Add your custom domain.
  5. Update your domain DNS per Netlify instructions (usually add A or CNAME, or use Netlify nameservers).
  6. Add environment variables (Site settings → Build & deploy → Environment).

B) Vercel (static + API routes)
- Pros: great for static + Node serverless functions, automatic SSL, simple CLI.
- Steps:
  1. Push to GitHub.
  2. `vercel` (install Vercel CLI) or connect via dashboard → import project.
  3. For serverless functions, create `api/send.js` and Vercel exposes `/api/send`.
  4. Add custom domain in Vercel dashboard and follow DNS steps.

C) GitHub Pages (static only)
- Pros: free for static sites.
- Limitations: no serverless/AJAX backend unless you use external services (Formspree, Google Apps Script).
- Steps:
  1. Push to GitHub.
  2. Repository Settings → Pages → Branch: `main` / `gh-pages` → Save.
  3. Add CNAME if using a custom domain and update DNS as instructed.

Which to use?
- If you need serverless/email/webhook integration: use Netlify or Vercel.
- If purely static and you want super simple hosting: GitHub Pages.

---

## Domain (you purchased a domain) — how to connect
1. On your domain provider (GoDaddy, Namecheap, Google Domains): open DNS settings for your domain.
2. If using Netlify/Vercel, add the domain in the site dashboard — they will display DNS records to add or a nameserver change.
3. Common patterns:
   - `www.example.com` → add CNAME to yoursite.netlify.app or alias to Vercel.
   - root `example.com` → use ALIAS/ANAME or point A records to provider IPs (Netlify/Vercel provide instructions).
4. Wait for DNS propagation (can be minutes to 24 hours). The host will provision SSL automatically once DNS is correct.

Example (Netlify) — using `www` CNAME:
- Add `CNAME` record: host `www` → value `your-site-name.netlify.app`.
- Optionally set root domain to redirect to `www` by following Netlify instructions.

Example (Vercel):
- Add domain to Vercel project; follow shown CNAME/A records and add them in your registrar.

---

## Form handling — options (choose one)
Your current `index.html` uses a placeholder Google Apps Script URL. Below are secure options.

Option 1 — Google Apps Script (GAS) Web App
- Good for quick email forwarding and Google Sheets logging.
- Steps (brief):
  1. Go to https://script.google.com/ → New project.
  2. Paste a simple doPost(e) handler that writes to a Google Sheet and sends an email.
  3. Deploy → New deployment → Select "Web app" → Execute as: `Me`, Who has access: `Anyone` (or Anyone, even anonymous).
  4. Copy the deployment URL and put it in your form `action="<DEPLOY_URL>"` with method POST.
- Pros: no external host, stores data in Google Sheets.
- Cons: quotas and complexity for heavy traffic; cross-origin considerations (form POST works fine; AJAX from client needs CORS handling).

Sample GAS `Code.gs` (very small):
```javascript
function doPost(e){
  var params = e.parameter;
  var sheet = SpreadsheetApp.openById('YOUR_SHEET_ID').getSheetByName('Sheet1');
  sheet.appendRow([new Date(), params.name, params.email, params.domain, params.project_type, params.message]);
  // optional email
  MailApp.sendEmail('you@yourdomain.com', 'New Inquiry', JSON.stringify(params));
  return ContentService.createTextOutput(JSON.stringify({status:'ok'})).setMimeType(ContentService.MimeType.JSON);
}
```

Option 2 — Formspree / Formcarry / Getform (no server)
- Signup and copy the unique form endpoint (e.g. `https://formspree.io/f/XXXXX`).
- Set your `<form action="https://formspree.io/f/XXXXX" method="POST">` and submit.
- You can configure email forwarding, Slack integrations, and Zapier.
- Very fast to configure.

Option 3 — Serverless function (recommended for production)
- Use Netlify Functions or Vercel API routes to receive the form, validate, then send email via SendGrid/SES/Twilio or forward a webhook to Slack.
- Example architecture:
  - Client POSTs to `/api/contact` (serverless function).
  - Function validates input, sends email using SendGrid (API key in environment variables), and triggers a Slack webhook.
- Advantages: secure (credentials stored in host env vars), flexible, scalable.

Example (Node) serverless handler (Vercel / Netlify):
```javascript
// api/contact.js (Vercel)
import nodemailer from 'nodemailer';
export default async function handler(req, res){
  if (req.method !== 'POST') return res.status(405).end();
  const { name,email,phone,domain,project_type,message } = req.body;
  // validate fields
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
  });
  await transporter.sendMail({ from: process.env.SMTP_USER, to: process.env.TO_EMAIL, subject: `New inquiry: ${domain}`, text: `${name} (${email}): ${message}` });
  // optional: call Slack webhook for real-time notification
  await fetch(process.env.SLACK_WEBHOOK, { method:'POST', body: JSON.stringify({text:`New inquiry: ${name} - ${domain}`}), headers:{'Content-Type':'application/json'}});
  res.json({status:'ok'});
}
```
Make sure to add `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS`, `TO_EMAIL`, `SLACK_WEBHOOK` to your host's environment variables.

---

## Real-time notifications when a customer fills the form
You have several options depending on immediacy and channels you want:

1) Slack (recommended for team notification)
- Create an "Incoming Webhook" in Slack, copy the webhook URL.
- From your serverless function (or GAS) POST a JSON payload to the webhook URL with a short message.
- Example payload: `{ "text": "New inquiry from Jane Doe (jane@x): Project Domain: Machine Learning" }`.

2) Email (SendGrid / Amazon SES)
- Use a transactional email provider; from serverless function call the provider API to send email to your inbox.
- Providers have generous free tiers and reliable deliverability.

3) SMS (Twilio)
- From your serverless function call Twilio REST API to send an SMS to a phone number.
- Good for urgent notifications; costs per SMS.

4) Telegram bot
- Create a bot via BotFather, get bot token, and send a message to your chat id via `https://api.telegram.org/bot<TOKEN>/sendMessage`.
- Quick and free (for the user who runs the bot).

5) Pusher / Ably (real-time websocket)
- When you want to broadcast notifications to live dashboards: server sends event to Pusher/Ably, connected front-end dashboards receive it live.
- Requires client subscription and server-side triggers.

6) Zapier / Make (Integromat)
- If you use Formspree or Google Sheets, you can connect an automation to send Slack/email/SMS via Zapier when a new row appears.
- Good low-code approach.

---

## Recommended production setup (doable in ~30 minutes)
1. Push repo to GitHub.
2. Deploy to Vercel (recommended):
   - `npm i -g vercel` then `vercel` and follow prompts, or use Import Project from Vercel dashboard.
   - Add environment variables (SMTP keys, webhook URLs) in Vercel Project Settings → Environment Variables.
   - Add serverless function `api/contact.js` (see example above) to receive POSTs and send emails + Slack webhook.
3. Add custom domain in Vercel and update DNS at your registrar.
4. Add reCAPTCHA on contact form (Google reCAPTCHA v3 or v2) and validate in the serverless function.

---

## Example: Slack webhook + nodemailer (Netlify or Vercel)
1. Create Slack Incoming Webhook and get `SLACK_WEBHOOK_URL`.
2. Add SMTP credentials (`SMTP_HOST`, `SMTP_USER`, `SMTP_PASS`) and `TO_EMAIL` in environment variables.
3. Implement serverless `api/contact` as shown above.
4. Set your form action in `index.html` to POST via fetch to `/api/contact` (or leave form as normal and handle with JS fetch).

Client-side sample (AJAX):
```javascript
async function submitForm(e){
  e.preventDefault();
  const body = { name: nameInput.value, email: emailInput.value, domain: domainSelect.value, project_type: projectTypeSelect.value, message: messageInput.value };
  const res = await fetch('/api/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body) });
  const json = await res.json();
  // show success
}
```

---

## DNS & domain specifics (short checklist)
- Add A/CNAME as provider asks (Netlify/Vercel provide exact records).
- Configure `www` and root domain handling (redirect root to `www` or vice versa).
- Confirm SSL is active (host dashboard shows "HTTPS / SSL enabled").

Example DNS records (Vercel):
- `A` records for root pointing to Vercel IPs (shown in dashboard), and `CNAME` for `www` pointing to `cname.vercel-dns.com`.

---

## Security & best practices
- Validate all input server-side; never trust client-side validation only.
- Use reCAPTCHA to reduce spam (validate token on server).
- Store secrets in environment variables (never commit keys to Git).
- Rate limit submissions in serverless function if possible.
- Ensure TLS (https) for all endpoints.
- Add CORS restrictions if you accept AJAX from your front-end only.

---

## Testing checklist
1. Deploy to staging (Netlify or Vercel preview) and test form submission end-to-end.
2. Verify that email notifications arrive, Slack messages appear, and that `project_type` selection is filtered by `domain`.
3. Test with reCAPTCHA enabled (if implemented).
4. Test domain DNS and SSL.

---

## Appendix: Quick code snippets

### Google Apps Script (quick deploy)
```javascript
function doPost(e){
  var p = e.parameter;
  var sheet = SpreadsheetApp.openById('SHEET_ID').getSheetByName('Sheet1');
  sheet.appendRow([new Date(), p.name, p.email, p.domain, p.project_type, p.message]);
  MailApp.sendEmail('you@domain.com','New inquiry','Name:'+p.name+'\nEmail:'+p.email+'\nMessage:'+p.message);
  return ContentService.createTextOutput(JSON.stringify({status:'ok'})).setMimeType(ContentService.MimeType.JSON);
}
```
Deploy as Web App and use the URL as your form `action`.

### Serverless (Vercel/Netlify) — nodemailer + Slack webhook
See `api/contact.js` example earlier. Use `process.env.*` variables in your host UI.

### Slack webhook (send JSON)
```javascript
await fetch(process.env.SLACK_WEBHOOK, {
  method: 'POST',
  headers: {'Content-Type':'application/json'},
  body: JSON.stringify({ text: `New inquiry from ${name} (${email}) — ${domain} / ${project_type}` })
});
```

### Twilio SMS (Node example)
```javascript
import Twilio from 'twilio';
const client = new Twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);
await client.messages.create({ body:'New inquiry', from:process.env.TWILIO_FROM, to: process.env.ADMIN_PHONE });
```

---

If you tell me which hosting provider you prefer (Netlify, Vercel, GitHub Pages, or a VPS like DigitalOcean), I will write a tailored, step‑by‑step deployment script and the minimal serverless function code to send email + Slack notifications, plus the exact DNS records you need for your registrar.

If you want, I can also implement and wire a serverless function now (Netlify or Vercel) and update the website form to call it.
