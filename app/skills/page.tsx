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
import NextImg from 'next/image';

export default function Skills() {
  return (
    <div className="flex flex-wrap items-center justify-evenly m-4">
      <JavaIcon className="h-16 w-16" />
      <SpringIcon className="h-16 w-16" />
      <HtmlIcon className="h-16 w-16" />
      <CssIcon className="h-16 w-16" />
      <JsIcon className="h-16 w-16" />
      <ReactIcon className="h-16 w-16" />
      <ReduxIcon className="h-16 w-16" />
      <NextIcon className="h-16 w-16" />
      <TailwindIcon className="h-16 w-16" />
      <NodeIcon className="h-16 w-16" />
      <ExpressIcon className="h-16 w-16" />
      <GitIcon className="h-16 w-16" />
      <GithubIcon className="h-16 w-16" />
      <FirebaseIcon className="h-16 w-16" />
      <VercelIcon className="h-16 w-16" />
      <AwsIcon className="h-16 w-16" />
      <PhotoshopIcon className="h-16 w-16" />
      <IllustratorIcon className="h-16 w-16" />
      <NextImg
        src={BienesmartLogo}
        alt="BienesmartLogo"
        quality={100}
        className="h-12 w-12 rounded-md"
      />
    </div>
  );
}
