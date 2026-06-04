import React from 'react';
import Sponsors from '../../assets/7crop.png';
import { Sponsorbox } from './Boxes/SponsorsBox';
// If you export three precomposed images with logos baked in, import them here:
import sponsorLeft from '../../assets/LOCABOX.png';
import sponsorRight from '../../assets/ASUOBOX.png';
import sponsorCenter from '../../assets/IFLABBOX.png';
import sponsorPW from '../../assets/PW.png';
import sponsorPM from '../../assets/poly_logo.png';


export const SponorsSection = () => {
  return(
    <div
      className='
          w-full
          h-[60.5vh] sm:h-[80vh] md:h-[72vh] lg:h-[121vh]
          bg-cover bg-no-repeat bg-center
          relative
          -mt-0.5 lg:-mt-1
      '
      style={{
          backgroundImage: `url(${Sponsors})`,
      }}
      >
        {/* Top-left card */}
        <div className='
          absolute left-[-2%] top-[50%] sm:left-[2%] sm:top-[22%]
          transform rotate-[8deg] sm:rotate-[15deg] origin-center
          w-[42%] sm:w-[40%] md:w-[38%] lg:w-[36%]
        '>
          <Sponsorbox  src={sponsorLeft} alt="Loca" url="https://loca.us/" />
        </div>

        {/* Top-right card */}
        <div className='
          absolute right-[8%] top-[10%] sm:right-[14%] sm:top-[6%]
          transform rotate-[-5deg] sm:rotate-[-11deg] origin-center
          w-[42%] sm:w-[40%] md:w-[38%] lg:w-[24%]
        '>
          <Sponsorbox  src={sponsorRight} alt="ASUO" url="https://asuo.uoregon.edu/" />
        </div>

        {/* Bottom-center card */}
        <div className='
          absolute left-[50%] -translate-x-1/2
          bottom-[35%] sm:bottom-[15%] lg:bottom-[22%]
          transform rotate-[2deg] sm:rotate-[4deg] origin-center
          w-[42%] sm:w-[52%] md:w-[48%] lg:w-[44%]
        '>
          <Sponsorbox  src={sponsorCenter} alt="IFLab" url="https://uoiflab.org/" />
        </div>

        {/* Fourth sponsor card - PW */}
        <div className='
          absolute left-[60%] bottom-[30%] sm:left-[60%] sm:bottom-[19%]
          transform rotate-[15deg] sm:rotate-[32deg] origin-center
          w-[42%] sm:w-[34%] md:w-[42%] lg:w-[25%]
        '>
          <Sponsorbox  src={sponsorPW} alt="PW" url="https://www.pipeworks.com/" />
        </div>
        <div className='
          absolute left-[7%] bottom-[12%] sm:left-[7%] sm:bottom-[5%]
          transform rotate-[-15deg] sm:rotate-[-5deg] origin-center
          w-[42%] sm:w-[34%] md:w-[42%] lg:w-[25%]
        '>
          <Sponsorbox  src={sponsorPM} alt="PM" url="https://polymarket.com/" />
        </div>
      </div>
  );
};
