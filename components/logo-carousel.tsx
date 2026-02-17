"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  { name: "AI Planning Institute", src: "/logos/aiplanginstitute.png" },
  { name: "FEDELE", src: "/logos/fedele.png" },
  { name: "Marcas", src: "/logos/marcas.png" },
  { name: "Padoga", src: "/logos/padoga.png" },
  { name: "Ref Checked", src: "/logos/refchecked.jpg" },
  { name: "Rush Spain SPF", src: "/logos/rushspainspf.jpg" },
  { name: "Valencia", src: "/logos/valencia.gif" },
];

export function LogoCarousel() {
  return (
    <div className="w-full overflow-hidden bg-muted/20 py-8">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-semibold text-center mb-8">They Trust Us</h3>
        <div className="relative">
          <motion.div
            className="flex gap-12 items-center"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-20 flex items-center justify-center transition-all hover:scale-110"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={128}
                  height={80}
                  className="object-contain max-h-20"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
