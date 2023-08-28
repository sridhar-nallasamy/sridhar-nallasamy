import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import SpaceBg from '@/components/spaceBg';
import './globals.css';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sridhar Nallasamy 😊',
  description: 'Portfolio Website of Sridhar Nallasamy 😊',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${nunito.className} bg-[#1e2022] h-full w-full text-white overflow-hidden`}
      >
        <SpaceBg />
        {children}
      </body>
    </html>
  );
}
