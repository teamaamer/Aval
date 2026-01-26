import { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Aval Student Services",
};

export default function TermsPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <SectionHeading title="Terms of Service" centered />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-gray">
            <p className="text-muted-foreground mb-8">
              Last updated: January 2024
            </p>

            <h2>Agreement to Terms</h2>
            <p>
              By accessing and using the services of Aval Student Services, you agree
              to be bound by these Terms of Service. If you do not agree to these
              terms, please do not use our services.
            </p>

            <h2>Services</h2>
            <p>
              Aval Student Services provides educational consulting and support
              services for students seeking to study in Spain. Our services include
              but are not limited to:
            </p>
            <ul>
              <li>Student visa application assistance</li>
              <li>University admissions support</li>
              <li>Accommodation services</li>
              <li>Language courses</li>
              <li>Document translation and certification</li>
            </ul>

            <h2>Service Fees</h2>
            <p>
              Fees for our services vary depending on the specific services requested.
              All fees will be clearly communicated before you commit to any service.
              Payment terms and refund policies will be outlined in your service
              agreement.
            </p>

            <h2>Client Responsibilities</h2>
            <p>As a client, you agree to:</p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Submit required documents in a timely manner</li>
              <li>Respond to communications promptly</li>
              <li>Pay agreed-upon fees on time</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>

            <h2>Limitations of Liability</h2>
            <p>
              While we strive to provide excellent service, we cannot guarantee
              specific outcomes such as visa approvals or university admissions. Our
              liability is limited to the fees paid for our services.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              All content on our website, including text, graphics, logos, and
              software, is the property of Aval Student Services and protected by
              copyright laws.
            </p>

            <h2>Termination</h2>
            <p>
              We reserve the right to terminate or suspend services if you violate
              these terms or engage in fraudulent or illegal activities.
            </p>

            <h2>Governing Law</h2>
            <p>
              These terms are governed by the laws of Spain. Any disputes will be
              resolved in the courts of Madrid, Spain.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We may update these terms from time to time. Continued use of our
              services after changes constitutes acceptance of the new terms.
            </p>

            <h2>Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us at:
            </p>
            <p>
              Email: info@avalstudentservices.com
              <br />
              Phone: +34 123 456 789
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
