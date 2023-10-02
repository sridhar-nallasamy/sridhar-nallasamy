import {
  AwsIcon,
  CssIcon,
  ExpressIcon,
  FirebaseIcon,
  GitIcon,
  GithubIcon,
  HtmlIcon,
  IllustratorIcon,
  JavaIcon,
  JsIcon,
  NextIcon,
  NodeIcon,
  PhotoshopIcon,
  ReactIcon,
  ReduxIcon,
  SpringIcon,
  TailwindIcon,
  VercelIcon,
} from '@/assets/svg/icons8';
import BienesmartLogo from '@/assets/svg/bienesmart.svg';
import Link from 'next/link';
import NextImg from 'next/image';
import SpaceBox from '@/components/spaceBox';
import { TechListType } from './type';
import StackBox from './stackBox';
import VisualBox from './visualBox';

export default function Skills() {
  const FrontEndList: TechListType[] = [
    { title: 'HTML', icon: HtmlIcon },
    { title: 'CSS', icon: CssIcon },
    { title: 'JavaScript', icon: JsIcon },
    { title: 'React', icon: ReactIcon },
    { title: 'Redux', icon: ReduxIcon },
    { title: 'NextJs', icon: NextIcon },
    { title: 'Tailwind CSS', icon: TailwindIcon },
  ];

  const BackEndList: TechListType[] = [
    { title: 'Java', icon: JavaIcon },
    { title: 'Spring Boot', icon: SpringIcon },
    { title: 'NodeJs', icon: NodeIcon },
    { title: 'ExpressJs', icon: ExpressIcon },
  ];

  const ToolsList: TechListType[] = [
    { title: 'Git', icon: GitIcon },
    { title: 'GitHub', icon: GithubIcon },
    { title: 'Firebase', icon: FirebaseIcon },
    { title: 'Vercel', icon: VercelIcon },
    { title: 'AWS', icon: AwsIcon },
  ];

  const PassionList: TechListType[] = [
    { title: 'Photoshop', icon: PhotoshopIcon },
    { title: 'Illustrator', icon: IllustratorIcon },
  ];

  return (
    <div className="flex flex-wrap items-center justify-evenly m-4">
      <SpaceBox className="p-4 flex-col w-full lg:p-6">
        <h3>
          I always believes that &quot;
          <span className="text-red-200">
            <span role="img">❗️</span>Keep Learning
            <span role="img" className="ml-2">
              🏃🏻‍♂️
            </span>
          </span>
          &quot; is one of the best surviving techniques,
        </h3>
        <h3>
          And this keeping me engaging myself in learning new skills &
          thechnologies.
        </h3>
        <h3>
          Below I&#39;ve enlisted some of the tech stacks where I worked on
          &nbsp;
          <span role="img">😊</span>
        </h3>
        <StackBox name="Front-End" techList={FrontEndList} />
        <StackBox name="Back-End" techList={BackEndList} />
        <StackBox name="Tool / Infra" techList={ToolsList} />
      </SpaceBox>
      <SpaceBox className="flex-col mt-4 w-full p-4 lg:p-6 lg:mt-6">
        <h3>
          Beside technologies, I&#39;m engrossed in visual effects and computer
          graphics which cheered me up to explore & practice these tools & try
          something new,
        </h3>
        <VisualBox passionList={PassionList} />
      </SpaceBox>
      <SpaceBox className="flex-col my-4 lg:my-6 w-full h-fit md:w-1/5">
        <div className="bg-slate-700 rounded-t-lg w-full py-1 md:py-2">
          <h3 className="text-white text-center">My-Build</h3>
        </div>
        <div className="my-4">
          <Link
            href="https://bienes-mart.web.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group cursor-pointer"
            title="BienesMart"
          >
            <div className="h-fit w-fit bg-white overflow-hidden rounded-md relative">
              <NextImg
                src={BienesmartLogo}
                alt="BienesmartLogo"
                quality={100}
                className="h-28 w-28 duration-300 rounded-md group-hover:rotate-45"
              />
              <div className="absolute flex items-center justify-center duration-300 top-0 w-full h-full bg-[rgba(0,0,0,0.5)] rounded-md translate-y-28 group-hover:translate-y-0">
                <h3 className="text-sm">
                  BienesMart&nbsp;<span role="img">🔗</span>
                </h3>
              </div>
            </div>
          </Link>
        </div>
      </SpaceBox>
    </div>
  );
}
