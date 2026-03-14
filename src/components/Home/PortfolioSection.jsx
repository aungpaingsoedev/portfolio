import React from 'react'
import { motion } from 'framer-motion'
import PortfolioCard from '../Shared/Cards/PortfolioCard';
import { FaGithub } from "react-icons/fa";
import portfolioData from "../../server/portfolio.json";

const PortfolioSection = () => {
    return (
        <>
            <div id='projects' ></div>
            <div className=' w-[95%] md:w-[65%] mx-auto md:py-20'>
                <motion.div
                    viewport={{ once: true }}
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.6, delay: 0.2 }}
                    className=' lobster-tow-font text-3xl text-center mb-5 underline decoration-wavy underline-offset-4 decoration-primary '>
                    Featured Projects
                </motion.div>
                <motion.div
                    viewport={{ once: true }}
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.6, delay: 0.3 }}
                    className=' mx-auto text-center mb-5 md:mb-8 md:w-1/2 text-slate-600 dark:text-slate-400 '>
                    Embracing constraints, I've given my best. This is all I can do, a testament to determination in the face of challenges.
                </motion.div>
                <div className=' portfolio-grid w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 '>
                    {
                        portfolioData?.map((portfolio, i) => {
                            return (
                                <motion.div
                                    key={portfolio.id}
                                    viewport={{ once: true }}
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ type: "spring", bounce: 0.5, delay: i * 0.1 }}
                                    className=' w-full '>
                                    <PortfolioCard portfolio={portfolio} />
                                </motion.div>
                            )
                        })
                    }
                </div>
                <motion.div
                    viewport={{ once: true }}
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.6, delay: 0.2 }}
                    className=' text-center md:mt-8 flex md:flex-row flex-col justify-center items-center w-full text-dark dark:text-slate-300 '>
                    If you want to explored my other projects <a href='https://github.com/aungpaingsoedev' target='_blank' className=' flex gap-1 md:px-2 items-center cursor-pointer text-secondary '>
                        <FaGithub className=' text-xl ' />
                        Here my github profile </a>
                </motion.div>
            </div>
        </>
    )
}

export default PortfolioSection