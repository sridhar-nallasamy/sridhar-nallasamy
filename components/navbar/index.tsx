import Link from 'next/link';
import NextImg from 'next/image';
import VgsLogo from '@/assets/png/VGS.png';
import MobileNav from './mobileNav';
import DesktopNav from './desktopNav';

export type navListType = { name: string; link: string }[];

export default function Navbar() {
  const navLists: navListType = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Skills', link: '/skills' },
    { name: "Let's talk", link: 'contact' },
  ];

  return (
    <nav className="flex items-center justify-between lg:justify-center px-6 lg:flex-col">
      <Link href="/">
        <NextImg
          src={VgsLogo}
          alt="Vgs Logo"
          quality={100}
          className="h-[4.5rem] w-[4.5rem] md:[5.3rem] md:w-[5.3rem] lg:h-24 lg:w-24 object-contain cursor-pointer pointer-events-none"
        />
      </Link>
      <div id="desktop-nav" className="hidden lg:block lg:w-2/3 lg:mt-1">
        <DesktopNav navLists={navLists} />
      </div>
      <div id="mobile-nav" className="lg:hidden">
        <MobileNav navLists={navLists} />
      </div>
    </nav>
  );
}