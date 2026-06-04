import React from 'react';
import Title from '../../../assets/6.2 Textbox.png';
import Box from '../../../assets/Boxes.webp'
const ScheduleTitle = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div
        className='
                /* --- Responsive Sizing & Proportions --- */
                w-[clamp(120px,70%,180px)] 
                aspect-[3/2]     
                /* --- Background Image --- */
                bg-contain bg-no-repeat bg-center
    
                /* --- Flexbox for Centering Content --- */
                flex flex-col justify-center items-center
                
                /* --- Responsive Padding & Text --- */
                p-[clamp(1rem,5vw,3rem)] 
                text-center text-white
                text-2xl
              '
        style={{
          backgroundImage: `url(${Title})`,
        }}
      >
        <h1>
          Schedule
        </h1>
      </div>
    </div>
  );
};

interface ScheduleBoxProp {
  day: string;
  point1: string;
  point2: string;
  point3: string;
  point4: string;
  point5: string;
  point6: string;
}

const Boxes = ({day, point1, point2, point3, point4, point5, point6} : ScheduleBoxProp) => {
  return (
    <div
      className='
        /* --- Responsive Sizing & Proportions --- */
        w-[clamp(120px,70%,500px)] 
        aspect-[3/2] 
        /* --- Background Image --- */
        bg-contain bg-no-repeat bg-center

        /* --- Flexbox for Centering Content --- */
        flex flex-col justify-center items-center
        
        /* --- Responsive Padding & Text --- */
        p-[clamp(0.5rem,5vw,2rem)] 
        text-center text-white
        text-xs md:text-lg lg:text-2xl
      '
      style={{
        backgroundImage: `url(${Box})`,
      }}
    >
      <h1 className='font-bold underline'>{day}</h1>
      <ul className='list-inside'>
        <li>
          {point1}
        </li>
        <li>
          {point2}
        </li>
        <li>
          {point3}
        </li>
        <li>
          {point4}
        </li>
        <li>
          {point5}
        </li>
        <li>
          {point6}
        </li>
      </ul>
    </div>
  )
}

export const ScheduleBox = () => {
  return (
    <div className='-mt-50'>
      <ScheduleTitle/>
      <div className='flex justify-center items-center'>
        <Boxes day='Saturday' point1='Sponsor Fair' point2='Opening Ceremony' point3='Team Formation' point4='Hackathon Workshops' point5='Lunch & Dinner' point6='Mini-Events'/>
        <Boxes day='Sunday' point1='Overnight Meal' point2='Project Deadline!' point3='Breakfast & Lunch' point4='Project Fair & Judging' point5='Closing Ceremony' point6='Award Show'/>
      </div>
    </div>
  )
}
