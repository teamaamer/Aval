import emailjs from '@emailjs/browser';

// EmailJS configuration
export const emailjsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
  
  // Template IDs for different forms
  templates: {
    // Contact form templates
    contactToAdmin: process.env.NEXT_PUBLIC_EMAILJS_CONTACT_ADMIN_TEMPLATE || '',
    contactToUser: process.env.NEXT_PUBLIC_EMAILJS_CONTACT_USER_TEMPLATE || '',
    
    // Application form templates
    applicationToAdmin: process.env.NEXT_PUBLIC_EMAILJS_APPLICATION_ADMIN_TEMPLATE || '',
    applicationToUser: process.env.NEXT_PUBLIC_EMAILJS_APPLICATION_USER_TEMPLATE || '',
  }
};

// Initialize EmailJS
export const initEmailJS = () => {
  if (emailjsConfig.publicKey) {
    emailjs.init(emailjsConfig.publicKey);
  }
};

// Send contact form emails (both to admin and user)
export const sendContactEmails = async (formData: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) => {
  try {
    // Send email to admin
    const adminResponse = await emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templates.contactToAdmin,
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        message: formData.message,
        to_email: 'info@avalservices.es',
        // Empty fields for application form (will be ignored in contact template)
        nationality: '',
        desired_program: '',
        study_level: '',
        intake: '',
        services_needed: '',
      }
    );

    // Send confirmation email to user
    const userResponse = await emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templates.contactToUser,
      {
        to_name: formData.name,
        to_email: formData.email,
        message: formData.message,
        // Empty fields for application form
        desired_program: '',
        study_level: '',
        intake: '',
      }
    );

    return {
      success: true,
      adminResponse,
      userResponse,
    };
  } catch (error) {
    console.error('EmailJS Error:', error);
    throw error;
  }
};

// Send application form emails (both to admin and user) - Uses same templates as contact form
export const sendApplicationEmails = async (formData: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  nationality: string;
  desiredProgram: string;
  studyLevel: string;
  intakeYear: string;
  intakeSemester: string;
  servicesNeeded: string[];
  additionalInfo?: string;
}) => {
  try {
    const fullName = `${formData.firstName} ${formData.lastName}`;
    const servicesText = formData.servicesNeeded.join(', ');

    // Send email to admin - using contact admin template
    const adminResponse = await emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templates.contactToAdmin,
      {
        from_name: fullName,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.additionalInfo || 'No additional information provided',
        to_email: 'info@avalservices.es',
        // Application-specific fields
        nationality: formData.nationality,
        desired_program: formData.desiredProgram,
        study_level: formData.studyLevel,
        intake: `${formData.intakeSemester} ${formData.intakeYear}`,
        services_needed: servicesText,
      }
    );

    // Send confirmation email to user - using contact user template
    const userResponse = await emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templates.contactToUser,
      {
        to_name: fullName,
        to_email: formData.email,
        message: `Thank you for applying! We'll review your application for ${formData.desiredProgram} and get back to you soon.`,
        // Application-specific fields
        desired_program: formData.desiredProgram,
        study_level: formData.studyLevel,
        intake: `${formData.intakeSemester} ${formData.intakeYear}`,
      }
    );

    return {
      success: true,
      adminResponse,
      userResponse,
    };
  } catch (error) {
    console.error('EmailJS Error:', error);
    throw error;
  }
};
