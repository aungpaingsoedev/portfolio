import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import { CiCalendar } from "react-icons/ci";


const CirclePetCard = ({ blog }) => {

    const except = (text, limit = 100) => {
        if (text.length > limit) {
            return text.slice(0, limit) + "..."
        } else {
            return text;
        }
    }

    return (
        <div className=' flex flex-col items-center justify-center gap-4 px-4'>
            <motion.img
                viewport={{ once: true }}
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", bounce: 0.6, delay: 0.3 }}
                src={blog.image_url}
                className='  h-[250px] w-[250px] object-cover rounded-full '
                alt="" />
            <div className=' flex flex-col gap-3 text-center '>
                <div className=' text-xl text-primary '>
                    {blog.title}
                </div>
                <div className=' flex items-center justify-center gap-1'>
                    <CiCalendar />
                    <div className=' text-xs italic '>{blog.date}</div>
                </div>
                <div>
                    {except(blog.content)}
                </div>
                <Link to={`/blogs/${blog.id}`} className=' text-md font-medium hover:text-primary '>
                    Read More
                </Link>
            </div>
        </div>
    )
}

export default CirclePetCard