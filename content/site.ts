export const siteConfig = {
  name: "Aval Student Services",
  description: "A group of experienced, dedicated professionals committed to provide the best solution for students from all the world seeking educational institutions and allowing them to study in universities in Spain.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://avalstudentservices.com",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+34123456789",
  email: "info@avalstudentservices.com",
  phone: "+34 123 456 789",
  address: "Avinguda del Cardenal Benlloch, 93, bajo, El Llano del Real, 46021 València, Valencia, Spain",
  hours: "Monday - Friday: 9:00 AM - 6:00 PM",
  social: {
    facebook: "https://facebook.com/avalstudentservices",
    instagram: "https://instagram.com/avalstudentservices",
    twitter: "https://twitter.com/avalstudent",
    linkedin: "https://linkedin.com/company/avalstudentservices",
  },
};

export const navigation = [
  { name: "Home", href: "/" },
  { name: "Apply Now", href: "/apply" },
  { name: "Our Services", href: "/services" },
  { name: "Universities", href: "/universities" },
  { name: "About", href: "/about" },
];

export const footerLinks = {
  services: [
    { name: "Student Visa", href: "/services/student-visa" },
    { name: "University Admissions", href: "/services/university-admissions" },
    { name: "Spanish Language Courses", href: "/services/spanish-language-courses" },
    { name: "Student Health Insurance", href: "/services/student-health-insurance" },
    { name: "Accommodation", href: "/services/accommodation" },
    { name: "Residence Permit", href: "/services/residence-permit" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Universities", href: "/universities" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export const stats = [
  {
    title: "Population",
    description: "Second largest country in Western Europe and fifth most populated: 504,645 km² and 49,153,849 inhabitants",
    icon: "Users",
  },
  {
    title: "Tourism",
    description: "Spain welcomed 94 million international tourists in 2024, a 10% increase compared to 2023, marking the country's best year for tourism",
    icon: "Plane",
  },
  {
    title: "Heritage",
    description: "No. 3 in the world and no. 2 in Europe with regards to the number of UNESCO World Heritage Sites: 45 declared",
    icon: "Landmark",
  },
  {
    title: "Health",
    description: "Spain has a high-quality healthcare system and strong public health standards, supporting a safe student experience.",
    icon: "Heart",
  },
];

export const howItWorks = [
  {
    step: 1,
    title: "Consultation",
    description: "Book a free consultation to discuss your study goals and requirements.",
  },
  {
    step: 2,
    title: "Document Preparation",
    description: "We guide you through gathering and preparing all necessary documents.",
  },
  {
    step: 3,
    title: "Application & Submission",
    description: "We handle your university applications and visa submissions professionally.",
  },
  {
    step: 4,
    title: "Arrival Support",
    description: "From airport pickup to accommodation, we ensure a smooth transition to Spain.",
  },
];

export const testimonials = [
  {
    name: "Shatha Arafat",
    country: "",
    program: "",
    text: "I highly recommend Aval Students Service to anyone planning to study in Spain. They supported me through every step of the registration process—from certifying my documents all the way to securing my university acceptance. They were always available to answer my questions and any concerns i have.",
    rating: 5,
    image: undefined,
  },
  {
    name: "Hamad Al Jazi",
    country: "",
    program: "",
    text: "I received excellent support from AVAL Student Services. The team was responsive, professional, and went above and beyond to help me resolve my issue quickly. I truly appreciate their dedication and highly recommend their services to all students.",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a-/ALV-UjV6GcE05CGcHIGs0E1QHRkUtUKhLstpwJ8VUn-mLF2QtT2JE-GA=w58-h58-p-rp-mo-br100",
  },
  {
    name: "Qais Hammouri",
    country: "",
    program: "",
    text: "An absolutely wonderful experience dealing with AVAL. Everything went smoothly and easily, as they helped me secure a PhD admission to one of the prestigious universities in Spain. I thank the AVAL team for their cooperation, kindness, professionalism, and punctuality.",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a-/ALV-UjVmi9xAx-Ry1IvaLJQ312msC8A28ATFtGeyr42JFHdu2XRJw4nU=w58-h58-p-rp-mo-br100",
  },
];

export const faqs = [
  {
    question: "How long does the visa application process take?",
    answer: "The student visa process typically takes 4-8 weeks from the time you submit your complete application. We recommend starting the process at least 3 months before your intended start date to allow time for document preparation and any unforeseen delays.",
  },
  {
    question: "What documents do I need to study in Spain?",
    answer: "Essential documents include: valid passport, university acceptance letter, proof of financial means, health insurance, background check certificate, and academic transcripts. We provide a complete checklist and guide you through obtaining each document.",
  },
  {
    question: "Do I need to speak Spanish to study in Spain?",
    answer: "It depends on your program. Many universities offer programs in English, especially at the master's level. However, learning Spanish is highly recommended for daily life and integration. We offer Spanish language courses to help you prepare.",
  },
  {
    question: "How much does it cost to study in Spain?",
    answer: "Costs vary by university and program. Public universities typically charge €1,000-€3,500 per year for bachelor's programs, while private universities range from €6,000-€20,000. Living expenses average €800-€1,200 per month depending on the city.",
  },
  {
    question: "Can I work while studying in Spain?",
    answer: "Yes, international students can work up to 20 hours per week during term time and full-time during holidays. You'll need to obtain a work permit, which we can help you with once you arrive in Spain.",
  },
  {
    question: "How do I contact Aval Student Services?",
    answer: "You can reach us via our contact form, WhatsApp, email, or phone. We typically respond within 24 hours on business days. For urgent matters, WhatsApp is the fastest way to reach our team.",
  },
];
