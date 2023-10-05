import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { FC, ReactElement, ReactNode, SVGAttributes } from 'react';

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