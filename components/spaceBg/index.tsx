import DotBox from './dotBox';

const SpaceBg = () => {
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
};

export default SpaceBg;
