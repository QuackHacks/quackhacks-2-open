import React from 'react';
import AboutImage from '../../assets/4crop.png';
import { ScheduleBox } from './Boxes/ScheduleBox';
import { ContactBox } from './Boxes/ContactBox';
import Discord from '../../assets/discord.webp'
import Instagram from '../../assets/instagram.png'
import Linkedin from '../../assets/linkedin.png'
export const ContactSection = () => {
  return(
    <div
      className='
          w-full
          h-[85vh] sm:h-[80vh] md:h-[109.5vh] lg:h-[138vh]
          bg-cover bg-no-repeat bg-center
      '
      style={{
          backgroundImage: `url(${AboutImage})`,
      }}
      >
        <ScheduleBox/>
        <div className='flex justify-center'>
          <ContactBox imageSrc={Discord} altText='Discord Image and Link' rotate='-rotate-25' link="https://discord.gg/J2FbNzKMPw"/>
          <ContactBox imageSrc={Instagram} altText='Instagram Image and Link' rotate='rotate-10' link='https://www.instagram.com/quackhacksuo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='/>
          <ContactBox imageSrc={Linkedin} altText='Linkedin Image and Link' rotate='rotate-25' link="https://www.linkedin.com/company/quackhacks"/>
        </div>
      </div>
  );
};
