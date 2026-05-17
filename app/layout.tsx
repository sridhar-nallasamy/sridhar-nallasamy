import './globals.css';

import type { Metadata, Viewport } from 'next';
import { Nunito } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import Navbar from '@/components/Navbar';
import NudgeLink from '@/components/NudgeLink';
import ScrollToTop from '@/components/ScrollToTop';
import SpaceBackground from '@/components/SpaceBackground';
import { META_INFO } from '@/constants';
import { cn } from '@/utils/helpers';

const nunito = Nunito({ subsets: ['latin'] });

export const viewport: Viewport = {
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  ...META_INFO,
  openGraph: {
    ...META_INFO,
    siteName: META_INFO.title,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={cn(nunito.className, 'antialiased')}>
      <body
        className={cn(
          nunito.className,
          'flex h-dvh flex-col bg-[#333333] text-white',
        )}
      >
        <ScrollToTop />
        <SpaceBackground />
        <Navbar className='pt-2 lg:px-10 lg:pt-4' />
        <main className='flex-1 p-5 pt-4 lg:p-6 lg:pt-4'>{children}</main>
        <NudgeLink />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
