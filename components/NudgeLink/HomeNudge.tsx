import { JetBrains_Mono } from 'next/font/google';
import Link from 'next/link';

import { ROUTES } from '@/constants';
import type { HomeNudgeFc } from '@/types/components';
import { cn } from '@/utils/helpers';

import SpaceBox from '../SpaceBox';

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] });

const HomeNudge: HomeNudgeFc = ({ className }) => {
  return (
    <SpaceBox className={cn(jetBrainsMono.className, className)}>
      <div
        className={cn(
          'w-full overflow-hidden rounded-lg border',
          'border-taupe-800 bg-[#2b242215]',
        )}
      >
        <div className='border-b border-b-taupe-800 bg-[#2b242225] px-3 py-2'>
          <span className='mr-2 text-taupe-500'>&gt;</span>
          <span className='text-xs text-taupe-400'>Navigate to...</span>
        </div>
        {Object.values(ROUTES).map(({ href, icon, nudgeNote }) => (
          <Link href={href} key={href}>
            <div className='flex items-center gap-3 px-3 py-2.5 text-xs hover:bg-[#2b242275]'>
              <span>{icon}</span>
              <span className='min-w-16 text-taupe-300'>{href}</span>
              <p className='text-taupe-500'>{nudgeNote}</p>
              <kbd className='ml-auto rounded-lg border border-taupe-700 bg-[#2b242250] px-3 py-1'>
                ↵
              </kbd>
            </div>
          </Link>
        ))}
      </div>
    </SpaceBox>
  );
};

export default HomeNudge;
