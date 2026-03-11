import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className=' flex h-[70vh] flex-col gap-5 justify-center items-center '>
        <div className=' text-4xl '>
            Page Not Found
        </div>
        <Link to={'/'} className=' default-btn '>Go Back Home</Link>
    </div>
  )
}

export default NotFoundPage