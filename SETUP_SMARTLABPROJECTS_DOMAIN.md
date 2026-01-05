# 🌐 DNS Setup for smartlabprojects.com

## ✅ Your Domain: smartlabprojects.com

---

## 📋 **Step-by-Step Instructions**

### **STEP 1: Add Domain in Vercel**

1. Go to: https://vercel.com/dashboard
2. Click your project: **smartlabprojects-website**
3. Click **"Settings"** → **"Domains"**
4. In the text box, type: `smartlabprojects.com`
5. Click **"Add"**
6. Vercel will show you DNS records - **write them down!**

---

### **STEP 2: Update DNS in GoDaddy**

#### **A. Go to GoDaddy DNS Management**

1. Visit: https://dnsmanagement.godaddy.com
2. Log in to your GoDaddy account
3. Find **smartlabprojects.com**
4. Click **"DNS"** button

#### **B. Update A Record (for smartlabprojects.com)**

Look for the **A record** where Name = **@**

**What to change:**
- **Type**: A (don't change)
- **Name**: @ (don't change)
- **Value** (or Data or Points to): Change to Vercel's IP
- **TTL**: Change to **600** seconds (or 10 minutes)

**How to edit:**
1. Click the **pencil icon** or click on the row
2. Find the field with an IP address (might be called "Value", "Data", or "Points to")
3. Replace the old IP with Vercel's IP (Vercel will show you this)
4. Set TTL to 600
5. Click **Save**

**If you can't find "Points to":**
- Look for **"Value"** field
- Or **"Data"** field
- Or **"IPv4 Address"** field
- This is where you put Vercel's IP!

#### **C. Update CNAME Record (for www.smartlabprojects.com)**

Look for the **CNAME record** where Name = **www**

**What to change:**
- **Type**: CNAME (don't change)
- **Name**: www (don't change)
- **Value** (or Points to): Change to `cname.vercel-dns.com`
- **TTL**: Change to **600** seconds

**How to edit:**
1. Click the **pencil icon** or click on the row
2. Find the field (might be called "Value", "Data", or "Points to")
3. Replace with: `cname.vercel-dns.com`
4. Set TTL to 600
5. Click **Save**

---

### **STEP 3: If Records Don't Exist - Create Them**

#### **Create A Record:**
1. Click **"Add"** or **"Add Record"** button
2. Fill in:
   - **Type**: Select **A**
   - **Name**: Type **@**
   - **Value/Data**: Type the IP from Vercel
   - **TTL**: Type **600** or select **10 minutes**
3. Click **Save**

#### **Create CNAME Record:**
1. Click **"Add"** or **"Add Record"** button
2. Fill in:
   - **Type**: Select **CNAME**
   - **Name**: Type **www**
   - **Value/Data**: Type `cname.vercel-dns.com`
   - **TTL**: Type **600** or select **10 minutes**
3. Click **Save**

---

## 📊 **Summary of DNS Records**

After updating, your DNS should look like this:

| Type | Name | Value/Points to | TTL |
|------|------|-----------------|-----|
| A | @ | [Vercel's IP from dashboard] | 600 |
| CNAME | www | cname.vercel-dns.com | 600 |

---

## ⏰ **Wait for DNS Propagation**

After saving:
1. Wait **10-30 minutes** (sometimes up to 24 hours)
2. Check propagation: https://dnschecker.org
   - Enter: `smartlabprojects.com`
   - Select: A record
   - Click Search
3. Go back to Vercel → Settings → Domains
4. Wait for ✅ checkmark next to your domain

---

## ✅ **Test Your Domain**

Once Vercel shows the domain as verified:

1. Visit: `https://smartlabprojects.com`
2. Visit: `https://www.smartlabprojects.com`

Both should show your website! 🎉

---

## 🔧 **Troubleshooting GoDaddy DNS**

### Can't Find "Points to" Field?

**Look for these alternative names:**
- **Value** ← Most common in GoDaddy
- **Data**
- **IPv4 Address**
- **Address**
- **Target**

### Can't Edit the Record?

**Try this:**
1. Click directly on the IP address or value
2. It might become editable
3. OR click the pencil icon on the right side
4. OR click three dots (...) → Edit

### Still Can't Find It?

**Use the "Delete and Recreate" method:**
1. Delete the existing A record
2. Click "Add" to create a new one
3. Fill in all the details fresh

---

## 🎯 **Quick Checklist**

- [ ] Added `smartlabprojects.com` in Vercel → Settings → Domains
- [ ] Copied the IP address Vercel shows
- [ ] Logged into GoDaddy DNS management
- [ ] Found the A record (Name = @)
- [ ] Changed Value/Data to Vercel's IP
- [ ] Set TTL to 600 seconds
- [ ] Saved the A record
- [ ] Found the CNAME record (Name = www)
- [ ] Changed Value/Data to `cname.vercel-dns.com`
- [ ] Set TTL to 600 seconds
- [ ] Saved the CNAME record
- [ ] Waiting for DNS propagation
- [ ] Checked https://dnschecker.org
- [ ] Vercel shows domain as verified ✅
- [ ] Tested https://smartlabprojects.com
- [ ] Tested https://www.smartlabprojects.com

---

## 📞 **Need Help?**

If you're stuck on the GoDaddy interface:

1. **Tell me what you see:**
   - What field names do you see?
   - Can you click on the A record?
   - What happens when you click it?

2. **Try the direct link:**
   - https://dnsmanagement.godaddy.com/smartlabprojects.com/dns

3. **Check nameservers:**
   - Make sure you're using GoDaddy's nameservers
   - Not custom nameservers

---

## 🎉 **After Success**

Once your domain is working:

✅ **smartlabprojects.com** → Your website  
✅ **www.smartlabprojects.com** → Your website  
✅ **Contact form** → Sends emails to swaraj890806@gmail.com  
✅ **HTTPS** → Automatic SSL certificate  
✅ **Fast loading** → Global CDN  

**Your SmartLabProjects website will be fully live!** 🚀

---

**Start with STEP 1: Add `smartlabprojects.com` in Vercel to get the IP address!**
