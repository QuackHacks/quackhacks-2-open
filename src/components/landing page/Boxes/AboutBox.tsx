import React from 'react';
import textBoxUrl from '../../../assets/2.1VideoContainer.png';

export const AboutText: React.FC = () => {
  return (
    <div className='flex justify-center'>
      <div 
            className='
            /* --- Responsive Sizing & Proportions --- */
            w-[clamp(300px,80%,550px)] 
            aspect-[3/2] 
            my-1

            /* --- Background Image --- */
            bg-contain bg-no-repeat bg-center

            /* --- Flexbox for Centering Content --- */
            flex flex-col justify-center items-center
            
            /* --- Responsive Padding & Text --- */
            text-[clamp(0.7rem,2.8cqw,1.3rem)]
            p-[clamp(1rem,5vw,3rem)] 
            text-center text-white
    
          '
          style={{
          backgroundImage: `url(${textBoxUrl})`,
          }}
        >
        <h1 className='text-green-500 font-bold text-2xl'>
          About
        </h1>
        <h1>
        QuackHacks is Oregon’s premier student-run hackathon, empowering participants to innovate through hands-on, collaborative learning. In a high-energy 24-hour event on November 15-16 at the University of Oregon EMU Ballroom, students form teams to build creative projects, explore new technologies, and enjoy free food, merch, and workshops.
        </h1>
      </div>
    </div>
  );
};
