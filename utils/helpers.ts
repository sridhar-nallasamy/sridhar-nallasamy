import random from 'lodash/random';

import { pageLinks } from '@/constants';
import type {
  getBoxShadowFn,
  getPageLinksFn,
  pageFilterFn,
} from '@/types/helpers';

const getPageLinks: getPageLinksFn = (currentPage) => {
  if (currentPage === '/navBar') return pageLinks;

  const linksList = currentPage === '/' ? [currentPage] : ['/', currentPage];

  const pageFilter: pageFilterFn = (nextLink) => {
    return !linksList.includes(nextLink.link);
  };

  return pageLinks.filter(pageFilter);
};

const getBoxShadow: getBoxShadowFn = (num) => {
  const makeShadow = (): string =>
    `${random(1, 2000) / 16}rem ${random(1, 2000) / 16}rem #fff`;

  let res = makeShadow();
  let idx = 1;

  while (idx <= num) {
    res += `, ${makeShadow()}`;
    idx += 1;
  }

  return res;
};

export { getPageLinks, getBoxShadow };
