import type { ParentFc } from '@/types/components';
import { cn } from '@/utils/helpers';

const Chip: ParentFc = ({ className, children }) => {
  return (
    <span
      className={cn(
        'rounded-lg border border-gray-700 bg-[#36415350] px-2 py-1 text-xs',
        'duration-250 hover:border-gray-500',
        'text-gray-300',
        className,
      )}
    >
      {children}
    </span>
  );
};

export default Chip;
