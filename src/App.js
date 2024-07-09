import React from 'react'
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';


const App = () => {
    return (
        <div className="w-screen h-full flex flex-col">
            <Header/>
            <main className="md:mt-8 lg:mt-10  w-full">
            <Routes>
                <Route path="/*" element ={<MainContainer/>}/>
                <Route path="/About" element = {<About/>}/>
            </Routes>
            </main>
        </div>
    )
}

export default App;