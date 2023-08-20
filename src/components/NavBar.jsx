import React, {useState, useEffect} from 'react'
import { Link } from 'react-scroll';
import Headroom from 'react-headroom';


const NavBar = () => {

    return (
        <Headroom>
        <nav class={`bg-slate-300 p-4 w-full z-50 bg-opacity-60 backdrop-blur-sm shadow-md border-b-[1px] border-slate-700`}>
            <div class="container flex mx-auto items-center justify-end">
                <div class="flex items-center text-slate-700 font-medium">
                    <ul class="flex gap-3">
                        <li class="inline-block ml-4 hover:text-slate-400 transition-colors duration-400 cursor-pointer">
                            <Link to="about" smooth={true} duration={500}>
                                About
                            </Link>
                        </li>
                        <li class="inline-block ml-4 hover:text-slate-400 transition-colors duration-400 cursor-pointer">
                            <Link to="projects" smooth={true} duration={500}>
                                Projects
                            </Link>
                        </li>
                        <li class="inline-block ml-4 hover:text-slate-400 transition-colors duration-400 cursor-pointer">
                            <Link to="experience" smooth={true} duration={500}>
                                Experience
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </Headroom>
    )
}

export default NavBar