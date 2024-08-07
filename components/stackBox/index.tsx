import type { StackBoxFc, TechBoxFc } from '@/types/components';

import CustomTooltip from '../customTooltip';

const TechBox: TechBoxFc = ({ children }) => {
  return (
    <div className="m-2 p-2 border-black border-[1px] border-dashed rounded-lg cursor-pointer bg-[#909090] duration-300 hover:bg-[rgba(255,255,255,0.85)] hover:border-double hover:scale-110">
      {children}
    </div>
  );
};

const StackBox: StackBoxFc = ({ name, techList }) => {
  return (
    <div className="flex items-center w-full lg:w-4/5 text-center">
      <h3 className="w-1/5 text-right">{name}&#58;&nbsp;</h3>
      <div className="flex flex-wrap w-4/5">
        {techList.map(({ title, icon: TechIcon }, idx) => (
          <CustomTooltip key={idx} title={title}>
            <TechBox>
              <TechIcon className="h-10 w-10 md:h-12 md:w-12" />
            </TechBox>
          </CustomTooltip>
        ))}
      </div>
    </div>
  );
};

export default StackBox;
