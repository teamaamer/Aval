import type { Metadata } from "next";
import { Bricolage_Grotesque, Urbanist, Noto_Sans_Arabic } from "next/font/google";
import Script from "next/script";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NavbarWrapper } from "@/components/navbar-wrapper";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/content/site";
import { routing } from '@/i18n/routing';

const bricolageGrotesque = Bricolage_Grotesque({ 
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const urbanist = Urbanist({ 
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["study in Spain", "student visa", "Spanish universities", "study abroad", "international students"],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${bricolageGrotesque.variable} ${urbanist.variable}`} suppressHydrationWarning dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body
        className={`${urbanist.variable} ${bricolageGrotesque.variable} ${notoSansArabic.variable} antialiased ${locale === 'ar' ? 'font-arabic' : ''}`}
        dir={locale === 'ar' ? 'rtl' : 'ltr'}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            disableTransitionOnChange
          >
            <NavbarWrapper />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
        <Script
          src="https://www-cdn.icef.com/scripts/iasbadgeid.js"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
