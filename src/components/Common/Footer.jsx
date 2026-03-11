import React from 'react'
import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import contactData from "../../server/contact.json"

const Footer = () => {
  return (
    <div className=' w-full flex flex-col gap-5 items-center justify-center pb-20 md:py-10 '>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className=' flex gap-8 '>
        <ul className=' hover:text-secondary cursor-pointer '>
          <a href={`${contactData.github_url}`} target='_blank'>
            <FaGithub className=' text-2xl ' />
          </a>
        </ul>
        <ul className='hover:text-secondary cursor-pointer ' >
          <a href={`${contactData.instagram_url}`} target='_blank'>
            <FaInstagram className=' text-2xl ' />
          </a>
        </ul>
        <ul className='hover:text-secondary cursor-pointer '>
          <a href={`${contactData.facebook_url}`} target='_blank'>
            <FaFacebook className=' text-2xl ' />
          </a>
        </ul>
      </motion.div>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.6, delay: 0.7 }}
        viewport={{ once: true }}
      >
        Copyright © All rights reserved by : <span className=' text-secondary '>PhyoZ</span>
      </motion.div>
    </div>
  )
}

export default Footer