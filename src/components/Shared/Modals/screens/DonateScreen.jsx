import React from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addState } from "../../../../features/services/modalSlice";

const DonateScreen = () => {
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
                        Pet Donation Form
                    </div>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id='name' className=' mt-2 default-input '
                            placeholder='Enter your name'
                        />
                    </div>
                    <div className=' flex gap-3 '>
                        <div>
                            <label htmlFor="phone">Phone Number</label>
                            <input type="text" id='phone' className=' mt-2 default-input '
                                placeholder='Enter your phone number'
                            />
                        </div>
                        <div>
                            <label htmlFor="amount">Donation Amount</label>
                            <input type="text" id='amount' className=' mt-2 default-input '
                                placeholder='Enter your donation amount ($)'
                            />
                        </div>
                    </div>

                    <div>
                        <textarea name="" id="" cols="5" rows="5"
                            className=' default-input ' placeholder='Enter your node...'
                        ></textarea>
                    </div>
                    <div className=' text-end mt-3 '>
                        <button className=' default-btn '>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default DonateScreen