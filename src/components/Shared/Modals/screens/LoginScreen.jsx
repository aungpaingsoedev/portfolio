import React from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addState } from "../../../../features/services/modalSlice";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const handleCloseModal = _ => {
    dispatch(addState({ screen: null }));
  }

  return (
    <div className=' modal-box  md:w-[40%] '>
      <IoIosCloseCircleOutline
        onClick={handleCloseModal}
        className=' modal-close-btn ' />
      <div>
        <form className=' flex flex-col gap-4 mt-5 md:mt-0 '>
          <div className=' text-3xl text-center mb-4 text-primary '>
            Login To Your Account
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' className=' mt-2  default-input '
              placeholder='Enter your E-mail'
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id='password' className=' mt-2  default-input  '
              placeholder='Enter your password'
            />
          </div>
          <div className='flex justify-between items-center mt-3'>
            <div className=' cursor-pointer '>
              <input type="checkbox" id='remember' className=' accent-primary w-5 ' />
              <label htmlFor="remember">
                Remember Me
              </label>
            </div>
            <button className=' default-btn '>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginScreen