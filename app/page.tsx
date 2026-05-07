import NextImage from 'next/image';

import TechieImg from '@/assets/svg/Techie.svg';
import SpaceBox from '@/components/SpaceBox';
import Terminal from '@/components/Terminal';
import { cn } from '@/utils/helpers';

export default function Home() {
  return (
    <SpaceBox
      className={cn(
        'grid grid-cols-1 grid-rows-[4fr_6fr] p-4',
        'lg:gap-6',
        'xl:h-full xl:grid-cols-2 xl:grid-rows-1 xl:gap-7 xl:p-6',
        '2xl:gap-8 2xl:p-10',
      )}
    >
      <Terminal className='h-fit' />
      <NextImage
        src={TechieImg}
        alt='hero-image'
        loading='eager'
        className={cn(
          'm-auto w-fit',
          '-order-1 h-30',
          'lg:h-40 xl:order-1',
          '2xl:h-55',
        )}
      />
    </SpaceBox>
  );
}
