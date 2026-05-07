import { JetBrains_Mono } from 'next/font/google';
import Link from 'next/link';

import { ROUTES } from '@/constants';
import type { HomeNudgeFc } from '@/types/components';
import { cn } from '@/utils/helpers';

import SpaceBox from '../SpaceBox';

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] });

const HomeNudge: HomeNudgeFc = ({ className }) => {
  return (
    <div className={className}>
      <SpaceBox className={cn('p-4', jetBrainsMono.className)}>
        <div
          className={cn(
            'w-full overflow-hidden rounded-lg border',
            'border-gray-800 bg-[#69696915]',
          )}
        >
          <div className='border-b border-b-gray-800 bg-[#69696930] px-3 py-2'>
            <span className='mr-2 text-cyan-400'>&gt;</span>
            <span className='text-xs font-semibold text-gray-400'>
              Navigate to...
            </span>
          </div>
          {Object.values(ROUTES).map(({ href, icon, description }) => (
            <Link href={href} key={href}>
              <div className='flex items-center gap-3 px-3 py-2.5 text-xs hover:bg-[#69696920]'>
                <span>{icon}</span>
                <span className='min-w-16 font-semibold text-gray-300'>
                  {href}
                </span>
                <p className='text-gray-500'>{description}</p>
                <kbd className='ml-auto rounded-lg border border-gray-700 bg-[#69696920] px-3 py-1 text-gray-400'>
                  ↵
                </kbd>
              </div>
            </Link>
          ))}
        </div>
      </SpaceBox>
    </div>
  );
};

export default HomeNudge;
