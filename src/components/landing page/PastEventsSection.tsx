import * as React from 'react';
import PastEvents from '../../assets/2crop.png'
import Snowflake from '../../assets/snowflake.webp'
export const PastEventsSection = () => {
    return (
       <div 
          className='
          w-full
          h-[60vh] sm:h-[80vh] md:h-[71vh] lg:h-[89vh]
          bg-cover bg-no-repeat bg-center
          flex justify-center items-start
          overflow-visible
          relative
        '
          style={{
          backgroundImage: `url(${PastEvents})`,
          }}
        >
          <img src={Snowflake} className=' /* --- Responsive Sizing & Proportions --- */
            w-[clamp(300px,120vh,90%)] 
            aspect-[1/1] 
            /* --- Background Image --- */
            bg-contain bg-no-repeat bg-center
            mt-35
          '/>
        </div>
    )
}
