import React from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addState } from "../../../../features/services/modalSlice";

const SignUpScreen = () => {
    const dispatch = useDispatch();

    const handleCloseModal = _ => {
        dispatch(addState({ screen: null, open : false }));
    }

    const handleShowModal = screen => {
        dispatch(addState({ screen: screen, open : true }));
    }

    return (
        <div className=' modal-box  md:w-[40%] '>
            <IoIosCloseCircleOutline
                onClick={handleCloseModal}
                className=' modal-close-btn ' />
            <div>
                <form className=' flex flex-col gap-4 mt-5 md:mt-0 '>
                    <div className=' text-3xl text-center mb-4 text-primary '>
                        Create A New Account
                    </div>
                    <div>
                        <label htmlFor="username">Usernmae</label>
                        <input type="text" id='username' className=' mt-2 default-input '
                            placeholder='Enter your username'
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' className=' mt-2  default-input  '
                            placeholder='Enter your E-mail'
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="text" id='password' className=' mt-2  default-input  '
                            placeholder='Enter your password'
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Confirm Password</label>
                        <input type="text" id='password' className=' mt-2 default-input '
                            placeholder='Enter your confirm password'
                        />
                    </div>
                    <div className='flex justify-between items-center mt-3'>
                        <div className=' cursor-pointer '>
                            I have already an account <span className=' text-primary '
                                onClick={() => handleShowModal('login-screen')}>Login Here</span>
                        </div>
                        <button className=' default-btn '>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUpScreen;