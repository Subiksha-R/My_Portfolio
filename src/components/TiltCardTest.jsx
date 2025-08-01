import React, { useRef } from "react";

const TiltCardTest = () => {
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

        card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;

        const bg = card.querySelector(".card-bg");
        if (bg) {
            bg.style.transform = `translateX(${(cardX - centerX) / 10}px) translateY(${(cardY - centerY) / 10}px)`;
        }
    };

    const handleMouseLeave = (index) => {
        const card = cardsRef.current[index];
        if (!card) return;

        card.style.transform = "rotateX(0deg) rotateY(0deg)";
        const bg = card.querySelector(".card-bg");
        if (bg) {
            bg.style.transform = "translateX(0px) translateY(0px)";
        }
    };

    return (
        <>
            <h1 className="title">Interactive Tilt Cards</h1>
            <div className="container">
                {[1, 2, 3].map((_, i) => (
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
                                style={{
                                    backgroundImage: `url(https://source.unsplash.com/random/300x400?sig=${i})`,
                                }}
                            />
                            <div className="card-info">
                                <h1>Card {i + 1}</h1>
                                <p>This is a 3D tilt card</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
        body {
          font-family: 'Raleway', sans-serif;
          background-color: #BCAAA4;
        }

        .title {
          font-size: 24px;
          font-weight: 700;
          color: #5D4037;
          text-align: center;
          margin: 40px 0;
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
          transition: transform 0.2s ease;
        }

        .card-bg {
          position: absolute;
          width: 100%;
          height: 100%;
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

        .card-info h1 {
          font-size: 20px;
          margin: 0 0 10px 0;
        }

        .card-info p {
          font-size: 14px;
          margin: 0;
        }
      `}</style>
        </>
    );
};

export default TiltCardTest;
