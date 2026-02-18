"use client";

import { useTranslations } from 'next-intl';
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { CTASection } from "@/components/cta-section";
import { services } from "@/content/services";

export default function ServicesPage() {
  const t = useTranslations();
  const beforeArrival = services.filter((s) => s.category === "before-arrival");
  const onArrival = services.filter((s) => s.category === "on-arrival");
  const settlingIn = services.filter((s) => s.category === "settling-in");

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <SectionHeading
            title={t('servicesPage.title')}
            subtitle={t('servicesPage.subtitle')}
            centered
          />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4 text-center">
              {t('serviceCategories.beforeArrival')}
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('serviceCategories.beforeArrivalDesc')}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {beforeArrival.map((service, index) => (
                <ServiceCard
                  key={service.slug}
                  title={t(`services.items.${service.slug}.title`)}
                  description={t(`services.items.${service.slug}.description`)}
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
              {t('serviceCategories.onArrival')}
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('serviceCategories.onArrivalDesc')}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {onArrival.map((service, index) => (
                <ServiceCard
                  key={service.slug}
                  title={t(`services.items.${service.slug}.title`)}
                  description={t(`services.items.${service.slug}.description`)}
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
              {t('serviceCategories.settlingIn')}
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('serviceCategories.settlingInDesc')}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {settlingIn.map((service, index) => (
                <ServiceCard
                  key={service.slug}
                  title={t(`services.items.${service.slug}.title`)}
                  description={t(`services.items.${service.slug}.description`)}
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
        title={t('servicesPage.ctaTitle')}
        description={t('servicesPage.ctaDescription')}
        primaryButtonText={t('servicesPage.ctaPrimary')}
        primaryButtonHref="/apply"
        secondaryButtonText={t('servicesPage.ctaSecondary')}
        secondaryButtonHref="/contact"
      />
    </>
  );
}
