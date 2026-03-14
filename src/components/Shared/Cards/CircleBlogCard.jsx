import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import { CiCalendar } from "react-icons/ci"

const CircleBlogCard = ({ blog }) => {

    const except = (text, limit = 100) => {
        if (!text) return ""
        if (text.length > limit) {
            return text.slice(0, limit) + "..."
        }
        return text
    }

    return (
        <motion.div
            viewport={{ once: true }}
            initial={{ y: 14, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
            className="w-full h-full rounded-xl overflow-hidden bg-white dark:bg-slate-800 shadow-md hover:shadow-xl transition-colors flex flex-col"
        >
            <Link to={`/blogs/${blog.slug || blog.id}`} className="block flex-1 flex flex-col">
                <div className="overflow-hidden bg-slate-100">
                    <img
                        src={blog.image_url}
                        alt={blog.title}
                        className="w-full h-[200px] md:h-[220px] object-cover object-center hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <div className="p-4 md:p-5 flex-1 flex flex-col bg-white dark:bg-slate-800">
                    {blog.category && (
                        <span className="inline-block w-fit text-xs font-medium px-2.5 py-1 rounded-md bg-primary/10 text-primary mb-2">
                            {blog.category}
                        </span>
                    )}
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-1.5 line-clamp-2">
                        {blog.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-slate-500 text-sm mb-3">
                        <CiCalendar className="w-4 h-4 shrink-0" />
                        <span className="italic">{blog.date}</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3 flex-1">
                        {except(blog.content, 120)}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-4 text-primary font-medium text-sm hover:gap-2 transition-all">
                        Read More
                        <span aria-hidden>→</span>
                    </span>
                </div>
            </Link>
        </motion.div>
    )
}

export default CircleBlogCard
