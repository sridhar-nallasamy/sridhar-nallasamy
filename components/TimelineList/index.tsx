import NextImage from 'next/image';

import type { TimelineFc } from '@/types/components';
import { cn } from '@/utils/helpers';

const TimelineList: TimelineFc = ({ name, logo, location, period }) => {
  return (
    <li
      className={cn(
        'relative pb-6 pl-7 last:pb-0 2xl:pl-8',
        'border-l-[1.5px] border-green-600 last:border-0',
      )}
    >
      <NextImage
        src={logo}
        alt={name}
        className={cn(
          'absolute -top-1 left-[-1.1rem] size-9 rounded-full object-contain',
          'border border-green-600 shadow-[1px_1px_3px_rgb(22,163,74)]',
          '2xl:-top-1.5 2xl:left-[-1.3rem] 2xl:size-10',
        )}
      />
      <p className='mb-1 text-base font-semibold 2xl:text-lg'>{name}</p>
      <p className='text-xs text-gray-400 2xl:text-sm'>
        {location}, {period}.
      </p>
    </li>
  );
};

export default TimelineList;
