# Email Setup Guide for Contact Form

## 🔧 Setup Instructions

Follow these steps to enable email functionality for your contact form:

### Step 1: Get Gmail App Password

Since you're using Gmail, you need to create an **App Password** (not your regular Gmail password):

1. **Go to your Google Account**: https://myaccount.google.com/
2. **Enable 2-Step Verification** (if not already enabled):
   - Go to Security → 2-Step Verification
   - Follow the prompts to enable it
3. **Create App Password**:
   - Go to Security → 2-Step Verification → App passwords
   - Or directly visit: https://myaccount.google.com/apppasswords
   - Select app: "Mail"
   - Select device: "Windows Computer" or "Other (Custom name)"
   - Click "Generate"
   - **Copy the 16-character password** (it will look like: `abcd efgh ijkl mnop`)

### Step 2: Update .env File

Open the `.env` file in your project and replace the placeholder values:

```env
# SMTP Server Settings (Gmail)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false

# Your Gmail Account
SMTP_USER=your-actual-email@gmail.com
SMTP_PASS=abcdefghijklmnop

# Email to receive form submissions
TO_EMAIL=your-actual-email@gmail.com

# Optional: Custom FROM email
FROM_EMAIL=your-actual-email@gmail.com
```

**Replace:**
- `your-actual-email@gmail.com` with your Gmail address
- `abcdefghijklmnop` with the 16-character App Password (remove spaces)

### Step 3: Install Dependencies

Run this command in your project folder:

```bash
npm install
```

This will install the `dotenv` package that was just added.

### Step 4: Start the Server

Run the server:

```bash
npm run start-server
```

You should see: `Local mail server listening on http://localhost:3000`

### Step 5: Test the Form

1. Open `index.html` in your browser
2. Fill out the contact form
3. Submit it
4. Check your Gmail inbox for the form submission

---

## 🔍 Troubleshooting

### Issue: "Invalid login" or "Authentication failed"

**Solution:**
- Make sure you're using the **App Password**, not your regular Gmail password
- Remove all spaces from the App Password in `.env`
- Ensure 2-Step Verification is enabled on your Google Account

### Issue: "SMTP configuration missing"

**Solution:**
- Check that `.env` file has all required fields filled
- Restart the server after updating `.env`

### Issue: Emails not arriving

**Solution:**
- Check your Gmail spam folder
- Verify `TO_EMAIL` in `.env` is correct
- Check server console for error messages

### Issue: "Connection timeout"

**Solution:**
- Check your internet connection
- Some networks block port 587 - try using port 465 with `SMTP_SECURE=true`
- Temporarily disable firewall/antivirus

---

## 📧 Alternative: Using Different Email Providers

### For Outlook/Hotmail:
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
```

### For Yahoo:
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_USER=your-email@yahoo.com
SMTP_PASS=your-app-password
```

---

## ✅ Security Notes

1. **Never commit `.env` to Git** - It's already in `.gitignore`
2. **Keep your App Password secret**
3. **Use App Passwords, not regular passwords**
4. **Revoke App Passwords** if you suspect they're compromised

---

## 🎯 Quick Test

After setup, you can test email sending with:

```bash
node send_test_email.js
```

This will send a test email to verify your configuration is working.
