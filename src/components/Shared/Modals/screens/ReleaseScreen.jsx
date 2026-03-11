import React, { useState } from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import { PiDogLight } from "react-icons/pi";
import { addState } from "../../../../features/services/modalSlice";

const ReleaseScreen = () => {
    const dispatch = useDispatch();
    const [photo, setPhoto] = useState(null);

    const handleCloseModal = _ => {
        dispatch(addState({ screen: null }));
    }

    const handleChoosePhoto = _ => {
        let imageUploadUi = document.querySelector('#imageUpload');
        imageUploadUi.click()
    }

    const handleChangePhoto = event => {
        let file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (evt) => {
            setPhoto(evt.target.result);
        };
        reader.readAsDataURL(file);
    }

    return (
        <div className=' modal-box  md:w-[70%]'>
            <IoIosCloseCircleOutline
                onClick={handleCloseModal}
                className=' modal-close-btn ' />
            <div>
                <form className=' flex flex-col gap-4 mt-5 md:mt-0 '>
                    <div className=' text-3xl text-center mb-4 text-primary '>
                        Pet Release Form
                    </div>
                    <div className=' flex flex-col md:flex-row gap-3 '>
                        <div className=' basis-1/4 '>
                            <label htmlFor="ownername">Owner Name</label>
                            <input type="text" id='ownername' className=' mt-2 default-input '
                                placeholder='Enter owner name'
                            />
                        </div>
                        <div className=' basis-1/4 '>
                            <label htmlFor="phone">Phone No</label>
                            <input type="text" id='phone' className=' mt-2 default-input '
                                placeholder='Enter phone number'
                            />
                        </div>
                        <div className=' basis-1/4 '>
                            <label htmlFor="type">Type of Breed </label>
                            <input type="text" id='type' className=' mt-2 default-input '
                                placeholder='Enter type of breed'
                            />
                        </div>
                        <div className=' basis-1/4 '>
                            <label htmlFor="size">Size of Pet</label>
                            <input type="text" id='size' className=' mt-2 default-input '
                                placeholder='Enter size of pet (kg)'
                            />
                        </div>
                    </div>
                    <div className=' flex flex-col md:flex-row gap-3 '>
                        <div className=' basis-1/2 '>
                            <input type="file"
                                onChange={handleChangePhoto}
                                className=' hidden ' id='imageUpload'
                                accept="image/*"
                            />
                            <div
                                id='imageUploadUi'
                                className=' h-[300px] border border-secondary rounded-lg hover:opacity-75 cursor-pointer '
                                onClick={handleChoosePhoto}
                            >
                                {
                                    !photo ? <div className=' flex flex-col gap-2 items-center justify-center h-full '>
                                        <PiDogLight className=" text-5xl text-primary " />
                                        <div>Drop a photo of your pet</div>
                                    </div> : <div>
                                        <img src={ photo }
                                        className=' border border-secondary rounded-lg w-full h-[300px] object-contain '
                                        alt="" />
                                    </div> 
                                }

                            </div>
                        </div>
                        <div className=' basis-1/2 '>
                            <div>
                                <textarea
                                    className=' default-input h-[200px] md:h-[300px] ' placeholder='Type any description of your pet here....'
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className=' text-end mt-3 '>
                        <button className=' default-btn '>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ReleaseScreen