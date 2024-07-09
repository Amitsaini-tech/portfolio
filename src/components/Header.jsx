import React, { useState } from 'react'
import SearchBar from './SearchBar';

const Header = () => {
    const [isMenu, setisMenu] = useState(false);

    const handleClick = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <header className="fixed w-screen h-auto  bg-transparent z-10 ">
            <div className="w-full h-full hidden md:flex justify-evenly items-center px-2 backdrop-blur-sm bg-white/30 py-1">
                <div className=" flex text-4xl">Âß</div>
                <div>
                    <ul className="flex gap-4">
                        <li><a href="#About" onClick={handleClick}>About</a></li>
                        <li> Portfolio</li>
                        <li><a href="#contact" onClick={handleClick}>Contact</a></li>
                    </ul>
                </div>
                <div><SearchBar/></div>

            </div>
            {/* mobile */}
            <div className=" flex md:hidden lg:hidden w-full h-auto justify-between items-center backdrop-blur-sm bg-white/30 mx-3">
            <div className=" flex text-3xl">Âß</div>

                <div className=" mx-2" onMouseEnter={()=>setisMenu(true)}>
                    <p className="w-12 h-[0.1rem] bg-orange-400 my-[0.4rem] "></p>
                    <p className="w-8 h-[0.1rem] bg-orange-400 my-[0.4rem] relative left-4"></p>
                    <p className="w-12 h-[0.1rem] bg-orange-400 my-[0.4rem] "></p>
                    {isMenu && (
                    <div className=" w-40 bg-gray-50 shadow-xl rounded-lg absolute top-12 right-0 flex flex-col ">
                        <ul className="flex flex-col  gap-4 mx-3">
                            <li className="text-base text-black cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out" onClick={() => setisMenu(false)}>
                            <a href="#home" onClick={handleClick}> Home</a></li>
                            <li className="text-base text-black cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out" onClick={() => setisMenu(false)}><a href="#About" onClick={handleClick}>About</a></li>
                            <li className="text-base text-black cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out" onClick={() => setisMenu(false)}><a href="#contact" onClick={handleClick}>Contact</a></li>
                            <li className="text-base text-black cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out" onClick={() => setisMenu(false)}><a href="#project" onClick={handleClick}>Projects</a></li>
                        </ul>
                    </div>)}
                    </div>
            </div>
        </header>

    )
}

export default Header