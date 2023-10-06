import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

type CustomToolTipProps = {
  title: string;
  children: React.ReactElement;
};

export default function CustomToolTip({ title, children }: CustomToolTipProps) {
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
}
