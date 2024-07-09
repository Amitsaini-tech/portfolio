import React from 'react'
import { skills } from '../utils/data'

const About = () => {
    return (
        <div className=" w-full h-full md:h-full mx-3 px-3    ">
            <div className=" relative top-20" id="About">
                <span className="text-6xl md:text-9xl lg:text-9xl mx-5 font-semibold text-orange-400 ">About</span>
                <div className="flex flex-row md:flex-row lg:flex-row justify-center items-start my-5 mx-1 md:mx-5 lg:mx-5 h-[43rem] md:h-60 lg:h-60">
                    <p className=" md:w-96 lg:w-96 h-1 bg-black flex items-start justify-center my-3 "></p>
                    <span className=" mx-3 md:mx-5 lg:mx-5">Hello! I'm Amit Saini, a passionate Frontend Developer and Designer based in NIT Faridabad, Haryana. With a keen eye for design and a love for coding, I strive to create beautiful, user-friendly websites and applications that deliver exceptional user experiences.
                    My journey into the world of web development and design began 2021 years ago when I discovered my passion for creating visually appealing and functional digital experiences. Since then, I've honed my skills in both frontend development and design, continually learning and adapting to the latest industry trends and technologies.
                    Proficient in HTML, CSS, JavaScript, and frameworks like React and Angular.js. I build responsive and interactive websites that are both visually appealing and highly functional.
                    </span> 
                </div>
            </div>
            
            <span className="text-5xl font-semibold font-serif flex justify-center items-center my-10 md:my-5 lg:my-10">My Skills</span>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 justify-center items-center mx-4 md:mx-6 lg:mx-6 px-4"
            style={{fontFamily:"playfair dispaly "}}>
                {skills && skills.map((n) => (
                    <div key={n.id} className="w-[16rem] md:w-[18rem] lg:w-[18rem] h-[18rem] rounded-lg bg-gray-50 shadow-lg drop-shadow-lg flex flex-col justify-center items-center my-2"
                    >
                        <img src={n.imgSrc} alt="" className="w-[10rem] h-[8rem] md:w-[12rem] lg:w-[12rem]" />
                        <p className="text-3xl font-medium sm:my-1 md:my-3 lg:my-5">{n.name}</p>
                    </div>
                ))}    
            </div>

        </div>
    )
}

export default About