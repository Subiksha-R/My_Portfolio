// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Test = () => {
//   const imageRef = useRef(null);
//   const cardRefs = useRef([]);

//   // Scroll Up Pin Effect
//   useEffect(() => {
//     const imageEl = imageRef.current;
//     let lastScroll = 0;

//     const updatePin = () => {
//       const currentScroll = window.scrollY;
//       if (currentScroll < lastScroll) {
//         gsap.to(imageEl, {
//           position: "fixed",
//           top: "20px",
//           left: "20px",
//           zIndex: 999,
//           duration: 0.3,
//         });
//       } else {
//         gsap.to(imageEl, {
//           position: "relative",
//           top: "0px",
//           left: "0px",
//           zIndex: 1,
//           duration: 0.3,
//         });
//       }
//       lastScroll = currentScroll;
//     };

//     window.addEventListener("scroll", updatePin);
//     return () => window.removeEventListener("scroll", updatePin);
//   }, []);

//   // Parallax Tilt Effect
//   useEffect(() => {
//     cardRefs.current.forEach((wrap) => {
//       const container = wrap.querySelector(".container");
//       const [w, h] = [300, 360];

//       const handleMouseMove = (e) => {
//         const { offsetX, offsetY } = e;
//         const X = (-(offsetX - w / 2) / 3 / 3).toFixed(2);
//         const Y = ((offsetY - h / 2) / 3 / 3).toFixed(2);
//         container.style.setProperty("--rY", X);
//         container.style.setProperty("--rX", Y);
//         container.style.setProperty("--bY", `${80 - X / 4}%`);
//         container.style.setProperty("--bX", `${50 - Y / 4}%`);
//       };

//       const handleMouseEnter = () => {
//         container.classList.add("container--active");
//       };

//       const handleMouseLeave = () => {
//         container.classList.remove("container--active");
//         container.style.setProperty("--rY", 0);
//         container.style.setProperty("--rX", 0);
//         container.style.setProperty("--bY", "80%");
//         container.style.setProperty("--bX", "50%");
//       };

//       wrap.addEventListener("mousemove", handleMouseMove);
//       wrap.addEventListener("mouseenter", handleMouseEnter);
//       wrap.addEventListener("mouseleave", handleMouseLeave);
//     });
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 p-8 text-center text-gray-700 font-sans">
//       <div ref={imageRef} className="w-16 h-16 mb-6">
//         <img src="/images/logo.png" alt="logo" className="w-full h-full object-contain" />
//       </div>

//       <h1 className="text-4xl font-bold pt-4">Parallax Tilt Effect Cards</h1>
//       <p className="text-lg py-4">Hover over the cards.</p>

//       <section className="main flex flex-wrap justify-center items-center gap-8">
//         {[1, 2, 3].map((i, idx) => (
//           <div
//             key={i}
//             ref={(el) => (cardRefs.current[idx] = el)}
//             className={`wrap wrap--${i}`}
//             style={{ transformStyle: "preserve-3d", perspective: "100rem", cursor: "pointer" }}
//           >
//             <div
//               className={`container container--${i}`}
//               style={{
//                 "--rX": "0",
//                 "--rY": "0",
//                 "--bX": "50%",
//                 "--bY": "80%",
//                 width: "300px",
//                 height: "360px",
//                 border: "1px solid #ccc",
//                 borderRadius: "16px",
//                 padding: "2rem",
//                 display: "flex",
//                 alignItems: "flex-end",
//                 position: "relative",
//                 transform: `rotateX(calc(var(--rX) * 1deg)) rotateY(calc(var(--rY) * 1deg))`,
//                 backgroundImage:
//                   'linear-gradient(hsla(0, 0%, 100%, .1), hsla(0, 0%, 100%, .1)), url("https://images.unsplash.com/photo-1559113513-d5e09c78b9dd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max")',
//                 backgroundPosition: "var(--bX) var(--bY)",
//                 backgroundSize: "40rem auto",
//                 boxShadow: "0 0 3rem .5rem hsla(0, 0%, 0%, .2)",
//                 transition: "transform .6s 1s",
//                 filter:
//                   i === 2
//                     ? "hue-rotate(80deg) saturate(140%)"
//                     : i === 3
//                       ? "hue-rotate(160deg) saturate(140%)"
//                       : "none",
//               }}
//             >
//               <p className="text-white text-2xl">0{i}. {i === 2 ? "Reverse" : "Normal"}</p>
//             </div>
//           </div>
//         ))}
//       </section>

//       <a
//         href="https://abubakersaeed.netlify.app/designs/d10-parallax-tilt-effect-cards"
//         className="fixed bottom-5 left-5 text-sm text-gray-500 underline"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Original Design by @AbubakerSaeed96
//       </a>
//     </div>
//   );
// };

// export default Test;


import React, { useEffect, useRef } from "react";

const Test = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e, card) => {
      const rect = card.getBoundingClientRect();
      const cardX = e.clientX - rect.left;
      const cardY = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((cardY - centerY) / centerY) * 10;
      const rotateY = ((cardX - centerX) / centerX) * 10;

      card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
      const bg = card.querySelector(".card-bg");
      if (bg) {
        bg.style.transform = `translateX(${(cardX - centerX) / 10}px) translateY(${(cardY - centerY) / 10}px)`;
      }
    };

    const handleMouseLeave = (card) => {
      card.style.transform = "rotateX(0) rotateY(0)";
      const bg = card.querySelector(".card-bg");
      if (bg) bg.style.transform = "translateX(0) translateY(0)";
    };

    cardsRef.current.forEach((card) => {
      const cardWrap = card.closest(".card-wrap");
      cardWrap.addEventListener("mousemove", (e) => handleMouseMove(e, card));
      cardWrap.addEventListener("mouseleave", () => handleMouseLeave(card));
    });

    return () => {
      cardsRef.current.forEach((card) => {
        const cardWrap = card?.closest(".card-wrap");
        cardWrap.removeEventListener("mousemove", (e) => handleMouseMove(e, card));
        cardWrap.removeEventListener("mouseleave", () => handleMouseLeave(card));
      });
    };
  }, []);

  return (
    <div>
      <style>{`
        body {
          font-family: "Raleway", sans-serif;
          background-color: #BCAAA4;
          margin: 40px 0;
        }
        .title {
          font-size: 24px;
          font-weight: 700;
          color: #5D4037;
          text-align: center;
        }
        .container {
          padding: 40px 80px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
        .card-wrap {
          margin: 10px;
          perspective: 800px;
          transform-style: preserve-3d;
          cursor: pointer;
        }
        .card {
          position: relative;
          width: 240px;
          height: 320px;
          background-color: #333;
          border-radius: 10px;
          overflow: hidden;
          transition: transform 0.1s ease;
        }
        .card-bg {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: url("https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=800&q=80");
          background-size: cover;
          background-position: center;
          filter: brightness(0.75);
          transition: transform 0.2s ease;
          z-index: 1;
        }
        .card-info {
          position: absolute;
          bottom: 0;
          color: white;
          z-index: 2;
          padding: 20px;
        }
      `}</style>

      <h1 className="title">Interactive Tilt Cards</h1>
      <div className="container">
        {[1, 2, 3, 4].map((id, i) => (
          <div className="card-wrap" key={i}>
            <div className="card" ref={(el) => (cardsRef.current[i] = el)}>
              <div className="card-bg" />
              <div className="card-info">
                <h1>Card {id}</h1>
                <p>This is a 3D tilt card</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Test;
