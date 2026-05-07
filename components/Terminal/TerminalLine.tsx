import type {
  ParentFc,
  TerminalLineCmdFc,
  TerminalLineOpFc,
} from '@/types/components';
import { cn } from '@/utils/helpers';

const TerminalLine: ParentFc & {
  Cmd: TerminalLineCmdFc;
  Op: TerminalLineOpFc;
} = ({ className, children }) => {
  return (
    <div
      className={cn(
        'animate-typein flex items-center gap-2 opacity-0',
        className,
      )}
    >
      {children}
    </div>
  );
};

TerminalLine.Cmd = function TerminalLineCmd({ cmd }) {
  return (
    <>
      <span className='text-cyan-400 select-none'>$</span>
      <span>{cmd}</span>
    </>
  );
};

TerminalLine.Op = function TerminalLineOp({ op, className }) {
  return <span className={cn('ml-6 text-gray-300', className)}>{op}</span>;
};

export default TerminalLine;
