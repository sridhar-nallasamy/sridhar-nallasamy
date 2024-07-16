'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { type DesktopNavFc } from '@/types/components';

import SpaceBox from '../spaceBox';

const DesktopNav: DesktopNavFc = ({ navList }) => {
  const pathname = usePathname();

  if (pathname === '/') return null;

  return (
    <div className="w-full flex items-center justify-around">
      {navList.map(({ link, title }) => (
        <Link href={link} key={link}>
          <SpaceBox className="px-3 py-2">
            <span className="text-sm">{title}</span>
          </SpaceBox>
        </Link>
      ))}
    </div>
  );
};

export default DesktopNav;
