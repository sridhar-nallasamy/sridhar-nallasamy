import NextImg from 'next/image';
import Link from 'next/link';

import type { ContactBoxFc } from '@/types/components';

const ContactBox: ContactBoxFc = ({ icon, title, note, href }) => {
  return (
    <Link
      className='flex w-full items-center gap-2'
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      title={title}
    >
      <NextImg quality={100} src={icon} alt={title} className='size-10' />
      <div>
        <span className='text-sm'>{title}</span>
        <p className='text-xs text-gray-400'>{note}</p>
      </div>
      <span className='mr-3 ml-auto text-gray-500'>→</span>
    </Link>
  );
};

export default ContactBox;
