import React from 'react';
import textBoxUrl from '../../../assets/8.1 Sponsor CONTAINER (1).png';

type SponsorsBoxProps = {
  src?: string;
  alt?: string;
  url?: string;
};

export const Sponsorbox: React.FC<SponsorsBoxProps> = ({ src, alt, url }) => {
  const imageElement = (
    <img
      src={src ?? textBoxUrl}
      alt={alt ?? 'Sponsors'}
      className='w-full h-auto object-contain pointer-events-none select-none'
    />
  );

  return (
    <div className='flex justify-center px-4 sm:px-6 md:px-8'>
      {/* Inner container controls width at breakpoints and stacking above section bg */}
      <div className='
            w-full my-1
            max-w-[260px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[420px]
            relative z-10
            flex flex-col justify-center items-center
            text-[clamp(0.7rem,2.8cqw,1.3rem)]
            p-0
            text-center text-white
          '>
          {/* Image scales fluidly with container width. Replace src to swap artwork. */}
          {url ? (
            <a href={url} target="_blank" rel="noopener noreferrer" className='w-full pointer-events-auto'>
              {imageElement}
            </a>
          ) : (
            imageElement
          )}
      </div>
    </div>
  );
};