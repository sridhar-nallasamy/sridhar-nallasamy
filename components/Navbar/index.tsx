'use client';

import NextImg from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import VgsLogo from '@/assets/svg/VGS.svg';
import { ROUTES } from '@/constants';
import type { NavbarFc } from '@/types/components';
import { cn } from '@/utils/helpers';

const Navbar: NavbarFc = ({ className }) => {
  const pathname = usePathname();

  return (
    <nav className={cn('flex items-center gap-4 px-6', className)}>
      <Link href='/' className='mr-auto' title='SN Logo'>
        <NextImg
          src={VgsLogo}
          alt='SN Logo'
          quality={100}
          loading='eager'
          className={cn(
            'pointer-events-none flex-1 cursor-pointer object-contain',
            'size-18 md:size-20 lg:size-20',
          )}
        />
      </Link>
      {Object.values(ROUTES).map(({ href, title }) => (
        <Link href={href} key={href}>
          <span
            className={cn(
              'text-sm font-semibold 2xl:text-base',
              'text-gray-400 transition duration-250 hover:text-green-400',
              pathname === href && 'border-b text-green-400',
            )}
          >
            {title}
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
