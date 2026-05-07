import Link from 'next/link';

import { DocumentTextIcon } from '@/assets/svg/heroIcons';
import { RESUME_DRIVE_LINK } from '@/constants';

import SpaceBox from '../SpaceBox';

const Resume = () => {
  return (
    <SpaceBox className='mb-4 gap-4 p-4 lg:mb-6 lg:h-1/4' id='resume-link'>
      <p className='font-semibold 2xl:text-lg'>Here&#39;s my resume 👉🏻</p>
      <Link
        href={RESUME_DRIVE_LINK}
        target='_blank'
        rel='noopener noreferrer'
        className='cursor-pointer'
        title='Sridhar Resume'
      >
        <DocumentTextIcon className='size-6 animate-pulse text-green-200 2xl:size-7' />
      </Link>
    </SpaceBox>
  );
};

export default Resume;
