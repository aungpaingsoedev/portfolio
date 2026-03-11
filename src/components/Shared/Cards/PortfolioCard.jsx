import React from 'react'
import { motion } from "framer-motion"

const PortfolioCard = ({ portfolio }) => {

    const except = (text, limit = 50) => {
        if (text.length > limit) {
            return text.slice(0, limit) + "..."
        } else {
            return text;
        }
    }

    const handleGoProjectUrl = () => {
        let a = document.createElement("a");
        a.target = "_blank";
        a.href = portfolio?.project_url;
        a.click();
    }

    return (
        <motion.div
            viewport={{ once: true }}
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.6, delay: 0.3 }}
        >
            <div class="container cursor-pointer " onClick={handleGoProjectUrl} >
                <div class="content">
                    <div class="content-overlay"></div>
                    <motion.img
                        viewport={{ once: true }}
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", bounce: 0.6, delay: 0.3 }}
                        class="content-image w-full h-[400px] object-center object-cover shadow-md border border-slate-200 "
                        src={portfolio?.image_url} alt="" />
                    <div class="content-details fadeIn-bottom">
                        <h3 class="content-title">{portfolio?.title}</h3>
                        <p class="content-text">{ except(portfolio?.description) }</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default PortfolioCard