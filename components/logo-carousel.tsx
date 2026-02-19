"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from 'next-intl';

const accreditedBy = [
  { name: "ICEF", src: "/logos/icef.png" },
  { name: "Ref Checked", src: "/logos/refchecked.jpg" },
  { name: "FEDELE", src: "/logos/fedele.png" },
  { name: "Marcas", src: "/logos/marcas.png" },
  { name: "Generalitat Valenciana", src: "/logos/valencia.gif" },
  { name: "Oficina Española", src: "/logos/rushspainspf.jpg" },
];

const partners = [
  { name: "AI Planning Institute", src: "/logos/aiplanginstitute.png" },
  { name: "Padoga", src: "/logos/padoga.png" },
];

export function LogoCarousel() {
  const t = useTranslations('trustUs');
  
  return (
    <div className="w-full bg-muted/20 py-12">
      <div className="container mx-auto px-4">
        {/* Accredited By Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center mb-8">{t('accreditedBy')}</h3>
          <div className="flex justify-center gap-12 items-center flex-wrap">
            {accreditedBy.map((logo, index) => (
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
          </div>
        </div>

        {/* Partners Section */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8">{t('partners')}</h3>
          <div className="flex justify-center gap-12 items-center flex-wrap">
            {partners.map((logo, index) => (
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
          </div>
        </div>
      </div>
    </div>
  );
}
