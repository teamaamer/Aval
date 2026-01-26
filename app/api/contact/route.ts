import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    console.log("Contact form submission:", { name, email, phone, message });

    // Option 1: Simple mailto fallback (client-side)
    // This is handled on the client side

    // Option 2: Send via email service (implement based on your provider)
    // Example with SendGrid:
    // if (process.env.SENDGRID_API_KEY) {
    //   const sgMail = require('@sendgrid/mail');
    //   sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    //   await sgMail.send({
    //     to: process.env.CONTACT_EMAIL,
    //     from: process.env.CONTACT_EMAIL,
    //     subject: `New Contact Form Submission from ${name}`,
    //     text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
    //     html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Message:</strong></p><p>${message}</p>`,
    //   });
    // }

    // Example with Resend:
    // if (process.env.RESEND_API_KEY) {
    //   const { Resend } = require('resend');
    //   const resend = new Resend(process.env.RESEND_API_KEY);
    //   await resend.emails.send({
    //     from: process.env.CONTACT_EMAIL,
    //     to: process.env.ADMIN_EMAIL,
    //     subject: `New Contact Form Submission from ${name}`,
    //     html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Message:</strong></p><p>${message}</p>`,
    //   });
    // }

    // For now, just log and return success
    // In production, implement actual email sending above

    return NextResponse.json(
      { message: "Contact form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to submit contact form" },
      { status: 500 }
    );
  }
}
