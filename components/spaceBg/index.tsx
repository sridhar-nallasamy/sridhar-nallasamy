import { Box } from '@mui/material';
import random from 'lodash/random';

function getBoxShadow(num: number): string {
  const makeShadow = (): string =>
    `${random(1, 2000) / 16}rem ${random(1, 2000) / 16}rem #fff`;

  let res = makeShadow();
  let idx = 1;

  while (idx <= num) {
    res += `, ${makeShadow()}`;
    idx += 1;
  }

  return res;
}

interface DotBoxProps {
  hw: number;
  dotsCount: number;
  className: string;
}

function DotBox({ hw, dotsCount, className }: DotBoxProps) {
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
}

export default function SpaceBg() {
  return (
    <>
      <DotBox
        hw={1}
        dotsCount={700}
        className="animate-[spaceDots_50s_linear_infinite]"
      />
      <DotBox
        hw={2}
        dotsCount={200}
        className="animate-[spaceDots_100s_linear_infinite]"
      />
      <DotBox
        hw={3}
        dotsCount={100}
        className="animate-[spaceDots_150s_linear_infinite]"
      />
    </>
  );
}
