import React from 'react'
import { SiMinutemailer } from "react-icons/si";
import { MdPhone } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import instagram from '../Images/instagram.png';
import linkdin from '../Images/linkdin.png';
import facebook from '../Images/facebook.png';
import whatsapp from '../Images/whatsapp.png';

const Contact = () => {


    return (
        <div className="w-screen h-full md:w-full lg:w-full lg:h-full sm:mt-3 md:mt-6 lg:mt-10 z-50">
            <div className="">
                <div className=" flex justify-evenly items-center">
                    <p className="w-[7rem] md:w-[35rem] lg:w-[35rem] h-1 bg-orange-400"></p>
                    <span className="text-sm md:text-2xl lg:text-2xl" id='contact'>Contact Me</span>
                    <p className="w-[7rem] md:w-[35rem] lg:w-[35rem] h-1 bg-orange-400"></p>
                </div>
                <div className="w-full md:h-screen lg:h-275 flex flex-col-reverse md:flex-col lg:flex-col justify-center items-center gap-3 md:gap-2 lg:gap-1">
                    <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-3">
                        <span className=" w-[20rem] md:w-[23rem] lg:w-[23rem] h-[3rem]  flex justify-center border border-gray-50 bg-gray-50 shadow-xl drop-shadow-lg rounded-xl items-center text-md my-5 md:my-2 lg:my-1">

                            <SiMinutemailer className="w-12 h-8  mr-5" />sainiamit3464@gmail.com
                        </span>
                        <span className=" w-[20rem] md:w-[23rem] lg:w-[23rem] h-[3rem]  flex justify-center border bg-gray-50 border-gray-50 shadow-xl drop-shadow-lg rounded-xl items-center mb-5 md:mb-2 lg:mb-1">
                            <MdPhone className="w-12 h-8  mr-5 text-md" />+91-7982071088</span>
                    </div>
                    <div className="flex flex-row md:flex-col lg:flex-col justify-center items-center mt-5 lg:my-3 md:my-5 ">
                        <span className=" w-[20rem] md:w-[23rem] lg:w-[23rem] h-[3rem] bg-gray-50 flex flex-row md:flex-row lg:flex-row justify-center border border-gray-50 shadow-xl drop-shadow-lg rounded-xl items-center text-md">
                            <MdLocationOn className="w-12 h-8  mr-5" />
                            NIT Faridabad, Haryana</span>
                    </div>
                </div>
                <div className=" flex justify-evenly items-center">
                    <p className="w-[5rem] md:w-[35rem] lg:w-[35rem] h-1 bg-orange-400"></p>
                    <ul className="flex flex-row justify-center items-center gap-3">
                        <a href="https://www.instagram.com/amitsaini__51?igsh=cWI3NzQxdm5qZjM2"><li className="w-8 h-8 \ rounded-full flex justify-center items-center cursor-pointer "><img src={instagram} alt="" /></li></a>
                        <a href="https://www.linkedin.com/in/amit-saini-b332772a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><li className="w-8 h-8  rounded-full flex justify-center items-center cursor-pointer"><img src={linkdin} alt="" /></li></a>
                        <a href="https://www.facebook.com/jattin.rathor.94?mibextid=ZbWKwL"><li className="w-8 h-8  rounded-full flex justify-center items-center cursor-pointer"><img src={facebook} alt="" /></li></a>
                        <a href=" https://wa.me/7982071088"><li className="w-8 h-8  rounded-full flex justify-center items-center cursor-pointer"><img src={whatsapp} alt="" /></li></a>
                    </ul>
                    <p className="w-[5rem] md:w-[35rem] lg:w-[35rem] h-1 bg-orange-400"></p>
                </div>
                <div className="w-full md:h-screen lg:h-275 flex flex-col justify-center items-center ">
                    <div className="flex flex-row justify-center items-center gap-3 my-5 md:my-2 lg:my-1">
                        <span className="flex justify-center  bg-gray-50 items-center text-3xl md:text-4xl lg:text-4xl">
                           "Thanks For scrolling."
                        </span>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Contact