import React from 'react';
import AboutImage from '../../assets/1crop.png';
import { AboutText } from './Boxes/AboutBox';

export const AboutSection = () => {
  return(
    <div
      className='
          w-full
          h-[60vh] sm:h-[80vh] md:h-[80vh] lg:h-[100.49vh]
          bg-cover bg-no-repeat bg-center
          flex items-end
          sm:-mt-[20vh] 2xl:-mt-[1vh] min-[1440px]:-mt-[55vh] min-[3000px]:-mt-[15vh]
      '
      style={{
          backgroundImage: `url(${AboutImage})`,
      }}
      >
        <AboutText/>
      </div>
  );
};
