import React, { useRef } from "react";
import gsap from "gsap";
import "../index.css";

const WorkExperience = () => {
  const cardsRef = useRef([]);
  const experiences = [
    {
      role: "Frontend Developer",
      company: "Cloudrevel Innovations Pvt. Ltd.",
      duration: "Feb 2024 – Present",
      description:
        "Worked on a banking web application using React.js, HTML, CSS, and PHP. Handled UI development, API integration, and front-end logic.",
      tech: ["React.js", "HTML", "CSS", "PHP", "REST APIs"],
    },
    {
      role: "Intern – Web Developer",
      company: "S-Tech Solutions",
      duration: "Jun 2023 – Nov 2023",
      description:
        "Built mini-projects, collaborated with developers, and strengthened JavaScript and frontend development fundamentals.",
      tech: ["JavaScript", "Bootstrap", "HTML", "CSS"],
    },
  ];


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
    <div id="experience" className="w-full h-auto py-4  flex items-center justify-center relative ">
      <div className='w-[80%] mx-auto flex flex-col justify-center items-center sm:items-start gap-5'>

        <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl"> Work Experience </h1>
        <div className=" w-full pt-10 flex items-center justify-between">
          {[1,2].map((i) => (
            <div
              key={i}
              className="m-2 [perspective:800px] [transform-style:preserve-3d] cursor-pointer"
              onMouseMove={(e) => handleMouseMove(e, i)}
              onMouseLeave={() => handleMouseLeave(i)}
            >
              <div
                className="relative bg-[#333] rounded-[10px] overflow-hidden [transform-style:preserve-3d] w-[680px] h-[300px] "
                ref={(el) => (cardsRef.current[i] = el)}  
              >
                <div
                  className= "absolute w-full h-full z-[1] bg-[linear-gradient(45deg,_#11071F_0%,_rgba(53,29,77,0.6)_50%,_#11071F_100%)] bg-cover bg-center"
                />
                <div>
                  {experiences.map((exp, index) => (
                    <div>
                    
                    </div>
                  ))}
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
