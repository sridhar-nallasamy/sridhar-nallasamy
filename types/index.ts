import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import type { FC, ReactElement, ReactNode, SVGAttributes } from 'react';

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
  icon: FC<SVGAttributes<SVGElement>>;
};

export type StackBoxProps = {
  name: string;
  techList: TechListType[];
};

export type TechBoxProps = { children: ReactNode };

export type CustomToolTipProps = {
  title: string;
  children: ReactElement;
};

export type VisualBoxProps = { passionList: TechListType[] };

export type BuildsListType = {
  title: string;
  link: string;
  image: string | StaticImport;
};

export type BuildsBoxProps = { buildsList: BuildsListType[] };

export type ContactIconProps = {
  icon: string | StaticImport;
  title: string;
  href: string;
};

export type PageLinksBoxProps = { pageLinks: PageLinkProps[] };

export type NavListProps = { navList: PageLinkProps[] };

export type SvgIconProps = FC<SVGAttributes<SVGElement>>;
