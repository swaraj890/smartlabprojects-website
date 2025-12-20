# 🚀 Quick Start - Email Setup for Contact Form

## ✅ What I Fixed

I've fixed the email functionality for your contact form. Here's what was done:

1. ✅ Added `dotenv` package to load environment variables
2. ✅ Created `.env` file for your email configuration
3. ✅ Updated `server.js` to load environment variables
4. ✅ Created `.gitignore` to protect your credentials
5. ✅ Created test email script for verification

---

## 📝 What You Need to Do (3 Simple Steps)

### Step 1: Get Your Gmail App Password

1. Go to: https://myaccount.google.com/apppasswords
2. If prompted, enable 2-Step Verification first
3. Create an App Password:
   - App: Mail
   - Device: Windows Computer
4. **Copy the 16-character password** (looks like: `abcd efgh ijkl mnop`)

### Step 2: Update the `.env` File

Open the `.env` file in your project and replace these values:

```env
SMTP_USER=your-actual-email@gmail.com
SMTP_PASS=abcdefghijklmnop
TO_EMAIL=your-actual-email@gmail.com
```

**Important:**
- Replace `your-actual-email@gmail.com` with YOUR Gmail address
- Replace `abcdefghijklmnop` with the App Password (remove spaces)
- Keep `TO_EMAIL` as your email (where you want to receive form submissions)

### Step 3: Test It!

Run these commands in order:

```bash
# Start the server
npm run start-server
```

In a new terminal, test the email:

```bash
# Test email configuration
node send_test_email.js
```

If you see "✅ SUCCESS!", check your Gmail inbox!

---

## 🎯 Using the Contact Form

1. **Start the server**: `npm run start-server`
2. **Open** `index.html` in your browser
3. **Fill out** the contact form
4. **Submit** - You'll receive the email at your Gmail!

---

## 🔧 Troubleshooting

### "Invalid login" error?
- Make sure you're using the **App Password**, not your regular Gmail password
- Remove all spaces from the App Password in `.env`

### Email not arriving?
- Check your Gmail **spam folder**
- Verify the email address in `.env` is correct
- Make sure the server is running

### Need more help?
- See `EMAIL_SETUP_GUIDE.md` for detailed instructions
- Check the server console for error messages

---

## 📁 Files Modified/Created

- ✅ `.env` - Your email configuration (KEEP THIS SECRET!)
- ✅ `server.js` - Updated to load `.env`
- ✅ `package.json` - Added `dotenv` package
- ✅ `.gitignore` - Protects your `.env` file
- ✅ `send_test_email.js` - Test script
- ✅ `EMAIL_SETUP_GUIDE.md` - Detailed guide
- ✅ `QUICK_START.md` - This file

---

## 🎉 That's It!

Once you complete the 3 steps above, your contact form will be fully functional and will send emails to your Gmail inbox!

**Questions?** Check `EMAIL_SETUP_GUIDE.md` for more details.
