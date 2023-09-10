'use client';

import { useEffect, useState } from 'react';

type windowSizeType = { height: number; width: number };

export default function useWindowSize(): windowSizeType {
  const [windowSizes, setWindowSize] = useState<windowSizeType>({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({ height: window.innerHeight, width: window.innerWidth });
    };

    window.addEventListener('resize', updateWindowSize);

    updateWindowSize();

    return () => {
      window.removeEventListener('resize', updateWindowSize);
    };
  }, []);

  return windowSizes;
}
