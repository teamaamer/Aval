# EmailJS Setup Guide

This guide will help you set up EmailJS to send confirmation emails to both users and your admin team for all forms on the website.

## Prerequisites

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Verify your email address

## Step 1: Create an Email Service

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Click on **"Email Services"** in the left sidebar
3. Click **"Add New Service"**
4. Choose your email provider (Gmail, Outlook, etc.)
5. Follow the setup instructions for your provider
6. Note down your **Service ID** (e.g., `service_abc123`)

## Step 2: Get Your Public Key

1. In the EmailJS Dashboard, click on **"Account"** in the left sidebar
2. Go to the **"General"** tab
3. Find your **Public Key** (e.g., `abc123xyz`)
4. Copy this key

## Step 3: Create Email Templates

You need to create **4 email templates** - 2 for the contact form and 2 for the application form.

### Template 1: Contact Form - Admin Notification

1. Go to **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. Name it: `Contact Form - Admin Notification`
4. Set up the template:

**Subject:** New Contact Form Submission from {{from_name}}

**Content:**
```
Hello Admin,

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}

---
This is an automated message from your website contact form.
```

5. Save and note the **Template ID** (e.g., `template_contact_admin`)

### Template 2: Contact Form - User Confirmation

1. Create another new template
2. Name it: `Contact Form - User Confirmation`
3. Set up the template:

**Subject:** Thank you for contacting Aval - We've received your message

**Content:**
```
Hello {{to_name}},

Thank you for reaching out to us! We have received your message and will get back to you as soon as possible.

Your message:
{{message}}

Our team typically responds within 24-48 hours. If you have any urgent questions, please don't hesitate to call us.

Best regards,
The Aval Team

---
This is an automated confirmation email.
```

4. Save and note the **Template ID** (e.g., `template_contact_user`)

### Template 3: Application Form - Admin Notification

1. Create another new template
2. Name it: `Application Form - Admin Notification`
3. Set up the template:

**Subject:** New Student Application from {{applicant_name}}

**Content:**
```
Hello Admin,

You have received a new student application:

PERSONAL INFORMATION:
- Name: {{applicant_name}}
- Email: {{applicant_email}}
- Phone: {{applicant_phone}}
- Nationality: {{nationality}}

STUDY DETAILS:
- Desired Program: {{desired_program}}
- Study Level: {{study_level}}
- Intake: {{intake}}

SERVICES REQUESTED:
{{services_needed}}

ADDITIONAL INFORMATION:
{{additional_info}}

---
This is an automated message from your website application form.
```

4. Save and note the **Template ID** (e.g., `template_application_admin`)

### Template 4: Application Form - User Confirmation

1. Create another new template
2. Name it: `Application Form - User Confirmation`
3. Set up the template:

**Subject:** Application Received - Welcome to Aval!

**Content:**
```
Hello {{to_name}},

Thank you for submitting your application to study in Spain! We're excited to help you on your academic journey.

APPLICATION SUMMARY:
- Program: {{desired_program}}
- Study Level: {{study_level}}
- Intake: {{intake}}

NEXT STEPS:
1. Our admissions team will review your application within 2-3 business days
2. You will receive an email with next steps and required documents
3. We'll schedule a consultation call to discuss your study plans

If you have any questions in the meantime, please don't hesitate to contact us.

Best regards,
The Aval Team

---
This is an automated confirmation email.
```

4. Save and note the **Template ID** (e.g., `template_application_user`)

## Step 4: Configure Environment Variables

1. Create a `.env.local` file in your project root (if it doesn't exist)
2. Copy the contents from `.env.local.example`
3. Fill in your EmailJS credentials:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abc123xyz

# Template IDs for Contact Form
NEXT_PUBLIC_EMAILJS_CONTACT_ADMIN_TEMPLATE=template_contact_admin
NEXT_PUBLIC_EMAILJS_CONTACT_USER_TEMPLATE=template_contact_user

# Template IDs for Application Form
NEXT_PUBLIC_EMAILJS_APPLICATION_ADMIN_TEMPLATE=template_application_admin
NEXT_PUBLIC_EMAILJS_APPLICATION_USER_TEMPLATE=template_application_user
```

## Step 5: Update Admin Email Address

1. Open `lib/emailjs.ts`
2. Find the lines with `your-admin-email@example.com`
3. Replace with your actual admin email address (appears in 2 places)

```typescript
// Line ~42
to_email: 'admin@aval.com', // Replace with your admin email

// Line ~77
to_email: 'admin@aval.com', // Replace with your admin email
```

## Step 6: Test the Forms

1. Start your development server: `npm run dev`
2. Test the Contact Form:
   - Go to your contact page
   - Fill out the form with test data
   - Submit and verify you receive both emails (admin and user)
3. Test the Application Form:
   - Go to `/apply`
   - Complete all steps with test data
   - Submit and verify you receive both emails (admin and user)

## Troubleshooting

### Emails Not Sending

1. **Check Console for Errors**: Open browser DevTools and check for error messages
2. **Verify Environment Variables**: Make sure all IDs are correct in `.env.local`
3. **Check EmailJS Dashboard**: Go to "Auto Email" section to see if emails are being sent
4. **Email Provider Limits**: Free EmailJS accounts have a limit of 200 emails/month

### Template Variables Not Showing

1. Make sure variable names in templates match exactly (case-sensitive)
2. Check that you're using double curly braces: `{{variable_name}}`

### Emails Going to Spam

1. Add your domain to EmailJS allowed domains
2. Consider using a custom domain email instead of Gmail/Outlook
3. Ask recipients to whitelist your email address

## Email Limits

**Free Plan:**
- 200 emails per month
- 2 email services
- Unlimited templates

**Personal Plan ($7/month):**
- 1,000 emails per month
- Unlimited services
- Unlimited templates

## Security Notes

1. **Never commit `.env.local`** to git (it's already in `.gitignore`)
2. **Public Key is safe** to expose in client-side code (it's designed for that)
3. **Service ID and Template IDs** are also safe to expose
4. **Never expose your Private Key** (not used in this setup)

## Support

If you encounter issues:
1. Check [EmailJS Documentation](https://www.emailjs.com/docs/)
2. Visit [EmailJS Support](https://www.emailjs.com/support/)
3. Check the browser console for detailed error messages

## What Happens When Forms Are Submitted

### Contact Form
1. User fills out and submits the contact form
2. EmailJS sends an email to your admin with all contact details
3. EmailJS sends a confirmation email to the user
4. Success message is displayed to the user

### Application Form
1. User completes all 4 steps of the application
2. EmailJS sends a detailed email to your admin with all application data
3. EmailJS sends a welcome/confirmation email to the applicant
4. Success page is displayed with next steps

Both forms work entirely client-side through EmailJS - no backend API needed!
