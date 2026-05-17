import BuildsList from '@/components/BuildsList';
import Experiences from '@/components/Experiences';
import Resume from '@/components/Resume';
import Skills from '@/components/Skills';
import { EDUCATION, WORKS } from '@/constants';

export default function About() {
  return (
    <>
      <BuildsList className='mx-auto mb-4 lg:mb-6' />
      <div className='flex flex-col justify-evenly gap-4 lg:flex-row lg:gap-6'>
        <Experiences
          className='lg:w-[50%]'
          id='work-experiences'
          title='👨🏻‍💻 Work Experiences'
          list={WORKS}
        />
        <div className='flex flex-col lg:w-[50%]'>
          <Resume />
          <Experiences
            className='flex-1 lg:justify-start'
            id='education'
            title='🎓 Education'
            list={EDUCATION}
          />
        </div>
      </div>
      <Skills className='mx-auto mt-4 lg:mt-6' />
    </>
  );
}
