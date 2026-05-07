import type { FC, SVGAttributes } from 'react';
import type { StaticImport } from 'next/dist/shared/lib/get-img-props';

export type SvgIconFc = FC<SVGAttributes<SVGElement>>;

export type TimelineProps = {
  name: string;
  logo: string | StaticImport;
  period: string;
  location: string;
};

type RouteProp = {
  title: string;
  href: string;
  icon: string;
  description: string;
  label: string;
  nudgeLink: string;
};

export type RoutesProps = { '/about': RouteProp; '/contact': RouteProp };

export type TechListType = {
  title: string;
  icon: SvgIconFc;
};

export type BuildProps = {
  title: string;
  description: string;
  link: string;
  image: string | StaticImport;
  keywords: string[];
};

export type ContactProps = {
  icon: string | StaticImport;
  title: string;
  href: string;
  note: string;
};

type SkillType = {
  label: string;
  title: string;
  note: string;
  atGlance: { year: number; word: string };
  compact: { icon: string; name: string; meta: string }[];
};

export type SkillsProps = {
  FE: SkillType;
  BE: SkillType;
  Infra: SkillType;
  Extenders: { label: string; items: string[] };
};
