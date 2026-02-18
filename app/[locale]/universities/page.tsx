import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getTranslations } from 'next-intl/server';
import { GraduationCap, MapPin, Users, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { SectionHeading } from "@/components/section-heading";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Universities in Spain",
  description: "Explore top universities in Spain. We help you find and apply to the perfect institution for your academic goals.",
};

export default async function UniversitiesPage() {
  const t = await getTranslations('universities');
  const tCta = await getTranslations('cta');
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <SectionHeading
            title={t('title')}
            subtitle={t('subtitle')}
            centered
          />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                {t('higherEducationTitle')}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t('higherEducationDesc1')}
              </p>
              <p className="text-muted-foreground mb-6">
                {t('higherEducationDesc2')}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-primary mb-2">89</div>
                    <p className="text-sm text-muted-foreground">
                      {t('totalUniversities')}
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-primary mb-2">50</div>
                    <p className="text-sm text-muted-foreground">
                      {t('publicUniversities')}
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
              {t('popularDestinations')}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {['madrid', 'barcelona', 'valencia', 'seville', 'salamanca', 'granada'].map((cityKey, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-semibold">{t(`cities.${cityKey}.name`)}</h3>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      {t(`cities.${cityKey}.description`)}
                    </p>
                    <p className="text-sm text-primary font-medium">
                      {t(`cities.${cityKey}.universities`)}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {t('popularFields')}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { key: 'business', icon: GraduationCap },
                { key: 'engineering', icon: Award },
                { key: 'arts', icon: Users },
                { key: 'medicine', icon: GraduationCap },
              ].map((field, index) => {
                const Icon = field.icon;
                return (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">{t(`fields.${field.key}.name`)}</h3>
                      <p className="text-sm text-muted-foreground">
                        {t(`fields.${field.key}.description`)}
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
                  {t('needHelpTitle')}
                </h2>
                <p className="text-muted-foreground mb-8">
                  {t('needHelpDesc')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link href="/apply">Book a Free Consultation</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/services/university-admissions">
                      {t('learnAdmissions')}
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            title={t('admissions.title')}
            subtitle={t('admissions.subtitle')}
            centered
            className="mb-12"
          />

          <Tabs defaultValue="bachelors" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="bachelors">{t('admissions.bachelors.title')}</TabsTrigger>
              <TabsTrigger value="masters">{t('admissions.masters.title')}</TabsTrigger>
              <TabsTrigger value="phd">{t('admissions.phd.title')}</TabsTrigger>
            </TabsList>

            {/* Bachelor's Degree Tab */}
            <TabsContent value="bachelors">
              <Card>
                <CardContent className="p-8 md:p-12">
                  <div className="prose prose-lg max-w-none mb-8">
                    <p className="text-muted-foreground mb-4">
                      {t('admissions.bachelors.intro')}
                    </p>
                    <p className="text-muted-foreground mb-4">
                      {t('admissions.bachelors.description')}
                    </p>
                    <p className="text-muted-foreground mb-6">
                      {t('admissions.bachelors.credits')}
                    </p>
                  </div>
                  
                  <div className="bg-primary/5 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-semibold mb-4">{t('admissions.bachelors.requirements.title')}</h3>
                    <ul className="space-y-3">
                      {[1, 2, 3].map((i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-sm font-semibold text-primary">{i}</span>
                          </div>
                          <span className="text-muted-foreground">{t(`admissions.bachelors.requirements.item${i}`)}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-muted-foreground mt-4 italic">{t('admissions.bachelors.requirements.note')}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg">
                      <Link href="/services/university-admissions">
                        {t('learnAdmissions')}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                      <Link href="/apply">Book a Free Consultation</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Master's Degree Tab */}
            <TabsContent value="masters">
              <Card>
                <CardContent className="p-8 md:p-12">
                  <div className="prose prose-lg max-w-none mb-8">
                    <p className="text-muted-foreground mb-4">
                      {t('admissions.masters.intro')}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6 my-6">
                      <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6">
                        <h4 className="font-semibold mb-2">{t('admissions.masters.stat1.title')}</h4>
                        <p className="text-sm text-muted-foreground">{t('admissions.masters.stat1.description')}</p>
                      </div>
                      <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl p-6">
                        <h4 className="font-semibold mb-2">{t('admissions.masters.stat2.title')}</h4>
                        <p className="text-sm text-muted-foreground">{t('admissions.masters.stat2.description')}</p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6">
                      {t('admissions.masters.excellence')}
                    </p>
                  </div>
                  
                  <div className="bg-primary/5 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-semibold mb-4">{t('admissions.masters.requirements.title')}</h3>
                    <ul className="space-y-3">
                      {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-sm font-semibold text-primary">{i}</span>
                          </div>
                          <span className="text-muted-foreground">{t(`admissions.masters.requirements.item${i}`)}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-muted-foreground mt-4 italic">{t('admissions.masters.requirements.note')}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg">
                      <Link href="/services/university-admissions">
                        {t('learnAdmissions')}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                      <Link href="/apply">Book a Free Consultation</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Doctorate/PhD Tab */}
            <TabsContent value="phd">
              <Card>
                <CardContent className="p-8 md:p-12">
                  <div className="prose prose-lg max-w-none mb-8">
                    <p className="text-muted-foreground mb-4">
                      {t('admissions.phd.intro')}
                    </p>
                    <p className="text-muted-foreground mb-4">
                      {t('admissions.phd.research')}
                    </p>
                    <p className="text-muted-foreground mb-6">
                      {t('admissions.phd.structure')}
                    </p>
                  </div>
                  
                  <div className="bg-primary/5 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-semibold mb-4">{t('admissions.phd.requirements.title')}</h3>
                    <ul className="space-y-3">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-sm font-semibold text-primary">{i}</span>
                          </div>
                          <span className="text-muted-foreground">{t(`admissions.phd.requirements.item${i}`)}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-muted-foreground mt-4 italic">{t('admissions.phd.requirements.note')}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg">
                      <Link href="/services/university-admissions">
                        {t('learnAdmissions')}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                      <Link href="/apply">Book a Free Consultation</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <CTASection
        title={tCta('startApplication')}
        description={tCta('navigateProcess')}
        primaryButtonText={tCta('applyNow')}
        primaryButtonHref="/apply"
        secondaryButtonText={tCta('contactUs')}
        secondaryButtonHref="/contact"
      />
    </>
  );
}
