import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

import { type CustomTooltipFc } from '@/types/components';

const CustomTooltip: CustomTooltipFc = ({ title, children }) => {
  return (
    <Tooltip
      placement="top"
      arrow
      TransitionComponent={Zoom}
      title={title}
      enterTouchDelay={0}
      componentsProps={{
        tooltip: {
          sx: {
            backgroundColor: 'rgba(255,255,255,0.96)',
            color: 'black',
            border: '1px solid black',
            '& .MuiTooltip-arrow': {
              color: 'rgba(255,255,255,0.96)',
            },
          },
        },
      }}
    >
      {children}
    </Tooltip>
  );
};

export default CustomTooltip;
