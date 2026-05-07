import { SKILLS } from '@/constants';
import type { ParentFc, SkillsFc } from '@/types/components';
import { cn } from '@/utils/helpers';

import BlockTitle from '../BlockTitle';
import Chip from '../Chip';
import SpaceBox from '../SpaceBox';

const Cell: ParentFc & {
  Header: ParentFc;
  Label: ParentFc;
  Note: ParentFc;
  AtGlance: ParentFc<{ year: number; word: string }>;
} = ({ className, children }) => {
  return (
    <div
      className={cn(
        'col-span-2 rounded-lg border duration-250',
        'border-[#6a728250] bg-[#6a728220] hover:border-gray-600',
        'p-4',
        'lg:p-5',
        className,
      )}
    >
      {children}
    </div>
  );
};

Cell.Label = function cellLabel({ className, children }) {
  return (
    <p
      className={cn(
        'mb-2 text-xs font-semibold text-gray-400 uppercase',
        className,
      )}
    >
      {children}
    </p>
  );
};

Cell.Header = function cellHeader({ className, children }) {
  return <span className={cn('font-semibold', className)}>{children}</span>;
};

Cell.Note = function cellInfo({ className, children }) {
  return (
    <p className={cn('mt-2 mb-3 text-sm text-gray-300', className)}>
      {children}
    </p>
  );
};

Cell.AtGlance = function cellAtGlance({ className, year, word }) {
  return (
    <p className={cn('text-xs font-bold text-green-600', className)}>
      {new Date().getFullYear() - year}+ years ・ {word}
    </p>
  );
};

const CompactCell: ParentFc & {
  Icon: ParentFc;
  Info: ParentFc<{ name: string; meta: string }>;
} = ({ children, className }) => {
  return (
    <Cell
      className={cn(
        'col-span-1 flex',
        'flex-col items-start gap-2',
        'lg:flex-row lg:items-center lg:gap-4',
        className,
      )}
    >
      {children}
    </Cell>
  );
};

CompactCell.Icon = function compactCellIcon({ children }) {
  return (
    <span
      role='img'
      className={cn(
        'flex shrink-0 items-center justify-center rounded-lg bg-[#6a728250]',
        'size-7 text-xs',
        'lg:size-8 lg:text-sm',
      )}
    >
      {children}
    </span>
  );
};

CompactCell.Info = function compactCellInfo({ name, meta }) {
  return (
    <div>
      <span className='text-sm'>{name}</span>
      <p className='text-xs text-gray-400'>{meta}</p>
    </div>
  );
};

const Skills: SkillsFc = ({ className }) => {
  return (
    <SpaceBox className={cn('w-full flex-col p-4 lg:p-7', className)}>
      <BlockTitle title={'🎯 Skills & Expertise'} />
      <div
        className={cn(
          'grid auto-rows-auto',
          'w-full grid-cols-2 gap-4',
          'lg:grid-cols-4 lg:gap-5',
        )}
      >
        {
          // Frontend
        }
        <Cell
          className={cn(
            'flex flex-col flex-wrap justify-center',
            'p-6 lg:col-span-3 lg:row-span-2 lg:px-8',
          )}
        >
          <Cell.Label>{SKILLS.FE.label}</Cell.Label>
          <Cell.Header className='text-xl'>{SKILLS.FE.title}</Cell.Header>
          <Cell.Note>{SKILLS.FE.note}</Cell.Note>
          <Cell.AtGlance {...{ ...SKILLS.FE.atGlance }} />
        </Cell>
        {SKILLS.FE.compact.map((item) => (
          <CompactCell key={item.name}>
            <CompactCell.Icon>{item.icon}</CompactCell.Icon>
            <CompactCell.Info name={item.name} meta={item.meta} />
          </CompactCell>
        ))}
        {
          // Backend
        }
        <Cell>
          <Cell.Label>{SKILLS.BE.label}</Cell.Label>
          <Cell.Header className='text-xl'>{SKILLS.BE.title}</Cell.Header>
          <Cell.Note>{SKILLS.BE.note}</Cell.Note>
          <Cell.AtGlance {...{ ...SKILLS.BE.atGlance }} />
        </Cell>
        {SKILLS.BE.compact.map((item) => (
          <CompactCell key={item.name}>
            <CompactCell.Icon>{item.icon}</CompactCell.Icon>
            <CompactCell.Info name={item.name} meta={item.meta} />
          </CompactCell>
        ))}
        {
          // Infra
        }
        <Cell>
          <Cell.Label>{SKILLS.Infra.label}</Cell.Label>
          <Cell.Header className='text-xl'>{SKILLS.Infra.title}</Cell.Header>
          <Cell.Note>{SKILLS.Infra.note}</Cell.Note>
          <Cell.AtGlance {...{ ...SKILLS.Infra.atGlance }} />
        </Cell>
        {SKILLS.Infra.compact.map((item) => (
          <CompactCell key={item.name}>
            <CompactCell.Icon>{item.icon}</CompactCell.Icon>
            <CompactCell.Info name={item.name} meta={item.meta} />
          </CompactCell>
        ))}
        {
          // Extended Tools
        }
        <Cell className='lg:col-span-4'>
          <Cell.Label className='mb-4'>{SKILLS.Extenders.label}</Cell.Label>
          <div className='flex flex-wrap items-center gap-2'>
            {SKILLS.Extenders.items.map((item) => (
              <Chip key={item}>{item}</Chip>
            ))}
          </div>
        </Cell>
      </div>
    </SpaceBox>
  );
};

export default Skills;
