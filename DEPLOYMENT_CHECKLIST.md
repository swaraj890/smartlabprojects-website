# 🚀 Deployment Quick Checklist

Use this checklist to deploy your website step by step.

---

## ✅ Pre-Deployment Checklist

- [ ] Email functionality is working locally (✅ Already done!)
- [ ] All files are in the project folder
- [ ] `.gitignore` file exists
- [ ] `vercel.json` file created

---

## 📝 Step-by-Step Deployment

### **STEP 1: Create GitHub Account & Repository**

- [ ] Go to https://github.com and create account
- [ ] Create new repository: `smartlabprojects-website`
- [ ] Keep the page open (you'll need the repository URL)

### **STEP 2: Push Code to GitHub**

Open terminal in your project folder and run:

```bash
git init
git add .
git commit -m "Initial commit - SmartLabProjects website"
git remote add origin https://github.com/YOUR_USERNAME/smartlabprojects-website.git
git branch -M main
git push -u origin main
```

- [ ] Code pushed to GitHub successfully
- [ ] Verify files are visible on GitHub

### **STEP 3: Deploy to Vercel**

- [ ] Go to https://vercel.com
- [ ] Sign up with GitHub account
- [ ] Click "Add New..." → "Project"
- [ ] Import your `smartlabprojects-website` repository
- [ ] Click "Deploy" (don't change any settings yet)
- [ ] Wait for deployment to complete
- [ ] Copy the Vercel URL (e.g., `smartlabprojects.vercel.app`)

### **STEP 4: Add Environment Variables**

In Vercel → Settings → Environment Variables, add:

- [ ] `SMTP_HOST` = `smtp.gmail.com`
- [ ] `SMTP_PORT` = `587`
- [ ] `SMTP_USER` = `smartlab.inquiry@gmail.com`
- [ ] `SMTP_PASS` = Your Gmail App Password (16 characters)
- [ ] `TO_EMAIL` = `swaraj890806@gmail.com`
- [ ] `FROM_EMAIL` = `smartlab.inquiry@gmail.com`

After adding variables:
- [ ] Click "Redeploy" in Vercel

### **STEP 5: Test on Vercel URL**

- [ ] Visit your Vercel URL (e.g., `smartlabprojects.vercel.app`)
- [ ] Website loads correctly
- [ ] All pages work
- [ ] Test contact form
- [ ] Check email arrives at `swaraj890806@gmail.com`

### **STEP 6: Connect GoDaddy Domain**

In Vercel:
- [ ] Go to Settings → Domains
- [ ] Enter your GoDaddy domain (e.g., `smartlabprojects.com`)
- [ ] Click "Add"
- [ ] **Write down** the DNS records Vercel shows you

In GoDaddy:
- [ ] Go to https://dnsmanagement.godaddy.com
- [ ] Log in to your account
- [ ] Find your domain → Click "DNS"

Update DNS Records:
- [ ] Edit A record: Name = `@`, Value = Vercel's IP address
- [ ] Edit CNAME record: Name = `www`, Value = `cname.vercel-dns.com`
- [ ] Save changes

### **STEP 7: Wait for DNS Propagation**

- [ ] Wait 10-30 minutes
- [ ] Check https://dnschecker.org with your domain
- [ ] Vercel shows domain as verified (✅ checkmark)

### **STEP 8: Final Testing**

- [ ] Visit `https://yourdomain.com`
- [ ] Visit `https://www.yourdomain.com`
- [ ] Both URLs load your website
- [ ] SSL certificate is active (https with lock icon)
- [ ] Test contact form on live domain
- [ ] Receive email at `swaraj890806@gmail.com`

---

## 🎉 Deployment Complete!

If all checkboxes are checked, your website is live! 🚀

---

## 📞 Quick Reference

### Your Configuration:
- **GitHub Repo**: `https://github.com/YOUR_USERNAME/smartlabprojects-website`
- **Vercel URL**: `https://smartlabprojects.vercel.app` (or similar)
- **Your Domain**: Your GoDaddy domain
- **Email From**: `smartlab.inquiry@gmail.com`
- **Email To**: `swaraj890806@gmail.com`

### Important Links:
- **Vercel Dashboard**: https://vercel.com/dashboard
- **GitHub**: https://github.com
- **GoDaddy DNS**: https://dnsmanagement.godaddy.com
- **DNS Checker**: https://dnschecker.org

---

## 🔄 How to Update Website

When you make changes:

```bash
git add .
git commit -m "Your update description"
git push
```

Vercel will automatically redeploy! (Takes 1-2 minutes)

---

## ❓ Need Help?

See `DEPLOYMENT_GUIDE.md` for detailed troubleshooting and instructions.
