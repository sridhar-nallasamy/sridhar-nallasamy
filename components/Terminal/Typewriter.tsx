'use client';

import { useEffect, useState } from 'react';

import type { TypewriterFc } from '@/types/components';
import { cn } from '@/utils/helpers';

const Typewriter: TypewriterFc = ({ className, children, list }) => {
  const [word, setWord] = useState<string>('');

  useEffect(() => {
    let phraseIdx: number = 0;
    let charIdx: number = 0;
    let isTyping: boolean = true;
    let timeout: NodeJS.Timeout;

    const type = () => {
      const current = list[phraseIdx];

      if (isTyping) {
        setWord(current.substring(0, charIdx + 1));
        charIdx += 1;

        if (charIdx === current.length) {
          timeout = setTimeout(() => {
            isTyping = false;
            type();
          }, 2000);

          return;
        }

        timeout = setTimeout(type, 90);
      } else {
        setWord(current.substring(0, charIdx - 1));
        charIdx -= 1;

        if (charIdx === 0) {
          isTyping = true;
          phraseIdx = (phraseIdx + 1) % list.length;
          timeout = setTimeout(type, 1000);
          return;
        }

        timeout = setTimeout(type, 60);
      }
    };

    timeout = setTimeout(type, 2600);

    return () => {
      clearTimeout(timeout);
    };
  }, [list]);

  return (
    <span className={cn('ml-6 text-gray-300 select-none', className)}>
      {word}
      {children}
    </span>
  );
};

export default Typewriter;
