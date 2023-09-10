'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@/assets/svg/heroIcons';
import { navListType } from '.';

interface MobileNavProps {
  navLists: navListType;
}

export default function MobileNav(props: MobileNavProps) {
  const { navLists } = props;

  const [isShowMobileNav, setIsShowMobileNav] = useState<boolean>(false);

  const closeHandler = () => {
    setIsShowMobileNav(false);
  };

  return (
    <div>
      {!isShowMobileNav ? (
        <Bars3Icon
          className="h-6 w-6 cursor-pointer"
          onClick={() => setIsShowMobileNav(true)}
        />
      ) : (
        <XMarkIcon
          className="h-6 w-6 cursor-pointer"
          onClick={() => setIsShowMobileNav(false)}
        />
      )}
      {isShowMobileNav && (
        <div className="h-full w-full absolute top-0 left-0 align-bottom z-[2]">
          <div className="h-[8%] bg-transparent" onClick={closeHandler} />
          <div className="h-[92%] flex flex-col bg-[#121314]">
            {navLists.map(({ name, link }) => (
              <Link
                key={link}
                href={link}
                onClick={closeHandler}
                className="h-20 border-b-[1px] border-b-[#001b36] flex items-center justify-center"
              >
                <h3>{name}</h3>
              </Link>
            ))}
            <h3 className="mt-auto mb-4 text-center">
              <span role="img">❗</span>Sridhar <span role="img">🙋🏼‍♂️</span>
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}
