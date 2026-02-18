"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { trackEvent } from "@/lib/analytics";
import { Loader2 } from "lucide-react";

type ContactFormData = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export function ContactForm() {
  const t = useTranslations('form');
  
  const contactSchema = z.object({
    name: z.string().min(2, t('nameError')),
    email: z.string().email(t('emailError')),
    phone: z.string().optional(),
    message: z.string().min(10, t('messageError')),
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        trackEvent("contact_form_submitted", { source: "contact_page" });
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Label htmlFor="name">{t('fullName')} *</Label>
        <Input
          id="name"
          {...register("name")}
          placeholder={t('namePlaceholder')}
          className="mt-1.5"
        />
        {errors.name && (
          <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email">{t('emailAddress')} *</Label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          placeholder={t('emailPlaceholder')}
          className="mt-1.5"
        />
        {errors.email && (
          <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="phone">{t('phoneWhatsapp')}</Label>
        <Input
          id="phone"
          {...register("phone")}
          placeholder={t('phonePlaceholder')}
          className="mt-1.5"
        />
        {errors.phone && (
          <p className="text-sm text-red-600 mt-1">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="message">{t('message')} *</Label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder={t('messagePlaceholder')}
          className="mt-1.5"
          rows={5}
        />
        {errors.message && (
          <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>
        )}
      </div>

      {submitStatus === "success" && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 text-sm">
          {t('successMessage')}
        </div>
      )}

      {submitStatus === "error" && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-800 text-sm">
          {t('errorMessage')}
        </div>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            {t('sending')}
          </>
        ) : (
          t('sendMessage')
        )}
      </Button>
    </form>
  );
}
