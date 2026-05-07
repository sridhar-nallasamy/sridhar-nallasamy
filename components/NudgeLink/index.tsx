'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ROUTES } from '@/constants';

import SpaceBox from '../SpaceBox';

const NudgeLink = () => {
  const pathname = usePathname();

  const nudgeItem = ROUTES[pathname as keyof typeof ROUTES];

  if (!nudgeItem) return null;

  return (
    <Link href={nudgeItem.nudgeLink}>
      <SpaceBox className='m-5 flex-col p-3 md:flex-row md:p-4 lg:m-auto lg:mb-6 lg:w-1/2'>
        <p className='mr-auto text-sm text-gray-300'>{nudgeItem.nudgeNote}</p>
        <span className='mr-2 ml-auto text-sm font-semibold text-green-400'>
          {nudgeItem.nudgeLabel} →
        </span>
      </SpaceBox>
    </Link>
  );
};

export default NudgeLink;
