import { JetBrains_Mono } from 'next/font/google';

import { TERMINAL } from '@/constants';
import type { TerminalFc } from '@/types/components';
import { cn } from '@/utils/helpers';

import TerminalLine from './TerminalLine';
import Typewriter from './Typewriter';

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] });

const Terminal: TerminalFc = ({ className }) => {
  return (
    <div
      id='terminal'
      className={cn(
        'overflow-hidden rounded-lg border border-gray-700 bg-[#69696915]',
        jetBrainsMono.className,
        className,
      )}
    >
      <div
        id='terminal-header'
        className={cn(
          'flex items-center gap-1.5 border-b border-b-gray-700 px-4 py-3',
          'bg-[#69696930]',
        )}
      >
        {TERMINAL.dots.map((dot) => (
          <div key={dot} className={cn('size-3 rounded-full', dot)} />
        ))}
        <span className='ml-1.5 text-sm text-gray-400 2xl:text-base'>
          ~/ portfolio
        </span>
      </div>
      <div id='terminal-body' className='p-4 text-sm/loose 2xl:text-base/loose'>
        {TERMINAL.lines.map((line, idx) => (
          <TerminalLine key={idx + line.child} className={line.className}>
            {idx % 2 === 0 ? (
              <TerminalLine.Cmd cmd={line.child} />
            ) : (
              <TerminalLine.Op
                className={line.childClassName}
                op={line.child}
              />
            )}
          </TerminalLine>
        ))}
        <TerminalLine className='[animation-delay:2600ms]'>
          <Typewriter list={TERMINAL.focus}>
            <span className='animate-blink mb-1 ml-0.5 inline-block h-4 w-2 bg-cyan-400 align-middle' />
          </Typewriter>
        </TerminalLine>
      </div>
    </div>
  );
};

export default Terminal;
