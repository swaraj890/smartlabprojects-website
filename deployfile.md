Deployfile — Step-by-step deployment and email setup

This file gives exact, ordered steps to deploy your site to Vercel and configure serverless email using your Gmail app password securely.

A. Prepare repo
1. Commit all changes:

```bash
git add .
git commit -m "chore: prepare for deployment and serverless email"
git push origin main
```

B. Verify SMTP locally (important)
1. Install dependencies locally:

```bash
npm install
```

2. Test SMTP credentials with the test script (recommended before deploying):

```powershell
node send_test_email.js --smtp-host smtp.gmail.com --smtp-port 587 --smtp-user your-email@gmail.com --smtp-pass 'YOUR_APP_PASSWORD' --to destination@domain.com
```

If this succeeds, your app password and SMTP settings are valid.

C. Run local server for end-to-end testing
1. Start the local mail server (reads env vars):

PowerShell:
```powershell
$env:SMTP_HOST='smtp.gmail.com'
$env:SMTP_PORT='587'
$env:SMTP_USER='your-email@gmail.com'
$env:SMTP_PASS='YOUR_APP_PASSWORD'
$env:TO_EMAIL='destination@domain.com'
npm run start-server
```

2. Serve static files (from project root) and open the site in a browser on localhost. Example quick server:

```bash
npx http-server -c-1 . -p 8080
# or
python -m http.server 8080
```

3. Open `http://localhost:8080` in the same machine where `server.js` is running. Submit the form — front-end will POST to `http://localhost:3000/send-local` and the server will send mail.

D. Deploy to Vercel (production)
1. Create a Vercel account and install Vercel CLI (optional):

```bash
npm i -g vercel
```

2. From Vercel dashboard: "New Project" → Import Git Repository → choose your repo.

3. In Vercel project settings, add Environment Variables (under Settings → Environment Variables):
- `SMTP_HOST` = smtp.gmail.com
- `SMTP_PORT` = 587
- `SMTP_USER` = your-email@gmail.com
- `SMTP_PASS` = <YOUR_APP_PASSWORD>
- `TO_EMAIL` = destination@domain.com

4. (Preferred) Convert `server.js` to a serverless function named `api/contact.js` for Vercel, or allow Vercel to run a separate backend. If you want, I can convert `server.js` into `api/contact.js` for you — tell me and I'll add it.

5. Deploy and test by submitting the live form. Check Vercel function logs for errors.

E. Deploy to Netlify (alternative)
- Netlify supports functions under `netlify/functions/`. I can convert `server.js` into a Netlify function if you prefer Netlify.

F. Post-deploy checks
1. Confirm emails reach `TO_EMAIL`.
2. Check spam folder and SPF/DKIM settings if deliverability issues appear — using SendGrid/SES can improve deliverability.
3. Configure Slack webhook if you want immediate team notifications (add `SLACK_WEBHOOK` env var and integrate in the function).

G. Notes
- Never store `SMTP_PASS` in the repo. Use Vercel/Netlify env vars.
- If you prefer I implement the serverless function for Vercel now, reply "Implement Vercel function" and I will add `api/contact.js` and update front-end to POST to `/api/contact` in production.
