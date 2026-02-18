'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const languages = [
  { 
    code: 'en', 
    name: 'EN',
    fullName: 'English',
    flag: '/flags/uksvg.svg'
  },
  { 
    code: 'ar', 
    name: 'AR',
    fullName: 'العربية',
    flag: '/flags/svgksa.svg'
  },
  { 
    code: 'es', 
    name: 'ES',
    fullName: 'Español',
    flag: '/flags/esp.svg'
  },
];

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find((lang) => lang.code === locale);

  const switchLanguage = (newLocale: string) => {
    const segments = pathname.split('/');
    const currentLocaleInPath = segments[1];
    
    if (['en', 'ar', 'es'].includes(currentLocaleInPath)) {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }
    
    const newPath = segments.join('/') || '/';
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center p-1.5 rounded-md hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
        aria-label="Switch language"
      >
        {currentLanguage?.flag && (
          <Image 
            src={currentLanguage.flag} 
            alt={currentLanguage.fullName}
            width={24}
            height={24}
            className="w-6 h-6 rounded"
          />
        )}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-2 z-50 w-40 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg py-1 overflow-hidden">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => switchLanguage(lang.code)}
                className={cn(
                  'w-full px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center gap-2 text-gray-900 dark:text-gray-100',
                  locale === lang.code && 'bg-gray-100 dark:bg-gray-800'
                )}
              >
                <Image 
                  src={lang.flag} 
                  alt={lang.fullName}
                  width={20}
                  height={20}
                  className="w-5 h-5 rounded"
                />
                <span className="text-sm font-medium">{lang.fullName}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
