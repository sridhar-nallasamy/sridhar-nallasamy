import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import SpaceBg from '@/components/spaceBg';
import Navbar from '@/components/navbar';

import './globals.css';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sridhar Nallasamy 😊',
  description: 'Portfolio Website of Sridhar Nallasamy',
  viewport: {
    width: 'device-width',
    initialScale: 1.0,
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
