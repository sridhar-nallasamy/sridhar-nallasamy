import Link from 'next/link';

import { type PageLinksBoxFc } from '@/types/components';
import { ChevronDoubleRightIcon } from '@/assets/svg/heroIcons';

import SpaceBox from '../spaceBox';

const PageLinksBox: PageLinksBoxFc = ({ pageLinks }) => {
  return (
    <div className="flex flex-col items-center justify-evenly mt-4 lg:flex-row lg:mt-6">
      {pageLinks.map(({ link, coverText }, idx) => (
        <Link
          key={idx}
          href={link}
          className="w-full last:mt-4 last:lg:mt-0 lg:w-1/3"
        >
          <SpaceBox className="p-4 lg:p-6">
            <h3 className="w-3/4 text-center">{coverText}</h3>
            <ChevronDoubleRightIcon className="h-5 w-1/4 text-red-100" />
          </SpaceBox>
        </Link>
      ))}
    </div>
  );
};

export default PageLinksBox;
