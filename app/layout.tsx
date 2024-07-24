import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import SpaceBg from '@/components/spaceBg';
import Navbar from '@/components/navbar';

import './globals.css';

const nunito = Nunito({ subsets: ['latin'] });

const metaInfo = {
  title: 'Sridhar Nallasamy 😊',
  description: 'Portfolio Website of Sridhar Nallasamy',
};

export const metadata: Metadata = {
  ...metaInfo,
  viewport: {
    width: 'device-width',
    initialScale: 1.0,
  },
  openGraph: {
    ...metaInfo,
    url: 'https://sridhar-nallasamy.vercel.app/',
    siteName: metaInfo.title,
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/sridhar-nallasamy/sridhar-nallasamy/og-update/assets/png/VgsOgImg.png',
        width: 1200,
        height: 627,
        alt: metaInfo.title,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${nunito.className} bg-space-dark text-white h-screen`}>
        <SpaceBg />
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
