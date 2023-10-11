import { pageLinks } from '@/constants';
import { PageLinkProps } from '@/types';

function getPageLinks(currentPage: string): PageLinkProps[] {
  if (currentPage === '/navBar') return pageLinks;

  const linksList = currentPage === '/' ? [currentPage] : ['/', currentPage];

  const filterFn = (nextLink: PageLinkProps): boolean =>
    !linksList.includes(nextLink.link);

  return pageLinks.filter(filterFn);
}

export { getPageLinks };
