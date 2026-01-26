"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface TimelineStep {
  title: string;
  description: string;
  duration?: string;
}

interface TimelineProps {
  steps: TimelineStep[];
}

export function Timeline({ steps }: TimelineProps) {
  return (
    <div className="space-y-8">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex gap-4"
        >
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <Check className="h-5 w-5 text-white" />
            </div>
            {index < steps.length - 1 && (
              <div className="w-0.5 h-full min-h-[60px] bg-primary/30 mt-2" />
            )}
          </div>
          <div className="flex-1 pb-8">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold">{step.title}</h3>
              {step.duration && (
                <span className="text-sm text-muted-foreground">{step.duration}</span>
              )}
            </div>
            <p className="text-muted-foreground">{step.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
