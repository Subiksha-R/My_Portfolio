import React, { useEffect, useRef } from "react";
import "../index.css";
import StarSvg from "./StarSvg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const WorkExperience = () => {
  const cardsRef = useRef([]);
  const containerRef = useRef(null);
  const text = 'Software Engineer';
  const textRef = useRef(null);

  useGSAP(() => {
    const h1Split = SplitText.create("#experience h1", { type: "words" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#experience",
        start: "top 80%",
      },
    });

    tl.from(h1Split.words, {
      opacity: 0,
      yPercent: 100,
      duration: 1,
      ease: "expo.out",
      stagger: 0.05,
    })

    tl.from(cardsRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3,
      ease: "power3.out",
    }, "+=0.2"); 
  });

  useEffect(() => {
    if (cardsRef.current.length === 0) return;

    cardsRef.current.forEach((card, i) => {
      const letters = card.querySelectorAll(".shine-letter");
      if (!letters.length) return;

      gsap.fromTo(
        letters,
        { opacity: 0.4 },
        {
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: i * 0.5, // stagger between cards
        }
      );
    });
  }, []);

  useEffect(() => {
    if (cardsRef.current.length === 0) return;

    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  
  
  return (
    <div id="experience"
      ref={containerRef}
      className="w-full h-auto py-10 sm:py-15 lg:py-14 xl:py-16 flex items-center justify-center relative ">
      <div className='w-[80%] mx-auto flex flex-col justify-center items-center sm:items-start gap-5'>

        <h1 className="text-xl  sm:text-2xl lg:text-3xl xl:text-4xl"> Work Experience </h1>
        <div className="flex items-center justify-between w-full gap-6">
          {[1, 2].map((i,index) => (
            <div key={i}
              ref={(el) => (cardsRef.current[index] = el)}
              className="w-full h-auto py-8 flex flex-col items-center relative">
              <div className="w-[600px] h-[200px] circle-center translate-x-[-10px] -rotate-3">
                <StarSvg />
              </div>
              <div className="w-[600px] h-[250px] bg-diagonal-purple rounded-2xl mt-5 translate-x-[10px] rotate-2 flex items-center">
                <div className="text-white p-6 space-y-4 flex justify-between items-center gap-8">
                  <div className="w-[150px] h-[150px] flex items-center">
                    <img src="/images/logo.png" />
                  </div>
                  <div className="space-y-4">
                    <h2 ref={textRef} className="text-3xl text-white font-semibold">
                      {text.split('').map((char, i) => (
                        <span key={i} className="shine-letter">
                          {char}
                        </span>
                      ))}
                    </h2>
                    <p  className="text-lg text-gray-300">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, id.</p>
                    <button className="bg-[#3f2853] p-3 border border-gray-500 rounded-3xl"> Learn More</button>
                  </div>
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
