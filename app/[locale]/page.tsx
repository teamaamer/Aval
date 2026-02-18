"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { FAQAccordion } from "@/components/faq-accordion";
import { StatsGrid } from "@/components/stats-grid";
import { WaveBackground } from "@/components/wave-background";
import { LogoCarousel } from "@/components/logo-carousel";
import { ContactForm } from "@/components/contact-form";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { services, getServicesByCategory } from "@/content/services";
import { stats, howItWorks, testimonials, faqs, siteConfig } from "@/content/site";

export default function HomePage() {
  const t = useTranslations();
  const beforeArrivalServices = getServicesByCategory("before-arrival");
  const onArrivalServices = getServicesByCategory("on-arrival");
  const settlingInServices = getServicesByCategory("settling-in");

  const handleWhatsApp = () => {
    if (typeof window !== "undefined") {
      window.open(
        `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`,
        "_blank"
      );
    }
  };

  return (
    <>
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 lg:pt-36 lg:pb-20 overflow-hidden bg-background min-h-[calc(100vh-80px)]">
        <WaveBackground />
        <div className="container mx-auto px-4 h-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-yellow-400 dark:bg-yellow-500 rounded-full" style={{ border: '2px solid #DC2626' }}>
                <p className="text-sm font-medium text-red-600 dark:text-red-900">{t('hero.badge')}</p>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-heading leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button asChild size="lg" className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white shadow-lg">
                  <Link href="/apply">
                    {t('nav.bookConsultation')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-amber-500 text-amber-600 hover:bg-amber-50 dark:border-amber-600 dark:text-amber-500 dark:hover:bg-amber-950">
                  <Link href="/services">{t('nav.services')}</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[350px] md:h-[450px] lg:h-[500px] border border-border">
                <Image
                  src="/hero-image.png"
                  alt="Students studying in Spain"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <Card className="absolute -bottom-3 -left-3 md:-bottom-6 md:-left-6 bg-red-600 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer" style={{ border: '2px solid #FACC15' }}>
                <CardContent className="p-3 md:p-6">
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-yellow-400 flex items-center justify-center transition-transform duration-300 group-hover:rotate-12">
                      <CheckCircle2 className="h-4 w-4 md:h-6 md:w-6 text-red-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-xs md:text-sm text-white">{t('hero.badge')}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="absolute -top-3 -right-3 md:-top-6 md:-right-6 bg-red-600 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer" style={{ border: '2px solid #FACC15' }}>
                <CardContent className="p-2 md:p-4">
                  <span id='iasBadge' data-account-id='7021'></span>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <LogoCarousel />

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            title={t('howItWorks.title')}
            subtitle={t('howItWorks.subtitle')}
            centered
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((stepNum) => (
              <Card key={stepNum} className="relative hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="absolute -top-4 left-6 w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-red-500 text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-red-500/30">
                    {stepNum}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 mt-4">{t(`howItWorks.step${stepNum}.title`)}</h3>
                  <p className="text-muted-foreground">{t(`howItWorks.step${stepNum}.description`)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title={t('testimonials.title')}
            subtitle={t('testimonials.subtitle')}
            centered
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[0, 1, 2].map((index) => (
              <TestimonialCard
                key={index}
                name={t(`testimonials.items.${index}.name`)}
                country=""
                program=""
                text={t(`testimonials.items.${index}.text`)}
                rating={5}
                index={index}
                image={index === 1 ? "https://lh3.googleusercontent.com/a-/ALV-UjV6GcE05CGcHIGs0E1QHRkUtUKhLstpwJ8VUn-mLF2QtT2JE-GA=w58-h58-p-rp-mo-br100" : index === 2 ? "https://lh3.googleusercontent.com/a-/ALV-UjVmi9xAx-Ry1IvaLJQ312msC8A28ATFtGeyr42JFHdu2XRJw4nU=w58-h58-p-rp-mo-br100" : undefined}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            title={t('services.title')}
            subtitle={t('services.subtitle')}
            centered
            className="mb-12"
          />
          
          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center text-red-600">{t('serviceCategories.beforeArrival')}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {beforeArrivalServices.slice(0, 6).map((service, index) => (
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
              <h3 className="text-2xl font-semibold mb-6 text-center" style={{ color: '#F4C042' }}>{t('serviceCategories.onArrival')}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {onArrivalServices.map((service, index) => (
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
              <h3 className="text-2xl font-semibold mb-6 text-center">{t('serviceCategories.settlingIn')}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {settlingInServices.map((service, index) => (
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

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/services">{t('serviceCategories.viewAll')}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <SectionHeading
            title={t('studyInSpain.title')}
            subtitle={t('studyInSpain.subtitle')}
            centered
            className="mb-12"
          />
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">{t('studyInSpain.whySpain.title')}</h3>
                <p className="text-muted-foreground mb-6">
                  {t('studyInSpain.whySpain.paragraph1')}
                </p>
                <p className="text-muted-foreground">
                  {t('studyInSpain.whySpain.paragraph2')}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">{t('studyInSpain.universities.title')}</h3>
                <p className="text-muted-foreground mb-6">
                  {t('studyInSpain.universities.description')}
                </p>
                <Button asChild>
                  <Link href="/apply">
                    {t('studyInSpain.universities.cta')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title={t('spainByNumbers.title')}
            subtitle={t('spainByNumbers.subtitle')}
            centered
            className="mb-12"
          />
          <StatsGrid stats={[0, 1, 2, 3].map(i => ({
            title: t(`stats.items.${i}.title`),
            description: t(`stats.items.${i}.description`),
            icon: t(`stats.items.${i}.icon`)
          }))} />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">{t('visionMission.vision.title')}</h3>
                <p className="text-muted-foreground">
                  {t('visionMission.vision.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">{t('visionMission.mission.title')}</h3>
                <p className="text-muted-foreground">
                  {t('visionMission.mission.description')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title={t('faq.title')}
              subtitle={t('faq.subtitle')}
              centered
              className="mb-12"
            />
            <FAQAccordion faqs={[0, 1, 2, 3, 4, 5].map(i => ({
              question: t(`faq.items.${i}.question`),
              answer: t(`faq.items.${i}.answer`)
            }))} />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title={t('contact.title')}
            subtitle={t('contact.subtitle')}
            centered
            className="mb-12"
          />
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{t('contact.email')}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {t('contact.emailDesc')}
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-primary hover:underline"
                >
                  {siteConfig.email}
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{t('contact.call')}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {t('contact.callDesc')}
                </p>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-sm text-primary hover:underline"
                >
                  {siteConfig.phone}
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-xl bg-green-600/10 flex items-center justify-center mb-4">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">{t('contact.whatsapp')}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {t('contact.whatsappDesc')}
                </p>
                <Button
                  onClick={handleWhatsApp}
                  variant="link"
                  className="p-0 h-auto text-sm"
                >
                  {t('contact.startChat')}
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('contact.sendMessage')}</h2>
              <p className="text-muted-foreground mb-8">
                {t('contact.messageDesc')}
              </p>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">{t('contact.visitOffice')}</h2>
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    {t('contact.location')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{siteConfig.address}</p>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    {t('contact.officeHours')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{siteConfig.hours}</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {t('contact.closed')}
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardContent className="p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.8267842842845!2d-0.3799399!3d39.4844444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f1b8c8d8c8d%3A0x1234567890abcdef!2sAvinguda%20del%20Cardenal%20Benlloch%2C%2093%2C%2046021%20Val%C3%A8ncia%2C%20Valencia%2C%20Spain!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </CardContent>
              </Card>

              <div className="p-6 bg-primary/5 rounded-2xl">
                <h3 className="font-semibold mb-2">{t('contact.inPerson')}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {t('contact.inPersonDesc')}
                </p>
                <Button asChild>
                  <Link href="/apply">{t('contact.bookConsultation')}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </>
  );
}
