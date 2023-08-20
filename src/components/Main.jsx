import React, { useRef, useEffect, useState } from 'react'
import * as THREE from "three"; // Importing THREE.js
import FOG from 'vanta/src/vanta.fog';
import { BsGithub, BsLinkedin, BsInstagram, BsFacebook } from 'react-icons/bs';


const Main = () => {

    const [vantaEffect, setVantaEffect] = useState(0);
    const myRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) {
            FOG({
                THREE: THREE,
                el: myRef.current,
                el: "#main",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                highlightColor: 0xfff8fd,
                midtoneColor: 0x28aeca,
                lowlightColor: 0x5a4ab6,
                baseColor: 0xf5f5f5
            })
        }


        return () => {
            if (vantaEffect) {
                vantaEffect.destroy();
            }
        };
    }, []);

    return (
        <div>
            <header id="main" ref={myRef} class="flex items-center py-20 min-h-screen text-slate-700 z-0">
                <div id="fadeInDiv" class="flex flex-col container mx-auto items-center z-10">
                    <h1 class="text-6xl z-10">Jennifer Li</h1>
                    <hr class="mt-2 md:w-1/2 h-0.5 bg-black rounded-sm border-black "></hr>
                    <p class="mt-2 text-xl">Software Developer & Undergraduate Researcher</p>
                    <p class="mt-2 text-xl">Computer Science @BrownUniversity</p>

                    <div class="flex flex-row">
                        <a 
                        href="https://github.com/jenxli"
                        target="_blank" 
                        rel="noopener noreferrer"
                        class="hover:cursor-pointer hover:text-slate-300 fill-slate-600 items-center scale-[0.5] justify-center transition-colors duration-400">
                            <BsGithub class="text-8xl"/>
                        </a>
                        <a 
                        href="https://www.linkedin.com/in/jenxli/"
                        target="_blank" 
                        rel="noopener noreferrer"
                        class="hover:cursor-pointer hover:text-slate-300 fill-slate-600 items-center scale-[0.5] justify-center transition-colors duration-400">
                            <BsLinkedin class="text-8xl"/>
                        </a>
                        <a
                        href="https://www.instagram.com/j.enniferli/?igshid=MmIzYWVlNDQ5Yg%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="hover:cursor-pointer hover:text-slate-300 fill-slate-600 items-center scale-[0.5] justify-center transition-colors duration-400">
                            <BsInstagram class="text-8xl"/>
                        </a>
                        <a
                        href="https://www.facebook.com/profile.php?id=100022034234809&mibextid=LQQJ4d"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="hover:cursor-pointer hover:text-slate-300 fill-slate-600 items-center scale-[0.5] justify-center transition-colors duration-400">
                            <BsFacebook class="text-8xl"/>
                        </a>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Main



// <div
//                             class="group hover:cursor-pointer hover:text-slate-300 fill-slate-600 items-center scale-[0.55] justify-center transition-colors duration-400">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="100px" height="100px">
//                                 <path
//                                     d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
//                                     class="fill-current" />
//                             </svg>
//                         </div>
//                         <div
//                             class="group hover:cursor-pointer hover:text-slate-300 fill-slate-600 items-center scale-[0.64] justify-center transition-colors duration-400">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="96px" height="96px">
//                                 <path
//                                     d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"
//                                     class="fill-current" />
//                             </svg>
//                         </div>
//                         <div
//                             class="group hover:cursor-pointer hover:text-slate-300 fill-slate-600 items-center scale-[0.56] justify-center transition-colors duration-400">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="100px" height="100px">
//                                 <path
//                                     d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"
//                                     class="fill-current" />
//                             </svg>
//                         </div>