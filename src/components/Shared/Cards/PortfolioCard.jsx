import React from 'react'
import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa"
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2"

const PortfolioCard = ({ portfolio }) => {

    const except = (text, limit = 80) => {
        if (!text) return ""
        if (text.length > limit) {
            return text.slice(0, limit) + "..."
        }
        return text
    }

    const handleProjectClick = (e) => {
        e?.stopPropagation?.()
        if (portfolio?.project_url) {
            window.open(portfolio.project_url, "_blank")
        }
    }

    const handleGithubClick = (e) => {
        e.stopPropagation()
        if (portfolio?.github_url) {
            window.open(portfolio.github_url, "_blank")
        }
    }

    return (
        <motion.div
            viewport={{ once: true }}
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.6, delay: 0.3 }}
            className="w-full h-full rounded-xl overflow-hidden bg-white dark:bg-slate-800 shadow-md hover:shadow-xl transition-colors"
        >
            {/* Image - top with subtle angle effect */}
            <div
                className="overflow-hidden bg-slate-100 cursor-pointer"
                onClick={handleProjectClick}
            >
                <motion.img
                    viewport={{ once: true }}
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.6, delay: 0.3 }}
                    className="w-full h-[260px] md:h-[280px] object-cover object-center hover:scale-105 transition-transform duration-300"
                    src={portfolio?.image_url}
                    alt={portfolio?.title}
                />
            </div>

            {/* Content - AstroPaper style: title row + description + tech pills */}
            <div className="p-4 md:p-5 bg-white dark:bg-slate-800">
                <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-lg md:text-xl font-bold text-primary dark:text-primary flex-1 min-w-0">
                        {portfolio?.title}
                    </h3>
                    <div className="flex items-center gap-1.5 shrink-0">
                        <button
                            type="button"
                            onClick={handleProjectClick}
                            className="p-1.5 rounded-md text-slate-500 hover:text-primary hover:bg-primary/10 transition-colors"
                            aria-label="Open project"
                        >
                            <HiOutlineArrowTopRightOnSquare className="w-4 h-4" />
                        </button>
                        {portfolio?.github_url && (
                            <button
                                type="button"
                                onClick={handleGithubClick}
                                className="p-1.5 rounded-md text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
                                aria-label="GitHub"
                            >
                                <FaGithub className="w-4 h-4" />
                            </button>
                        )}
                    </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                    {except(portfolio?.description, 100)}
                </p>
                {portfolio?.tech_stack?.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {portfolio.tech_stack.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 text-xs font-medium rounded-md bg-slate-800 text-white"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    )
}

export default PortfolioCard
