import type { ExperiencesFc } from '@/types/components';
import { cn } from '@/utils/helpers';

import BlockTitle from '../BlockTitle';
import SpaceBox from '../SpaceBox';
import TimelineList from '../TimelineList';

const Experiences: ExperiencesFc = ({ id, className, title, list }) => {
  return (
    <SpaceBox id={id} className={cn('flex-col p-5', className)}>
      <BlockTitle title={title} />
      <ul className='px-6 lg:px-0'>
        {list.map((item) => (
          <TimelineList key={`${item.name} ${item.period}`} {...item} />
        ))}
      </ul>
    </SpaceBox>
  );
};

export default Experiences;
