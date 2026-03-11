import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { GoGraph } from "react-icons/go";
import { MdWorkOutline } from "react-icons/md";
import { TfiLayoutMediaOverlay } from "react-icons/tfi";
import { MdOutlineContactMail } from "react-icons/md";


const MobileFooter = () => {
    return (
        <div className=' fixed bottom-0 start-0 py-2 w-full px-2 border border-t-slate-300 shadow-2xl bg-white z-20 opacity-90 '>
            <ul className=' flex justify-around items-center w-full '>
                <li>
                    <a href='#home' className=' flex flex-col items-center justify-center cursor-pointer '>
                        <IoHomeOutline className=' text-xl ' />
                        <div className=' text-sm '>
                            Home
                        </div>
                    </a>
                </li>
                <li>
                    <a href='#skills' className=' flex flex-col items-center justify-center cursor-pointer '>
                        <GoGraph className=' text-xl ' />
                        <div className=' text-sm '>
                            Skills
                        </div>
                    </a>
                </li>
                <li>
                    <a href='#projects' className=' flex flex-col items-center justify-center cursor-pointer '>
                        <MdWorkOutline className=' text-2xl ' />
                        <div className=' text-sm '>
                            Projects
                        </div>
                    </a>
                </li>
                <li>
                    <a href='#blogs' className=' flex flex-col items-center justify-center cursor-pointer '>
                        <TfiLayoutMediaOverlay className=' text-xl ' />
                        <div className=' text-sm '>
                            Blogs
                        </div>
                    </a>
                </li>
                <li>
                    <a href='#contact' className=' flex flex-col items-center justify-center cursor-pointer '>
                        <MdOutlineContactMail className=' text-xl ' />
                        <div className=' text-sm '>
                            Contact
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default MobileFooter