import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import CircleBlogCard from '../Shared/Cards/CircleBlogCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper'
import { Link } from 'react-router-dom'
import blogData from "../../server/blogs.json"

const BlogSection = () => {
    const blogSwiperRef = useRef(null)
    return (
        <>
            <div id='blogs' />
            <div className='my-10 md:my-20 bg-slate-100 dark:bg-slate-800 py-10 md:py-20 transition-colors'>
                <div className='w-[95%] md:w-[65%] mx-auto'>
                    <motion.div
                        viewport={{ once: true }}
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", bounce: 0.6, delay: 0.2 }}
                        className='lobster-tow-font text-3xl text-center mb-5 underline decoration-wavy underline-offset-4 decoration-primary'
                    >
                        Blog
                    </motion.div>
                    <motion.div
                        viewport={{ once: true }}
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", bounce: 0.6, delay: 0.3 }}
                        className='mx-auto text-center mb-8 md:mb-10 md:max-w-xl text-slate-600 dark:text-slate-400'
                    >
                        Here's my all—effort, creativity, and passion distilled into these words. This is my best work, a snapshot of dedication.
                    </motion.div>

                    <div className='relative'>
                        <Swiper
                            ref={blogSwiperRef}
                            slidesPerView={1}
                            spaceBetween={24}
                            breakpoints={{
                                640: { slidesPerView: 2, spaceBetween: 24 },
                                1024: { slidesPerView: 3, spaceBetween: 32 },
                            }}
                            pagination={{ clickable: true }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay, Pagination]}
                            className='!pb-10'
                        >
                            {blogData?.slice(0, 6)?.map((blog) => (
                                <SwiperSlide key={blog.id}>
                                    <CircleBlogCard blog={blog} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <button
                            type='button'
                            aria-label='Previous'
                            onClick={() => blogSwiperRef.current?.swiper?.slidePrev()}
                            className='absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white dark:bg-slate-700 shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors -translate-x-2 md:-translate-x-4'
                        >
                            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' /></svg>
                        </button>
                        <button
                            type='button'
                            aria-label='Next'
                            onClick={() => blogSwiperRef.current?.swiper?.slideNext()}
                            className='absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white dark:bg-slate-700 shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors translate-x-2 md:translate-x-4'
                        >
                            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' /></svg>
                        </button>
                    </div>

                    <motion.div
                        viewport={{ once: true }}
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", bounce: 0.6, delay: 0.2 }}
                        className='text-center'
                    >
                        <Link
                            to='/blogs'
                            className='inline-flex items-center gap-2 px-5 py-2.5 hover:text-primary cursor-pointer'
                        >
                            Read All Blog Posts
                            <span aria-hidden>→</span>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default BlogSection
