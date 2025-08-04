import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Test = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.to(textRef.current, {
      backgroundPosition: "200% 50%",
      duration: 80,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        margin: 0,
        background: "#090d00",
        color: "rgba(255,255,255,0.25)",
        fontFamily: '"Neuton", serif',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p
        style={{
          textTransform: "uppercase",
          letterSpacing: "0.5em",
          borderTop: "4px double rgba(255,255,255,0.25)",
          borderBottom: "4px double rgba(255,255,255,0.25)",
          padding: "1.5em 0",
          width: "40em",
          textAlign: "center",
        }}
      >
        <span
          ref={textRef}
          style={{
            font: "700 4em/1 Oswald, sans-serif",
            letterSpacing: "0",
            padding: ".25em 0 .325em",
            display: "block",
            margin: "0 auto",
            textShadow: "0 0 80px rgba(255,255,255,0.5)",
            background: "url(https://i.ibb.co/3M2Lkzr/purple-text-fill.png) repeat-y",
            backgroundSize: "200% auto",
            backgroundPosition: "0% 50%",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            WebkitTransform: "translate3d(0,0,0)",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          Cloudrevel
        </span>
        Software Engineer
      </p>
    </div>
  );
};

export default Test;
