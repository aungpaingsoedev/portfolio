import React from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addState } from "../../../../features/services/modalSlice";

const AdoptScreen = () => {
    const dispatch = useDispatch();

    const handleCloseModal = _ => {
        dispatch(addState({ screen: null }));
    }

    return (
        <div className=' modal-box md:w-[40%] '>
            <IoIosCloseCircleOutline
                onClick={handleCloseModal}
                className=' modal-close-btn ' />
            <div>
                <form className=' flex flex-col gap-4 mt-5 md:mt-0 '>
                    <div className=' text-3xl text-center mb-4 text-primary '>
                        Pet Adoption From
                    </div>

                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id='name' className=' mt-2 default-input '
                            placeholder='Enter your name'
                        />
                    </div>

                    <div className=' flex gap-3 '>
                        <div className=' basis-1/2 '>
                            <label htmlFor="phone">Phone Number</label>
                            <input type="text" id='phone' className=' mt-2 default-input '
                                placeholder='Enter your phone'
                            />
                        </div>
                        <div className=' basis-1/2 '>
                            <label htmlFor="dob">Collection Date</label>
                            <div class="relative max-w-sm mt-2">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </div>
                                <input datepicker type="date" class=" py-3 bg-gray-50 border border-secondary rounded-lg block w-full ps-10 p-2.5 " placeholder="Select date" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="address">Address</label>
                        <input type="text" id='address' className=' mt-2 default-input '
                            placeholder='Enter your address'
                        />
                    </div>

                    <div>
                        <textarea name="" id="" cols="5" rows="5"
                            className=' default-input ' placeholder='Type any necessary information here....'
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

export default AdoptScreen