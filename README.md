# SmartLabProjects - Academic Project Solutions (https://www.smartlabprojects.com/)

🚀 **Where Creativity Meets Code**

A professional website for SmartLabProjects - delivering innovative, industry-ready projects, documentation, and mentorship for students and professionals.

---

## 🌟 Features

- **Modern Design**: Beautiful, responsive UI with smooth animations
- **Project Portfolio**: Showcase of 50+ projects across multiple domains
- **Contact Form**: Integrated email functionality for customer inquiries
- **Domain Filtering**: Interactive project filtering by technology domain
- **Project Details**: Detailed view for each project with pricing
- **Pricing Plans**: Transparent pricing with multiple tiers
- **Mobile Responsive**: Works perfectly on all devices

---

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js, Express
- **Email**: Nodemailer with Gmail SMTP
- **Deployment**: Vercel (Serverless)
- **Version Control**: Git & GitHub

---

## 📁 Project Structure

```
Lp_v1/
├── index.html              # Main landing page
├── project-list.html       # Full project listing page
├── project-details.html    # Individual project details
├── main.js                 # Main JavaScript logic
├── projects.js             # Project data
├── contact.js              # Contact information
├── formFields.js           # Form field configurations
├── floating.js             # Floating animations
├── projects-section.css    # Project section styles
├── prices.json             # Pricing data
├── server.js               # Local development server
├── api/
│   └── contact.js          # Serverless contact form handler
├── config/
│   └── social.js           # Social media links
├── .env                    # Environment variables (not in Git)
├── .gitignore              # Git ignore rules
├── vercel.json             # Vercel configuration
└── package.json            # Node.js dependencies
```

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js installed
- Gmail account with App Password

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/smartlabprojects-website.git
   cd smartlabprojects-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   TO_EMAIL=your-email@gmail.com
   FROM_EMAIL=your-email@gmail.com
   ```

4. **Start the development server**
   ```bash
   npm run start-server
   ```

5. **Open in browser**
   - Open `index.html` in your browser
   - Server runs on `http://localhost:3000`

---

## 📧 Email Configuration

The contact form uses Gmail SMTP. You need to:

1. Enable 2-Step Verification on your Google Account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Add the App Password to your `.env` file

See `EMAIL_SETUP_GUIDE.md` for detailed instructions.

---

## 🌐 Deployment

This project is configured for deployment on Vercel. (https://www.smartlabprojects.com/)

### Quick Deployment Steps:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push
   ```

2. **Deploy to Vercel**
   - Go to https://vercel.com
   - Import your GitHub repository
   - Add environment variables
   - Deploy!

3. **Connect your domain**
   - Add your domain in Vercel settings
   - Update DNS records in your domain provider

See `START_HERE_DEPLOYMENT.md` for step-by-step deployment guide.

---

## 📚 Documentation

- **`START_HERE_DEPLOYMENT.md`** - Simple deployment guide (start here!)
- **`DEPLOYMENT_GUIDE.md`** - Detailed deployment instructions
- **`DEPLOYMENT_CHECKLIST.md`** - Deployment checklist
- **`EMAIL_SETUP_GUIDE.md`** - Email configuration guide
- **`QUICK_START.md`** - Quick start guide for email setup

---

## 🎯 Project Domains

- Artificial Intelligence (AI)
- Machine Learning (ML)
- Deep Learning (DL)
- Computer Vision (CV)
- Natural Language Processing (NLP)
- Web Development
- Cybersecurity
- IoT/Hardware
- Data Science
- Blockchain
- Cloud Computing

---

## 💰 Pricing

- **Basic Plan**: ₹2,500 - Standard implementation with basic documentation
- **Premium Plan**: ₹6,000 - Includes IEEE paper, PPT, and mentorship
- **Custom Plan**: ₹10,000 - Full custom solution with deployment support

---

## 🔒 Security

- Environment variables stored in `.env` (not committed to Git)
- Gmail App Passwords used (not regular passwords)
- SSL/TLS encryption for email transmission
- HTTPS enabled on deployment

---

## 🤝 Contributing

This is a private project for SmartLabProjects. For inquiries, contact through the website.

---

## 📞 Contact

- **Email**: smartlab.inquiry@gmail.com
- **Phone**: +91 7008490090 / 9439768099
- **Website**: Your deployed domain

---

## 📄 License

© 2025 SmartLabProjects. All Rights Reserved.

---

## 🙏 Acknowledgments

- Built with modern web technologies
- Deployed on Vercel
- Email powered by Gmail SMTP
- Icons by Font Awesome

---

**Made with ❤️ by SmartLabProjects Team**
