"use client";

import { motion } from "framer-motion";
import { Star, Quote, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  country: string;
  program: string;
  text: string;
  rating: number;
  index?: number;
  image?: string;
}

export function TestimonialCard({
  name,
  country,
  program,
  text,
  rating,
  index = 0,
  image,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full">
        <CardContent className="pt-6">
          <Quote className="h-8 w-8 text-primary/20 mb-4" />
          <p className="text-muted-foreground mb-6">{text}</p>
          <div className="flex items-center mb-2">
            {Array.from({ length: rating }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <div className="flex items-center gap-3">
            {image ? (
              <Image
                src={image}
                alt={name}
                width={58}
                height={58}
                className="rounded-full"
              />
            ) : (
              <div className="w-[58px] h-[58px] rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-8 w-8 text-primary" />
              </div>
            )}
            <div>
              <p className="font-semibold text-foreground">{name}</p>
              {(program || country) && (
                <p className="text-sm text-muted-foreground">
                  {[program, country].filter(Boolean).join(" • ")}
                </p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
