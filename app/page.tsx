import NextImage from 'next/image';
import SpaceBox from '@/components/spaceBox';
import TechieImg from '@/assets/svg/Techie.svg';

export default function Home() {
  type pagesType = { key: number; name: string };

  const pages: pagesType[] = [
    { key: 1, name: 'About' },
    { key: 2, name: 'Skills' },
    { key: 3, name: 'Contact' },
  ];

  return (
    <div className="p-4 h-5/6 lg:p-8">
      <SpaceBox
        id="home-main"
        className="h-2/3 lg:h-3/4 w-full flex flex-col lg:flex-row"
      >
        <div
          id="home-main-left"
          className="w-full h-1/2 flex items-center justify-center lg:w-1/2 lg:h-full lg:justify-end"
        >
          <div className="text-center pointer-events-none lg:w-4/6">
            <h3 className="text-base lg:text-lg">
              <span role="img" aria-label="hi text">
                Hi 👋🏼 myself,
              </span>
            </h3>
            <h1 className="text-lg tracking-wider my-2 text-green-400 lg:text-xl">
              Sridhar Nallasamy
            </h1>
            <h3 className="text-sm lg:text-base">Software Engineer</h3>
          </div>
        </div>
        <div
          id="home-main-right"
          className="w-full h-1/2 flex items-center justify-center lg:w-1/2 lg:h-full lg:justify-start"
        >
          <NextImage
            src={TechieImg}
            alt="TechieImg"
            className="h-32 w-fit object-contain pointer-events-none md:h-40 lg:h-56"
          />
        </div>
      </SpaceBox>
      <div
        id="home-secondary"
        className="grid h-1/3 gap-4 mt-4 lg:grid-cols-3 lg:h-1/5 lg:gap-6 lg:mt-6"
      >
        {pages.map(({ key, name }) => (
          <SpaceBox
            key={key}
            className="group duration-150 ease-in cursor-pointer hover:bg-gradient-to-br hover:from-[#55ff0040] hover:to-[#ff000040]"
          >
            <h3 className="duration-150 lg:group-hover:text-lg">{name}</h3>
          </SpaceBox>
        ))}
      </div>
    </div>
  );
}
