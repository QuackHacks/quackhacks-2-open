import React, { useState, useEffect } from 'react';
import { Header } from '../components/landing page/Header';
import {AboutSection} from '../components/landing page/AboutSection';
import { PastEventsSection } from '../components/landing page/PastEventsSection';
import HeaderBg2 from '../assets/1.1.jpg';
import { ScheduleSection } from '../components/landing page/ScheduleSection';
import { ContactSection } from '../components/landing page/ContactSection';
import { FaqSection } from '../components/landing page/FaqSection';
import { TeamSection } from '../components/landing page/TeamSection';
import { SponorsSection } from '../components/landing page/SponsorsSection';
import { FooterSection } from '../components/landing page/FooterSection';
//balls
//I LOVE WHEN YOU COUNT ME OUT
//FAILURE...
//FAILURE AGAIN
//3 time is the charm?
//It wasn't
// On the 5th day of christmas
// My true love gave to me
// 6 servers crashing
// FIND MY LOVE
// SPACE THE FLOOR BANG A THREE, ITS BBQ CHICKEN FROM THERE

/**
 * Main page for the hackathon website, what the users will be greeted with on enter
 */
const MainPage: React.FC = () => {
  const [showArrow, setShowArrow] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(true);
      setShowArrow(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show arrow after 2.5 seconds if user hasn't scrolled
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasScrolled) {
        setShowArrow(true);
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [hasScrolled]);

  return (
        <>
        {/* MLH Trust Badge */}
        <a
          id="mlh-trust-badge"
          className="
            fixed
            z-[9998]
            transition-opacity
            duration-300
            ease-in-out
            hidden
            sm:block
            sm:top-0
            sm:right-5
            sm:w-20
            sm:max-w-20
            md:w-24
            md:max-w-24
            lg:w-28
            lg:max-w-28
            xl:w-32
            xl:max-w-32
            hover:opacity-80
          "
          href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <img 
            src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-white.svg" 
            alt="Major League Hacking 2026 Hackathon Season" 
            className="w-full h-auto"
          />
        </a>
        <div className="
        relative 
        flex 
        flex-col 
        min-h-screen 
        overflow-x-hidden
        bg-size-[530%]
        md:bg-size-[300%]
        lg:bg-size-[250%]
        xl:bg-size-[150%]
        2xl:bg-size-[200%]
        "
         style={{
          backgroundImage: `url(${HeaderBg2})`,
          backgroundPosition:'top center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          }}>
            <Header />
            <AboutSection/>
            <PastEventsSection/>
            <ScheduleSection/>
            <ContactSection/>
            <FaqSection/>
            <TeamSection/>
            <SponorsSection />
            <FooterSection/>

            {/* Bouncing Arrow */}
            <div
              style={{
                position: 'fixed',
                bottom: '2rem',
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: '2rem',
                cursor: 'pointer',
                color: '#1c351c',
                opacity: showArrow ? 0.7 : 0,
                transition: 'opacity 0.5s ease',
                animation: showArrow ? 'bounce 2s infinite' : 'none',
                zIndex: 9997,
                pointerEvents: showArrow ? 'auto' : 'none',
              }}
              onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
            >
              ↓
            </div>

            <style>{`
              @keyframes bounce {
                0%, 20%, 50%, 80%, 100% {
                  transform: translateX(-50%) translateY(0);
                }
                40% {
                  transform: translateX(-50%) translateY(-20px);
                }
                60% {
                  transform: translateX(-50%) translateY(-10px);
                }
              }
            `}</style>
        </div>
        </>
  );
};

export default MainPage;
