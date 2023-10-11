'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavListProps } from '@/types';
import SpaceBox from '../spaceBox';

export default function DesktopNav({ navList }: NavListProps) {
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
}
