"use client";

import { useSearchParams } from "next/navigation";
import { GraduationCap, BookOpen, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useTranslations } from "next-intl";

export function UniversityAdmissionsTabs() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "bachelors";
  const tUniv = useTranslations("universities");

  return (
    <Tabs defaultValue={tab} className="w-full mb-12">
      <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-3 mb-8 h-auto p-2">
        <TabsTrigger value="bachelors" className="flex items-center gap-2 py-3 px-6 text-base">
          <GraduationCap className="h-5 w-5" />
          {tUniv('admissions.bachelors.title')}
        </TabsTrigger>
        <TabsTrigger value="masters" className="flex items-center gap-2 py-3 px-6 text-base">
          <BookOpen className="h-5 w-5" />
          {tUniv('admissions.masters.title')}
        </TabsTrigger>
        <TabsTrigger value="phd" className="flex items-center gap-2 py-3 px-6 text-base">
          <Award className="h-5 w-5" />
          {tUniv('admissions.phd.title')}
        </TabsTrigger>
      </TabsList>

      <TabsContent value="bachelors">
        <Card>
          <CardContent className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-muted-foreground mb-4">{tUniv('admissions.bachelors.intro')}</p>
              <p className="text-muted-foreground mb-4">{tUniv('admissions.bachelors.description')}</p>
              <p className="text-muted-foreground mb-6">{tUniv('admissions.bachelors.credits')}</p>
            </div>
            
            <div className="bg-primary/5 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">{tUniv('admissions.bachelors.requirements.title')}</h3>
              <ul className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-semibold text-primary">{i}</span>
                    </div>
                    <span className="text-muted-foreground">{tUniv(`admissions.bachelors.requirements.item${i}`)}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground mt-4 italic">{tUniv('admissions.bachelors.requirements.note')}</p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="masters">
        <Card>
          <CardContent className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-muted-foreground mb-4">{tUniv('admissions.masters.intro')}</p>
              
              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6">
                  <h4 className="font-semibold mb-2">{tUniv('admissions.masters.stat1.title')}</h4>
                  <p className="text-sm text-muted-foreground">{tUniv('admissions.masters.stat1.description')}</p>
                </div>
                <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl p-6">
                  <h4 className="font-semibold mb-2">{tUniv('admissions.masters.stat2.title')}</h4>
                  <p className="text-sm text-muted-foreground">{tUniv('admissions.masters.stat2.description')}</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6">{tUniv('admissions.masters.excellence')}</p>
            </div>
            
            <div className="bg-primary/5 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">{tUniv('admissions.masters.requirements.title')}</h3>
              <ul className="space-y-3">
                {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-semibold text-primary">{i}</span>
                    </div>
                    <span className="text-muted-foreground">{tUniv(`admissions.masters.requirements.item${i}`)}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground mt-4 italic">{tUniv('admissions.masters.requirements.note')}</p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="phd">
        <Card>
          <CardContent className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-muted-foreground mb-4">{tUniv('admissions.phd.intro')}</p>
              <p className="text-muted-foreground mb-4">{tUniv('admissions.phd.research')}</p>
              <p className="text-muted-foreground mb-6">{tUniv('admissions.phd.structure')}</p>
            </div>
            
            <div className="bg-primary/5 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">{tUniv('admissions.phd.requirements.title')}</h3>
              <ul className="space-y-3">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-semibold text-primary">{i}</span>
                    </div>
                    <span className="text-muted-foreground">{tUniv(`admissions.phd.requirements.item${i}`)}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground mt-4 italic">{tUniv('admissions.phd.requirements.note')}</p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
