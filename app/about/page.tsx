import Link from 'next/link';
import {
  ChevronDoubleRightIcon,
  DocumentTextIcon,
} from '@/assets/svg/heroIcons';
import SpaceBox from '@/components/spaceBox';

type TimelineProps = {
  emoji: string;
  year: string;
  where: string;
  descriptions: string[];
};

type HobbiesListProps = {
  prefixEmoji: string;
  descriiption: string;
  suffixEmoji: string;
};

type NextLinkProps = {
  link: string;
  coverText: string;
};

function TimelineList(props: TimelineProps) {
  const { emoji, year, where, descriptions } = props;

  return (
    <li className="relative border-l-[1.5px] border-green-600 pl-6 pb-6 last:border-0 last:pb-0 before:absolute before:top-0 before:left-[-10px] before:w-4 before:h-4 before:bg-green-100 before:rounded-[50%] before:border-[1px] before:border-green-600 before:shadow-[2px_1px_0_rgb(22,163,74)]">
      <h3 className="mb-1 text-base text-green-100">
        <span role="img" className="mr-2">
          {emoji}
        </span>
        {year}
      </h3>
      <h4 className="text-sm">{where}</h4>
      {descriptions.map((description, idx) => (
        <h5 key={idx} className="text-xs mt-1 ml-6 first-of-type:mt-2">
          <span role="img" className="mr-3 text-green-100">
            •
          </span>
          {description}
        </h5>
      ))}
    </li>
  );
}

export default function About() {
  const timelineList: TimelineProps[] = [
    {
      emoji: '🎓',
      year: '2015 - 2019',
      where: 'K S Rangasamy College of Technology, Tiruchengode',
      descriptions: ['BTech - Information Technology'],
    },
    {
      emoji: '💼',
      year: '2019 - 2022',
      where: 'Virtusa, Hyderabad',
      descriptions: ['Java & SpringBoot'],
    },
    {
      emoji: '💼',
      year: '2022 - Present',
      where: 'Deloitte, Bangalore',
      descriptions: ['ReactJs, Single Spa, NodeJs & AWS'],
    },
  ];

  const hobbiesList: HobbiesListProps[] = [
    {
      prefixEmoji: '😁',
      descriiption: 'Other than softwares, I do',
      suffixEmoji: '🏃🏻‍♂️',
    },
    {
      prefixEmoji: '📺',
      descriiption: "Watching Anime's, obviously fan of Naruto & One Piece",
      suffixEmoji: '🤩 🏴‍☠️',
    },
    {
      prefixEmoji: '🎧',
      descriiption: "Enjoying music's, especially instrumentals",
      suffixEmoji: '🎹',
    },
    {
      prefixEmoji: '🚘 🏍️',
      descriiption: 'Roaming around with friends, always feels home & peace',
      suffixEmoji: '💖',
    },
  ];

  const nextLinks: NextLinkProps[] = [
    {
      link: '/skills',
      coverText: 'Wanna checkout my area of expertise & works?',
    },
    {
      link: '/contact',
      coverText: 'Wanna reach out to me?',
    },
  ];

  return (
    <div className="p-4 lg:p-8">
      <SpaceBox className="p-5 flex-col">
        <ul className="relative">
          {timelineList.map(({ emoji, year, where, descriptions }, idx) => (
            <TimelineList key={idx} {...{ emoji, year, where, descriptions }} />
          ))}
        </ul>
      </SpaceBox>
      <SpaceBox className="mx-auto mt-4 p-4 lg:w-fit lg:mt-5">
        <h3 className="mr-12">Here&#39;s my resume</h3>
        <Link
          href="https://drive.google.com/drive/folders/17DzuZ44OM9F5yqqA-DdXzIQ3GM3dd5Ha?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
          title="Sridhar Resume"
        >
          <DocumentTextIcon className="h-6 w-6 text-green-100" />
        </Link>
      </SpaceBox>
      <SpaceBox className="flex-col mt-4 py-2 px-4 lg:mt-6 lg:p-4">
        {hobbiesList.map(({ prefixEmoji, descriiption, suffixEmoji }, idx) => (
          <h3 key={idx} className="leading-loose first:text-green-100">
            <span role="img" className="mr-2">
              {prefixEmoji}
            </span>
            {descriiption}
            <span role="img" className="ml-2">
              {suffixEmoji}
            </span>
          </h3>
        ))}
      </SpaceBox>
      <div className="flex flex-col items-center justify-evenly mt-4 lg:flex-row lg:mt-6">
        {nextLinks.map(({ link, coverText }, idx) => (
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
    </div>
  );
}
