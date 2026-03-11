import React from 'react'
import { useWindowScroll } from "@uidotdev/usehooks";
import { Link, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Header = () => {

  const [{ x, y }, scrollTo] = useWindowScroll();
  const location = useLocation();

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
        } top-0 w-full z-20 bg-light shadow-md`}
    >
      <div className=' w-[95%] md:w-[65%] mx-auto flex justify-between items-center '>
        <Link to={'/'}>
          <div className=' flex items-center gap-1 cursor-pointer '>
            <span className=' text-xl md:text-2xl font-semibold '>
              <span className=' text-primary '>Phyo</span>Z
            </span>
          </div>
        </Link>
        <div>
          {
            location.pathname === '/' ? <ul className=' flex gap-5  '>
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
            </ul> : <ul>
              <li>
                <NavLink to={'/'} className=' nav-item md:block '>
                  Portfolio
                </NavLink>
              </li>
            </ul>
          }
        </div>
      </div>
    </div>
  )
}

export default Header