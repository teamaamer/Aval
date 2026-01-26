import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { GraduationCap, MapPin, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Universities in Spain",
  description: "Explore top universities in Spain. We help you find and apply to the perfect institution for your academic goals.",
};

export default function UniversitiesPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Universities in Spain"
            subtitle="Discover world-class education opportunities across Spain"
            centered
          />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Spain&apos;s Higher Education System
              </h2>
              <p className="text-muted-foreground mb-4">
                Spain&apos;s higher education sector comprises 89 universities, with 50
                public and 39 private institutions. Spanish universities are
                globally recognized for their academic excellence and innovative
                programs.
              </p>
              <p className="text-muted-foreground mb-6">
                From historic institutions like the University of Salamanca (one of
                the oldest in the world) to modern business schools, Spain offers
                diverse educational opportunities for international students.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-primary mb-2">89</div>
                    <p className="text-sm text-muted-foreground">
                      Total Universities
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-primary mb-2">50</div>
                    <p className="text-sm text-muted-foreground">
                      Public Universities
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop"
                alt="Spanish university campus"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Popular Study Destinations
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  city: "Madrid",
                  description:
                    "Spain's capital offers prestigious universities and vibrant student life",
                  universities: "15+ universities",
                },
                {
                  city: "Barcelona",
                  description:
                    "Innovative programs in a cosmopolitan Mediterranean city",
                  universities: "12+ universities",
                },
                {
                  city: "Valencia",
                  description:
                    "Affordable education with excellent quality of life",
                  universities: "8+ universities",
                },
                {
                  city: "Seville",
                  description:
                    "Rich cultural heritage and historic academic institutions",
                  universities: "6+ universities",
                },
                {
                  city: "Salamanca",
                  description:
                    "Home to one of the world's oldest universities",
                  universities: "4+ universities",
                },
                {
                  city: "Granada",
                  description:
                    "Beautiful setting with strong international student community",
                  universities: "5+ universities",
                },
              ].map((destination, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-semibold">{destination.city}</h3>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      {destination.description}
                    </p>
                    <p className="text-sm text-primary font-medium">
                      {destination.universities}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Popular Fields of Study
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: GraduationCap,
                  field: "Business & Management",
                  description: "Top-ranked business schools and MBA programs",
                },
                {
                  icon: Award,
                  field: "Engineering",
                  description: "Cutting-edge technology and research facilities",
                },
                {
                  icon: Users,
                  field: "Arts & Humanities",
                  description: "Rich cultural programs and language studies",
                },
                {
                  icon: GraduationCap,
                  field: "Medicine & Health",
                  description: "World-class medical education and training",
                },
              ].map((field, index) => {
                const Icon = field.icon;
                return (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">{field.field}</h3>
                      <p className="text-sm text-muted-foreground">
                        {field.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">
                  Need Help Choosing a University?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Our expert team will help you find the perfect university based on
                  your academic goals, budget, and preferences. We handle the entire
                  application process from start to finish.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link href="/apply">Book a Free Consultation</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/services/university-admissions">
                      Learn About Our Admissions Service
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <CTASection
        title="Start your application today"
        description="Let us help you navigate the university application process"
        primaryButtonText="Apply Now"
        primaryButtonHref="/apply"
        secondaryButtonText="Contact Us"
        secondaryButtonHref="/contact"
      />
    </>
  );
}
