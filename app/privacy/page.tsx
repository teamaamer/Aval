import { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Aval Student Services",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <SectionHeading title="Privacy Policy" centered />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-gray">
            <p className="text-muted-foreground mb-8">
              Last updated: January 2024
            </p>

            <h2>Introduction</h2>
            <p>
              Aval Student Services (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to
              protecting your privacy. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you use our website
              and services.
            </p>

            <h2>Information We Collect</h2>
            <p>We collect information that you provide directly to us, including:</p>
            <ul>
              <li>Personal identification information (name, email, phone number)</li>
              <li>Academic information (desired program, study level, qualifications)</li>
              <li>Nationality and passport information</li>
              <li>Communication preferences</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Process your applications and service requests</li>
              <li>Communicate with you about our services</li>
              <li>Provide customer support</li>
              <li>Send you updates and promotional materials (with your consent)</li>
              <li>Improve our services and website</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We do not sell your personal information. We may share your information
              with:
            </p>
            <ul>
              <li>Universities and educational institutions you apply to</li>
              <li>Service providers who assist us in our operations</li>
              <li>Legal authorities when required by law</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect
              your personal information against unauthorized access, alteration,
              disclosure, or destruction.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Withdraw consent at any time</li>
            </ul>

            <h2>Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to improve your
              experience on our website. You can control cookies through your browser
              settings.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
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
