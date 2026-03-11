import React from 'react'
import { motion } from 'framer-motion'
import { IoCodeSlashOutline } from "react-icons/io5";
import { CiServer } from "react-icons/ci";
import { VscCommentUnresolved } from "react-icons/vsc";
import { LiaUserTieSolid } from "react-icons/lia";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { PiProjectorScreen } from "react-icons/pi";
import skillData from "../../server/skills.json"

const SkillSection = () => {
  return (
    <>
      <div id='skills'></div>
      <div className=" w-[95%] md:w-[65%] mx-auto my-10 md:my-20 " >
        <motion.div
          viewport={{ once: true }}
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.6, delay: 0.2 }}
          className='lobster-tow-font text-3xl text-center mb-5 md:mb-8 underline decoration-wavy underline-offset-4 decoration-primary '>
          What can I do ?
        </motion.div>
        <div className=' flex flex-col-reverse md:flex-row gap-2 md:gap-5 '>
          <div className=' basis-1/2 '>
            <div className=' flex flex-wrap justify-start '>
              <div className=" basis-1/3 p-[2px] md:p-2 ">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.5,
                    duration: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                      type: "spring",
                      damping: 5,
                      stiffness: 100,
                      restDelta: 0.001
                    }
                  }}
                  className=' skill-card flex flex-col justify-center items-center gap-1 h-full text-sm '>
                  <div>
                    <IoCodeSlashOutline className=' text-3xl ' />
                  </div>
                  <div className=' text-center text-xs md:text-sm '>
                    Web Development
                  </div>
                </motion.div>
              </div>
              <div className=" basis-1/3 p-[2px] md:p-2 ">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.8,
                    duration: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                      type: "spring",
                      damping: 5,
                      stiffness: 100,
                      restDelta: 0.001
                    }
                  }}
                  className=' skill-card flex flex-col justify-center items-center gap-1 h-full text-sm '>
                  <div>
                    <CiServer className=' text-3xl ' />
                  </div>
                  <div className=' text-xs md:text-sm '>
                    DevOps
                  </div>
                </motion.div>
              </div>
              <div className=" basis-1/3 p-[2px] md:p-2 ">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 1,
                    duration: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                      type: "spring",
                      damping: 5,
                      stiffness: 100,
                      restDelta: 0.001
                    }
                  }}
                  className=' skill-card flex flex-col justify-center items-center gap-1 h-full text-sm '>
                  <div>
                    <LiaUserTieSolid className=' text-3xl ' />
                  </div>
                  <div className=' text-xs md:text-sm '>
                    Leadership
                  </div>
                </motion.div>
              </div>
              <div className=" basis-1/3 p-[2px] md:p-2 ">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 1.2,
                    duration: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                      type: "spring",
                      damping: 5,
                      stiffness: 100,
                      restDelta: 0.001
                    }
                  }}
                  className=' skill-card flex flex-col justify-center items-center gap-1 h-full text-sm '>
                  <div>
                    <VscCommentUnresolved className=' text-3xl ' />
                  </div>
                  <div className=' text-xs md:text-sm '>
                    Problem Solving
                  </div>
                </motion.div>
              </div>
              <div className=" basis-1/3 p-[2px] md:p-2 ">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 1.4,
                    duration: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                      type: "spring",
                      damping: 5,
                      stiffness: 100,
                      restDelta: 0.001
                    }
                  }}
                  className=' skill-card flex flex-col justify-center items-center gap-1 h-full text-sm '>
                  <div>
                    <MdOutlineBusinessCenter className=' text-3xl ' />
                  </div>
                  <div className=' text-xs md:text-sm '>
                    Business Logic
                  </div>
                </motion.div>
              </div>
              <div className=" basis-1/3 p-[2px] md:p-2 ">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 1.7,
                    duration: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                      type: "spring",
                      damping: 5,
                      stiffness: 100,
                      restDelta: 0.001
                    }
                  }}
                  className=' skill-card flex flex-col justify-center items-center gap-1 h-full text-sm '>
                  <div>
                    <PiProjectorScreen className=' text-3xl ' />
                  </div>
                  <div className=' text-xs md:text-sm '>
                    Project Management
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          <div className=' basis-1/2 '>
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", bounce: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className=' text-start mt-2 '
            >
              <span className=' text-secondary italic font-medium '>Greetings</span> , { skillData.about_me } 
            </motion.div>
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", bounce: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className=' my-2 text-secondary font-medium '>My Working Experience</div>
              <div>
                { skillData.work_experience }
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>

  )
}

export default SkillSection