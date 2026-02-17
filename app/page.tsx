"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
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
                <p className="text-sm font-medium text-red-600 dark:text-red-900">Your gateway to universities in Spain</p>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-heading leading-tight">
                We go above and beyond so you don&apos;t have to worry about anything.
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                A group of experienced, dedicated professionals committed to provide the best solution for students from all the world seeking educational institutions and allowing them to study in universities in Spain.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button asChild size="lg" className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white shadow-lg">
                  <Link href="/apply">
                    Book a Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-amber-500 text-amber-600 hover:bg-amber-50 dark:border-amber-600 dark:text-amber-500 dark:hover:bg-amber-950">
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[350px] md:h-[450px] lg:h-[500px] border border-border">
                <Image
                  src="/home-banner-img1.jpg"
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
                      <p className="font-semibold text-xs md:text-sm text-white">Your gateway to</p>
                      <p className="text-xs md:text-sm text-yellow-100">universities in Spain</p>
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
            title="How It Works"
            subtitle="Your journey to studying in Spain, simplified into four easy steps"
            centered
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <Card key={index} className="relative hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="absolute -top-4 left-6 w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-red-500 text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-red-500/30">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 mt-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="What Our Students Say"
            subtitle="Real experiences from students we've helped achieve their dreams"
            centered
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                country={testimonial.country}
                program={testimonial.program}
                text={testimonial.text}
                rating={testimonial.rating}
                index={index}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive support for every stage of your journey"
            centered
            className="mb-12"
          />
          
          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center text-red-600">Before You Arrive</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {beforeArrivalServices.slice(0, 6).map((service, index) => (
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
              <h3 className="text-2xl font-semibold mb-6 text-center" style={{ color: '#F4C042' }}>When You Arrive</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {onArrivalServices.map((service, index) => (
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
              <h3 className="text-2xl font-semibold mb-6 text-center">Settling In</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {settlingInServices.map((service, index) => (
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

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Study in Spain"
            subtitle="Discover why Spain is the perfect destination for your education"
            centered
            className="mb-12"
          />
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Why Study in Spain?</h3>
                <p className="text-muted-foreground mb-6">
                  Spain is an interesting and rich country, with plenty of opportunities to learn, advance, and socialize. It is a country that offers the best of both worlds – a laid-back lifestyle with a strong focus on education. Spanish universities have a long tradition of academic excellence and are globally recognized for their high-quality programs.
                </p>
                <p className="text-muted-foreground">
                  The quality of education in Spain is continuously monitored and evaluated by the government, ensuring that students receive a top-notch education.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">How many communities are there in Spain?</h3>
                <p className="text-muted-foreground mb-6">
                  Its higher education sector comprises 89 Spanish universities, out of which 50 are public and 39 are private universities, which include some of the best business schools. Spain is also home to Salamanca University which is one of the oldest universities in the world.
                </p>
                <Button asChild>
                  <Link href="/apply">
                    Join Us Now
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
            title="Spain by the Numbers"
            subtitle="Fascinating facts about your future study destination"
            centered
            className="mb-12"
          />
          <StatsGrid stats={stats} />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">We seek to become leaders in providing distinguished and innovative student services</h3>
                <p className="text-muted-foreground">
                  We are aiming to enhance student success and achieve their academic and professional ambitions. We envision a world where every student can access the best education opportunities regardless of their geographical location or financial status, and we strive to make this vision a reality through our dedicated services.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Providing innovative and effective educational programs</h3>
                <p className="text-muted-foreground">
                  Providing innovative and effective educational programs to enhance student achievement and develop their academic skills. We are committed to providing the best possible service while fully maintaining privacy. Our mission is to empower students by providing comprehensive support and guidance, enabling them to navigate the complexities of international education and achieve their aspirations with confidence.
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
              title="Frequently Asked Questions"
              subtitle="Find answers to common questions about studying in Spain"
              centered
              className="mb-12"
            />
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Contact Us"
            subtitle="We're here to answer your questions and help you start your journey"
            centered
            className="mb-12"
          />
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Send us an email anytime
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
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Mon-Fri from 9am to 6pm
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
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Chat with us instantly
                </p>
                <Button
                  onClick={handleWhatsApp}
                  variant="link"
                  className="p-0 h-auto text-sm"
                >
                  Start Chat
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form and we&apos;ll get back to you within 24 hours on
                business days.
              </p>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Visit Our Office</h2>
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Location
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
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{siteConfig.hours}</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Saturday - Sunday: Closed
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardContent className="p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3387.4837537384773!2d-6.2584!3d31.9454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d96179e51%3A0x5950b6534f87adb8!2sMarrakech%2C%20Morocco!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
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
                <h3 className="font-semibold mb-2">Prefer to talk in person?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Schedule a free consultation at our office. We&apos;ll discuss your
                  study plans and answer all your questions.
                </p>
                <Button asChild>
                  <Link href="/apply">Book a Consultation</Link>
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
