import React from 'react';
import { TitleImage } from '../landing page/Title';

import headerSvg from '../../assets/header-blue.webp';

/**
 * Header component - Fixed mountain header that stays at the top
 */
export const Header: React.FC = () => {
  return (
    <div
            className='
            /* --- Responsive Sizing & Proportions --- */
            w-full
            h-[80vh] sm:h-[80vh] md:h-[80vh] lg:h-[90vh] 3xl:h-[30vh]
            /* --- Background Image --- */
          '
        >
          <TitleImage />
      </div>
  );
};
