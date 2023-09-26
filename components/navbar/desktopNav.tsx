'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navListType } from '.';
import SpaceBox from '../spaceBox';

interface desktopNavProps {
  navLists: navListType;
}

export default function DesktopNav(props: desktopNavProps) {
  const { navLists } = props;

  const pathname = usePathname();

  if (pathname === '/') return null;

  return (
    <div className="w-full flex items-center justify-around">
      {navLists.map(({ link, name }) => (
        <Link href={link} key={link}>
          <SpaceBox className="px-3 py-2">
            <span className="text-sm">{name}</span>
          </SpaceBox>
        </Link>
      ))}
    </div>
  );
}
