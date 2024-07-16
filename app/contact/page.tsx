import EmailIcon from '@/assets/svg/emailIcon.svg';
import LinkedinIcon from '@/assets/svg/linkedinIcon.svg';
import InstaIcon from '@/assets/svg/instaIcon.svg';
import GitHubIcon from '@/assets/svg/githubIcon.svg';
import DiscordIcon from '@/assets/svg/discordIcon.svg';
import SnapchatIcon from '@/assets/svg/snapchatIcon.svg';
import { type ContactIconProps } from '@/types';
import SpaceBox from '@/components/spaceBox';
import ContactBox from '@/components/contactBox';
import NextImg from 'next/image';
import ThanksImg from '@/assets/png/thanks.png';
import PageLinksBox from '@/components/pageLinksBox';
import { getPageLinks } from '@/utils/helpers';

export default function Contact() {
  const contactsList: ContactIconProps[] = [
    { icon: EmailIcon, title: 'Email', href: 'mailto:nsridharbtech@gmail.com' },
    {
      icon: LinkedinIcon,
      title: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sridhar-nallasamy-781564160/',
    },
    {
      icon: GitHubIcon,
      title: 'GitHub',
      href: 'https://github.com/sridhar-nallasamy',
    },
    {
      icon: DiscordIcon,
      title: 'Discord',
      href: 'https://discordapp.com/users/559437209741295626',
    },
    {
      icon: InstaIcon,
      title: 'Instagram',
      href: 'https://www.instagram.com/sridhar.n3/',
    },
    {
      icon: SnapchatIcon,
      title: 'Snapchat',
      href: 'https://www.snapchat.com/add/n.sridhar3',
    },
  ];
  return (
    <div className="p-4 lg:p-6">
      <SpaceBox className="flex-col">
        <h3 className="mt-4 lg:mt-6">Get in Touch.</h3>
        <div className="flex items-center justify-center mb-2 lg:mb-0">
          {contactsList.map(({ icon, title, href }, idx) => (
            <ContactBox icon={icon} title={title} href={href} key={idx} />
          ))}
        </div>
      </SpaceBox>
      <div className="flex justify-center">
        <NextImg
          quality={100}
          src={ThanksImg}
          alt="ThanksImg"
          className="w-60 md:w-64"
          priority={false}
        />
      </div>
      <PageLinksBox pageLinks={getPageLinks('/contact')} />
    </div>
  );
}
