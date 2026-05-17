'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ROUTES } from '@/constants';

import SpaceBox from '../SpaceBox';
import HomeNudge from './HomeNudge';

const NudgeLink = () => {
  const pathname = usePathname();

  const nudgeItem = ROUTES[pathname as keyof typeof ROUTES];

  if (!nudgeItem)
    return (
      <HomeNudge className='px-5 py-6 lg:mx-auto lg:my-6 lg:w-[70%] lg:p-0' />
    );

  const { description, label } =
    ROUTES[nudgeItem.nudgeLink as keyof typeof ROUTES];

  return (
    <Link href={nudgeItem.nudgeLink}>
      <SpaceBox className='m-5 flex-col p-3 md:flex-row md:p-4 lg:m-auto lg:mb-6 lg:w-1/2'>
        <p className='mr-auto text-sm text-gray-300'>{description}</p>
        <span className='mr-2 ml-auto text-sm font-semibold text-green-400'>
          {label} →
        </span>
      </SpaceBox>
    </Link>
  );
};

export default NudgeLink;
