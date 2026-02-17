"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getIconComponent } from "@/lib/icon-mapper";

interface ServiceCardProps {
  title: string;
  description: string;
  iconName: string;
  href: string;
  index?: number;
  image?: string;
}

export function ServiceCard({
  title,
  description,
  iconName,
  href,
  index = 0,
  image,
}: ServiceCardProps) {
  const Icon = getIconComponent(iconName);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full hover:shadow-lg transition-shadow duration-300 group overflow-hidden flex flex-col">
        {image && (
          <div className="relative w-full h-40 overflow-hidden flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: '#FE0000' }}>
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <CardHeader className="pb-2 pt-4 px-4 flex-grow">
          <div className="flex items-start gap-3 mb-2">
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
              <Icon className="h-4 w-4 text-primary" />
            </div>
            <CardTitle className="text-base leading-tight">{title}</CardTitle>
          </div>
          <CardDescription className="text-xs line-clamp-2">{description}</CardDescription>
        </CardHeader>
        <CardContent className="pt-0 pb-4 px-4">
          <Button asChild variant="ghost" className="group/btn p-0 h-auto w-full justify-start">
            <Link href={href} className="flex items-center text-primary text-xs">
              Learn more
              <ArrowRight className="ml-1 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
