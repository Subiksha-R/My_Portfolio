import { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import profileIcon from '/images/profile.svg';

const useIsMobile = (breakpoint = 1024) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < breakpoint);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, [breakpoint]);

    return isMobile;
};

function Home() {

    const isMobile = useIsMobile(); 
    const delay = isMobile ? 0.1 : 1.6;

    return (
        <div className="w-full py-0 sm:py-2 md:py-4 lg:py-16 xl:py-16 flex items-center justify-center relative">
            <div className=' w-[90%] lg:w-[70%] flex flex-col gap-10'>

                <div className='flex items-center justify-center '>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 40,
                            damping: 25,
                            delay: delay,
                            duration: 1.5
                        }}
                        className='intro-name text-2xl'>Hello! I Am
                        <span className='text-textPurple'> Ibrahim</span></motion.p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-evenly gap-[50px] sm:gap-[100px]">
                    <div className=" w-[70%] sm:w-[40%] lg:w-[30%] h-[60%] rounded-full bg-center-to-top shadow-lg flex justify-center items-center">
                        <div className="w-[60%]">
                            <img
                                src={profileIcon}
                                alt="Icon"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    <div className="w-[80%] sm:w-[40%] text-center sm:text-left space-y-2">
                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 40,
                                damping: 25,
                                delay: delay,
                                duration: 1.5
                            }}
                        >
                            A Designer who <br />
                            <span className="text-4xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl ">
                                Judges a book <br/> by its <span className="text-textPurple">cover</span> ...
                            </span>
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 40,
                                damping: 25,
                                delay: delay,
                                duration: 1.5
                            }}>
                            Because if the cover does not impress you, what else can?
                        </motion.p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home