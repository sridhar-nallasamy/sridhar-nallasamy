'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

import { Bars3Icon, XMarkIcon } from '@/assets/svg/heroIcons';
import { type DesktopNavFc } from '@/types/components';

const MobileNav: DesktopNavFc = ({ navList }) => {
  const [isShowMobileNav, setIsShowMobileNav] = useState<boolean>(false);

  const closeHandler = () => {
    setIsShowMobileNav(false);
  };

  useEffect(() => {
    if (isShowMobileNav) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'scroll';
      };
    }
  }, [isShowMobileNav]);

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
          <div className="h-[10%] bg-transparent" onClick={closeHandler} />
          <div className="h-[86%] flex flex-col bg-[#121314] rounded-xl border-[#001b36] border-[1px] mx-3">
            {navList.map(({ title, link }) => (
              <Link
                key={link}
                href={link}
                onClick={closeHandler}
                className="h-20 border-b-[1px] border-b-[#001b36] flex items-center justify-center"
              >
                <h3>{title}</h3>
              </Link>
            ))}
            <h3 className="mt-auto mb-4 text-center">
              <span role="img">❗</span>Sridhar <span role="img">🙋🏼‍♂️</span>
            </h3>
          </div>
          <div className="h-[4%] bg-transparent" onClick={closeHandler} />
        </div>
      )}
    </div>
  );
};

export default MobileNav;
