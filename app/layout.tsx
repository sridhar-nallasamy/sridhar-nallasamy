import './globals.css';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';

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
    <html lang='en' className='dark'>
      <body className={`${nunito.className} bg-[#282c34] text-white`}>
        {children}
      </body>
    </html>
  );
}
