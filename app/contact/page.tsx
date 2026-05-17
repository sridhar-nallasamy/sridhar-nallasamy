import { Fragment } from 'react';

import Clock from '@/components/Clock';
import ContactBox from '@/components/ContactBox';
import SpaceBox from '@/components/SpaceBox';
import { CONTACTS } from '@/constants';
import { cn } from '@/utils/helpers';

export default function Contact() {
  return (
    <div
      className={cn(
        'flex justify-center',
        'flex-col gap-4',
        'lg:flex-row lg:gap-6',
        '2xl:h-full 2xl:items-center',
      )}
    >
      <SpaceBox
        className={cn(
          'h-fit flex-col items-start gap-2 p-4 lg:w-1/3',
          '2xl:mb-44',
        )}
      >
        <h1 className='text-2xl font-bold'>
          Let&#39;s build
          <br />
          something together.
        </h1>
        <p className='text-sm text-gray-300'>
          Whether it&#39;s a product, a collaboration, or just a good
          conversation about software engineering - I&#39;m all ears.
        </p>
        <p
          className={cn(
            'my-2 inline-flex items-center gap-2 rounded-full px-2 py-1',
            'border border-green-700 bg-[#00c95025] text-xs font-semibold text-green-400',
            'before:size-1.5 before:animate-pulse before:rounded-full before:bg-green-500 before:content-[""]',
          )}
        >
          Open to opportunities
        </p>
        <p className='flex items-center text-xs font-semibold text-gray-400'>
          📍 India<span className='mx-1'>・</span>
          <Clock />
        </p>
      </SpaceBox>
      <div className='lg:w-1/3'>
        {CONTACTS.map((contact, idx) => (
          <Fragment key={contact.title}>
            {idx === 1 && (
              <p
                className={cn(
                  'mt-6 mb-3 flex items-center gap-3',
                  'text-[10px] font-bold text-gray-400',
                  'before:h-px before:flex-1 before:rounded-l-full before:bg-gray-400 before:content-[""]',
                  'after:h-px after:flex-1 after:rounded-r-full after:bg-gray-400 after:content-[""]',
                )}
              >
                OR FIND ME ON
              </p>
            )}
            <SpaceBox
              className={cn(
                'mb-4 justify-start p-2',
                'duration-250 hover:scale-103',
              )}
            >
              <ContactBox {...contact} />
            </SpaceBox>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
