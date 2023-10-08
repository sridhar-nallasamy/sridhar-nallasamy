import { ContactIconProps } from '@/types';
import Link from 'next/link';
import NextImg from 'next/image';
import CustomToolTip from '../customTooltip';

export default function ContactBox({ icon, title, href }: ContactIconProps) {
  return (
    <CustomToolTip title={title}>
      <Link
        className="m-2 lg:m-4"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <NextImg src={icon} alt={title} className="h-10 w-10 md:h-12 md:w-12" />
      </Link>
    </CustomToolTip>
  );
}
