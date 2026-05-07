import type { BlockTitleFc } from '@/types/components';
import { cn } from '@/utils/helpers';

const BlockTitle: BlockTitleFc = ({ title, className }) => {
  return (
    <p
      className={cn(
        'mb-4 w-full text-left text-sm font-semibold text-gray-400',
        '2xl:text-lg',
        className,
      )}
    >
      {title}
    </p>
  );
};

export default BlockTitle;
