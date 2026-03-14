import React from 'react'
import { useWindowScroll } from "@uidotdev/usehooks";
import { Link, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi2';

const Header = () => {

  const [{ y }] = useWindowScroll();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const isTransparent = _ => {
    if (y > 20) {
      return `fixed opacity-90 transition duration-300 z-20`;
    } else {
      return `fixed opacity-90 transition duration-300 z-20`
    }
  }

  isTransparent();

  return (
    <div
      className={`h-14 flex items-center ${location.pathname === '/' ? isTransparent() : 'sticky'
        } top-0 w-full z-20 bg-light dark:bg-slate-900 shadow-md transition-colors`}
    >
      <div className=' w-[95%] md:w-[65%] mx-auto flex justify-between items-center '>
        <Link to={'/'}>
          <div className=' flex items-center gap-1 cursor-pointer '>
            <span className=' text-xl md:text-2xl font-semibold text-dark dark:text-slate-100 '>
              <span className='text-2xl'>APS.</span>
              <span className='text-primary'>Dev</span>
            </span>
          </div>
        </Link>
        <div className='flex items-center'>
          {
            location.pathname === '/' ? <ul className=' flex gap-5 text-dark dark:text-slate-200 '>
              <li>
                <a href={'#home'} className=' nav-item hidden md:block '>
                  Home
                </a>
              </li>
              <li>
                <a href={'#skills'} className=' nav-item hidden md:block ' >
                  Skills
                </a>
              </li>
              <li>
                <a href={'#projects'} className=' nav-item hidden md:block ' >
                  Projects
                </a>
              </li>
              <li>
                <a href={'#blogs'} className=' nav-item hidden md:block' >
                  Blogs
                </a>
              </li>
              <li>
                <a href={'#contact'} className=' nav-item hidden md:block ' >
                  Contact
                </a>
              </li>
              <li>
                <NavLink to={'/blogs'} className=' nav-item md:hidden ' >
                  Blog List
                </NavLink>
              </li>
            </ul> : <ul className='text-dark dark:text-slate-200 md:me-2'>
              <li>
                <NavLink to={'/'} className=' nav-item md:block '>
                  Portfolio
                </NavLink>
              </li>
            </ul>
          }
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              toggleTheme()
            }}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-lg text-dark dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            {theme === "dark" ? (
              <HiOutlineSun className="w-5 h-5" />
            ) : (
              <HiOutlineMoon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header