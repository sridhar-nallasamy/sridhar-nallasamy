import CircularProgress from '@mui/material/CircularProgress';
import CustomToolTip from '@/components/customTooltip';
import { VisualBoxProps } from '@/types';

export default function VisualBox({ passionList }: VisualBoxProps) {
  return (
    <div className="flex items-center justify-center">
      {passionList.map(({ title, icon: IconComp }, idx) => (
        <CustomToolTip title={title} key={idx}>
          <div className="bg-[#001d3d98] py-3 px-6 mx-4 mt-3 rounded-lg flex items-center justify-center relative cursor-pointer duration-300 lg:px-8 lg:mt-4 hover:scale-110">
            <CircularProgress
              variant="determinate"
              size={75}
              thickness={3}
              value={100}
              className="text-gray-300"
            />
            <CircularProgress
              variant="indeterminate"
              disableShrink
              className="absolute left-50 top-50 text-green-600 duration-[3s]"
              sx={{
                '& .MuiCircularProgress-circle': {
                  strokeLinecap: 'round',
                },
              }}
              size={75}
              thickness={3}
              color="primary"
            />
            <div className="absolute">
              <IconComp className="h-10 w-10 md:h-12 md:w-12" />
            </div>
          </div>
        </CustomToolTip>
      ))}
    </div>
  );
}
