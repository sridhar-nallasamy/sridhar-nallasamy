import type { FC, ReactElement } from 'react';
import { type StaticImport } from 'next/dist/shared/lib/get-img-props';

import type { BuildsListType, PageLinkProps, TechListType } from '.';

export type BuildsBoxFc = FC<{ buildsList: BuildsListType[] }>;

export type ContactBoxFc = FC<{
  icon: string | StaticImport;
  title: string;
  href: string;
}>;

export type CustomTooltipFc = FC<{
  title: string;
  children: ReactElement;
}>;

export type DesktopNavFc = FC<{ navList: PageLinkProps[] }>;

export type PageLinksBoxFc = FC<{ pageLinks: PageLinkProps[] }>;

export type DotBoxFC = FC<{
  hw: number;
  dotsCount: number;
  className: string;
}>;

export type SpaceBoxFc = FC<{
  children: React.ReactNode;
  className?: string;
  id?: string;
}>;

export type TechBoxFc = FC<{ children: ReactElement }>;

export type StackBoxFc = FC<{ name: string; techList: TechListType[] }>;

export type TimelineFc = FC<{
  emoji: string;
  year: string;
  where: string;
  descriptions: string[];
}>;

export type VisualBoxFc = FC<{ passionList: TechListType[] }>;
