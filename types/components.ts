import type { FC, ReactElement } from 'react';

import type {
  BuildsListType,
  ContactIconProps,
  PageLinkProps,
  TechListType,
  TimelineProps,
} from '.';

export type BuildsBoxFc = FC<{ buildsList: BuildsListType[] }>;

export type ContactBoxFc = FC<ContactIconProps>;

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

export type TimelineFc = FC<TimelineProps>;

export type VisualBoxFc = FC<{ passionList: TechListType[] }>;
