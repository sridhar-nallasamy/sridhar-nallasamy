import Link from 'next/link';
import NextImg from 'next/image';

import { type BuildsBoxFc } from '@/types/components';

const BuildsBox: BuildsBoxFc = ({ buildsList }) => {
  return (
    <div className="w-full">
      <div className="bg-slate-700 rounded-t-lg py-1 md:py-2">
        <h3 className="text-white text-center">My-Builds</h3>
      </div>
      <div className="flex justify-evenly">
        {buildsList.map(({ title, image, link, type }, idx) => (
          <div className="my-4 group cursor-pointer" title={title} key={idx}>
            <div className="h-fit w-fit overflow-hidden rounded-md relative bg-white">
              <NextImg
                src={image}
                alt="BienesmartLogo"
                quality={100}
                className={`h-28 w-28 duration-300 rounded-md ${!type ? 'group-hover:rotate-45' : 'py-[0.4rem] pr-1 group-hover:pr-0'}`}
              />
              {type && (
                <div className="absolute right-[0.4rem] bottom-2 duration-300 group-hover:translate-x-24">
                  <h6 className="text-xs font-semibold text-green-900">
                    {type}
                  </h6>
                </div>
              )}
              <div className="absolute grid place-content-center duration-300 top-0 w-full h-full bg-[rgba(0,0,0,0.5)] rounded-md translate-y-28 group-hover:translate-y-0">
                <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 text-center"
                >
                  <h5 className="text-xs">Wanna checkout?</h5>
                  <h4 className="text-sm">
                    {title}&nbsp;
                    <span role="img">🔗</span>
                  </h4>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuildsBox;
