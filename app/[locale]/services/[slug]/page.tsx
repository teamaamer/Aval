import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getTranslations } from 'next-intl/server';
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Timeline } from "@/components/timeline";
import { FAQAccordion } from "@/components/faq-accordion";
import { ContactForm } from "@/components/contact-form";
import { getIconComponent } from "@/lib/icon-mapper";
import { services, getServiceBySlug } from "@/content/services";

export function generateStaticParams() {
  const locales = ['en', 'ar', 'es'];
  
  return locales.flatMap((locale) =>
    services.map((service) => ({
      locale,
      slug: service.slug,
    }))
  );
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const t = await getTranslations('services');
  const tUniv = await getTranslations('universities');
  const { slug, locale } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Icon = getIconComponent(service.iconName);

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-red-50 to-[#F4C042]/5">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/services">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('backToServices')}
            </Link>
          </Button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-100 to-red-50 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-8 w-8 text-red-600" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    {t(`items.${service.slug}.title`)}
                  </h1>
                </div>
              </div>
              <p className="text-xl text-muted-foreground">
                {t(`items.${service.slug}.longDescription`)}
              </p>
            </div>
            
            {service.image && (
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {slug === 'university-admissions' && (
            <div className="mb-12">
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{tUniv('admissions.title')}</h3>
                      <p className="text-sm text-muted-foreground">{tUniv('admissions.subtitle')}</p>
                    </div>
                    <Button asChild variant="outline">
                      <Link href={`/${locale}/universities#admissions`}>
                        View Detailed Requirements
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {slug === 'university-admissions' ? (
            <Tabs defaultValue="bachelors" className="w-full mb-12">
              <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-8">
                <TabsTrigger value="bachelors">{tUniv('admissions.bachelors.title')}</TabsTrigger>
                <TabsTrigger value="masters">{tUniv('admissions.masters.title')}</TabsTrigger>
                <TabsTrigger value="phd">{tUniv('admissions.phd.title')}</TabsTrigger>
              </TabsList>

              <TabsContent value="bachelors">
                <Card>
                  <CardContent className="p-8">
                    <p className="text-muted-foreground mb-4">{tUniv('admissions.bachelors.intro')}</p>
                    <p className="text-muted-foreground mb-4">{tUniv('admissions.bachelors.description')}</p>
                    <p className="text-muted-foreground">{tUniv('admissions.bachelors.credits')}</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="masters">
                <Card>
                  <CardContent className="p-8">
                    <p className="text-muted-foreground mb-4">{tUniv('admissions.masters.intro')}</p>
                    <div className="grid md:grid-cols-2 gap-4 my-6">
                      <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-4">
                        <h4 className="font-semibold text-sm mb-2">{tUniv('admissions.masters.stat1.title')}</h4>
                        <p className="text-xs text-muted-foreground">{tUniv('admissions.masters.stat1.description')}</p>
                      </div>
                      <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl p-4">
                        <h4 className="font-semibold text-sm mb-2">{tUniv('admissions.masters.stat2.title')}</h4>
                        <p className="text-xs text-muted-foreground">{tUniv('admissions.masters.stat2.description')}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{tUniv('admissions.masters.excellence')}</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="phd">
                <Card>
                  <CardContent className="p-8">
                    <p className="text-muted-foreground mb-4">{tUniv('admissions.phd.intro')}</p>
                    <p className="text-muted-foreground mb-4">{tUniv('admissions.phd.research')}</p>
                    <p className="text-muted-foreground">{tUniv('admissions.phd.structure')}</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          ) : null}

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">{t('whatWeHelp')}</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {t.raw(`items.${service.slug}.bullets`).map((bullet: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground">{bullet}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">{t('requirements')}</h2>
                <Card>
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      {t.raw(`items.${service.slug}.requirements`).map((requirement: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-semibold text-primary">
                              {index + 1}
                            </span>
                          </div>
                          <span className="text-muted-foreground">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">{t('timeline')}</h2>
                <Timeline steps={t.raw(`items.${service.slug}.timeline`)} />
              </div>

              {service.faqs.length > 0 && (
                <div>
                  <h2 className="text-3xl font-bold mb-6">
                    {t('faqs')}
                  </h2>
                  <FAQAccordion faqs={t.raw(`items.${service.slug}.faqs`)} />
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>{t('getStartedToday')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-6">
                    {t('getStartedDescription')} {t(`items.${service.slug}.title`).toLowerCase()} {t('needs')}.
                  </p>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {t('needMultipleServices')}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('multipleServicesDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/apply">{t('bookConsultation')}</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/services">{t('viewAllServices')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
