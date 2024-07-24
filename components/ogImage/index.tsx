import NextImage from 'next/image';

import VgsOgImg from '@/assets/png/VgsOgImg.png';

const OgImage = () => {
  return (
    <NextImage
      alt="OgImage-VGS"
      src={VgsOgImg}
      height={627}
      width={1200}
      quality={100}
      priority
    />
  );
};

export default OgImage;
