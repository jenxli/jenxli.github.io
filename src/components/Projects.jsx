import React, { useState } from 'react'
import projectData from '../assets/data/ProjectData';
import { AiFillGithub } from 'react-icons/ai';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { BiRightArrow } from 'react-icons/bi';
import { VscClose } from 'react-icons/vsc';
import { BsGithub } from 'react-icons/bs';
import { RiGitRepositoryPrivateFill } from 'react-icons/ri';
import { RiExternalLinkLine } from 'react-icons/ri';


const Projects = () => {

    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <div>
            <section id="projects" class="py-16 bg-gray-200 ">
                {selectedProject ? (
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[100] w-full h-full py-6 backdrop-blur-md">
                        <div className="justify-center relative md:w-3/5 xl:w-2/5 h-full bg-slate-200 shadow-lg rounded-xl">
                            <div class="h-1/2">
                                <img class="object-cover rounded-t-xl shadow-md" src={selectedProject.image}></img>
                            </div>
                            <div className="absolute items-center inset-0 w-full h-12 rounded-t-xl backdrop-blur bg-white bg-opacity-70 px-6 py-2 shadow-md">
                                <div className="flex flex-row items-center gap-2">
                                    <Link to="projects" smooth={true} duration={500} onClick={closeModal} class="text-teal-600 cursor-pointer hover:underline font-bold">
                                        Projects
                                    </Link>
                                    <BiRightArrow />
                                    <p class="font-bold text-xl text-slate-700">{selectedProject.title}</p>
                                    <div
                                        onClick={closeModal}
                                        class="ml-auto hover:bg-slate-300 cursor-pointer rounded-full p-1 transition-colors duration-500">
                                        <VscClose class="text-2xl text-slate-700" />
                                    </div>
                                </div>
                            </div>

                            <div class="flex flex-row mt-8 mx-4 items-center ">
                                <p class="text-slate-700 font-bold text-lg">
                                    Overview
                                </p>
                                <hr class="h-[1px] w-full rounded-sm border-slate-400 mx-4"></hr>
                            </div>
                            <div class="mt-2">
                                {selectedProject.longDescription.map((item) => (
                                    <p class="my-2 mx-4">{item}</p>
                                ))}
                            </div>
                            {selectedProject.link !== '' && 
                            <a 
                            href={selectedProject.link}
                            target='_blank'
                            rel='noopener noreferrer'
                            class="flex flex-row mt-2 ml-auto mr-6 items-center border-1 border border-slate-700 text-slate-700 rounded-lg w-48 justify-center hover:bg-slate-700 hover:text-white transition-colors duration-500 cursor-pointer">
                                <p class=" text-lg py-1 px-2 ">
                                    View Site 
                                </p>
                                <HiOutlineExternalLink class="w-6 h-6"/>
                            </a>
                            }
                            {selectedProject.git !== '' && 
                            <a 
                            href={selectedProject.git}
                            target='_blank'
                            rel='noopener noreferrer'
                            class="flex flex-row mt-2 ml-auto mr-6 items-center border-1 border border-slate-700 text-slate-700 rounded-lg w-48 justify-center hover:bg-slate-700 hover:text-white transition-colors duration-500 cursor-pointer">
                                <p class=" text-lg py-1 px-2 ">
                                    Repo 
                                </p>
                                <BsGithub class="w-6 h-6"/>
                            </a>
                            }
                            {selectedProject.git == '' && selectedProject.link == '' && 
                            <div
                            class="flex flex-row mt-2 ml-auto mr-6 items-center border-1 border border-slate-700 text-slate-700 rounded-lg w-72 justify-center cursor-not-allowed">
                                <p class=" text-lg py-1 px-2 ">
                                    Repo Currently Private 
                                </p>
                                <RiGitRepositoryPrivateFill class="w-6 h-6"/>
                            </div>
                            }
                            <hr class="h-[1px] bg-slate-400 rounded-sm border-slate-400 mt-4 mx-4"></hr>
                            <div class="flex flex-wrap gap-x-2 gap-y-2 items-center  mt-2 mx-4">
                                {selectedProject.technologies.map((item) => (
                                    <p class="font-normal text-xs  text-slate-500 border-1 border border-slate-400  px-3 py-1 rounded-full inline-block">{item}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                )
                    :
                    (
                        <div class="container mx-auto items-center md:w-3/5 xl:w-1/2">
                            <h2 class="text-2xl font-normal">Recent Projects</h2>
                            <hr class="h-0.5 bg-black rounded-sm border-black "></hr>

                            <div class="grid grid-cols-2 gap-6 mt-8 container">
                                {projectData.map((project) => (
                                    <div onClick={() => { openModal(project) }} class="flex flex-col hover:-translate-y-1 cursor-pointer  transition-transform duration-700">
                                        <div class="relative">
                                            <img class="rounded-xl shadow-md" src={project.image}></img>
                                            <div class="absolute inset-0 rounded-xl bg-black opacity-0 hover:opacity-10 transition-opacity duration-700"></div>
                                        </div>
                                        <p class="font-normal flex justify-center mt-2 hover:underline ">{project.title}</p>
                                        <p class="flex text-center text-[15px] text-slate-700">{project.description}</p>
                                        <hr class="h-[1px] bg-slate-400 rounded-sm border-slate-400 mt-4"></hr>
                                        <div class="flex flex-wrap gap-x-2 gap-y-2 items-center justify-center mt-2">
                                            {project.technologies.map((item) => (
                                                <p class="font-normal text-xs  text-slate-500 border-1 border border-slate-400  px-3 py-1 rounded-full inline-block">{item}</p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                }


            </section>
        </div>
    )
}

export default Projects


{/* <section id="projects" class="py-16 bg-gray-200 ">
<div class="container mx-auto items-center md:w-3/5 xl:w-1/2">
    <h2 class="text-2xl font-normal">Recent Projects</h2>
    <hr class="h-0.5 bg-black rounded-sm border-black "></hr>

    <div class="grid grid-cols-2 gap-6 mt-8 container">
        {projectData.map((project) => (
        <a href={project.link} target="_blank" rel="noopener noreferrer" class="flex flex-col hover:-translate-y-1 cursor-pointer  transition-transform duration-700">
            <div class="relative">
                <img class="rounded-xl shadow-md" src={project.image}></img>
                <div class="absolute inset-0 rounded-xl bg-black opacity-0 hover:opacity-10 transition-opacity duration-700"></div>
            </div>
            <p class="font-normal flex justify-center mt-2 hover:underline ">{project.title}</p>
            <p class="flex text-center text-[15px] text-slate-700">{project.description}</p>
            <hr class="h-[1px] bg-slate-400 rounded-sm border-slate-400 mt-4"></hr>
            <div class="flex flex-wrap gap-x-2 gap-y-2 items-center justify-center mt-2">
                {project.technologies.map((item) => (
                    <p class="font-normal text-xs  text-slate-500 border-1 border border-slate-400  px-3 py-1 rounded-full inline-block">{item}</p>
                ))}
            </div>
        </a>
        ))}
    </div>
</div>
</section> */}

// --------------------------------------------------------------------------

// import React, { useState } from 'react'
// import asl from "../assets/images/asl.png";
// import proteinarium from "../assets/images/proteinarium.png";
// import vgc from "../assets/images/vgc.png";
// import search from "../assets/images/search.png";
// import database from "../assets/images/database.png";
// import projectData from './ProjectData';


// import { AiFillGithub } from 'react-icons/ai';
// import { HiOutlineExternalLink } from 'react-icons/hi';

// const Projects = () => {

//     const [selectedProject, setSelectedProject] = useState(null);

//     const openModal = (project) => {
//       setSelectedProject(project);
//     };

//     const closeModal = () => {
//       setSelectedProject(null);
//     };

//     return (
//         <div>
//             <section id="projects" class="py-16 bg-gray-200 ">
//                 <div class="container mx-auto items-center md:w-3/5 xl:w-1/2">
//                     <h2 class="text-2xl font-normal">Recent Projects</h2>
//                     <hr class="h-0.5 bg-black rounded-sm border-black "></hr>

//                     <div class="grid grid-cols-2 gap-6 mt-8 container">


// <a href="https://github.com/alperuzun/VGC" target="_blank" rel="noopener noreferrer" class="flex flex-col hover:-translate-y-1 cursor-pointer  transition-transform duration-700">
//     <div class="relative">
//         <img class="rounded-xl shadow-md" src={vgc}></img>
//         <div class="absolute inset-0 rounded-xl bg-black opacity-0 hover:opacity-10 transition-opacity duration-700"></div>
//     </div>
//     <p class="font-normal flex justify-center mt-2 hover:underline ">Variant Graph Craft (VGC)</p>
//     <p class="flex text-center text-[15px] text-slate-700">An interactive genomic variant visualization and analysis program.</p>
//     <hr class="h-[1px] bg-slate-400 rounded-sm border-slate-400 mt-4"></hr>
//     <div class="flex flex-wrap gap-x-4 gap-y-2 items-center  mt-2">
//         <p class="font-normal text-xs bg-[#aa77a2] text-white px-3 py-1 rounded-sm inline-block">Electron</p>
//         <p class="font-normal text-xs bg-[#cab869] text-white px-3 py-1 rounded-sm inline-block">Webpack</p>
//         <p class="font-normal text-xs bg-[#648c5b] text-white px-3 py-1 rounded-sm inline-block">Java</p>
//         <p class="font-normal text-xs bg-[#cab869] text-white px-3 py-1 rounded-sm inline-block">Javascript</p>
//         <p class="font-normal text-xs bg-[#cab869] text-white px-3 py-1 rounded-sm inline-block">Tailwind CSS</p>
//     </div>
// </a>

//                         <a href="https://github.com/plumol/csci1470-final-project-ASL" target="_blank" rel="noopener noreferrer" class="flex flex-col hover:-translate-y-1 cursor-pointer  transition-transform duration-700">
//                             <div class="relative">
//                                 <img class="rounded-xl shadow-md" src={asl}></img>
//                                 <div class="absolute inset-0 rounded-xl bg-black opacity-0 hover:opacity-10 transition-opacity duration-700"></div>
//                             </div>
//                             <p class="font-normal flex justify-center mt-2 hover:underline ">Real-time ASL Recognition</p>
//                             <p class="flex text-center text-[15px] text-slate-700">A deep learning model to identify ASL fingerspelling in real time.</p>
//                             <hr class="h-[1px] bg-slate-400 rounded-sm border-slate-400 mt-4"></hr>
//                             <div class="flex flex-wrap gap-x-4 gap-y-2 items-center justify-center mt-2">
//                                 <p class="font-normal text-xs bg-[#aa77a2] text-white px-2 py-1 rounded-sm inline-block">Python</p>
//                                 <p class="font-normal text-xs bg-[#cab869] text-white px-2 py-1 rounded-sm inline-block">Numpy</p>
//                                 <p class="font-normal text-xs bg-[#648c5b] text-white px-2 py-1 rounded-sm inline-block">Scikit Learn</p>
//                                 <p class="font-normal text-xs bg-[#cab869] text-white px-2 py-1 rounded-sm inline-block">OpenCV</p>
//                             </div>
//                         </a>


//                         <a href="https://proteinarium.brown.edu/" target="_blank" rel="noopener noreferrer" class="flex flex-col hover:-translate-y-1 cursor-pointer  transition-transform duration-700">
//                             <div class="relative">
//                                 <img class="rounded-xl shadow-md" src={proteinarium}></img>
//                                 <div class="absolute inset-0 rounded-xl bg-black opacity-0 hover:opacity-10 transition-opacity duration-700"></div>
//                             </div>

//                             <p class="font-normal flex justify-center mt-2 hover:underline ">Proteinarium</p>
//                             <p class="flex text-center text-[15px] text-slate-700">An interactive web application for generating multi-layer graph networks from protein interactomes.</p>
//                             <hr class="h-[1px] bg-slate-400 rounded-sm border-slate-400 mt-4"></hr>
//                             <div class="flex flex-wrap gap-x-4 gap-y-2 items-center justify-center mt-2">
//                                 <p class="font-normal text-xs bg-[#aa77a2] text-white px-2 py-1 rounded-sm inline-block">React</p>
//                                 <p class="font-normal text-xs bg-[#cab869] text-white px-2 py-1 rounded-sm inline-block">Apache Spark</p>
//                                 <p class="font-normal text-xs bg-[#648c5b] text-white px-2 py-1 rounded-sm inline-block">Typescript</p>
//                                 <p class="font-normal text-xs bg-[#cab869] text-white px-2 py-1 rounded-sm inline-block">Java</p>
//                             </div>
//                         </a>

//                         <div class="flex flex-col hover:-translate-y-1 cursor-pointer  transition-transform duration-700">
//                             <div class="relative">
//                                 <img class="rounded-xl shadow-md" src={search}></img>
//                                 <div class="absolute inset-0 rounded-xl bg-black opacity-0 hover:opacity-10 transition-opacity duration-700"></div>
//                             </div>                            
//                             <p class="font-normal flex justify-center mt-2 hover:underline ">Search Engine</p>
//                             <p class="flex text-center text-[15px] text-slate-700">An implementation of Google's PageRank algorithm; indexes XML documents and process search queries.</p>
//                             <hr class="h-[1px] bg-slate-400 rounded-sm border-slate-400 mt-4"></hr>
//                             <div class="flex flex-wrap gap-x-4 gap-y-2 items-center justify-center mt-2">
//                                 <p class="font-normal text-xs bg-[#aa77a2] text-white px-2 py-1 rounded-sm inline-block">Python</p>
//                                 <p class="font-normal text-xs bg-[#cab869] text-white px-2 py-1 rounded-sm inline-block">XML</p>
//                             </div>
//                         </div>

//                         <div className="flex flex-col hover:-translate-y-1 cursor-pointer  transition-transform duration-700">
//                             <div class="relative">
//                                 <img class="rounded-xl shadow-md" src={database}></img>
//                                 <div class="absolute inset-0 rounded-xl bg-black opacity-0 hover:opacity-10 transition-opacity duration-700"></div>
//                             </div>                            <p class="font-normal flex justify-center mt-2 hover:underline ">Database</p>
//                             <p class="flex text-center text-[15px] text-slate-700">A simple server to manage a database of key-value pairs over a network. Supports multiple simultaneous users.</p>
//                             <hr class="h-[1px] bg-slate-400 rounded-sm border-slate-400 mt-4"></hr>
//                             <div class="flex flex-wrap gap-x-4 gap-y-2 items-center justify-center mt-2">
//                                 <p class="font-normal text-xs bg-[#aa77a2] text-white px-2 py-1 rounded-sm inline-block">C</p>
//                                 <p class="font-normal text-xs bg-[#cab869] text-white px-2 py-1 rounded-sm inline-block">Shell</p>
//                                 <p class="font-normal text-xs bg-[#cab869] text-white px-2 py-1 rounded-sm inline-block">Makefile</p>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </section>
//         </div>
//     )
// }

// export default Projects




// ----------------------------------------------------------------------

// <a href="https://github.com/alperuzun/VGC" target="_blank" rel="noopener noreferrer" class="flex w-full hover:-translate-y-1 cursor-pointer  transition-transform duration-700">
// <div class="flex w-full flex-col">
//     <p class="font-normal text-xl flex justify-start mt-2 hover:underline ">Variant Graph Craft (VGC)</p>
//     <div class="flex flex-row">
//         <img class="h-32 object-contain shadow-md rounded-md mt-2" src={vgc} alt="Your Image Description"></img>
//         <p class="flex p-3 text-[15px] text-slate-700">An interactive genomic variant visualization and analysis program. Variant Graph Craft (VGC) offers a wide range of features for exploring genetic variations, including the ability to extract variant data, visualize variants and provide a graph representation of samples.</p>
//     </div>
//     <hr class="h-[1px] bg-slate-400 rounded-sm border-slate-400 mt-4"></hr>
//     <div class="flex flex-wrap gap-x-4 gap-y-2 items-center  mt-2">
//         <p class="font-normal text-xs bg-[#aa77a2] text-white px-3 py-1 rounded-sm inline-block">Electron</p>
//         <p class="font-normal text-xs bg-[#cab869] text-white px-3 py-1 rounded-sm inline-block">Webpack</p>
//         <p class="font-normal text-xs bg-[#648c5b] text-white px-3 py-1 rounded-sm inline-block">Java</p>
//         <p class="font-normal text-xs bg-[#cab869] text-white px-3 py-1 rounded-sm inline-block">Javascript</p>
//         <p class="font-normal text-xs bg-[#cab869] text-white px-3 py-1 rounded-sm inline-block">Tailwind CSS</p>
//     </div>
// </div>
// </a>






{/* <a href="https://github.com/alperuzun/VGC" target="_blank" rel="noopener noreferrer" class="grid grid-cols-3 gap-3 hover:-translate-y-1 cursor-pointer  transition-transform duration-700">

<img class="object-contain shadow-md rounded-xl mt-2" src={vgc} alt="Your Image Description"></img>
<div class="flex col-span-2 flex-col">
    <p class="font-normal flex justify-center mt-2 hover:underline ">Variant Graph Craft (VGC)</p>
    <p class="flex p-3 text-[15px] text-slate-700">An interactive genomic variant visualization and analysis program. Variant Graph Craft (VGC) offers a wide range of features for exploring genetic variations, including the ability to extract variant data, visualize variants and provide a graph representation of samples.</p>
    <hr class="h-[1px] bg-slate-400 rounded-sm border-slate-400 mt-4"></hr>
    <div class="flex flex-wrap gap-x-4 gap-y-2 items-center  mt-2">
        <p class="font-normal text-xs bg-[#aa77a2] text-white px-3 py-1 rounded-sm inline-block">Electron</p>
        <p class="font-normal text-xs bg-[#cab869] text-white px-3 py-1 rounded-sm inline-block">Webpack</p>
        <p class="font-normal text-xs bg-[#648c5b] text-white px-3 py-1 rounded-sm inline-block">Java</p>
        <p class="font-normal text-xs bg-[#cab869] text-white px-3 py-1 rounded-sm inline-block">Javascript</p>
        <p class="font-normal text-xs bg-[#cab869] text-white px-3 py-1 rounded-sm inline-block">Tailwind CSS</p>
    </div>
</div>
</a> */}