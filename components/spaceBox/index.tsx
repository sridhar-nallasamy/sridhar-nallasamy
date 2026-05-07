import type { SpaceBoxFc } from '@/types/components';
import { cn } from '@/utils/helpers';

const SpaceBox: SpaceBoxFc = ({ children, className, id }) => {
  return (
    <div
      className={cn(
        'shadow-[0_2px_10px_#000]',
        'bg-[#00000099]',
        'flex items-center justify-center rounded-lg',
        className,
      )}
      {...(id && { id })}
    >
      {children}
    </div>
  );
};

export default SpaceBox;
