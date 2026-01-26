import { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { CTASection } from "@/components/cta-section";
import { services, serviceCategories } from "@/content/services";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Comprehensive student services for studying in Spain - from visa applications to accommodation and beyond.",
};

export default function ServicesPage() {
  const beforeArrival = services.filter((s) => s.category === "before-arrival");
  const onArrival = services.filter((s) => s.category === "on-arrival");
  const settlingIn = services.filter((s) => s.category === "settling-in");

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive support for every stage of your journey to studying in Spain"
            centered
          />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4 text-center">
              {serviceCategories["before-arrival"].title}
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              {serviceCategories["before-arrival"].description}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {beforeArrival.map((service, index) => (
                <ServiceCard
                  key={service.slug}
                  title={service.title}
                  description={service.shortDescription}
                  iconName={service.iconName}
                  href={`/services/${service.slug}`}
                  index={index}
                  image={service.image}
                />
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4 text-center">
              {serviceCategories["on-arrival"].title}
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              {serviceCategories["on-arrival"].description}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {onArrival.map((service, index) => (
                <ServiceCard
                  key={service.slug}
                  title={service.title}
                  description={service.shortDescription}
                  iconName={service.iconName}
                  href={`/services/${service.slug}`}
                  index={index}
                  image={service.image}
                />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-center">
              {serviceCategories["settling-in"].title}
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              {serviceCategories["settling-in"].description}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {settlingIn.map((service, index) => (
                <ServiceCard
                  key={service.slug}
                  title={service.title}
                  description={service.shortDescription}
                  iconName={service.iconName}
                  href={`/services/${service.slug}`}
                  index={index}
                  image={service.image}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to get started?"
        description="Book a free consultation to discuss your study plans"
        primaryButtonText="Book a Free Consultation"
        primaryButtonHref="/apply"
        secondaryButtonText="Contact Us"
        secondaryButtonHref="/contact"
      />
    </>
  );
}
