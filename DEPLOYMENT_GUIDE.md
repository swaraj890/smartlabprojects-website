# 🚀 Complete Deployment Guide - SmartLabProjects Website

## 📋 Overview

This guide will help you deploy your SmartLabProjects website with your GoDaddy domain. We'll use **Vercel** (free hosting) for the website and configure your GoDaddy domain to point to it.

---

## 🎯 What You'll Need

- ✅ Your GoDaddy domain (you already have this!)
- ✅ GitHub account (free)
- ✅ Vercel account (free)
- ✅ Your project files (you have these)

---

## 📝 Deployment Steps

### **STEP 1: Prepare Your Project**

#### 1.1 Create a `vercel.json` file
This tells Vercel how to handle your API routes.

Create a new file called `vercel.json` in your project root with this content:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "api/**/*.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/api/$1"
    }
  ],
  "env": {
    "NODE_ENV": "production"
  }
}
```

#### 1.2 Verify `.gitignore` exists
Make sure your `.gitignore` file includes:
```
node_modules/
.env
.env.local
```

✅ **Status**: You already have this file!

---

### **STEP 2: Create GitHub Repository**

#### 2.1 Create a GitHub Account
1. Go to https://github.com
2. Click "Sign up"
3. Follow the registration process

#### 2.2 Create a New Repository
1. Click the **"+"** icon (top right) → "New repository"
2. Repository name: `smartlabprojects-website`
3. Description: "SmartLabProjects - Academic Project Solutions"
4. Select **"Public"**
5. **DO NOT** check "Initialize with README"
6. Click **"Create repository"**

#### 2.3 Push Your Code to GitHub

Open a **new terminal** in your project folder and run these commands:

```bash
# Initialize Git (if not already done)
git init

# Add all files
git add .

# Commit your files
git commit -m "Initial commit - SmartLabProjects website"

# Add your GitHub repository as remote
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/smartlabprojects-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Important**: When prompted, enter your GitHub username and password (or personal access token).

---

### **STEP 3: Deploy to Vercel**

#### 3.1 Create Vercel Account
1. Go to https://vercel.com
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub account

#### 3.2 Import Your Project
1. On Vercel dashboard, click **"Add New..."** → **"Project"**
2. Find your `smartlabprojects-website` repository
3. Click **"Import"**

#### 3.3 Configure Project Settings
1. **Project Name**: `smartlabprojects` (or your preferred name)
2. **Framework Preset**: Leave as "Other"
3. **Root Directory**: `./` (leave as default)
4. **Build Command**: Leave empty
5. **Output Directory**: Leave empty

#### 3.4 Add Environment Variables
Click **"Environment Variables"** and add these:

| Name | Value |
|------|-------|
| `SMTP_HOST` | `smtp.gmail.com` |
| `SMTP_PORT` | `587` |
| `SMTP_USER` | `smartlab.inquiry@gmail.com` |
| `SMTP_PASS` | Your Gmail App Password |
| `TO_EMAIL` | `swaraj890806@gmail.com` |
| `FROM_EMAIL` | `smartlab.inquiry@gmail.com` |

**Important**: Use your actual Gmail App Password (the 16-character one)

#### 3.5 Deploy
1. Click **"Deploy"**
2. Wait 1-2 minutes for deployment to complete
3. You'll get a URL like: `https://smartlabprojects.vercel.app`

✅ **Test your website** at the Vercel URL before proceeding!

---

### **STEP 4: Connect Your GoDaddy Domain**

#### 4.1 Get Vercel DNS Records
1. In Vercel, go to your project
2. Click **"Settings"** → **"Domains"**
3. Enter your GoDaddy domain (e.g., `smartlabprojects.com`)
4. Click **"Add"**
5. Vercel will show you DNS records to add

You'll see something like:
- **Type**: A
- **Name**: `@`
- **Value**: `76.76.21.21`

And:
- **Type**: CNAME
- **Name**: `www`
- **Value**: `cname.vercel-dns.com`

**Keep this page open** - you'll need these values!

#### 4.2 Configure GoDaddy DNS
1. Go to https://dnsmanagement.godaddy.com
2. Log in to your GoDaddy account
3. Find your domain and click **"DNS"** or **"Manage DNS"**

#### 4.3 Update DNS Records

