'use client';

import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { useTranslations } from 'next-intl';
import { siteConfig, footerLinks } from "@/content/site";

export function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Aval</h3>
            <p className="text-sm mb-4">
              {t('description')}
            </p>
            <div className="flex space-x-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t('services')}</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t('company')}</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-white font-semibold mt-6 mb-4">{t('legal')}</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t('contactUs')}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-primary transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-primary transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>{siteConfig.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {currentYear} {siteConfig.name}. {t('rights')}</p>
        </div>
      </div>
    </footer>
  );
}
