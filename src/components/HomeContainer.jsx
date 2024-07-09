import React from 'react';
import background from '../Images/free.png';
import instagram from '../Images/instagram.png';
import linkdin from '../Images/linkdin.png';
import facebook from '../Images/facebook.png';
import whatsapp from '../Images/whatsapp.png';
const HomeContainer = () => {
  return (
    <div className="w-full h-screen md:h-full shadow-2xl drop-shadow-lg">
      <div className="w-full  md:h-656 flex flex-col md:flex-row lg:flex-row  justify-evenly items-center  relative left-12  mt-10 ">
        <div className="flex flex-col " id='home'>
          <p className="text-2xl md:text-3xl lg:text-4xl flex justify-center items-center relative right-14 md:items-baseline lg:items-baseline">
            <span className=" mx-2 text-black">I'M </span><span className=" text-3xl md:text-6xl lg:text-8xl font-semibold text-orange-400 flex font">Amit Saini</span></p>
          <p className="flex text-3xl mx-2 my-2 text-black">FRONTEND DEVELOPER & DESIGNER</p>
          <button className=" flex justify-center  items-center w-44 h-12 border-double border-4 border-orange-400 rounded-lg mx-2 bg-gray-700 hover:bg-gray-100 hover:text-black text-gray-50 text-xl"><a href="tel:+91-7982071088">Contact Me</a></button>

        </div>
        <div>
          <img src={background} alt="" className=" lg:w-[40rem] md:w-[40rem]" />

        </div>
        <div className=" flex flex-row md:flex-col lg:flex-col justify-center items-center relative top-5 md:top-20 lg:top-20 right-11 md:right-20 lg:right-20">
          <p className="w-1 h-28 lg:flex md:flex hidden bg-red-500 my-1 md:my-2 lg:my-2"></p>
          <ul className="flex flex-row md:flex-col lg:flex-col justify-center items-center gap-3">
            <a href="https://www.instagram.com/amitsaini__51?igsh=cWI3NzQxdm5qZjM2"><li className="w-8 h-8 \ rounded-full flex justify-center items-center cursor-pointer "><img src={instagram} alt="" /></li></a>
            <a href="https://www.linkedin.com/in/amit-saini-b332772a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><li className="w-8 h-8  rounded-full flex justify-center items-center cursor-pointer"><img src={linkdin} alt="" /></li></a>
            <a href="https://www.facebook.com/jattin.rathor.94?mibextid=ZbWKwL"><li className="w-8 h-8  rounded-full flex justify-center items-center cursor-pointer"><img src={facebook} alt="" /></li></a>
            <a href=" https://wa.me/7982071088"><li className="w-8 h-8  rounded-full flex justify-center items-center cursor-pointer"><img src={whatsapp} alt="" /></li></a>
          </ul>
        </div>
      </div>

    </div >
  );
}

export default HomeContainer;
