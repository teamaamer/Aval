'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { navigation } from '@/content/site';
import { ThemeToggle } from '@/components/theme-toggle';
import { LanguageSwitcher } from '@/components/language-switcher';
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  NavbarButton,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from '@/components/ui/resizable-navbar';

export function NavbarWrapper() {
  const t = useTranslations('nav');
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: t('home'), link: '/' },
    { name: t('applyNow'), link: '/apply' },
    { name: t('services'), link: '/services' },
    { name: t('universities'), link: '/universities' },
    { name: t('about'), link: '/about' },
  ];

  return (
    <Navbar>
      <NavBody>
        <div className="flex items-center">
          <NavbarLogo />
        </div>
        <div className="flex items-center justify-center">
          <NavItems items={navItems} />
        </div>
        <div className="flex items-center gap-3 justify-end relative z-20">
          <LanguageSwitcher />
          <ThemeToggle />
          <NavbarButton 
            href="/apply"
            as="a"
          >
            {t('bookConsultation')}
          </NavbarButton>
        </div>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
            <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </div>
        </MobileNavHeader>
        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {navItems.map((item) => (
            <a
              key={item.link}
              href={item.link}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-foreground hover:text-primary transition-colors w-full text-left"
            >
              {item.name}
            </a>
          ))}
          <NavbarButton
            href="/apply"
            as="a"
            onClick={() => setIsOpen(false)}
            className="w-full mt-4"
          >
            {t('bookConsultation')}
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
