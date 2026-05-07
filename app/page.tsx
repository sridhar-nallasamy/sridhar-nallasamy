import NextImage from 'next/image';

import TechieImg from '@/assets/svg/Techie.svg';
import HomeNudge from '@/components/NudgeLink/HomeNudge';
import SpaceBox from '@/components/SpaceBox';
import Terminal from '@/components/Terminal';
import { cn } from '@/utils/helpers';

export default function Home() {
  return (
    <>
      <SpaceBox
        className={cn(
          'grid grid-cols-1 grid-rows-[4fr_6fr] p-4',
          'lg:h-3/5 lg:grid-cols-2 lg:grid-rows-1 lg:gap-8 lg:p-6',
          '2xl:p-7',
        )}
      >
        <Terminal className='h-11/12 2xl:h-10/12' />
        <NextImage
          src={TechieImg}
          alt='hero-image'
          loading='eager'
          className={cn(
            'm-auto w-fit',
            '-order-1 h-30',
            'lg:order-1 lg:h-45',
            '2xl:h-53',
          )}
        />
      </SpaceBox>
      <HomeNudge className='my-5 p-4 lg:mx-auto lg:my-6 lg:w-[70%]' />
    </>
  );
}
