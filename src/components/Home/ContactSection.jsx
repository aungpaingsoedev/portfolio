import React from 'react'
import { motion } from 'framer-motion';
import contactData from "../../server/contact.json"

const Footer = () => {
    return (
        <>
            <div id='contact'></div>
            <div className=' mb-10 md:pb-0 '>
                <div className=' w-[95%] md:w-[65%] mx-auto text-center'>
                    <motion.div
                        viewport={{ once: true }}
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", bounce: 0.6, delay: 0.2 }}
                        className='lobster-tow-font text-3xl text-center mb-5 underline decoration-wavy underline-offset-4 decoration-primary '>
                        Contact
                    </motion.div>
                    <motion.div
                        viewport={{ once: true }}
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", bounce: 0.6, delay: 0.3 }}
                        className=' mx-auto text-center mb-5 md:mb-8 md:w-1/2 '>
                        { contactData.content }
                    </motion.div>
                    <motion.div
                        viewport={{ once: true }}
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", bounce: 0.6, delay: 0.5 }}
                    >
                        <a href={`mailto: ${contactData.email}`} className=' default-btn '>
                            Get in touch!
                        </a>
                    </motion.div>
                </div>
            </div>
        </>

    )
}

export default Footer