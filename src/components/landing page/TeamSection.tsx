import * as React from 'react';
import { useState } from 'react';
import PastEvents from '../../assets/6crop.png'
import { Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import type { Swiper as SwiperCore } from 'swiper';
import RightArrow from '../../assets/arrow_right.png'
import LeftArrow from '../../assets/arrrow_left.png'
import 'swiper/css';
import AaronPhoto from '../../../public/teamheadshots/aaronr.webp';
import AlondraPhoto from '../../../public/teamheadshots/alondra.webp';
import AnthonyPhoto from '../../../public/teamheadshots/anthony.webp';
import AshnaPhoto from '../../../public/teamheadshots/ashna.webp';
import BrookePhoto from '../../../public/teamheadshots/brooke.webp';
import DanielPhoto from '../../../public/teamheadshots/daniel.webp';
import EmmaPhoto from '../../../public/teamheadshots/emma.webp';
import GregPhoto from '../../../public/teamheadshots/greg.webp';
import HaiPhoto from '../../../public/teamheadshots/hai.webp';
import JackPhoto from '../../../public/teamheadshots/jack.webp';
import JayaPhoto from '../../../public/teamheadshots/jaya.webp';
import JohnPhoto from '../../../public/teamheadshots/john.webp';
import JosiahPhoto from '../../../public/teamheadshots/josiah.webp';
import MiroPhoto from '../../../public/teamheadshots/miro.webp';
import NhiPhoto from '../../../public/teamheadshots/nhi.webp';
import NoahHPhoto from '../../../public/teamheadshots/noahh.webp';
import NoahMPhoto from '../../../public/teamheadshots/noahm.webp';
import NoahWPhoto from '../../../public/teamheadshots/noahw.webp';
import TrevorPhoto from '../../../public/teamheadshots/trevor.webp';
interface TeamMember {
  name: string;
  photo: string;
  linkedin: string;
  github?: string;
}


const teamMembers: TeamMember[] = [
  { name: 'Aaron R', photo: AaronPhoto, linkedin: 'https://www.linkedin.com/in/aaron-reyes-rodriguez-4169a7325/', github: 'https://github.com/Aaron-Reyes-Rodriguez' },
  { name: 'Alondra', photo: AlondraPhoto, linkedin: 'https://www.linkedin.com/in/alondra-gamboa-9aa2451b0/',},
  { name: 'Anthony', photo: AnthonyPhoto, linkedin: 'https://www.linkedin.com/in/anthony-cano-luna-46b55b309/', github: 'https://github.com/AnthonyCano' },
  { name: 'Ashna', photo: AshnaPhoto, linkedin: 'https://www.linkedin.com/in/ashnarajbhandari/',},
  { name: 'Brooke', photo: BrookePhoto, linkedin: 'https://www.linkedin.com/in/brooke-hatchman-872041222/',},
  { name: 'Daniel', photo: DanielPhoto, linkedin: 'https://www.linkedin.com/in/daniel-asiamah-439ab4281/', github: 'https://github.com/dasiamah308' },
  { name: 'Emma', photo: EmmaPhoto, linkedin: 'https://www.linkedin.com/in/emma-schwing-5434a9291/',},
  { name: 'Greg', photo: GregPhoto, linkedin: 'https://www.linkedin.com/in/gregmorrison12/',},
  { name: 'Hai', photo: HaiPhoto, linkedin: 'https://www.linkedin.com/in/hai-le-4b6986244/', github: 'https://github.com/Doeroy'},
  { name: 'Jack', photo: JackPhoto, linkedin: 'https://www.linkedin.com/in/jackrbaca/',},
  { name: 'Jaya', photo: JayaPhoto, linkedin: 'https://www.linkedin.com/in/jayamunoz/',},
  { name: 'John', photo: JohnPhoto, linkedin: 'https://www.linkedin.com/in/john-heibel/', github: 'https://github.com/JohnHeibel' },
  { name: 'Josiah', photo: JosiahPhoto, linkedin: 'https://www.linkedin.com/in/josiah-kitchin-845628306/', github: 'https://github.com/Josiah-Kitchin' },
  { name: 'Miro', photo: MiroPhoto, linkedin: 'https://www.linkedin.com/in/mirogarcia/', github: 'https://github.com/miropg' },
  { name: 'Nhi', photo: NhiPhoto, linkedin: 'https://www.linkedin.com/in/nhi-do-8b39b1233/', github: 'https://github.com/nhidinh2004' },
  { name: 'Noah H', photo: NoahHPhoto, linkedin: 'https://www.linkedin.com/in/noah-ham/',},
  { name: 'Noah M', photo: NoahMPhoto, linkedin: 'https://www.linkedin.com/in/noah-menachemson-6724a82ba/',},
  { name: 'Noah W', photo: NoahWPhoto, linkedin: 'https://www.linkedin.com/in/noahweis/', github: 'https://github.com/noah-weis' },
  { name: 'Trevor', photo: TrevorPhoto, linkedin: 'https://www.linkedin.com/in/trevor-robbins-67017b330/',},
];

type TeamCardProp = {
  name: string;
  photo: string;
  linkedin: string;
  github?: string;
}
const TeamCard = ({name, photo, linkedin, github} : TeamCardProp) => {
  return(
    <div className='h-full flex items-end justify-center'>
      <div className='flex flex-col items-center text-lg font-bold text-white w-full'>
            <div className='w-full h-48 sm:h-56 md:h-64 lg:h-72 flex items-end justify-center mb-4'>
              <img 
                src={photo}
                alt={name}
                className='max-h-full w-auto object-contain'
              />
            </div>
            <div className='flex flex-col items-center w-full mr-4 sm:mr-3 md:mr-7'>
              <h1 className='text-center'>{name}</h1>
              <div className='flex justify-center gap-4 mt-2'>
                <a href={linkedin} target='blank' rel='noreferrer'>
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                {github &&
                <a href={github} target='blank' rel='noreferrer'>
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                }       
              </div>
            </div>
      </div>
    </div>
  )
}

export const TeamSection = () => {
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);

  // 3. Create click handler functions
  const handlePrev = () => {
    swiper?.slidePrev(); // Use optional chaining
  };

  const handleNext = () => {
    swiper?.slideNext(); // Use optional chaining
  };

    return (
       <div 
          className='
          w-full
          h-[60vh] sm:h-[80vh] md:h-[71vh] lg:h-[120vh]
          bg-cover bg-no-repeat bg-center
          flex justify-center items-center
          m-0
        '
          style={{
          backgroundImage: `url(${PastEvents})`,
          }}
        >
      <button className='cursor-pointer' onClick={handlePrev}><img src={LeftArrow} className="w-75 sm:w-75 md:w-50 lg:w-30"></img></button>
        <Swiper
        onSwiper={setSwiper}
        slidesPerView={4}
        spaceBetween={-100}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            spaceBetween: -20,
            slidesPerView: 1,
          },
          640: {
            spaceBetween: -10,
            slidesPerView: 2,
          },
          768: {
            spaceBetween: 0,
            slidesPerView: 3,
          },
          1024: {
            spaceBetween: 15,
            slidesPerView: 4,
          },
        }}
        className="mySwiper"
      >
          {
          teamMembers.map((member) => {
            return(
            <SwiperSlide>
              <TeamCard name={member.name} photo={member.photo} github={member.github} linkedin={member.linkedin}/>
            </SwiperSlide>
            )
          })
          }
      </Swiper>
        <button className='cursor-pointer'onClick={handleNext}><img className="w-75 xs:w-75 md:w-50 lg:w-30"src={RightArrow}></img></button>
        </div>
    )
}
