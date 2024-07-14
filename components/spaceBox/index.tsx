import { type SpaceBoxFc } from '@/types/components';

const SpaceBox: SpaceBoxFc = ({ children, className, id }) => {
  return (
    <div
      className={`shadow-mine-2-10 bg-black-transparent rounded-lg flex items-center justify-center ${
        className ? className : ''
      }`}
      {...(id && { id })}
    >
      {children}
    </div>
  );
};

export default SpaceBox;
