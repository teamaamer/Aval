'use client';

import { useState } from 'react';
import { navigation } from '@/content/site';
import { ThemeToggle } from '@/components/theme-toggle';
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
  const [isOpen, setIsOpen] = useState(false);

  const navItems = navigation.map((item) => ({
    name: item.name,
    link: item.href,
  }));

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
          <ThemeToggle />
          <NavbarButton 
            href="/apply"
            as="a"
          >
            Book Consultation
          </NavbarButton>
        </div>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </div>
        </MobileNavHeader>
        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
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
            Book Consultation
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
