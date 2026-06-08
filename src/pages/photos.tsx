import React from 'react';

import HeaderBg2 from '../assets/1.1.jpg';

const PhotosPage: React.FC = () => {
  return (
    <main
      className='
        min-h-screen
        overflow-x-hidden
        bg-size-[530%]
        md:bg-size-[300%]
        lg:bg-size-[250%]
        xl:bg-size-[150%]
        2xl:bg-size-[200%]
      '
      style={{
        backgroundImage: `url(${HeaderBg2})`,
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <section className='relative mx-auto w-full max-w-[90rem] px-6 pb-20 pt-24 text-left md:px-12'>
        <h1 className='[font-family:var(--font-title)] text-4xl font-bold leading-none text-neutral-900 md:text-6xl'>
          Photo Gallery
        </h1>
        <p className='mt-3 max-w-xl [font-family:var(--font-body)] text-sm text-neutral-600 md:text-base'>
          Archived photos from QuackHacks 2.
        </p>
      </section>
    </main>
  );
};

export default PhotosPage;
