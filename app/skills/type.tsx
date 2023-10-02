import { FC, SVGAttributes } from 'react';

export type TechListType = {
  title: string;
  icon: FC<SVGAttributes<SVGElement>>;
};

export type StackBoxProps = {
  name: string;
  techList: TechListType[];
};

export type TechBoxProps = { children: React.ReactNode };

export type CustomToolTipProps = {
  title: string;
  children: React.ReactElement;
};

export type VisualBoxProps = { passionList: TechListType[] };
