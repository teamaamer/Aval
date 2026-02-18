import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getTranslations } from 'next-intl/server';
import { Target, Eye, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Aval Student Services - 8 years of helping students achieve their dreams of studying in Spain.",
};

export default async function AboutPage() {
  const t = await getTranslations('about');
  const tCta = await getTranslations('cta');
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t('title')}
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                {t('intro1')}
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                {t('intro2')}
              </p>
              <Button asChild size="lg">
                <Link href="/apply">{t('startJourney')}</Link>
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
                <h2 className="text-2xl font-bold mb-4">{t('ourVision')}</h2>
                <p className="text-lg font-semibold mb-4">
                  {t('visionTitle')}
                </p>
                <p className="text-muted-foreground">
                  {t('visionDesc')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-6">
                  <Target className="h-6 w-6 text-secondary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">{t('ourMission')}</h2>
                <p className="text-lg font-semibold mb-4">
                  {t('missionTitle')}
                </p>
                <p className="text-muted-foreground">
                  {t('missionDesc')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            title={t('whyChoose')}
            subtitle={t('whyChooseSubtitle')}
            centered
            className="mb-12"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t('experience')}</h3>
                <p className="text-muted-foreground">
                  {t('experienceDesc')}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {t('personalizedSupport')}
                </h3>
                <p className="text-muted-foreground">
                  {t('personalizedDesc')}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t('endToEnd')}</h3>
                <p className="text-muted-foreground">
                  {t('endToEndDesc')}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t('highSuccess')}</h3>
                <p className="text-muted-foreground">
                  {t('highSuccessDesc')}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t('expertTeam')}</h3>
                <p className="text-muted-foreground">
                  {t('expertTeamDesc')}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t('transparentPricing')}</h3>
                <p className="text-muted-foreground">
                  {t('transparentPricingDesc')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CTASection
        title={tCta('readyToStart')}
        description={tCta('joinSuccessful')}
        primaryButtonText={tCta('bookConsultation')}
        primaryButtonHref="/apply"
        secondaryButtonText={tCta('viewServices')}
        secondaryButtonHref="/services"
      />
    </>
  );
}
