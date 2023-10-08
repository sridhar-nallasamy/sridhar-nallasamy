import Link from 'next/link';
import {
  ChevronDoubleRightIcon,
  DocumentTextIcon,
} from '@/assets/svg/heroIcons';
import SpaceBox from '@/components/spaceBox';
import { HobbiesListProps, NextLinkProps, TimelineProps } from '@/types';
import TimelineList from '@/components/timelineList';

export default function About() {
  const educationList: TimelineProps[] = [
    {
      emoji: '🎓',
      year: '2015 - 2019',
      where: 'K S Rangasamy College of Technology, Tiruchengode',
      descriptions: ['BTech - Information Technology'],
    },
  ];

  const workList: TimelineProps[] = [
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
      descriiption:
        'Roaming around with friends, and this always feels home & peace',
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
      <div className="flex flex-col lg:flex-row justify-evenly">
        <SpaceBox className="p-5 flex-col lg:justify-start lg:w-[45%]">
          <ul className="relative">
            {educationList.map((educationListProps, idx) => (
              <TimelineList key={idx} {...educationListProps} />
            ))}
          </ul>
        </SpaceBox>
        <SpaceBox className="p-5 flex-col mt-4 lg:mt-0 lg:w-[45%]">
          <ul className="relative">
            {workList.map((worklistProps, idx) => (
              <TimelineList key={idx} {...worklistProps} />
            ))}
          </ul>
        </SpaceBox>
      </div>
      <SpaceBox className="mx-auto mt-4 p-4 lg:w-fit lg:mt-6">
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
