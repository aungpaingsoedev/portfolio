import React, { useEffect, useState } from "react"
import blogData from "../../server/blogs.json"
import { motion } from "framer-motion"
import { CiCalendar } from "react-icons/ci"
import { IoArrowBackSharp } from "react-icons/io5"
import { Link } from "react-router-dom"

const DetailSection = ({ blogSlug }) => {
    const [blog, setBlog] = useState(null)

    useEffect(() => {
        setBlog(blogData.find((b) => (b.slug && b.slug === blogSlug) || b.id == blogSlug))
    }, [blogSlug])

    if (!blog) {
        return (
            <div className="min-h-screen bg-slate-100 dark:bg-[#0f172a] flex items-center justify-center">
                <div className="text-center">
                    <p className="text-slate-500 dark:text-slate-400 mb-4">Post not found.</p>
                    <Link
                        to="/blogs"
                        className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                    >
                        <IoArrowBackSharp className="text-xl" />
                        Back to blog
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-slate-100 dark:bg-[#0f172a] transition-colors">
            <article className="w-[95%] md:w-[75%] max-w-[800px] mx-auto pt-8 md:pt-12 pb-16 md:pb-24">
                {/* Back link */}
                <motion.div
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mb-6 md:mb-8"
                >
                    <Link
                        to="/blogs"
                        className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium"
                    >
                        <IoArrowBackSharp className="text-lg" />
                        Back to blog
                    </Link>
                </motion.div>

                {/* Header */}
                <motion.header
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.5, delay: 0.1 }}
                    className="mb-6 md:mb-8"
                >
                    {blog.tags && (
                        <>
                            {blog.tags.map((tag) => (
                                <span key={tag} className="px-2 py-1 rounded-md bg-primary/10 dark:bg-primary/20 text-primary text-sm font-medium mr-2">
                                    {tag}
                                </span>
                            ))}
                        </>
                    )}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark dark:text-white leading-tight mb-4">
                        {blog.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-slate-500 dark:text-slate-400 text-sm">
                        <span className="flex items-center gap-1.5">
                            <CiCalendar className="w-4 h-4 shrink-0" />
                            {blog.date}
                        </span>
                        {blog.author && (
                            <span className="text-slate-600 dark:text-slate-300">By {blog.author}</span>
                        )}
                    </div>
                </motion.header>

                {/* Featured image */}
                {blog.image_url && (
                    <motion.div
                        initial={{ y: 16, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                        className="mb-8 md:mb-10 rounded-xl overflow-hidden shadow-lg"
                    >
                        <img
                            src={blog.image_url}
                            alt={blog.title}
                            className="w-full h-auto object-cover"
                        />
                    </motion.div>
                )}

                {/* Content - HTML from Summernote / rich editor */}
                <motion.div
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.5, delay: 0.3 }}
                    className="blog-content text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: blog.content || "" }}
                />

                {/* Back to list */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700"
                >
                    <Link
                        to="/blogs"
                        className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                    >
                        <IoArrowBackSharp className="text-lg" />
                        All posts
                    </Link>
                </motion.div>
            </article>
        </div>
    )
}

export default DetailSection
