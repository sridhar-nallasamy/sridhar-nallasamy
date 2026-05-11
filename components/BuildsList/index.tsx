import NextImg from 'next/image';
import Link from 'next/link';

import { BUILDS } from '@/constants';
import type { BuildsListFc } from '@/types/components';
import { cn } from '@/utils/helpers';

import BlockTitle from '../BlockTitle';
import Chip from '../Chip';
import SpaceBox from '../SpaceBox';

const BuildsList: BuildsListFc = ({ className }) => {
  return (
    <SpaceBox className={cn('w-full flex-col p-4 lg:p-6', className)}>
      <BlockTitle title='🏗️ Personal Builds' />
      <div className='flex flex-col items-center gap-6 lg:flex-row'>
        {BUILDS.map(({ title, link, image, description, keywords }) => (
          <Link
            key={title}
            title={title}
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className={cn(
              'h-fit cursor-pointer overflow-hidden',
              'rounded-2xl border-3 border-[#69696915] bg-[#69696915]',
              'transition-transform hover:scale-105',
              'w-70 lg:w-72 2xl:w-84',
            )}
          >
            <NextImg
              src={image}
              width={1200}
              height={630}
              alt={title}
              quality={100}
              loading='eager'
              className='h-35 w-full lg:h-36 2xl:h-40'
            />
            <div className='mx-2 mt-3 mb-0 flex flex-wrap gap-1 lg:gap-1.5 2xl:gap-2'>
              {keywords.map((key) => (
                <Chip
                  key={key}
                  className='border-green-950 bg-[#032e1550] px-1.5 py-0 text-[10px] font-semibold hover:border-green-900 2xl:text-xs'
                >
                  {key}
                </Chip>
              ))}
            </div>
            <div className='px-3 py-2'>
              <span className='text-sm font-semibold 2xl:text-base'>
                {title}
              </span>
              <p className='mt-1 text-xs text-gray-400 2xl:text-sm'>
                {description}
              </p>
              <p className='mt-2 truncate text-xs text-gray-500 2xl:text-sm'>
                <span className='mr-2'>🔗</span>
                {new URL(link).host}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </SpaceBox>
  );
};

export default BuildsList;
