import * as React from 'react';
import PastEvents from '../../assets/3crop.png'
import Schedule from '../../assets/6.2 Textbox.png'
import { ScheduleBox } from './Boxes/ScheduleBox';
export const ScheduleSection = () => {
    return (
       <div 
           className='
          w-full
          h-[90vh] sm:h-[110vh] md:h-[101vh] lg:h-[127vh]
          bg-cover bg-no-repeat bg-center
      '
          style={{
          backgroundImage: `url(${PastEvents})`,
          }}
        >
            <div>
                
            </div>
        </div>
    )
}
