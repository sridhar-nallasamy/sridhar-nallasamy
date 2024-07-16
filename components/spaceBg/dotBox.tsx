import { Box } from '@mui/material';

import { type DotBoxFC } from '@/types/components';
import { getBoxShadow } from '@/utils/helpers';

const DotBox: DotBoxFC = ({ hw, dotsCount, className }) => {
  const hwRem = `${hw / 16}rem`;
  return (
    <Box
      sx={{
        height: hwRem,
        width: hwRem,
        background: 'transparent',
        boxShadow: getBoxShadow(dotsCount),

        '::after': {
          height: hwRem,
          width: hwRem,
          background: 'transparent',
          boxShadow: getBoxShadow(dotsCount),
          content: 'none',
          position: 'absolute',
          top: '125rem',
        },
      }}
      className={className}
    />
  );
};

export default DotBox;
