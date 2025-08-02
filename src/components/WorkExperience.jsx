import React, { useRef } from "react";
import gsap from "gsap";
import "../index.css";

const WorkExperience = () => {
  const cardsRef = useRef([]);

const handleMouseMove = (e, index) => {
  const card = cardsRef.current[index];
  if (!card) return;

  const rect = card.getBoundingClientRect();
  const cardX = e.clientX - rect.left;
  const cardY = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((cardY - centerY) / centerY) * 10;
  const rotateY = ((cardX - centerX) / centerX) * 10;

  gsap.to(card, {
    duration: 0.3,
    rotateX: -rotateX,
    rotateY: rotateY,
    scale: 1.05, 
    ease: "power2.out",
  });

  const bg = card.querySelector(".card-bg");
  if (bg) {
    gsap.to(bg, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      ease: "power2.out",
    });
  }
};

  const handleMouseLeave = (index) => {
    const card = cardsRef.current[index];
    if (!card) return;

    gsap.to(card, {
      duration: 0.5,
      rotateX: 0,
      rotateY: 0,
      scale: 1, // reset scale
      ease: "power2.out",
    });

    const bg = card.querySelector(".card-bg");
    if (bg) {
      gsap.to(bg, {
        duration: 0.5,
        x: 0,
        y: 0,
        ease: "power2.out",
      });
    }
  };

  return (
    <div id="experience" className="w-full h-auto py-4 sm:py-20 lg:py-16 xl:py-16 flex items-center justify-center relative ">
      <div className='w-[90%] sm:w-[70%] lg:w-[60%] flex flex-col justify-center items-center sm:items-start gap-5'>

        <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl"> Work Experience </h1>
        <div className="container">
          {[1,2].map((i) => (
            <div
              key={i}
              className="card-wrap"
              onMouseMove={(e) => handleMouseMove(e, i)}
              onMouseLeave={() => handleMouseLeave(i)}
            >
              <div
                className="card"
                ref={(el) => (cardsRef.current[i] = el)}
              >
                <div
                  className="card-bg"
                />

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
