import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import type { FC, SVGAttributes } from 'react';

export type SvgIconFc = FC<SVGAttributes<SVGElement>>;

export type TimelineProps = {
  emoji: string;
  year: string;
  where: string;
  descriptions: string[];
};

export type HobbiesListProps = {
  prefixEmoji: string;
  descriiption: string;
  suffixEmoji: string;
};

export type PageLinkProps = {
  title: string;
  link: string;
  coverText: string;
};

export type TechListType = {
  title: string;
  icon: SvgIconFc;
};

export type BuildsListType = {
  title: string;
  link: string;
  image: string | StaticImport;
  type?: string;
};

export type ContactIconProps = {
  icon: string | StaticImport;
  title: string;
  href: string;
};
