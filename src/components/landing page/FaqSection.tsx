import React from 'react';
import AboutImage from '../../assets/5crop.png';
import { FaqBox } from './Boxes/FaqBox';
export const FaqSection = () => {
  return(
    <div
      className='
          w-full
          h-[85vh] sm:h-[80vh] md:h-[109.5vh] lg:h-[175vh]
          bg-cover bg-no-repeat bg-center
          flex items-end
      '
      style={{
          backgroundImage: `url(${AboutImage})`,
      }}
      >
        <FaqBox/>
      </div>
  );
};
