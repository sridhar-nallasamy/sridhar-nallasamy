import NextImg from 'next/image';
import VgsLogo from '@/assets/png/VGS.png';

export default function Navbar() {
  return (
    <div className="flex items-center justify-center">
      <NextImg
        src={VgsLogo}
        alt="Vgs Logo"
        quality={100}
        className="h-[4.5rem] w-[4.5rem] md:[5.3rem] md:w-[5.3rem] lg:h-24 lg:w-24 object-contain cursor-pointer pointer-events-none"
      />
    </div>
  );
}
