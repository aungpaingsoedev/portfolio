import React from 'react';
import { motion } from 'framer-motion'
import CircleBlogCard from '../Shared/Cards/CircleBlogCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper';
import { Link } from 'react-router-dom';
import blogData from "../../server/blogs.json"

const BlogSection = () => {
    const screenWidth = window.innerWidth;
    return (
        <>
            <div id='blogs'></div>
            <div className=' my-10 md:my-20 bg-slate-100 py-10 md:py-20 '>
                <div className=' w-[95%] md:w-[65%] mx-auto'>
                    <motion.div
                        viewport={{ once: true }}
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", bounce: 0.6, delay: 0.2 }}
                        className='lobster-tow-font text-3xl text-center mb-5 underline decoration-wavy underline-offset-4 decoration-primary '>
                        Blog
                    </motion.div>
                    <motion.div
                        viewport={{ once: true }}
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", bounce: 0.6, delay: 0.3 }}
                        className=' mx-auto text-center mb-5 md:mb-8 md:w-1/2 '>
                        Here's my all—effort, creativity, and passion distilled into these words. This is my best work, a snapshot of dedication."
                    </motion.div>
                    <div>
                        <Swiper
                            slidesPerView={screenWidth < 730 ? 1 : 3}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay, Pagination]}
                        >
                            {
                                blogData?.slice(0, 6).map(blog => {
                                    return (
                                        <SwiperSlide key={blog.id}>
                                            <CircleBlogCard blog={blog} />
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                </div>
                <div className=' text-center md:mt-10 '>
                    See all blogs <span className=' text-secondary cursor-pointer '>
                        <Link to={'/blogs'}>
                            Click Here
                        </Link>
                    </span>
                </div>
            </div>
        </>

    )
}

export default BlogSection