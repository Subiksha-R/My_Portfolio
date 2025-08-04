import { useGSAP } from "@gsap/react"
import { SplitText } from 'gsap/all'
import gsap from "gsap/all"


const About = () => {
    useGSAP(() => {
        const h2Split = SplitText.create("#about h2", { type: "words" });
        const pSplit = SplitText.create(["#about p", "#about img"], { type: "words" });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#about",
                start: "top 70%",
            },
        });

        tl.from(h2Split.words, {
            opacity: 0,
            yPercent: 100,
            duration: 1,
            ease: "expo.out",
            stagger: 0.05,
        }).from(pSplit.words, {
            opacity: 0,
            yPercent: 100,
            duration: 0.5,
            ease: "expo.out",
            stagger: 0.05,
        }, "-=0.3"); // slight overlap with h2 animation
    });



    return (
        <div id="about"  className="w-full h-auto py-16 sm:py-20 lg:py-16 xl:py-16 flex items-center justify-center relative">
            <div className='w-[80%] mx-auto flex flex-col justify-center items-center sm:items-start gap-5'>
                <h2
                    className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
                    I'm a <span className="text-textPurple">Software Engineer</span>
                </h2>

                <div className="flex items-center gap-2 text-sm sm:text-lg lg:text-xl xl:text-2xl">
                    <span>Currently, I'm a Software Engineer at</span>
                    <span className="text-textPurple" >Facebook</span>
                </div>


                <p
                    className=" text-sm lg:text-lg text-justify text-gray-300">
                    A self-taught UI/UX designer, functioning in the industry for 3+ years now.
                    I make meaningful and delightful digital products that create an equilibrium
                    between user needs and business goals.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni deleniti expedita soluta tenetur quisquam sequi provident ex, ratione quos, culpa ipsam quidem unde minus aperiam eaque quod! Quo repellendus nemo iure numquam optio, quis modi quasi cum cumque 
                </p>
            </div>
        </div>
    )
}

export default About