import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    console.log("Application submission:", body);

    // Store application data (implement based on your database)
    // Example: Save to database, send to CRM, etc.

    // Send notification email to admin
    // if (process.env.SENDGRID_API_KEY) {
    //   const sgMail = require('@sendgrid/mail');
    //   sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    //   await sgMail.send({
    //     to: process.env.ADMIN_EMAIL,
    //     from: process.env.CONTACT_EMAIL,
    //     subject: `New Application: ${body.firstName} ${body.lastName}`,
    //     html: `
    //       <h2>New Student Application</h2>
    //       <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
    //       <p><strong>Email:</strong> ${body.email}</p>
    //       <p><strong>Phone:</strong> ${body.phone}</p>
    //       <p><strong>Nationality:</strong> ${body.nationality}</p>
    //       <p><strong>Program:</strong> ${body.desiredProgram}</p>
    //       <p><strong>Study Level:</strong> ${body.studyLevel}</p>
    //       <p><strong>Intake:</strong> ${body.intakeSemester} ${body.intakeYear}</p>
    //       <p><strong>Services Needed:</strong> ${body.servicesNeeded?.join(', ')}</p>
    //       ${body.additionalInfo ? `<p><strong>Additional Info:</strong> ${body.additionalInfo}</p>` : ''}
    //     `,
    //   });
    // }

    // Send confirmation email to applicant
    // if (process.env.SENDGRID_API_KEY) {
    //   await sgMail.send({
    //     to: body.email,
    //     from: process.env.CONTACT_EMAIL,
    //     subject: 'Application Received - Aval Student Services',
    //     html: `
    //       <h2>Thank you for your application!</h2>
    //       <p>Dear ${body.firstName},</p>
    //       <p>We have received your application to study in Spain. Our team will review your information and contact you within 24-48 hours.</p>
    //       <p>In the meantime, feel free to reach out if you have any questions.</p>
    //       <p>Best regards,<br>Aval Student Services Team</p>
    //     `,
    //   });
    // }

    return NextResponse.json(
      { message: "Application submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Application submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 }
    );
  }
}
