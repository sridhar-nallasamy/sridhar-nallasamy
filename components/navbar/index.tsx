import Link from 'next/link';
import NextImg from 'next/image';
import VgsLogo from '@/assets/png/VGS.png';
import { pageLinks } from '@/constants';
import MobileNav from './mobileNav';
import DesktopNav from './desktopNav';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between lg:justify-center px-6 lg:flex-col">
      <Link href="/">
        <NextImg
          src={VgsLogo}
          alt="Vgs Logo"
          quality={100}
          priority
          className="h-[4.5rem] w-[4.5rem] md:[5.3rem] md:w-[5.3rem] lg:h-24 lg:w-24 object-contain cursor-pointer pointer-events-none"
        />
      </Link>
      <div id="desktop-nav" className="hidden lg:block lg:w-2/3 lg:mt-1">
        <DesktopNav navList={pageLinks} />
      </div>
      <div id="mobile-nav" className="lg:hidden">
        <MobileNav navList={pageLinks} />
      </div>
    </nav>
  );
}
