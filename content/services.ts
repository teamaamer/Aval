export type ServiceCategory = "before-arrival" | "on-arrival" | "settling-in";

export interface Service {
  title: string;
  slug: string;
  category: ServiceCategory;
  shortDescription: string;
  iconName: string;
  image?: string;
  longDescription: string;
  bullets: string[];
  requirements: string[];
  timelineSteps: { title: string; description: string; duration: string }[];
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    title: "Student Visa",
    slug: "student-visa",
    category: "before-arrival",
    shortDescription: "Complete visa application support from documentation to approval.",
    iconName: "FileText",
    image: "/student-visa-1536x996.jpg",
    longDescription: "Navigating the Spanish student visa process can be complex. We provide end-to-end support, ensuring all your documents are correctly prepared and submitted. Our experienced team has helped hundreds of students successfully obtain their visas.",
    bullets: [
      "Complete document checklist and preparation guidance",
      "Application form assistance and review",
      "Appointment scheduling at Spanish consulate",
      "Interview preparation and tips",
      "Application tracking and follow-up",
      "Express processing options when available",
    ],
    requirements: [
      "Valid passport (minimum 6 months validity)",
      "University acceptance letter",
      "Proof of financial means (bank statements)",
      "Health insurance certificate",
      "Background check certificate",
      "Passport-sized photographs",
      "Completed visa application form",
    ],
    timelineSteps: [
      {
        title: "Initial Consultation",
        description: "We assess your situation and provide a personalized visa roadmap.",
        duration: "Day 1",
      },
      {
        title: "Document Preparation",
        description: "Gather and prepare all required documents with our guidance.",
        duration: "Week 1-2",
      },
      {
        title: "Application Submission",
        description: "Submit your application at the Spanish consulate with our support.",
        duration: "Week 3",
      },
      {
        title: "Processing & Follow-up",
        description: "We track your application and handle any additional requests.",
        duration: "Week 4-8",
      },
      {
        title: "Visa Collection",
        description: "Receive your approved visa and prepare for departure.",
        duration: "Week 8-10",
      },
    ],
    faqs: [
      {
        question: "How long is the student visa valid?",
        answer: "Student visas are typically issued for the duration of your program, up to one year initially. You can renew your residence permit in Spain for subsequent years.",
      },
      {
        question: "Can my family accompany me on a student visa?",
        answer: "Yes, family reunification is possible after you've been in Spain for one year. We can guide you through this process when the time comes.",
      },
      {
        question: "What if my visa application is rejected?",
        answer: "Rejections are rare when applications are properly prepared. If it happens, we'll help you understand the reasons and reapply with corrections. Our success rate is over 95%.",
      },
    ],
  },
  {
    title: "Spanish Language Courses",
    slug: "spanish-language-courses",
    category: "before-arrival",
    shortDescription: "Learn Spanish before and during your studies in Spain.",
    iconName: "Languages",
    image: "/language-courses-1536x996.jpg",
    longDescription: "Master Spanish with our comprehensive language courses designed specifically for international students. Whether you're a complete beginner or looking to improve your fluency, we offer flexible programs to fit your needs.",
    bullets: [
      "Online and in-person course options",
      "Beginner to advanced levels (A1-C2)",
      "Small class sizes for personalized attention",
      "Certified instructors with teaching experience",
      "Cultural immersion activities included",
      "Official DELE exam preparation",
    ],
    requirements: [
      "No prior Spanish knowledge required for beginner courses",
      "Placement test for intermediate/advanced levels",
      "Reliable internet connection for online courses",
      "Commitment to attend classes regularly",
    ],
    timelineSteps: [
      {
        title: "Level Assessment",
        description: "Take a placement test to determine your current level.",
        duration: "Day 1",
      },
      {
        title: "Course Selection",
        description: "Choose the program that fits your schedule and goals.",
        duration: "Day 2-3",
      },
      {
        title: "Enrollment",
        description: "Complete registration and receive course materials.",
        duration: "Day 4-5",
      },
      {
        title: "Learning Journey",
        description: "Attend classes and practice with native speakers.",
        duration: "4-12 weeks",
      },
      {
        title: "Certification",
        description: "Receive your course completion certificate.",
        duration: "Final week",
      },
    ],
    faqs: [
      {
        question: "Do I need to know Spanish to study in Spain?",
        answer: "Many programs are offered in English, but knowing Spanish greatly enhances your experience and opens more opportunities. We recommend at least basic Spanish proficiency.",
      },
      {
        question: "How long does it take to become conversational?",
        answer: "With consistent study, most students reach conversational level (B1) in 6-9 months. Intensive courses can accelerate this timeline.",
      },
      {
        question: "Are the courses recognized officially?",
        answer: "Yes, our courses are aligned with the Common European Framework (CEFR) and we offer DELE exam preparation for official certification.",
      },
    ],
  },
  {
    title: "University Admissions",
    slug: "university-admissions",
    category: "before-arrival",
    shortDescription: "Expert guidance through the university application process.",
    iconName: "GraduationCap",
    image: "/university-admissons.jpg",
    longDescription: "Gain admission to top Spanish universities with our expert guidance. We help you identify the best programs for your goals, prepare compelling applications, and navigate the entire admissions process from start to finish.",
    bullets: [
      "University and program selection consultation",
      "Application strategy and timeline planning",
      "Personal statement and essay review",
      "Academic credential evaluation and translation",
      "Application submission and tracking",
      "Scholarship and funding guidance",
    ],
    requirements: [
      "High school diploma or bachelor's degree (depending on program level)",
      "Academic transcripts and certificates",
      "Language proficiency proof (Spanish or English)",
      "Letters of recommendation",
      "Personal statement or motivation letter",
      "CV/Resume",
    ],
    timelineSteps: [
      {
        title: "Profile Assessment",
        description: "Evaluate your academic background and career goals.",
        duration: "Week 1",
      },
      {
        title: "University Selection",
        description: "Identify the best-fit universities and programs.",
        duration: "Week 2",
      },
      {
        title: "Application Preparation",
        description: "Prepare all documents and essays with our guidance.",
        duration: "Week 3-6",
      },
      {
        title: "Submission",
        description: "Submit applications before deadlines.",
        duration: "Week 7",
      },
      {
        title: "Acceptance & Enrollment",
        description: "Receive offers and complete enrollment procedures.",
        duration: "Week 8-12",
      },
    ],
    faqs: [
      {
        question: "When should I start the application process?",
        answer: "We recommend starting 6-9 months before your intended start date. Application deadlines vary by university and program, typically falling between January and May for September intake.",
      },
      {
        question: "Can you guarantee admission?",
        answer: "While we cannot guarantee admission, our expert guidance significantly improves your chances. We have a strong track record with over 90% of our students receiving offers from their preferred universities.",
      },
      {
        question: "Do you help with scholarship applications?",
        answer: "Yes, we provide information about available scholarships and assist with scholarship applications to help make your education more affordable.",
      },
    ],
  },
  {
    title: "Sworn Translations",
    slug: "sworn-translations",
    category: "before-arrival",
    shortDescription: "Official certified translations for all your legal documents.",
    iconName: "FileCheck",
    image: "/sworn-translations.jpg",
    longDescription: "Get your documents officially translated by certified translators recognized by Spanish authorities. Our sworn translations are legally valid for visa applications, university admissions, and all official procedures.",
    bullets: [
      "Certified sworn translators",
      "Legally recognized translations",
      "Fast turnaround times",
      "All document types accepted",
      "Apostille service coordination",
      "Digital and physical copies provided",
    ],
    requirements: [
      "Original documents or certified copies",
      "Clear scans/photos if submitting digitally",
      "Specify target language (Spanish, English, etc.)",
      "Intended use of the translation",
    ],
    timelineSteps: [
      {
        title: "Document Submission",
        description: "Send us your documents for translation.",
        duration: "Day 1",
      },
      {
        title: "Quote & Confirmation",
        description: "Receive a quote and timeline estimate.",
        duration: "Day 1",
      },
      {
        title: "Translation",
        description: "Certified translator works on your documents.",
        duration: "Day 2-5",
      },
      {
        title: "Quality Check",
        description: "Review and certification of the translation.",
        duration: "Day 6",
      },
      {
        title: "Delivery",
        description: "Receive your sworn translation with official seal.",
        duration: "Day 7",
      },
    ],
    faqs: [
      {
        question: "What documents need sworn translation?",
        answer: "Typically: birth certificates, academic transcripts, diplomas, police clearance certificates, marriage certificates, and any legal documents required for visa or university applications.",
      },
      {
        question: "Is sworn translation the same as notarized translation?",
        answer: "Sworn translation is performed by officially certified translators and carries legal weight in Spain. It's more specific and recognized than general notarized translations.",
      },
      {
        question: "Do I need apostille as well?",
        answer: "Often yes, especially for documents from non-EU countries. We can coordinate apostille services for you.",
      },
    ],
  },
  {
    title: "Student Health Insurance",
    slug: "student-health-insurance",
    category: "before-arrival",
    shortDescription: "Comprehensive health insurance coverage for international students.",
    iconName: "Heart",
    image: "/student-health-insurance.jpg",
    longDescription: "Stay protected with comprehensive health insurance that meets Spanish visa requirements. We offer affordable plans with extensive coverage, ensuring you have access to quality healthcare throughout your studies.",
    bullets: [
      "Meets Spanish visa requirements",
      "Comprehensive medical coverage",
      "Emergency and hospitalization coverage",
      "Repatriation coverage included",
      "No waiting period",
      "Easy claims process",
    ],
    requirements: [
      "Valid passport copy",
      "Proof of enrollment or acceptance letter",
      "Duration of coverage needed",
      "Personal information (name, date of birth, address)",
    ],
    timelineSteps: [
      {
        title: "Plan Selection",
        description: "Choose the insurance plan that fits your needs.",
        duration: "Day 1",
      },
      {
        title: "Application",
        description: "Complete the insurance application form.",
        duration: "Day 1",
      },
      {
        title: "Payment",
        description: "Process payment for your chosen plan.",
        duration: "Day 2",
      },
      {
        title: "Policy Issuance",
        description: "Receive your insurance certificate and policy details.",
        duration: "Day 3",
      },
    ],
    faqs: [
      {
        question: "Is health insurance mandatory for student visa?",
        answer: "Yes, comprehensive health insurance is a mandatory requirement for Spanish student visa applications. The coverage must meet specific minimum requirements.",
      },
      {
        question: "Can I use Spain's public healthcare?",
        answer: "International students can access public healthcare, but private insurance is still required for the visa. Many students prefer private insurance for shorter wait times and English-speaking services.",
      },
      {
        question: "What does the insurance cover?",
        answer: "Our plans cover medical consultations, hospitalization, emergency care, prescription medications, diagnostic tests, and repatriation. Specific coverage details vary by plan.",
      },
    ],
  },
  {
    title: "Residence Permit",
    slug: "residence-permit",
    category: "settling-in",
    shortDescription: "Assistance with obtaining and renewing your residence permit.",
    iconName: "IdCard",
    image: "/redience.jpg",
    longDescription: "Navigate the Spanish bureaucracy with ease. We guide you through obtaining your TIE (Tarjeta de Identidad de Extranjero) and help with renewals, ensuring you maintain legal residence throughout your studies.",
    bullets: [
      "TIE application assistance",
      "Appointment scheduling at immigration office",
      "Document preparation and review",
      "Accompaniment to appointments (optional)",
      "Renewal reminders and support",
      "NIE number assistance",
    ],
    requirements: [
      "Valid passport with student visa",
      "Proof of enrollment",
      "Proof of address in Spain",
      "Health insurance certificate",
      "Passport-sized photographs",
      "Application fees",
    ],
    timelineSteps: [
      {
        title: "Arrival in Spain",
        description: "You must apply for TIE within 30 days of arrival.",
        duration: "Day 1-30",
      },
      {
        title: "Document Preparation",
        description: "Gather all required documents with our guidance.",
        duration: "Week 1",
      },
      {
        title: "Appointment Booking",
        description: "Schedule appointment at immigration office.",
        duration: "Week 2",
      },
      {
        title: "Application Submission",
        description: "Submit application at immigration office.",
        duration: "Week 3-4",
      },
      {
        title: "Card Collection",
        description: "Collect your TIE card (usually 4-6 weeks after application).",
        duration: "Week 8-10",
      },
    ],
    faqs: [
      {
        question: "What's the difference between NIE and TIE?",
        answer: "NIE is your foreigner identification number, while TIE is the physical residence card that contains your NIE. You need both for legal residence in Spain.",
      },
      {
        question: "How long is the residence permit valid?",
        answer: "Initial student residence permits are typically valid for one year. You can renew them annually for the duration of your studies.",
      },
      {
        question: "What happens if I don't apply within 30 days?",
        answer: "Late application can result in fines and complications. We help ensure you meet all deadlines to avoid penalties.",
      },
    ],
  },
  {
    title: "Foundation Year",
    slug: "foundation-year",
    category: "before-arrival",
    shortDescription: "Preparatory program to bridge the gap to Spanish university education.",
    iconName: "BookOpen",
    image: "/foundation-year.jpg",
    longDescription: "Not quite ready for direct university entry? Our foundation year program prepares international students for success in Spanish universities through intensive academic and language preparation.",
    bullets: [
      "Academic skills development",
      "Intensive Spanish language training",
      "Subject-specific preparation",
      "University application support",
      "Cultural orientation and integration",
      "Guaranteed progression to partner universities",
    ],
    requirements: [
      "High school diploma or equivalent",
      "Basic English proficiency",
      "Motivation to study in Spain",
      "No Spanish language requirement (we'll teach you)",
    ],
    timelineSteps: [
      {
        title: "Application",
        description: "Apply for the foundation year program.",
        duration: "3-6 months before",
      },
      {
        title: "Acceptance",
        description: "Receive acceptance and prepare for arrival.",
        duration: "2-3 months before",
      },
      {
        title: "Foundation Year",
        description: "Complete intensive academic and language preparation.",
        duration: "9-12 months",
      },
      {
        title: "University Application",
        description: "Apply to universities with our support.",
        duration: "During foundation year",
      },
      {
        title: "University Entry",
        description: "Progress to your chosen degree program.",
        duration: "Following September",
      },
    ],
    faqs: [
      {
        question: "Who needs a foundation year?",
        answer: "Students whose qualifications don't directly meet Spanish university entry requirements, or those who need to improve their Spanish language skills before starting a degree program.",
      },
      {
        question: "Is the foundation year recognized?",
        answer: "Yes, our foundation year is recognized by partner universities and provides guaranteed progression pathways to degree programs.",
      },
      {
        question: "Can I skip the foundation year?",
        answer: "If you meet direct entry requirements (academic qualifications and language proficiency), you can apply directly to universities without a foundation year.",
      },
    ],
  },
  {
    title: "Academic Equivalency",
    slug: "academic-equivalency",
    category: "before-arrival",
    shortDescription: "Homologation service to validate your foreign qualifications in Spain.",
    iconName: "Award",
    image: "/academic-equivalency.jpg",
    longDescription: "Homologation is the process by which the Spanish Ministry of Education recognizes that your secondary school or university qualifications are equivalent to Spanish qualifications. This is often required for university admission and professional practice.",
    bullets: [
      "Complete homologation application support",
      "Document preparation and translation",
      "Ministry submission and tracking",
      "Credential evaluation guidance",
      "Alternative pathways if needed",
      "Fast-track options when available",
    ],
    requirements: [
      "Original academic certificates and transcripts",
      "Sworn translations of all documents",
      "Apostille on original documents",
      "Passport copy",
      "Completed application forms",
      "Application fees",
    ],
    timelineSteps: [
      {
        title: "Initial Assessment",
        description: "Evaluate your qualifications and determine requirements.",
        duration: "Week 1",
      },
      {
        title: "Document Preparation",
        description: "Obtain translations, apostilles, and prepare application.",
        duration: "Week 2-4",
      },
      {
        title: "Submission",
        description: "Submit application to Ministry of Education.",
        duration: "Week 5",
      },
      {
        title: "Processing",
        description: "Ministry reviews your application (can take several months).",
        duration: "3-12 months",
      },
      {
        title: "Resolution",
        description: "Receive homologation certificate.",
        duration: "Final stage",
      },
    ],
    faqs: [
      {
        question: "Do I need homologation to study in Spain?",
        answer: "It depends on your program and university. Many universities accept foreign qualifications directly, but some programs (especially regulated professions) require official homologation.",
      },
      {
        question: "How long does homologation take?",
        answer: "The process typically takes 3-12 months, depending on the type of qualification and current processing times at the Ministry of Education.",
      },
      {
        question: "What if my qualifications aren't fully equivalent?",
        answer: "The Ministry may grant partial equivalency or require additional coursework. We'll help you understand your options and find the best pathway forward.",
      },
    ],
  },
  {
    title: "Accommodation",
    slug: "accommodation",
    category: "settling-in",
    shortDescription: "Safe, comfortable housing options near your university.",
    iconName: "Home",
    image: "/accommendation.jpg",
    longDescription: "All accommodation options provided by Aval are thoroughly vetted to ensure they meet our high standards for safety, comfort, and convenience. We help you find the perfect place to call home during your studies in Spain.",
    bullets: [
      "Student residences and shared apartments",
      "Homestay with Spanish families",
      "Private studios and apartments",
      "Near university campuses",
      "Verified landlords and properties",
      "Flexible lease terms",
    ],
    requirements: [
      "University acceptance or enrollment proof",
      "Preferred location and budget",
      "Move-in date",
      "Duration of stay",
      "Any specific preferences or requirements",
    ],
    timelineSteps: [
      {
        title: "Consultation",
        description: "Discuss your preferences and budget.",
        duration: "1-2 months before",
      },
      {
        title: "Property Search",
        description: "We identify suitable accommodation options.",
        duration: "2-3 weeks",
      },
      {
        title: "Virtual Tours",
        description: "View properties via video calls or photos.",
        duration: "1 week",
      },
      {
        title: "Booking",
        description: "Secure your accommodation with deposit.",
        duration: "2-4 weeks before arrival",
      },
      {
        title: "Move-in",
        description: "We assist with check-in and settling in.",
        duration: "Arrival day",
      },
    ],
    faqs: [
      {
        question: "When should I start looking for accommodation?",
        answer: "We recommend starting your search 2-3 months before your arrival, especially for September intake when demand is highest.",
      },
      {
        question: "What's included in the rent?",
        answer: "This varies by property. Some include utilities (water, electricity, internet), while others charge separately. We'll clarify all costs upfront.",
      },
      {
        question: "Can I view the accommodation before booking?",
        answer: "We provide virtual tours for international students. If you're already in Spain, we can arrange in-person viewings.",
      },
    ],
  },
  {
    title: "Other Services",
    slug: "other-services",
    category: "settling-in",
    shortDescription: "Additional support services for your academic and personal success.",
    iconName: "MoreHorizontal",
    image: "/other-1.jpg",
    longDescription: "Beyond our core services, we offer comprehensive support for various academic and administrative needs. From airport pickup to expert academic solutions, we're here to help you succeed in every aspect of your Spanish education journey.",
    bullets: [
      "Airport Pickup (Valencia and Madrid) - Safe and reliable transportation from the airport to your accommodation",
      "CV/Resume Writing - Professional, ATS-friendly designs that highlight your achievements",
      "Research Assistance - Navigating complex academic projects with comprehensive support throughout your research journey, ensuring clarity, depth, and academic rigor",
      "Proofreading & Editing - Ensure your work is error-free and impactful. Our editing services go beyond grammar to improve flow, clarity, and tone",
      "Motivation Letters & Statements of Purpose - Your grades show what you know, but your motivation letter shows who you are. We help you craft a compelling narrative that proves to the admissions committee why you are the perfect candidate for their program",
      "Expert Academic Solutions for all your needs",
    ],
    requirements: [
      "Varies by specific service needed",
      "Contact us to discuss your requirements",
    ],
    timelineSteps: [
      {
        title: "Consultation",
        description: "Discuss your specific needs with our team.",
        duration: "Day 1",
      },
      {
        title: "Service Planning",
        description: "We create a customized support plan.",
        duration: "Day 2-3",
      },
      {
        title: "Implementation",
        description: "Receive the support services you need.",
        duration: "Varies",
      },
      {
        title: "Follow-up",
        description: "Ongoing support as needed.",
        duration: "Ongoing",
      },
    ],
    faqs: [
      {
        question: "Do you offer services not listed on your website?",
        answer: "Yes! We provide many additional services based on student needs. Contact us to discuss any specific requirements you have.",
      },
      {
        question: "What cities do you provide airport pickup service?",
        answer: "We currently provide airport pickup services in Valencia and Madrid. Contact us if you need pickup from other locations.",
      },
      {
        question: "Do you provide ongoing support after arrival?",
        answer: "Yes, we remain available to assist you throughout your studies in Spain. Many of our students stay in touch for years.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return services.filter((service) => service.category === category);
}

export const serviceCategories = {
  "before-arrival": {
    title: "Before You Arrive",
    description: "Essential services to prepare for your journey to Spain",
  },
  "on-arrival": {
    title: "When You Arrive",
    description: "Support services for your first days in Spain",
  },
  "settling-in": {
    title: "Settling In",
    description: "Ongoing support to help you thrive in Spain",
  },
};
