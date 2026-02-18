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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle2, Loader2 } from "lucide-react";
import { services } from "@/content/services";
import { trackEvent } from "@/lib/analytics";
import { NationalitySelect } from "@/components/nationality-select";

const stepSchemas = [
  z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(5, "Phone number is required"),
    nationality: z.string().min(2, "Nationality is required"),
  }),
  z.object({
    desiredProgram: z.string().min(2, "Program is required"),
    studyLevel: z.enum(["bachelor", "master", "phd", "language", "other"]),
    intakeYear: z.string().min(4, "Year is required"),
    intakeSemester: z.enum(["fall", "spring"]),
  }),
  z.object({
    servicesNeeded: z.array(z.string()).min(1, "Select at least one service"),
  }),
  z.object({
    additionalInfo: z.string().optional(),
  }),
];

type FormData = z.infer<typeof stepSchemas[0]> &
  z.infer<typeof stepSchemas[1]> &
  z.infer<typeof stepSchemas[2]> &
  z.infer<typeof stepSchemas[3]>;

export default function ApplyPage() {
  const t = useTranslations('apply');
  const tForm = useTranslations('form');
  const tServices = useTranslations('services');
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<any>({
    resolver: zodResolver(stepSchemas[currentStep]) as any,
    defaultValues: formData,
  });

  const servicesNeeded = (watch("servicesNeeded") as string[]) || [];

  const steps = [
    t('steps.personal'),
    t('steps.study'),
    t('steps.services'),
    t('steps.review'),
  ];

  const onNext = (data: any) => {
    setFormData({ ...formData, ...data });
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const onBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = async (data: any) => {
    const finalData = { ...formData, ...data };
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalData),
      });

      if (response.ok) {
        setIsSuccess(true);
        trackEvent("application_submitted", { services: finalData.servicesNeeded });
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen pt-32 pb-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center">
            <CardContent className="pt-12 pb-12">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold mb-4">{t('successTitle')}</h1>
              <p className="text-muted-foreground mb-8">
                {t('successMessage')}
              </p>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {t('checkEmail')}
                </p>
                <Button asChild>
                  <a href="/">{t('returnHome')}</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">{t('title')}</h1>
          <p className="text-center text-muted-foreground mb-8">
            {t('subtitle')}
          </p>

          <div className="mb-8">
            <div className="flex justify-between items-center">
              {steps.map((step, index) => (
                <div key={index} className="flex-1 relative">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold relative z-10 ${
                        index < currentStep
                          ? "bg-red-600 text-white"
                          : index === currentStep
                          ? "bg-red-600 text-white"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {index + 1}
                    </div>
                    <p className="text-xs mt-2 text-center hidden sm:block">
                      {step}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`absolute top-5 left-1/2 w-full h-0.5 ${
                        index < currentStep ? "bg-red-600" : "bg-gray-200"
                      }`}
                      style={{ transform: "translateY(-50%)" }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>{steps[currentStep]}</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={handleSubmit(
                  currentStep === steps.length - 1 ? onSubmit : onNext
                )}
              >
                {currentStep === 0 && (
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">{t('firstName')} *</Label>
                        <Input
                          id="firstName"
                          {...register("firstName")}
                          placeholder="John"
                          className="mt-1.5"
                        />
                        {errors.firstName && (
                          <p className="text-sm text-red-600 mt-1">
                            {errors.firstName.message as string}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="lastName">{t('lastName')} *</Label>
                        <Input
                          id="lastName"
                          {...register("lastName")}
                          placeholder="Doe"
                          className="mt-1.5"
                        />
                        {errors.lastName && (
                          <p className="text-sm text-red-600 mt-1">
                            {errors.lastName.message as string}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">{tForm('emailAddress')} *</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="john@example.com"
                        className="mt-1.5"
                      />
                      {errors.email && (
                        <p className="text-sm text-red-600 mt-1">
                          {errors.email.message as string}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="phone">{tForm('phoneWhatsapp')} *</Label>
                      <Input
                        id="phone"
                        {...register("phone")}
                        placeholder="+1 234 567 8900"
                        className="mt-1.5"
                      />
                      {errors.phone && (
                        <p className="text-sm text-red-600 mt-1">
                          {errors.phone.message as string}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="nationality">{t('nationality')} *</Label>
                      <NationalitySelect
                        value={watch("nationality")}
                        onValueChange={(value) => setValue("nationality", value)}
                        error={errors.nationality?.message as string}
                      />
                    </div>
                  </div>
                )}

                {currentStep === 1 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="desiredProgram">
                        {t('desiredProgram')} *
                      </Label>
                      <Input
                        id="desiredProgram"
                        {...register("desiredProgram")}
                        placeholder="e.g., Business Administration, Computer Science"
                        className="mt-1.5"
                      />
                      {errors.desiredProgram && (
                        <p className="text-sm text-red-600 mt-1">
                          {errors.desiredProgram.message as string}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="studyLevel">{t('studyLevel')} *</Label>
                      <select
                        id="studyLevel"
                        {...register("studyLevel")}
                        className="flex h-11 w-full rounded-xl border border-input bg-background px-4 py-2 text-sm mt-1.5"
                      >
                        <option value="">{t('selectLevel')}</option>
                        <option value="bachelor">{t('bachelor')}</option>
                        <option value="master">{t('master')}</option>
                        <option value="phd">{t('phd')}</option>
                        <option value="language">{t('languageCourse')}</option>
                        <option value="other">{t('other')}</option>
                      </select>
                      {errors.studyLevel && (
                        <p className="text-sm text-red-600 mt-1">
                          {errors.studyLevel.message as string}
                        </p>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="intakeYear">{t('intakeYear')} *</Label>
                        <Input
                          id="intakeYear"
                          {...register("intakeYear")}
                          placeholder="2025"
                          className="mt-1.5"
                        />
                        {errors.intakeYear && (
                          <p className="text-sm text-red-600 mt-1">
                            {errors.intakeYear.message as string}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="intakeSemester">{t('semester')} *</Label>
                        <select
                          id="intakeSemester"
                          {...register("intakeSemester")}
                          className="flex h-11 w-full rounded-xl border border-input bg-background px-4 py-2 text-sm mt-1.5"
                        >
                          <option value="">{t('selectSemester')}</option>
                          <option value="fall">{t('fall')}</option>
                          <option value="spring">{t('spring')}</option>
                        </select>
                        {errors.intakeSemester && (
                          <p className="text-sm text-red-600 mt-1">
                            {errors.intakeSemester.message as string}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-4">
                    <Label>{t('selectServices')} *</Label>
                    <div className="space-y-3">
                      {services.map((service) => (
                        <div key={service.slug} className="flex items-start space-x-3">
                          <Checkbox
                            id={service.slug}
                            checked={servicesNeeded.includes(service.slug)}
                            onCheckedChange={(checked) => {
                              const newServices = checked
                                ? [...servicesNeeded, service.slug]
                                : servicesNeeded.filter((s: string) => s !== service.slug);
                              setValue("servicesNeeded", newServices);
                            }}
                          />
                          <label
                            htmlFor={service.slug}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                          >
                            <div>{tServices(`items.${service.slug}.title`)}</div>
                            <div className="text-muted-foreground font-normal">
                              {tServices(`items.${service.slug}.shortDescription`)}
                            </div>
                          </label>
                        </div>
                      ))}
                    </div>
                    {errors.servicesNeeded && (
                      <p className="text-sm text-red-600 mt-1">
                        {errors.servicesNeeded.message as string}
                      </p>
                    )}
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="bg-muted/50 p-6 rounded-xl space-y-4">
                      <h3 className="font-semibold">{t('reviewInfo')}</h3>
                      <div className="space-y-2 text-sm">
                        <p>
                          <span className="font-medium">{t('name')}:</span>{" "}
                          {(formData as any).firstName} {(formData as any).lastName}
                        </p>
                        <p>
                          <span className="font-medium">{tForm('emailAddress')}:</span> {(formData as any).email}
                        </p>
                        <p>
                          <span className="font-medium">{tForm('phoneWhatsapp')}:</span> {(formData as any).phone}
                        </p>
                        <p>
                          <span className="font-medium">{t('nationality')}:</span>{" "}
                          {(formData as any).nationality}
                        </p>
                        <p>
                          <span className="font-medium">{t('program')}:</span>{" "}
                          {(formData as any).desiredProgram}
                        </p>
                        <p>
                          <span className="font-medium">{t('intake')}:</span>{" "}
                          {(formData as any).intakeSemester === "fall" ? t('fall').split(' ')[0] : t('spring').split(' ')[0]}{" "}
                          {(formData as any).intakeYear}
                        </p>
                        <p>
                          <span className="font-medium">{t('selectServices')}:</span>{" "}
                          {(formData as any).servicesNeeded?.length || 0} {t('servicesSelected')}
                        </p>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="additionalInfo">
                        {t('additionalInfo')}
                      </Label>
                      <Textarea
                        id="additionalInfo"
                        {...register("additionalInfo")}
                        placeholder={t('additionalPlaceholder')}
                        className="mt-1.5"
                        rows={4}
                      />
                    </div>

                    <p className="text-sm text-muted-foreground">
                      {t('privacyConsent')}
                    </p>
                  </div>
                )}

                <div className="flex justify-between mt-8">
                  {currentStep > 0 && (
                    <Button type="button" variant="outline" onClick={onBack}>
                      {t('back')}
                    </Button>
                  )}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={currentStep === 0 ? "ml-auto" : ""}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {t('submitting')}
                      </>
                    ) : currentStep === steps.length - 1 ? (
                      t('submitApplication')
                    ) : (
                      t('next')
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
