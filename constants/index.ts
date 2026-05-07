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

const ROUTES: RoutesProps = {
  '/about': {
    title: 'About',
    href: '/about',
    icon: '📑',
    nudgeNote: 'Have something to build?',
    nudgeLabel: "Let's talk",
    nudgeLink: '/contact',
  },
  '/contact': {
    title: 'Contact',
    href: '/contact',
    icon: '📲',
    nudgeNote: 'Want to know what I work with?',
    nudgeLabel: 'About Me',
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
    description: 'B2C customised products selling app',
    image: BienesmartOgImg,
    link: 'https://bienes-mart.web.app',
    keywords: ['React', 'Firebase', 'Stripe'],
  },
  {
    title: 'Printinkz Dashboard',
    description: 'B2B business clients management app',
    image:
      'https://storage.googleapis.com/multimedia.printinkz.com/brand/OpenGraphLogo.png',
    link: 'https://dashboard.printinkz.com',
    keywords: ['Next.js', 'MongoDB', 'GCP'],
  },
  {
    title: 'FE Machine Coding 🚀',
    description: 'A frontend machine coding round optimal solutions',
    image: 'https://sridhar-nallasamy.github.io/fe-machine-coding/og-img.png',
    link: 'https://sridhar-nallasamy.github.io/fe-machine-coding/',
    keywords: ['TS', 'Algorithm', 'Interview Prep'],
  },
];

const SKILLS: SkillsProps = {
  FE: {
    label: 'What I Architect',
    title: 'Frontend Systems',
    note: 'Design & building scalable React & Next.js applications in Typescript ⎯ design generic components, client & server state managements, performance optimization, web vitals',
    atGlance: { year: 2019, word: 'Primary focus' },
    compact: [
      {
        icon: '⚛️',
        name: 'React & Next.js',
        meta: 'SSR ・ Server Components ・ Edge',
      },
      {
        icon: '🧩',
        name: 'Design Sysytem',
        meta: 'Components ・ Tokens ・ A11y',
      },
    ],
  },
  BE: {
    label: 'What I Build',
    title: 'Backend & API Design',
    note: 'Node.Js & Spring Boot services ⎯ REST, GraphQL, microservices, AI tooling (Python), auth systems, automations with Java JAR',
    atGlance: { year: 2021, word: 'Production systems' },
    compact: [
      { icon: '🟢', name: 'Node.js', meta: 'REST ・ GraphQL ・ Microservices' },
      { icon: '☕️', name: 'Java & Spring', meta: 'Enterprise ・ Automations' },
    ],
  },
  Infra: {
    label: 'What I Ship',
    title: 'Infra & DevOps',
    note: 'Cloud-agnostic, CI/CD pipelines, GitHub actions, containerization, deployments, monitoring',
    atGlance: { year: 2020, word: 'Team-level ownership' },
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
      'Tanstack Query',
      'ShadCN',
      'Tailwind CSS',
      'Micro Frontend',
      'Express',
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
    href: 'https://www.linkedin.com/in/sridhar-nallasamy/',
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
    href: 'https://www.instagram.com/sridhar.n3/',
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
    'I architect scalable frontend systems.',
    'I build design systems that ship.',
    'I craft interfaces, one component at a time.',
  ],
};

export {
  BUILDS,
  CONTACTS,
  EDUCATION,
  RESUME_DRIVE_LINK,
  ROUTES,
  SKILLS,
  TERMINAL,
  WORKS,
};
