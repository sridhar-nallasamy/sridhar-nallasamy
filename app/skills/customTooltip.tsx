import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import { CustomToolTipProps } from './type';

export default function CustomToolTip({ title, children }: CustomToolTipProps) {
  return (
    <Tooltip
      placement="top"
      arrow
      TransitionComponent={Zoom}
      title={title}
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
}
