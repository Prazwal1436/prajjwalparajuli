# 📧 Email Integration Setup Guide

## 🚀 **Option 1: EmailJS (Recommended - Easiest)**

### Step 1: Install EmailJS
```bash
npm install @emailjs/browser
```

### Step 2: Setup EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Create free account (1000 emails/month)
3. Add email service (Gmail, Outlook, etc.)
4. Create email template
5. Get your keys

### Step 3: Configure Template
Create template with these variables:
- `{{from_name}}`
- `{{from_email}}`
- `{{subject}}`
- `{{service}}`
- `{{message}}`
- `{{to_email}}`

### Step 4: Update Contact.tsx
Replace the placeholders in the EmailJS section:
```typescript
await emailjs.send(
  'service_xxxxxxx',    // Your Service ID
  'template_xxxxxxx',   // Your Template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    service: formData.service,
    message: formData.message,
    to_email: 'contact@prajjwalparajuli.com.np'
  },
  'your_public_key'     // Your Public Key
);
```

---

## 🛠️ **Option 2: Next.js API Route + Nodemailer**

### Step 1: Install Dependencies
```bash
npm install nodemailer
npm install -D @types/nodemailer
```

### Step 2: Setup Environment Variables
Create `.env.local`:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_APP_PASSWORD=your-app-password
```

### Step 3: Create API Route
Create `app/api/contact/route.ts`:
```typescript
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, email, subject, message, service } = await request.json();
  
  const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD
    }
  });
  
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'contact@prajjwalparajuli.com.np',
      replyTo: email,
      subject: `New Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Contact Form Submission</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Service:</strong> ${service || 'Not specified'}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #2563eb;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
        </div>
      `
    });
    
    return Response.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
```

### Step 4: Update Contact.tsx
Uncomment the API route section in `handleSubmit`.

---

## 📝 **Option 3: Formspree (Simple)**

### Step 1: Setup Formspree
1. Go to [Formspree.io](https://formspree.io/)
2. Create account (50 submissions/month free)
3. Create new form
4. Get your form endpoint

### Step 2: Update Contact.tsx
Replace `YOUR_FORM_ID` with your Formspree form ID:
```typescript
const response = await fetch('https://formspree.io/f/xwpe123x', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

---

## 🔧 **Gmail App Password Setup**

If using Gmail with Nodemailer:

1. Enable 2-Factor Authentication
2. Go to Google Account Settings
3. Security → 2-Step Verification → App passwords
4. Generate app password for "Mail"
5. Use this password in `EMAIL_APP_PASSWORD`

---

## 🎯 **Recommendation**

**For Your Use Case:** EmailJS is perfect because:
- ✅ No backend required
- ✅ Free tier (1000 emails/month)
- ✅ Easy setup
- ✅ Reliable delivery
- ✅ Email templates
- ✅ Spam protection

**Setup Priority:**
1. EmailJS (5 minutes setup)
2. Formspree (if you want simplicity)
3. API Route (if you want full control)

Choose EmailJS for the best balance of simplicity and functionality!