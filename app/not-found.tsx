'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

import SpaceBox from '@/components/SpaceBox';

const NotFound = () => {
  const [time, setTime] = useState(5);
  const router = useRouter();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (time === 0) {
      router.replace('/');
      return;
    }

    timerRef.current = setTimeout(() => {
      setTime((t) => t - 1);
    }, 1000);

    return () => clearInterval(timerRef.current!);
  }, [router, time]);

  return (
    <div className='flex h-full w-full items-center justify-center'>
      <SpaceBox className='m-auto w-fit flex-col gap-3 p-4'>
        <p className='font-semibold'>Invalid URL ‼️</p>
        <div className='flex items-center gap-2'>
          <p className='h-fit w-fit animate-spin'>⏳</p>
          <p className='text-sm text-gray-300'>
            Routing to homepage in{' '}
            <span className='font-bold text-green-600'>{time}s</span>
            ...
          </p>
        </div>
      </SpaceBox>
    </div>
  );
};

export default NotFound;
