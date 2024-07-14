import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import type { FC, SVGAttributes } from 'react';

export type SvgIconFc = FC<SVGAttributes<SVGElement>>;

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
