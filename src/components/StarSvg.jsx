import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useMemo } from 'react';

function StarSvg() {
    // Generate 100 random circles once (doesn't regenerate on re-render)
    const stars = useMemo(() => {
        return Array.from({ length: 100 }, () => ({
            cx: Math.floor(Math.random() * 925),  // within SVG width
            cy: Math.floor(Math.random() * 425),  // within SVG height
            r: Math.random() * 2 + 1,             // radius between 1 and 3
            opacity: Math.random() * 0.3 + 0.5    // opacity between 0.5 and 0.8
        }));
    }, []);

    useGSAP(() => {
        gsap.utils.toArray('.cir').forEach((cir, index) => {
            gsap.fromTo(
                cir,
                { y: 500 },
                {
                    y: -400,
                    duration: 3 + index * 0.05,
                    repeat: -1,
                    ease: 'none'
                }
            );
        });
    });

    return (
        <svg viewBox="0 0 925 425" className="w-full h-auto">
            <g>
                {stars.map((star, idx) => (
                    <circle
                        key={idx}
                        className="cir"
                        fill="#fff"
                        cx={star.cx}
                        cy={star.cy}
                        r={star.r}
                        fillOpacity={star.opacity}
                    />
                ))}
            </g>
        </svg>
    );
}

export default StarSvg;
