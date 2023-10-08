import Link from 'next/link';
import NextImg from 'next/image';
import { BuildsBoxProps } from '@/types';

export default function BuildsBox({ buildsList }: BuildsBoxProps) {
  return (
    <>
      <div className="bg-slate-700 rounded-t-lg w-full py-1 md:py-2">
        <h3 className="text-white text-center">My-Build</h3>
      </div>
      {buildsList.map(({ title, image, link }, idx) => (
        <div className="my-4 group cursor-pointer" title={title} key={idx}>
          <div className="h-fit w-fit bg-white overflow-hidden rounded-md relative">
            <NextImg
              src={image}
              alt="BienesmartLogo"
              quality={100}
              className="h-28 w-28 duration-300 rounded-md group-hover:rotate-45"
            />
            <div className="absolute grid place-content-center duration-300 top-0 w-full h-full bg-[rgba(0,0,0,0.5)] rounded-md translate-y-28 group-hover:translate-y-0">
              <Link href={link} target="_blank" rel="noopener noreferrer">
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
    </>
  );
}
