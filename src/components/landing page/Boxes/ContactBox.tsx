import React from 'react';
import Boxes from '../../../assets/Boxes.webp';

interface MyComponentProps {
  imageSrc: string;
  altText: string;
  rotate: string;
  link: string;
}
export const ContactBox = ({imageSrc, altText, rotate, link} : MyComponentProps) => {
  return (
       <div
      className={`
        mt-50 lg:-mx-10
        /* --- Responsive Sizing & Proportions --- */
        w-[clamp(150px,70%,400px)] 
        aspect-[1/2] sm: aspect[3/2]
        /* --- Background Image --- */
        bg-contain bg-no-repeat bg-center
        ${rotate}
        /* --- Flexbox for Centering Content --- */
        flex flex-col justify-center items-center
      `}
      style={{
        backgroundImage: `url(${Boxes})`,
      }}
    >
        <a href={link} target="_blank" rel="noopener noreferrer" className='flex flex-col justify-center items-center transition-all hover:scale-110'>
            <img src={imageSrc} alt={altText} className='w-[40%]' />
        </a>
    </div>
  )
};
