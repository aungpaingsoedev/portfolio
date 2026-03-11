import React, { useEffect, useState } from 'react'
import blogData from "../../server/blogs.json"
import { motion } from "framer-motion"
import { CiCalendar } from "react-icons/ci";
import { IoArrowBackSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const DetailSection = ({ blogId }) => {

    const [blog, setblog] = useState(null);

    useEffect(() => {
        setblog(blogData.find(blog => blog.id == blogId))
    }, [blog]);

    return (
        <div
            className=' w-[95%] md:w-[45%] mx-auto flex flex-col gap-3 my-5 md:my-10 '>
            <motion.div
                viewport={{ once: true }}
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", bounce: 0.6, delay: 0.3 }}
                className=' text-4xl font-medium flex gap-2 items-center '>
                <Link to={`/blogs`}>
                    <IoArrowBackSharp className=' text-3xl hover:text-secondary ' />
                </Link>
                {blog?.title}
            </motion.div>
            <motion.div
                viewport={{ once: true }}
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", bounce: 0.6, delay: 0.5 }}
                className=' flex items-center gap-1 '>
                <CiCalendar className=' text-xl ' />
                {blog?.date}
            </motion.div>
            <motion.div
                viewport={{ once: true }}
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", bounce: 0.6, delay: 0.7 }}
                className=' bg-slate-200 py-1 rounded-lg text-xs text-center w-[100px] '>
                {blog?.category}
            </motion.div>
            <motion.div
                viewport={{ once: true }}
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", bounce: 0.6, delay: 1 }}
            >
                <img src={blog?.image_url}
                    className=' w-full '
                    alt="" />
            </motion.div>
            <motion.div
                viewport={{ once: true }}
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", bounce: 0.6, delay: 1.2 }}
            >
                {blog?.content}
            </motion.div>
        </div>
    )
}

export default DetailSection