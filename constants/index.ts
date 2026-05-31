import DeloitteLogo from '@/assets/jpg/deloitte.jpeg';
import EbayLogo from '@/assets/jpg/ebay.jpeg';
import TrellixLogo from '@/assets/jpg/trellix.jpeg';
import VirtusaLogo from '@/assets/jpg/virtusa.jpeg';
import BienesmartOgImg from '@/assets/png/bienesmart-og-img.png';
import KsrctLogo from '@/assets/png/KSRCT.png';
import DiscordIcon from '@/assets/svg/discordIcon.svg';
import EmailIcon from '@/assets/svg/emailIcon.svg';
import GitHubIcon from '@/assets/svg/githubIcon.svg';
import InstaIcon from '@/assets/svg/instaIcon.svg';
import LinkedinIcon from '@/assets/svg/linkedinIcon.svg';
import type {
  BuildProps,
  ContactProps,
  RoutesProps,
  SkillsProps,
  TimelineProps,
} from '@/types';

const META_INFO = {
  title: 'Sridhar Nallasamy 😊',
  description:
    'Senior Software Engineer — Building production-grade systems from pixel to pipeline. Frontend-first, full-stack by nature.',
  url: 'https://sridhar-nallasamy.vercel.app/',
  ogTitle: 'Sridhar Nallasamy',
  ogSubTitle: 'Senior Software Engineer',
  ogDescription: 'Scalable systems ・ Clean APIs ・ Production-grade code',
};

const ROUTES: RoutesProps = {
  '/about': {
    title: 'About',
    href: '/about',
    icon: '📑',
    description: 'Want to know what I work with?',
    label: 'About Me',
    nudgeLink: '/contact',
  },
  '/contact': {
    title: 'Contact',
    href: '/contact',
    icon: '📲',
    description: 'Have something to build?',
    label: "Let's talk",
    nudgeLink: '/about',
  },
};

const RESUME_DRIVE_LINK =
  'https://drive.google.com/drive/folders/17DzuZ44OM9F5yqqA-DdXzIQ3GM3dd5Ha?usp=sharing';

const EDUCATION: TimelineProps[] = [
  {
    name: 'K S Rangasamy College of Technology',
    logo: KsrctLogo,
    period: 'Aug 2015 - Apr 2019',
    location: 'Tiruchengode',
  },
];

const WORKS: TimelineProps[] = [
  {
    name: 'eBay',
    logo: EbayLogo,
    period: 'May 2026 → Present',
    location: 'Bangalore',
  },
  {
    name: 'Trellix',
    logo: TrellixLogo,
    period: 'Feb 2026 → May 2026',
    location: 'Bangalore',
  },
  {
    name: 'Deloitte',
    logo: DeloitteLogo,
    period: 'Jan 2022 → Feb 2026',
    location: 'Bangalore',
  },
  {
    name: 'Virtusa',
    logo: VirtusaLogo,
    period: 'May 2019 → Jan 2022',
    location: 'Hyderabad',
  },
];

const BUILDS: BuildProps[] = [
  {
    title: 'BienesMart 📦',
    description:
      'From design to doorstep — a customised merchandise storefront powered by React, Firebase and Stripe.',
    image: BienesmartOgImg,
    link: 'https://bienes-mart.web.app',
    keywords: ['React', 'Firebase', 'Stripe'],
  },
  {
    title: 'Printinkz Dashboard',
    description:
      'Order it, brand it, ship it — a B2B dashboard for print-on-demand fulfilment. Built as a Next.js monorepo on GCP with MongoDB. WIP.',
    image:
      'https://storage.googleapis.com/multimedia.printinkz.com/brand/OpenGraphLogo.png',
    link: 'https://dashboard.printinkz.com',
    keywords: ['Next.js', 'MongoDB', 'GCP'],
  },
  {
    title: 'FE Machine Coding 🚀',
    description:
      "Curated frontend machine coding solutions — the kind you'd want to write under a 45-minute clock.",
    image: 'https://sridhar-nallasamy.github.io/fe-machine-coding/og-img.png',
    link: 'https://sridhar-nallasamy.github.io/fe-machine-coding/',
    keywords: ['TS', 'Algorithm', 'Interview Prep'],
  },
];

