import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Target, Eye, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Aval Student Services - 8 years of helping students achieve their dreams of studying in Spain.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About Aval Student Services
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                For 8 years, we&apos;ve been helping students from around the world
                achieve their dreams of studying in Spain. Our experienced team of
                professionals is dedicated to providing comprehensive support at
                every step of your journey.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We understand that studying abroad is a life-changing decision, and
                we&apos;re here to make the process as smooth and stress-free as
                possible.
              </p>
              <Button asChild size="lg">
                <Link href="/apply">Start Your Journey</Link>
              </Button>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
                alt="Students collaborating"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-lg font-semibold mb-4">
                  We seek to become leaders in providing distinguished and
                  innovative student services
                </p>
                <p className="text-muted-foreground">
                  We are aiming to enhance student success and achieve their
                  academic and professional ambitions. We envision a world where
                  every student can access the best education opportunities
                  regardless of their geographical location or financial status, and
                  we strive to make this vision a reality through our dedicated
                  services.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-6">
                  <Target className="h-6 w-6 text-secondary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg font-semibold mb-4">
                  Providing innovative and effective educational programs
                </p>
                <p className="text-muted-foreground">
                  Providing innovative and effective educational programs to enhance
                  student achievement and develop their academic skills. We are
                  committed to providing the best possible service while fully
                  maintaining privacy. Our mission is to empower students by
                  providing comprehensive support and guidance, enabling them to
                  navigate the complexities of international education and achieve
                  their aspirations with confidence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Why Choose Aval?"
            subtitle="What sets us apart from other student service providers"
            centered
            className="mb-12"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">8 Years of Experience</h3>
                <p className="text-muted-foreground">
                  Nearly a decade of successfully helping students achieve their
                  study abroad dreams in Spain.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Personalized Support
                </h3>
                <p className="text-muted-foreground">
                  Every student receives individual attention and customized
                  guidance based on their unique needs and goals.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">End-to-End Service</h3>
                <p className="text-muted-foreground">
                  From initial consultation to settling in Spain, we support you at
                  every stage of your journey.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">High Success Rate</h3>
                <p className="text-muted-foreground">
                  Over 95% of our students successfully obtain their visas and
                  university admissions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
                <p className="text-muted-foreground">
                  Our team consists of experienced professionals who understand both
                  Spanish education and international student needs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Transparent Pricing</h3>
                <p className="text-muted-foreground">
                  No hidden fees or surprises. We provide clear pricing and
                  comprehensive service packages.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to start your Spanish education journey?"
        description="Join hundreds of successful students who trusted us with their dreams"
        primaryButtonText="Book a Free Consultation"
        primaryButtonHref="/apply"
        secondaryButtonText="View Our Services"
        secondaryButtonHref="/services"
      />
    </>
  );
}
