import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { CiCalendar } from "react-icons/ci"
import { IoSearch } from "react-icons/io5"
import { motion } from "framer-motion"
import blogData from "../../server/blogs.json"
import contactData from "../../server/contact.json"

const allTags = [...new Set(blogData.flatMap((blog) => blog.tags || []))].sort()

const ListSection = () => {
    const [blogs, setBlogs] = useState([])
    const [searchKeyword, setSearchKeyword] = useState("")
    const [selectedTag, setSelectedTag] = useState(null)

    const handleSearch = (e) => {
        setSearchKeyword(e.target.value)
    }

    useEffect(() => {
        let results = blogData

        if (selectedTag) {
            results = results.filter(
                (blog) => Array.isArray(blog.tags) && blog.tags.includes(selectedTag)
            )
        }

        if (searchKeyword.trim()) {
            const kw = searchKeyword.toLowerCase()
            results = results.filter(
                (blog) => {
                    const matchTitle = blog.title?.toLowerCase().includes(kw)
                    const matchDesc = blog.description?.toLowerCase().includes(kw)
                    const matchContent = blog.content?.toLowerCase().includes(kw)
                    const matchAuthor = blog.author?.toLowerCase().includes(kw)
                    const matchTags = Array.isArray(blog.tags) && blog.tags.some((t) => t.toLowerCase().includes(kw))
                    return matchTitle || matchDesc || matchContent || matchAuthor || matchTags
                }
            )
        }

        setBlogs(results)
    }, [searchKeyword, selectedTag])

    const excerpt = (text, limit = 160) => {
        if (!text) return ""
        if (text.length <= limit) return text
        return text.slice(0, limit).trim() + "..."
    }

    return (
        <div className="min-h-screen bg-slate-100 dark:bg-[#0f172a] transition-colors">
            <div className="w-[95%] md:w-[65%] max-w-[720px] mx-auto pt-10 md:pt-12 pb-16 md:pb-24 flex flex-col text-left">
                {/* Header */}
                <motion.header
                    viewport={{ once: true }}
                    initial={{ y: 12, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.5, delay: 0.1 }}
                    className="flex flex-col gap-3 mb-2 md:mb-4"
                >
                    <div className="text-4xl md:text-5xl font-bold text-dark dark:text-white">
                        Aung Paing Soe Dev's <span className="text-primary">Blog</span>
                    </div>
                    <div className="text-slate-600 dark:text-slate-300 text-sm">
                        You can follow me on my social media and{" "}
                        <a
                            href={contactData.github_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary font-medium hover:underline"
                        >
                            Github account
                        </a>
                        . ★
                    </div>
                </motion.header>

                {/* Search bar */}
                <motion.div
                    viewport={{ once: true }}
                    initial={{ y: 12, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.5, delay: 0.15 }}
                    className="relative mb-2 md:mb-4"
                >
                    <input
                        type="text"
                        value={searchKeyword}
                        onChange={handleSearch}
                        placeholder="Search for anything..."
                        className="w-full py-3 pl-4 pr-12 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-dark dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-primary pointer-events-none">
                        <IoSearch className="w-5 h-5" />
                    </span>
                </motion.div>

                {/* Tag filter */}
                {allTags.length > 0 && (
                    <motion.div
                        viewport={{ once: true }}
                        initial={{ y: 12, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                        className="mb-6 md:mb-8"
                    >
                        <span className="text-slate-600 dark:text-slate-400 text-sm mr-2">Filter by tag:</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                            <button
                                type="button"
                                onClick={() => setSelectedTag(null)}
                                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                                    selectedTag === null
                                        ? "bg-primary text-white"
                                        : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600"
                                }`}
                            >
                                All
                            </button>
                            {allTags.map((tag) => (
                                <button
                                    key={tag}
                                    type="button"
                                    onClick={() => setSelectedTag(tag)}
                                    className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                                        selectedTag === tag
                                            ? "bg-primary text-white"
                                            : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600"
                                    }`}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Featured Posts */}
                <motion.div
                    viewport={{ once: true }}
                    initial={{ y: 12, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.5, delay: 0.25 }}
                    className="text-2xl font-bold text-dark dark:text-white mb-2 md:mb-4"
                >
                    Featured Posts
                </motion.div>

                {/* Blog list */}
                <ul className="flex flex-col gap-4 md:gap-6">
                    {blogs.length === 0 ? (
                        <li className="text-slate-500 dark:text-slate-400 py-8 text-center">
                            No posts found.
                        </li>
                    ) : (
                        blogs.map((blog, i) => (
                            <motion.li
                                key={blog.id}
                                viewport={{ once: true }}
                                initial={{ y: 16, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ type: "spring", bounce: 0.5, delay: i * 0.05 }}
                                className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-stretch"
                            >
                                {blog.image_url && (
                                    <Link
                                        to={`/blogs/${blog.slug || blog.id}`}
                                        className="flex shrink-0 w-full h-36 sm:w-40 sm:h-auto sm:self-stretch rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-700"
                                    >
                                        <img
                                            src={blog.image_url}
                                            alt={blog.title}
                                            className="w-full h-36 min-h-0 object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    </Link>
                                )}
                                <div className="flex flex-col gap-2 min-w-0 flex-1">
                                    <Link
                                        to={`/blogs/${blog.slug || blog.id}`}
                                        className="font-bold text-lg text-primary hover:underline cursor-pointer dark:text-primary line-clamp-2"
                                    >
                                        {blog.title}
                                    </Link>
                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-slate-500 dark:text-slate-400 text-sm">
                                        <span className="flex items-center gap-1.5">
                                            <CiCalendar className="w-4 h-4 shrink-0" />
                                            {blog.date}
                                        </span>
                                        {blog.author && (
                                            <span className="text-slate-600 dark:text-slate-300">By {blog.author}</span>
                                        )}
                                    </div>
                                    {Array.isArray(blog.tags) && blog.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-2">
                                            {blog.tags.map((tag) => (
                                                <button
                                                    key={tag}
                                                    type="button"
                                                    onClick={(e) => {
                                                        e.preventDefault()
                                                        setSelectedTag(tag)
                                                    }}
                                                    className="px-2.5 py-0.5 text-xs font-medium rounded-md bg-primary/10 dark:bg-primary/20 text-primary border border-primary/20 hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors cursor-pointer"
                                                >
                                                    {tag}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed line-clamp-2">
                                        {excerpt(blog.description || blog.content)}
                                    </p>
                                </div>
                            </motion.li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    )
}

export default ListSection
