import type { PageLinkProps } from '.';

export type getPageLinksFn = (_currentPage: string) => PageLinkProps[];

export type pageFilterFn = (_nextLink: PageLinkProps) => boolean;

export type getBoxShadowFn = (_num: number) => string;
