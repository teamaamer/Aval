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
      <TabsList className="grid md:grid-cols-3 gap-8 mb-10 max-w-6xl mx-auto h-auto bg-transparent p-0 w-full">
        <TabsTrigger value="bachelors" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-600 data-[state=active]:to-red-500 data-[state=active]:border-red-600 data-[state=active]:[&_h3]:!text-black dark:data-[state=active]:[&_h3]:!text-white data-[state=active]:[&_p]:!text-black dark:data-[state=active]:[&_p]:!text-white hover:shadow-2xl transition-all hover:scale-105 cursor-pointer h-full border-2 rounded-2xl p-0">
          <Card className="border-0 shadow-none bg-transparent">
            <CardContent className="pt-12 pb-10 px-8">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="h-14 w-14 text-red-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{tUniv('admissions.bachelors.title')}</h3>
              <p className="text-lg text-muted-foreground">4 years • 240 ECTS credits</p>
            </CardContent>
          </Card>
        </TabsTrigger>
        
        <TabsTrigger value="masters" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-600 data-[state=active]:to-red-500 data-[state=active]:border-red-600 data-[state=active]:[&_h3]:!text-black dark:data-[state=active]:[&_h3]:!text-white data-[state=active]:[&_p]:!text-black dark:data-[state=active]:[&_p]:!text-white hover:shadow-2xl transition-all hover:scale-105 cursor-pointer h-full border-2 rounded-2xl p-0">
          <Card className="border-0 shadow-none bg-transparent">
            <CardContent className="pt-12 pb-10 px-8">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-14 w-14 text-red-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{tUniv('admissions.masters.title')}</h3>
              <p className="text-lg text-muted-foreground">1-2 years • Advanced specialization</p>
            </CardContent>
          </Card>
        </TabsTrigger>
        
        <TabsTrigger value="phd" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-600 data-[state=active]:to-red-500 data-[state=active]:border-red-600 data-[state=active]:[&_h3]:!text-black dark:data-[state=active]:[&_h3]:!text-white data-[state=active]:[&_p]:!text-black dark:data-[state=active]:[&_p]:!text-white hover:shadow-2xl transition-all hover:scale-105 cursor-pointer h-full border-2 rounded-2xl p-0">
          <Card className="border-0 shadow-none bg-transparent">
            <CardContent className="pt-12 pb-10 px-8">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center mx-auto mb-6">
                <Award className="h-14 w-14 text-red-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{tUniv('admissions.phd.title')}</h3>
              <p className="text-lg text-muted-foreground">3-4 years • Research & thesis</p>
            </CardContent>
          </Card>
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
