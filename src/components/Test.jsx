import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/all";

const RobertDeveloper = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const traX = (4 * mouseX) / window.innerWidth * 10 + 40;
      const traY = (4 * mouseY) / window.innerHeight * 10 + 50;

      gsap.to(titleRef.current, {
        backgroundPosition: `${traX}% ${traY}%`,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#ebece7] to-white font-raleway relative overflow-hidden">
      <h1
        ref={titleRef}
        className="title-text text-[50px] font-bold text-transparent bg-[url('/images/lines-purple.jpg')] bg-repeat bg-[length:200%_200%] bg-[40%_50%] bg-clip-text leading-[90px] tracking-[-0.2em] text-center select-none"
      >        ROBERT DEVELOPER

      </h1>
      <p className="uppercase text-center pt-2 text-base tracking-widest text-gray-700">
        geek + smart + curious + nerd + ingenious + cunning = ME
      </p>
    </div>
  );
};

export default RobertDeveloper;
