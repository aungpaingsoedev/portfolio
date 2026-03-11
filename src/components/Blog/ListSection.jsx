import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { CiCalendar } from "react-icons/ci";
import { motion } from "framer-motion"
import blogData from "../../server/blogs.json"

const ListSection = () => {

    const [blogs, setBlogs] = useState([])

    const handleSearch = event => {
        let keyword = event.target.value;
        if (!keyword) {
            setBlogs(blogData)
        } else {
            const results = blogData.filter((blog) => blog.title.toLowerCase().includes(keyword.toLowerCase()));
            setBlogs(results);
        }
    }

    useEffect(() => {
        setBlogs(blogData)
    }, [])

    return (
        <div className=' w-[95%] md:w-[45%] mx-auto my-10 flex flex-col gap-3 md:gap-5 '>
            <motion.div
                viewport={{ once: true }}
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", bounce: 0.6, delay: 0.3 }}
                className=' text-2xl  lobster-tow-font flex items-center gap-2 '>
                Personal Blog
            </motion.div>
            <motion.div
                viewport={{ once: true }}
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", bounce: 0.6, delay: 0.5 }}
            >
                Welcome to my personal blog.I will be writing about my projects,
                my journey and sharing.
            </motion.div>
            <motion.div
                viewport={{ once: true }}
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", bounce: 0.6, delay: 0.5 }}
            >
                <input type="text" className='default-input'
                    onChange={() => handleSearch(event)}
                    placeholder='Search Anything...'
                />
            </motion.div>
            {/* Blogs List */}
            {
                blogs?.map(blog => {
                    return (
                        <motion.div
                            key={ blog.id }
                            viewport={{ once: true }}
                            initial={{ y: 10, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: "spring", bounce: 0.6, delay: 0.5 }}
                        >
                            <div className=' flex flex-col gap-1 '>
                                <Link
                                    to={`/blogs/${blog.id}`}
                                    className=' font-medium text-primary hover:text-secondary cursor-pointer '>
                                    {blog?.title}
                                </Link>
                                <div className=' flex gap-1 items-center '>
                                    <CiCalendar />
                                    <span className=' text-sm italic '>{blog?.date}</span>
                                </div>
                                <div className=' text-xs rounded-lg bg-slate-200 w-[100px] text-center py-1 my-1 '>
                                    {blog?.category}
                                </div>
                                <div>
                                    {blog?.content}
                                </div>
                            </div>
                        </motion.div>
                    )
                })
            }
        </div>
    )
}

export default ListSection