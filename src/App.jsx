import React, { useEffect, useState } from 'react'
import { Route, Routes, } from 'react-router';
import { motion } from 'framer-motion'
import ScrollToTop from './components/Shared/Utils/ScrollToTop';
import { useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from './pages/home';
import BlogPage from "./pages/blog";
import BlogDetailPage from "./pages/blog/detail";
import CommonHeader from './components/Common/Header';
import CommonFooter from "./components/Common/Footer";
import CommonMobileFooter from "./components/Common/MobileFooter";
import Modal from "./components/Shared/Modals/Modal";

const App = () => {
  const isModalOpen = useSelector((state) => state?.modal?.open);
  const location = useLocation();

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }

  });

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y
    }
  }

  return (
    <div className=' text-dark '>
      <CommonHeader />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/blogs' element={<BlogPage />} />
        <Route path='/blogs/:id' element={<BlogDetailPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <CommonFooter />
      {
        location.pathname === '/' && <div className=' md:hidden ' >
          <CommonMobileFooter />
        </div>
      }
      {/* 🥡 Modal Box */}
      {isModalOpen && <Modal />}
      <motion.div
        variants={variants}
        animate="default"
        className=' hidden md:block w-[35px] h-[35px] rounded-full opacity-70 bg-secondary fixed top-0 left-0 z-40 '>
      </motion.div>
    </div>
  )
}

export default App