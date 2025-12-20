# 🎯 Simple Deployment Steps - Start Here!

Follow these steps in order. Copy and paste the commands exactly as shown.

---

## 🚀 STEP 1: Install Git (If Not Already Installed)

Check if Git is installed:
```bash
git --version
```

If you see a version number, skip to STEP 2.

If not, download Git from: https://git-scm.com/download/win
- Install with default settings
- Restart your terminal

---

## 📦 STEP 2: Prepare Your Project

Run these commands in your project folder:

```bash
# Check if Git is initialized
git status
```

If you see "not a git repository", run:
```bash
git init
```

---

## 🌐 STEP 3: Create GitHub Account

1. Go to: https://github.com
2. Click "Sign up"
3. Choose a username (remember this!)
4. Complete registration
5. Verify your email

---

## 📁 STEP 4: Create GitHub Repository

1. On GitHub, click the **"+"** icon (top right)
2. Click **"New repository"**
3. Fill in:
   - Repository name: `smartlabprojects-website`
   - Description: `SmartLabProjects Website`
   - Select: **Public**
   - **DO NOT** check any boxes
4. Click **"Create repository"**
5. **Keep this page open!**

---

## 💻 STEP 5: Push Your Code to GitHub

**IMPORTANT**: Replace `YOUR_USERNAME` with your actual GitHub username!

Copy and paste these commands ONE BY ONE:

```bash
# Add all files
git add .
```

```bash
# Commit files
git commit -m "Initial commit - SmartLabProjects website"
```

```bash
# Add GitHub repository (REPLACE YOUR_USERNAME!)
git remote add origin https://github.com/YOUR_USERNAME/smartlabprojects-website.git
```

```bash
# Set main branch
git branch -M main
```

```bash
# Push to GitHub
git push -u origin main
```

**When prompted:**
- Enter your GitHub username
- Enter your GitHub password (or personal access token)

**Verify**: Go to your GitHub repository page and refresh - you should see all your files!

---

## ☁️ STEP 6: Deploy to Vercel

### 6.1 Create Vercel Account
1. Go to: https://vercel.com
2. Click **"Sign Up"**
3. Click **"Continue with GitHub"**
4. Click **"Authorize Vercel"**

### 6.2 Import Your Project
1. On Vercel dashboard, click **"Add New..."** → **"Project"**
2. You'll see your `smartlabprojects-website` repository
3. Click **"Import"** next to it

### 6.3 Configure (IMPORTANT!)
1. **Framework Preset**: Leave as "Other"
2. Click **"Environment Variables"** (expand it)
3. Add these variables ONE BY ONE:

**Variable 1:**
- Name: `SMTP_HOST`
- Value: `smtp.gmail.com`
- Click "Add"

**Variable 2:**
- Name: `SMTP_PORT`
- Value: `587`
- Click "Add"

**Variable 3:**
- Name: `SMTP_USER`
- Value: `smartlab.inquiry@gmail.com`
- Click "Add"

**Variable 4:**
- Name: `SMTP_PASS`
- Value: `YOUR_GMAIL_APP_PASSWORD` (the 16-character one, no spaces)
- Click "Add"

**Variable 5:**
- Name: `TO_EMAIL`
- Value: `swaraj890806@gmail.com`
- Click "Add"

**Variable 6:**
- Name: `FROM_EMAIL`
- Value: `smartlab.inquiry@gmail.com`
- Click "Add"

### 6.4 Deploy!
1. Click **"Deploy"**
2. Wait 1-2 minutes
3. You'll see "Congratulations!" with a URL
4. Click **"Visit"** to see your website
5. **Copy the URL** (e.g., `https://smartlabprojects.vercel.app`)

### 6.5 Test Your Website
1. Visit the Vercel URL
2. Scroll to the contact form
3. Fill it out and submit
4. Check `swaraj890806@gmail.com` for the email
5. If you receive it, **continue to STEP 7!**

---

## 🌍 STEP 7: Connect Your GoDaddy Domain

### 7.1 Get DNS Records from Vercel
1. In Vercel, click your project
2. Click **"Settings"** (top menu)
3. Click **"Domains"** (left sidebar)
4. Type your GoDaddy domain (e.g., `smartlabprojects.com`)
5. Click **"Add"**
6. Vercel will show DNS records - **WRITE THESE DOWN:**

Example:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Keep this page open!**

### 7.2 Update GoDaddy DNS
1. Go to: https://account.godaddy.com
2. Log in
3. Click **"My Products"**
4. Find your domain
5. Click **"DNS"** button next to it

### 7.3 Update A Record
1. Find the row with Type = **"A"** and Name = **"@"**
2. Click the **pencil icon** (Edit)
3. Change **"Points to"** to the IP from Vercel (e.g., `76.76.21.21`)
4. Set **TTL** to `600 seconds`
5. Click **"Save"**

### 7.4 Update CNAME Record
1. Find the row with Type = **"CNAME"** and Name = **"www"**
2. Click the **pencil icon** (Edit)
3. Change **"Points to"** to `cname.vercel-dns.com`
4. Set **TTL** to `600 seconds`
5. Click **"Save"**

**If you don't see these records, create them:**
1. Click **"Add"** button
2. Select the type (A or CNAME)
3. Fill in the details from Vercel
4. Click **"Save"**

### 7.5 Wait for DNS Propagation
1. Wait **10-30 minutes**
2. Go back to Vercel → Settings → Domains
3. You'll see a ✅ checkmark when it's ready
4. Check https://dnschecker.org with your domain

---

## 🎉 STEP 8: Final Test

1. Visit `https://yourdomain.com` (your GoDaddy domain)
2. Visit `https://www.yourdomain.com`
3. Both should show your website!
4. Test the contact form
5. Check your email

**If everything works - YOU'RE DONE!** 🎊

---

## 📝 Summary of What You Did

1. ✅ Created GitHub account and repository
2. ✅ Pushed your code to GitHub
3. ✅ Created Vercel account
4. ✅ Deployed website to Vercel
5. ✅ Added environment variables
6. ✅ Connected GoDaddy domain
7. ✅ Updated DNS records
8. ✅ Website is LIVE!

---

## 🔄 How to Update Your Website Later

When you make changes to your website:

```bash
git add .
git commit -m "Updated website"
git push
```

Vercel will automatically redeploy in 1-2 minutes!

---

## ❓ Having Issues?

### Issue: Git push asks for password
**Solution**: Use a Personal Access Token instead of password
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Give it a name, select "repo" scope
4. Copy the token
5. Use this token as your password when pushing

### Issue: Domain not working after 30 minutes
**Solution**: 
1. Check DNS records in GoDaddy match exactly what Vercel shows
2. Wait up to 24 hours for full propagation
3. Clear browser cache (Ctrl + Shift + Delete)

### Issue: Contact form not working on live site
**Solution**:
1. Check environment variables in Vercel are correct
2. Redeploy from Vercel dashboard
3. Check Vercel function logs for errors

---

## 📞 Need More Help?

See `DEPLOYMENT_GUIDE.md` for detailed troubleshooting.

---

**Good luck with your deployment!** 🚀
