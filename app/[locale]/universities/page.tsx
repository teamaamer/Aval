import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getTranslations } from 'next-intl/server';
import { GraduationCap, MapPin, Users, Award, ArrowRight, BookOpen } from "lucide-react";
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
          
          <div className="max-w-6xl mx-auto text-center mt-16">
            <p className="text-2xl md:text-3xl text-muted-foreground mb-12">{t('admissions.subtitle')}</p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/services/university-admissions?tab=bachelors" className="block">
                <Card className="hover:shadow-2xl transition-all hover:scale-105 cursor-pointer h-full border-2">
                  <CardContent className="pt-12 pb-10 px-8">
                    <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center mx-auto mb-6">
                      <GraduationCap className="h-14 w-14 text-red-600" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{t('admissions.bachelors.title')}</h3>
                    <p className="text-lg text-muted-foreground">4 years • 240 ECTS credits</p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link href="/services/university-admissions?tab=masters" className="block">
                <Card className="hover:shadow-2xl transition-all hover:scale-105 cursor-pointer h-full border-2">
                  <CardContent className="pt-12 pb-10 px-8">
                    <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center mx-auto mb-6">
                      <BookOpen className="h-14 w-14 text-red-600" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{t('admissions.masters.title')}</h3>
                    <p className="text-lg text-muted-foreground">1-2 years • Advanced specialization</p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link href="/services/university-admissions?tab=phd" className="block">
                <Card className="hover:shadow-2xl transition-all hover:scale-105 cursor-pointer h-full border-2">
                  <CardContent className="pt-12 pb-10 px-8">
                    <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center mx-auto mb-6">
                      <Award className="h-14 w-14 text-red-600" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{t('admissions.phd.title')}</h3>
                    <p className="text-lg text-muted-foreground">3-4 years • Research & thesis</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
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

      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-secondary/20 dark:bg-secondary/10 border-2 border-secondary/30 dark:border-secondary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">{t('admissions.ctaTitle')}</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  {t('admissions.ctaDescription')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600">
                    <Link href="/services/university-admissions">
                      {t('admissions.ctaButton')}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/apply">{t('admissions.ctaButtonSecondary')}</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
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
