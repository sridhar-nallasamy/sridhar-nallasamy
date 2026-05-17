'use client';

import { useEffect, useRef, useState } from 'react';

import type { ClockFc } from '@/types/components';

const getTime = () => {
  return new Date().toLocaleTimeString('en-US', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
};

const Clock: ClockFc = ({ className }) => {
  const [time, setTime] = useState(getTime());
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTime(getTime());
    }, 60000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return <span className={className}>{time} IST</span>;
};

export default Clock;
