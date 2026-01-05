# 🔧 Fix Email Functionality on Vercel

## ❌ Problem: Email Not Working on Deployed Site

The email works locally but not on Vercel because **environment variables are missing**.

---

## ✅ Solution: Add Environment Variables in Vercel

### **Step 1: Go to Vercel Settings**

1. Go to: https://vercel.com/dashboard
2. Click on your project: **smartlabprojects-website**
3. Click **"Settings"** (top menu)
4. Click **"Environment Variables"** (left sidebar)

---

### **Step 2: Add These 6 Variables**

Click **"Add New"** for each variable:

#### **Variable 1: SMTP_HOST**
- **Key**: `SMTP_HOST`
- **Value**: `smtp.gmail.com`
- **Environment**: Select all (Production, Preview, Development)
- Click **"Save"**

#### **Variable 2: SMTP_PORT**
- **Key**: `SMTP_PORT`
- **Value**: `587`
- **Environment**: Select all
- Click **"Save"**

#### **Variable 3: SMTP_USER**
- **Key**: `SMTP_USER`
- **Value**: `smartlab.inquiry@gmail.com`
- **Environment**: Select all
- Click **"Save"**

#### **Variable 4: SMTP_PASS** (IMPORTANT!)
- **Key**: `SMTP_PASS`
- **Value**: `[Your Gmail App Password - 16 characters, NO SPACES]`
- **Environment**: Select all
- Click **"Save"**

**⚠️ IMPORTANT**: Use your Gmail App Password (the 16-character one), NOT your regular Gmail password!

#### **Variable 5: TO_EMAIL**
- **Key**: `TO_EMAIL`
- **Value**: `swaraj890806@gmail.com`
- **Environment**: Select all
- Click **"Save"**

#### **Variable 6: FROM_EMAIL**
- **Key**: `FROM_EMAIL`
- **Value**: `smartlab.inquiry@gmail.com`
- **Environment**: Select all
- Click **"Save"**

---

### **Step 3: Redeploy Your Website**

After adding all 6 variables:

1. Go to **"Deployments"** tab
2. Click the **three dots (...)** on the latest deployment
3. Click **"Redeploy"**
4. Wait 1-2 minutes for redeployment

---

### **Step 4: Test the Contact Form**

1. Visit: `https://smartlabprojects-website.vercel.app`
2. Scroll to the **Contact** section
3. Fill out the form:
   - Name: Test User
   - Email: test@example.com
   - Phone: 1234567890
   - Domain: Machine Learning
   - Message: This is a test
4. Click **"Send Message"**
5. Check your email at: `swaraj890806@gmail.com`

**You should receive the email within 1-2 minutes!** ✅

---

## 🔍 How to Verify Environment Variables Are Set

In Vercel:
1. Settings → Environment Variables
2. You should see all 6 variables listed:
   - ✅ SMTP_HOST
   - ✅ SMTP_PORT
   - ✅ SMTP_USER
   - ✅ SMTP_PASS (value hidden)
   - ✅ TO_EMAIL
   - ✅ FROM_EMAIL

---

## 📋 Checklist

- [ ] Opened Vercel Settings → Environment Variables
- [ ] Added SMTP_HOST = smtp.gmail.com
- [ ] Added SMTP_PORT = 587
- [ ] Added SMTP_USER = smartlab.inquiry@gmail.com
- [ ] Added SMTP_PASS = [Your 16-char App Password]
- [ ] Added TO_EMAIL = swaraj890806@gmail.com
- [ ] Added FROM_EMAIL = smartlab.inquiry@gmail.com
- [ ] Clicked "Redeploy" after adding variables
- [ ] Waited 2 minutes for redeployment
- [ ] Tested contact form
- [ ] Received email successfully

---

## 🔧 Troubleshooting

### Issue: "Where do I find my Gmail App Password?"

**Solution:**
1. Go to: https://myaccount.google.com/apppasswords
2. If prompted, enable 2-Step Verification first
3. Create new App Password:
   - App: Mail
   - Device: Computer
4. Copy the 16-character password (remove spaces)
5. Use this in SMTP_PASS

### Issue: Still not receiving emails after adding variables

**Check these:**

1. **Did you redeploy?**
   - Variables only take effect after redeployment
   - Go to Deployments → Redeploy

2. **Check Vercel Function Logs:**
   - Go to your project in Vercel
   - Click "Deployments"
   - Click on the latest deployment
   - Click "Functions" tab
   - Look for errors in the `/api/contact` function

3. **Verify the App Password:**
   - Make sure it's 16 characters
   - No spaces
   - It's the App Password, not your regular password

4. **Check spam folder:**
   - Emails might go to spam initially

### Issue: Form submits but shows error

**Check browser console:**
1. Open your website
2. Press F12 (Developer Tools)
3. Go to "Console" tab
4. Submit the form
5. Look for error messages

---

## 📧 Your Email Configuration

**From**: smartlab.inquiry@gmail.com  
**To**: swaraj890806@gmail.com  
**SMTP**: Gmail (smtp.gmail.com:587)  
**Security**: TLS with App Password

---

## ✅ After Email Works

Once you confirm emails are working:

1. ✅ Test with different form data
2. ✅ Verify all fields are included in the email
3. ✅ Then proceed to connect your GoDaddy domain
4. ✅ Email will continue working on your custom domain

---

## 🎯 Quick Steps Summary

1. **Add 6 environment variables** in Vercel Settings
2. **Redeploy** the website
3. **Wait 2 minutes**
4. **Test** the contact form
5. **Check email** at swaraj890806@gmail.com
6. **Done!** ✅

---

**Start with Step 1 above. Add all 6 environment variables, then redeploy!** 🚀

---

## 💡 Why This Happens

- **Locally**: Your `.env` file provides the credentials
- **On Vercel**: The `.env` file is NOT uploaded (it's in .gitignore for security)
- **Solution**: Add variables manually in Vercel dashboard

This is the correct and secure way to handle sensitive credentials!
