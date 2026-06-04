import React from 'react';
import Footer from '../../assets/8crop.png';
import AddisonPfp from '../../assets/addison_pfp.jpg';
import { FaInstagram } from 'react-icons/fa6';
import { FaDiscord } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';
export const FooterSection = () => {
  return(
    <div
      className='
          w-full
          h-[64vh] sm:h-[80vh] md:h-[76vh] lg:h-[128vh]
          bg-cover bg-no-repeat bg-center
          flex items-end
          flex justify-center items-
      '
      style={{
          backgroundImage: `url(${Footer})`,
      }}
      >
      <div className='flex flex-col'>
        <div className='flex justify-evenly gap-6 md:gap-12'>
              <a href="https://www.instagram.com/quackhacksuo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className='rounded-full transition-all hover:scale-110'>
                  <FaInstagram className="w-12 h-12 md:w-16 md:h-16"/>
              </a>
              <a href="https://discord.gg/J2FbNzKMPw" target="_blank" rel="noopener noreferrer" className='rounded-full  transition-all hover:scale-110'>
                  <FaDiscord className="w-12 h-12 md:w-16 md:h-16"/>
              </a>
              <a href="https://www.linkedin.com/company/quackhacks" target="_blank" rel="noopener noreferrer" className='rounded-full transition-all hover:scale-110'>
                  <FaLinkedin className="w-12 h-12 md:w-16 md:h-16"/>
              </a>
              <a href="https://www.instagram.com/addies.artwork/" target="_blank" rel="noopener noreferrer" className='rounded-full transition-all hover:scale-110'>
                  <img src={AddisonPfp} alt="Addison's Artwork" className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"/>
              </a>
              </div>
              <div className="mt-4 flex flex-col items-center gap-2">
                <h1 className="text-sm md:text-base">The Offical Nest of the Quackhacks Team ❤️</h1>
                <a
                  href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs md:text-sm underline hover:opacity-80 transition-opacity"
                >
                  MLH Code of Conduct
                </a>
              </div>
        </div>
      </div>
  );
};
