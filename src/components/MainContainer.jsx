import React from 'react'
import HomeContainer from "./HomeContainer"
import About from './About'
import Contact from './Contact'
import Projects from './Projects'


const MainContainer = () => {
  return (
    <div>
        <div className=" w-full h-full md:h-auto">
            <HomeContainer/>
            <About/>
            <Projects/>
            
            <Contact/>

        </div>


    </div>
  )
}

export default MainContainer