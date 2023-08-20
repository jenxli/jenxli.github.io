import React from 'react'
import Main from "./Main";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";
import GetInTouch from './GetInTouch';
import Activities from './Activities';

const Home = () => {
  return (
    <div>
        <Main/>
        <About/>
        <Projects />
        <Experience />
        {/* <Activities /> */}
        <GetInTouch />
    </div>
  )
}

export default Home