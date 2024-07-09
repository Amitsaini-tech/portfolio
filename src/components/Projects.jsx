import React from 'react';
import Imageslider from '../Slider/Imageslider';
import Imageslider2 from '../Slider/Imageslider2';
import Imageslider3 from '../Slider/Imageslider3';
import First from "../Images/201.avif";

const Projects = () => {
  return (
    <div className="w-full h-full md:w-full sm:mt-5 md:mt-6 lg:mt-10 z-10" >
      <div>
        <span className="text-4xl md:text-6xl lg:text-7xl flex justify-center items-center mb-7 md:mb-10 lg:mb-10 font-light font-serif" id='project'>My Projects</span>
        {/* 1st */}
        <div className="flex flex-col md:flex-row lg:flex-row md:justify-center lg:justify-center items-center mx-2">
          <span className=" w-[19rem] md:w-[35rem] lg:w-[35rem] h-[5rem] md:h-[20rem] lg:h-[20rem] mx-3">
            <Imageslider />
          </span>
          <div className="flex justify-center md:justify-self-start lg:justify-self-start items-center md:items-start lg:items-start  w-[35rem] h-[20rem]">
            <span className="text-[1.4rem] md:text-[3.4rem] lg:text-[3.4rem]">Ecommerce delivery
              <p className="text-xl text-gray-400">2024</p>
            </span>
          </div>
        </div>
        {/* 2nd  */}
        <div className="flex flex-col-reverse  md:flex-row lg:flex-row  md:justify-center lg:justify-center items-center mx-2 md:my-5 lg:my-10 ">
          <div className="flex justify-center md:justify-self-start lg:justify-self-start items-center md:items-start lg:items-start  w-[35rem] h-[20rem]">
            <span className="text-[1.4rem] md:text-[3.4rem] lg:text-[3.4rem]"> Food delivery
              <p className="text-xl  text-gray-400">2023</p>
            </span>
          </div>
          <span className="w-[19rem] md:w-[35rem] lg:w-[35rem] h-[5rem] md:h-[20rem] lg:h-[20rem] mx-3">
            <Imageslider2 />
            </span>
        </div>
        {/* 3rd  */}
        <div className="flex flex-col  md:flex-row lg:flex-row  md:justify-center lg:justify-center items-center mx-2 md:my-5 lg:my-10">
          <span className=" w-[19rem] md:w-[35rem] lg:w-[35rem] h-[5rem] md:h-[20rem] lg:h-[20rem] mx-3">
            <Imageslider3 />
            </span>
          <div className="flex justify-center md:justify-self-start lg:justify-self-start items-center md:items-start lg:items-start  w-[35rem] h-[20rem]">
            <span className="text-[1.4rem] md:text-[3.4rem] lg:text-[3.4rem]">other design
              <p className="text-xl  text-gray-400  ">2021</p>
            </span>
          </div>
        </div>
        <span></span>
        <div className="w-screen h-screen md:w-auto lg:w-full md:h-screen lg:h-300 bg-orange-600/50 flex flex-col-reverse md:flex-row lg:flex-row justify-between items-center">
          <span className="text-xl font-semibold font-serif flex justify-center md:justify-start lg:justify-start items-center w-[20rem] md:w-[45rem] lg:w-[45rem] flex-col md:flex-col lg:flex-col mx-2 md:mx-3 lg:mx-3">My Approach
            <p className="text-md text-gray-500 font-normal  mx-3 md:mx-5 lg:mx-5">I believe in a collaborative and iterative approach to development and design. By working closely with clients and stakeholders, I ensure that every project meets their needs and exceeds their expectations. I am committed to continuous learning and improvement, always seeking out new challenges and opportunities to grow as a developer and designer.</p>
          </span>
          <span className="w-[20rem] md:w-[45rem] lg:w-[45rem] h-[22rem] md:h-[18rem] lg:h-[18rem]  ">
            <img src={First} alt="" className="w-[20rem] md:w-[45rem] lg:w-[45rem] h-[20rem] md:h-[18rem] lg:h-[18rem] rounded-br-[6rem] md:rounded-br-none lg:rounded-br-none bg-red-700  md:rounded-tl-[6rem] lg:rounded-tl-[6rem] rounded-bl-[6rem] md:rounded-bl-[6rem] lg:rounded-bl-[6rem]"/>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Projects