**For the root domain (@):**
1. Find the existing **A record** with name `@`
2. Click **"Edit"** (pencil icon)
3. Change the **Value** to the IP address Vercel gave you (e.g., `76.76.21.21`)
4. Set **TTL** to `600 seconds`
5. Click **"Save"**

**For www subdomain:**
1. Find the **CNAME record** with name `www`
2. Click **"Edit"**
3. Change the **Value** to `cname.vercel-dns.com`
4. Set **TTL** to `600 seconds`
5. Click **"Save"**

**If records don't exist, create them:**
1. Click **"Add"** button
2. Select record type (A or CNAME)
3. Fill in the details from Vercel
4. Click **"Save"**

#### 4.4 Verify Domain in Vercel
1. Go back to Vercel → Settings → Domains
2. Wait 5-10 minutes for DNS propagation
3. Vercel will automatically verify your domain
4. You'll see a ✅ checkmark when it's ready

---

### **STEP 5: Final Testing**

#### 5.1 Test Your Website
1. Visit `https://yourdomain.com` (your GoDaddy domain)
2. Visit `https://www.yourdomain.com`
3. Both should show your website!

#### 5.2 Test Contact Form
1. Fill out the contact form on your website
2. Submit it
3. Check `swaraj890806@gmail.com` for the email
4. If you receive it, **everything is working!** 🎉

---

## 🔧 Troubleshooting

### Issue: "Domain not verified" in Vercel
**Solution**: 
- Wait 10-30 minutes for DNS propagation
- Check that DNS records in GoDaddy match exactly what Vercel shows
- Use https://dnschecker.org to verify DNS propagation

### Issue: Contact form not sending emails
**Solution**:
- Check Vercel environment variables are set correctly
- Make sure you used the Gmail App Password, not regular password
- Check Vercel function logs: Project → Deployments → Click deployment → Functions

### Issue: Website shows 404 error
**Solution**:
- Make sure `index.html` is in the root directory
- Redeploy from Vercel dashboard
- Check Vercel deployment logs for errors

### Issue: DNS changes not taking effect
**Solution**:
- DNS can take 24-48 hours to fully propagate
- Clear your browser cache (Ctrl + Shift + Delete)
- Try accessing from a different device or network
- Use incognito/private browsing mode

---

## 📊 Post-Deployment Checklist

After deployment, verify these:

- [ ] Website loads at your domain
- [ ] Website loads at www.yourdomain.com
- [ ] All pages work correctly
- [ ] Contact form sends emails
- [ ] All images load properly
- [ ] Mobile responsive design works
- [ ] All links work correctly
- [ ] SSL certificate is active (https://)

---

## 🔄 How to Update Your Website

When you make changes to your website:

```bash
# Make your changes to files
# Then commit and push to GitHub:

git add .
git commit -m "Description of your changes"
git push

# Vercel will automatically deploy the updates!
```

Vercel automatically redeploys whenever you push to GitHub. Updates typically take 1-2 minutes.

---

## 💰 Costs

- **Vercel Hosting**: FREE (Hobby plan)
- **GitHub**: FREE
- **GoDaddy Domain**: Already purchased by you
- **Total Monthly Cost**: $0 (except domain renewal)

---

## 🎯 Alternative: Deploy to Netlify (Option 2)

If you prefer Netlify instead of Vercel:

1. Go to https://netlify.com
2. Sign up with GitHub
3. Click "Add new site" → "Import an existing project"
4. Choose your GitHub repository
5. Add environment variables in Site settings → Environment variables
6. Deploy!
7. Connect domain in Site settings → Domain management

---

## 📞 Need Help?

If you encounter issues:

1. **Check Vercel Logs**: Project → Deployments → Click deployment → View logs
2. **Check DNS Propagation**: https://dnschecker.org
3. **Verify Environment Variables**: Vercel → Settings → Environment Variables
4. **Test Locally First**: Make sure everything works with `npm run start-server`

---

## 🎉 Congratulations!

Once deployed, your website will be:
- ✅ Live on the internet
- ✅ Accessible via your GoDaddy domain
- ✅ Automatically updated when you push to GitHub
- ✅ Secured with SSL (https)
- ✅ Fast and globally distributed
- ✅ Free to host!

---

**Your SmartLabProjects website is ready to serve customers worldwide!** 🚀
