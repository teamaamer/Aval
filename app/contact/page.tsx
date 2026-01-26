"use client";

import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/content/site";

export default function ContactPage() {
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
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Contact Us"
            subtitle="We're here to answer your questions and help you start your journey"
            centered
          />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
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

              <Card>
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

              <div className="mt-8 p-6 bg-primary/5 rounded-2xl">
                <h3 className="font-semibold mb-2">Prefer to talk in person?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Schedule a free consultation at our office. We&apos;ll discuss your
                  study plans and answer all your questions.
                </p>
                <Button asChild>
                  <a href="/apply">Book a Consultation</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
