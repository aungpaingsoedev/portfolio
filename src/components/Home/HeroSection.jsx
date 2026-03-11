import { motion } from "framer-motion"
import { PiArrowFatDown } from "react-icons/pi";
import homeData from "../../server/home.json";

const HeroSection = () => {
    return (
        <div id="home" className=' w-[98%] md:w-[65%] mx-auto h-screen flex gap-5 md:gap-0 flex-col-reverse md:flex-row items-center relative '>
            <div className=' basis-1/2 '>
                <div className=' flex flex-col gap-2 md:gap-6 '>
                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", bounce: 0.6, delay: 0.2 }}
                        className=' text-md md:text-xl text-primary '>
                        Hi my name is
                    </motion.div>
                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", bounce: 0.6, delay: 0.4 }}
                        className=' text-2xl md:text-6xl font-bold '>
                        { homeData.name }
                    </motion.div>
                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", bounce: 0.6, delay: 0.6 }}
                        className=' text-2xl md:text-4xl text-primary lobster-tow-font  '>
                        { homeData.intro }
                    </motion.div>
                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", bounce: 0.6, delay: 0.8 }}
                    >
                        { homeData.content }
                    </motion.div>
                </div>
            </div>
            <div className=' basis-1/2 '>
                <div className=" flex flex-col mt-16 md:mt-0 md:items-center md:justify-center relative ">
                    <div className=" w-12/12 md:w-8/12 relative ">
                        <motion.img
                            initial={{
                                opacity: 0,
                                rotate: 5
                            }}
                            animate={{
                                opacity: 1,
                                rotate: -2
                            }}
                            transition={{
                                delay: 0.4,
                                duration: 2,
                                type: "spring",
                                bounce: 0.5
                            }}
                            src={ homeData.image }
                            className=" h-[55vh] md:h-[65vh] object-cover grayscale-[40%] shadow-sm "
                            alt=""
                        />
                        <motion.img
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 3 }}
                            src="/images/default/dots_bg.jpg"
                            className=" h-[55vh] md:h-[65vh] absolute -top-10 -end-10 -z-10 "
                            alt="" />
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 0.8, scale: 1 }}
                            transition={{
                                delay: 0.7,
                                duration: 0.3,
                                ease: [0, 0.71, 0.2, 1.01],
                                scale: {
                                    type: "spring",
                                    damping: 5,
                                    stiffness: 100,
                                    restDelta: 0.001
                                }
                            }}
                            className=" absolute -bottom-8 -end-7 md:-bottom-10 md:-end-12 w-[90px] h-[90px] md:w-[110px] md:h-[110px] z-10 bg-secondary opacity-80 rounded-full flex items-center justify-center ">
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 0.6, scale: 1 }}
                            transition={{
                                delay: 0.9,
                                duration: 0.5,
                                ease: [0, 0.71, 0.2, 1.01],
                                scale: {
                                    type: "spring",
                                    damping: 5,
                                    stiffness: 100,
                                    restDelta: 0.001
                                }
                            }}
                            className=" absolute bottom-7 -end-5 w-[60px] h-[60px] md:w-[80px] md:h-[80px] opacity-50 bg-secondary rounded-full "></motion.div>
                    </div>
                </div>
            </div>
            <div className=' md:absolute bottom-5 left-1/2 '>
                <motion.a
                    href="#skills"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: "spring", delay: 0.9 }}
                    className=" animate-bounce cursor-pointer flex flex-col justify-center items-center hover:text-secondary ">
                    <div>Scroll</div>
                    <PiArrowFatDown className=" text-3xl " />
                </motion.a>
            </div>
        </div>
    )
}

export default HeroSection