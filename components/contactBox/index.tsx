import Link from 'next/link';
import NextImg from 'next/image';

import { type ContactBoxFc } from '@/types/components';

import CustomTooltip from '../customTooltip';

const ContactBox: ContactBoxFc = ({ icon, title, href }) => {
  return (
    <CustomTooltip title={title}>
      <Link
        className="m-2 lg:m-4"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <NextImg
          quality={100}
          src={icon}
          alt={title}
          className="h-10 w-10 md:h-12 md:w-12"
        />
      </Link>
    </CustomTooltip>
  );
};

export default ContactBox;
