import { type PageLinkProps } from '@/types';

const pageLinks: PageLinkProps[] = [
  { title: 'Home', link: '/', coverText: 'Wanna look my home page?' },
  {
    title: 'About',
    link: '/about',
    coverText: 'Wanna look at my education & work timeline?',
  },
  {
    title: 'Skills',
    link: '/skills',
    coverText: 'Wanna checkout my area of expertise & works?',
  },
  { title: 'Contact', link: '/contact', coverText: 'Wanna reach out to me?' },
];

export { pageLinks };
