import React from 'react'
import profileIcon from '/images/profile.svg';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Test() {
  const imageRef = useRef(null);
  let lastScroll = useRef(0);

  useEffect(() => {
    const imageEl = imageRef.current;

    const updatePin = () => {
      const currentScroll = window.scrollY;

      if (currentScroll < lastScroll.current) {
        // Scrolling up → pin
        gsap.to(imageEl, {
          position: "fixed",
          top: "20px",
          left: "20px",
          zIndex: 999,
          duration: 0.3,
        });
      } else {
        // Scrolling down → unpin
        gsap.to(imageEl, {
          position: "relative",
          top: "0px",
          left: "0px",
          zIndex: 1,
          duration: 0.3,
        });
      }

      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", updatePin);

    return () => {
      window.removeEventListener("scroll", updatePin);
    };
  }, []);

  return (
    <>
    {/*  <div className="mask mask-hexagon w-40 h-40 bg-center-to-top shadow-lg">
       <img
       
       src={profileIcon} alt="Icon" className="w-full h-full object-cover" />
     </div> */}
      <div ref={imageRef} className="w-16 h-16">
        <img src="/images/logo.png" alt="logo" className="w-full h-full object-contain" />
      </div>
      
      
    </>
  )
}

export default Test