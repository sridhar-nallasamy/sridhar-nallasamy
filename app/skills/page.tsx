import {
  AwsIcon,
  CssIcon,
  DockerIcon,
  ExpressIcon,
  FirebaseIcon,
  GcpIcon,
  GitIcon,
  GithubIcon,
  HtmlIcon,
  IllustratorIcon,
  JavaIcon,
  JsIcon,
  K8sIcon,
  NextIcon,
  NodeIcon,
  PhotoshopIcon,
  ReactIcon,
  ReduxIcon,
  SpringIcon,
  TailwindIcon,
  TsIcon,
} from '@/assets/svg/icons8';
import BienesmartLogo from '@/assets/svg/bienesmart.svg';
import PrintinkzLogo from '@/assets/svg/printinkz.svg';
import SpaceBox from '@/components/spaceBox';
import VisualBox from '@/components/visualBox';
import BuildsBox from '@/components/buildsBox';
import StackBox from '@/components/stackBox';
import type { BuildsListType, TechListType } from '@/types';
import PageLinksBox from '@/components/pageLinksBox';
import { getPageLinks } from '@/utils/helpers';

export default function Skills() {
  const frontEndList: TechListType[] = [
    { title: 'HTML', icon: HtmlIcon },
    { title: 'CSS', icon: CssIcon },
    { title: 'JavaScript', icon: JsIcon },
    { title: 'React', icon: ReactIcon },
    { title: 'Redux', icon: ReduxIcon },
    { title: 'NextJs', icon: NextIcon },
    { title: 'Tailwind CSS', icon: TailwindIcon },
  ];

  const backEndList: TechListType[] = [
    { title: 'Java', icon: JavaIcon },
    { title: 'Spring Boot', icon: SpringIcon },
    { title: 'Typescript', icon: TsIcon },
    { title: 'NodeJs', icon: NodeIcon },
    { title: 'ExpressJs', icon: ExpressIcon },
  ];

  const toolsList: TechListType[] = [
    { title: 'Git', icon: GitIcon },
    { title: 'GitHub', icon: GithubIcon },
    { title: 'Docker', icon: DockerIcon },
    { title: 'K8s', icon: K8sIcon },
    { title: 'Firebase', icon: FirebaseIcon },
    { title: 'GCP', icon: GcpIcon },
    { title: 'AWS', icon: AwsIcon },
  ];

  const passionList: TechListType[] = [
    { title: 'Photoshop', icon: PhotoshopIcon },
    { title: 'Illustrator', icon: IllustratorIcon },
  ];

  const buildsList: BuildsListType[] = [
    {
      title: 'BienesMart',
      image: BienesmartLogo,
      link: 'https://bienes-mart.web.app',
    },
    {
      title: 'Printinkz Dashboard',
      image: PrintinkzLogo,
      link: 'https://dashboard.printinkz.com',
      type: 'Dashboard',
    },
  ];

  return (
    <div className="flex flex-col items-center p-4">
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
        <StackBox name="Front-End" techList={frontEndList} />
        <StackBox name="Back-End" techList={backEndList} />
        <StackBox name="Tool / Infra" techList={toolsList} />
      </SpaceBox>
      <SpaceBox className="flex-col mt-4 w-full p-4 lg:p-6 lg:mt-6">
        <h3>
          Beside technologies, I&#39;m engrossed in visual effects and computer
          graphics which cheered me up to explore & practice these tools & try
          something new,
        </h3>
        <VisualBox passionList={passionList} />
      </SpaceBox>
      <SpaceBox className="flex-col mt-4 lg:mt-6 w-full h-fit md:w-1/3">
        <BuildsBox buildsList={buildsList} />
      </SpaceBox>
      <div className="w-full">
        <PageLinksBox pageLinks={getPageLinks('/skills')} />
      </div>
    </div>
  );
}
