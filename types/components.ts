import type { FC, ReactElement } from 'react';

import type { ContactProps, TechListType, TimelineProps } from '.';

type ClassName = { className?: string };

export type BlockTitleFc = FC<{ title: string } & ClassName>;

export type BuildsListFc = FC<ClassName>;

export type ClockFc = FC<ClassName>;

export type ContactBoxFc = FC<ContactProps>;

export type CustomTooltipFc = FC<{ title: string; children: ReactElement }>;

export type ExperiencesFc = FC<
  { title: string; list: TimelineProps[]; id?: string } & ClassName
>;

export type HomeNudgeFc = FC<ClassName>;

export type NavbarFc = FC<ClassName>;

export type ParentFc<T = object> = FC<
  { children?: React.ReactNode; id?: string } & ClassName & T
>;

export type SkillsFc = FC<ClassName>;

export type SpaceBoxFc = ParentFc;

export type StackBoxFc = FC<{ name: string; techList: TechListType[] }>;

export type TechBoxFc = FC<{ children: ReactElement }>;

export type TerminalFc = FC<ClassName>;

export type TerminalLineCmdFc = FC<{ cmd: string }>;

export type TerminalLineOpFc = FC<{ op: string } & ClassName>;

export type TimelineFc = FC<TimelineProps>;

export type TypewriterFc = ParentFc<{ list: string[] }>;

export type VisualBoxFc = FC<{ passionList: TechListType[] }>;