const SKILLS: SkillsProps = {
  FE: {
    label: 'What I Architect',
    title: 'Frontend Systems',
    note: 'Architecting large-scale React & Next.js applications in TypeScript - from design system foundations and component APIs to client/server state orchestration, rendering strategies (SSR, ISR, RSC) and performance budgets that hold under real traffic.',
    atGlance: { year: 2019, word: 'Default mode' },
    compact: [
      {
        icon: '⚛️',
        name: 'React & Next.js',
        meta: 'SSR ・ Server Components ・ Edge',
      },
      {
        icon: '🧩',
        name: 'Design System',
        meta: 'Components ・ Tokens ・ A11y',
      },
    ],
  },
  BE: {
    label: 'What I Build',
    title: 'Backend & API Design',
    note: 'Building production Node.js & Java/Spring Boot services - REST & GraphQL APIs, event-driven microservices, authentication flows, database modeling and Python-based AI tooling that plugs into existing product surfaces.',
    atGlance: { year: 2021, word: 'Under the hood' },
    compact: [
      { icon: '🟢', name: 'Node.js', meta: 'REST ・ GraphQL ・ Microservices' },
      { icon: '☕️', name: 'Java & Spring', meta: 'Enterprise ・ Automations' },
    ],
  },
  Infra: {
    label: 'What I Ship',
    title: 'Infra & DevOps',
    note: 'Shipping reliable infrastructure on GCP & AWS - containerized workloads with Docker & Kubernetes, automated CI/CD pipelines, observability setups and deployment strategies that keep services up without paging anyone at 3am.',
    atGlance: { year: 2020, word: 'Zero hand-offs' },
    compact: [
      { icon: '☁️', name: 'GCP & AWS', meta: 'Deploy ・ Scale ・ Monitor' },
      { icon: '🐳', name: 'Docker & K8s', meta: 'Containers ・ Pipelines' },
    ],
  },
  Extenders: {
    label: 'What I Also Pull',
    items: [
      'TypeScript',
      'Redux',
      'Jotai',
      'TanStack Query',
      'ShadCN',
      'Tailwind CSS',
      'Micro Frontend',
      'Express.js',
      'Python',
      'PostgreSQL',
      'MongoDB',
      'Firebase',
      'Git',
      'GitHub Actions',
      'Adobe Photoshop',
      'Adobe Illustrator',
    ],
  },
};

const CONTACTS: ContactProps[] = [
  {
    icon: EmailIcon,
    title: 'Email',
    href: 'mailto:nsridharbtech@gmail.com',
    note: 'Usually reply within 24h',
  },
  {
    icon: LinkedinIcon,
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sridhar-nallasamy',
    note: 'Professional updates & connections',
  },
  {
    icon: GitHubIcon,
    title: 'GitHub',
    href: 'https://github.com/sridhar-nallasamy',
    note: "What I'm building & shipping",
  },
  {
    icon: DiscordIcon,
    title: 'Discord',
    href: 'https://discordapp.com/users/559437209741295626',
    note: 'Quick chats & dev communities',
  },
  {
    icon: InstaIcon,
    title: 'Instagram',
    href: 'https://www.instagram.com/sridhar.n3',
    note: 'Life outside the terminal',
  },
];

const TERMINAL = {
  dots: ['bg-[#ef4444]', 'bg-[#fbbf24]', 'bg-[#4ade80]'],
  lines: [
    {
      className: '[animation-delay:200ms]',
      childClassName: '',
      child: 'whoami',
    },
    {
      className: '[animation-delay:600ms]',
      childClassName: 'font-semibold text-green-400',
      child: 'Sridhar Nallasamy',
    },
    {
      className: '[animation-delay:1200ms]',
      childClassName: '',
      child: 'role',
    },
    {
      className: '[animation-delay:1600ms]',
      childClassName: '',
      child: 'Senior Software Engineer',
    },
    {
      className: '[animation-delay:2200ms]',
      childClassName: '',
      child: 'focus',
    },
  ],
  focus: [
    'I turn ideas into production-grade software.',
    'I architect scalable frontend systems.',
    'I build services that handle the load.',
    'I ship end-to-end — pixel to pipeline.',
  ],
};

export {
  BUILDS,
  CONTACTS,
  EDUCATION,
  META_INFO,
  RESUME_DRIVE_LINK,
  ROUTES,
  SKILLS,
  TERMINAL,
  WORKS,
};
