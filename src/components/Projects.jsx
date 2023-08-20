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
            <section id="projects" class="py-16 bg-gray-200 md:px-0 px-4">
                {selectedProject ? (
                    <div className="justify-center items-center flex fixed inset-0 z-[100] w-full h-full py-6 backdrop-blur-md">
                        <div className="justify-center relative w-5/6 sm:w-3/5 md:w-1/2 lg:w-2/5 xl:w-1/3 2xl:w-1/4 h-full  bg-slate-200 shadow-lg rounded-xl overflow-y-auto sm:overflow-y-clip ">

                            <div className="sticky items-center inset-0 w-full h-fit rounded-t-xl backdrop-blur bg-white bg-opacity-70 px-6 py-2 shadow-md z-20">
                                <div className="flex flex-row items-center gap-2">
                                    <Link to="projects" smooth={true} duration={500} onClick={closeModal} class="text-teal-600 cursor-pointer hover:underline font-bold">
                                        Projects
                                    </Link>
                                    <BiRightArrow />
                                    <p class="font-bold sm:text-xl text-slate-700">{selectedProject.title}</p>
                                    <div
                                        onClick={closeModal}
                                        class="ml-auto hover:bg-slate-300 cursor-pointer rounded-full p-1 transition-colors duration-500">
                                        <VscClose class="text-2xl text-slate-700" />
                                    </div>
                                </div>
                            </div>

                            <div class="">
                                <div class="h-1/2 w-full ">
                                    <img class=" object-cover shadow-md" src={selectedProject.image}></img>
                                </div>
                                <div class="flex flex-col m-4">
                                    <div class="flex flex-row  items-center ">
                                        <p class="text-slate-700 font-bold text-lg">
                                            Overview
                                        </p>
                                        <hr class="h-[1px] w-full rounded-sm border-slate-400 mx-4"></hr>
                                    </div>
                                    <div class="mt-2">
                                        {selectedProject.longDescription.map((item) => (
                                            <p class="my-2">{item}</p>
                                        ))}
                                    </div>
                                    {selectedProject.link !== '' &&
                                        <a href={selectedProject.link} target='_blank' rel='noopener noreferrer' class="flex flex-row mt-2 ml-auto mr-6 items-center border-1 border border-slate-700 text-slate-700 rounded-lg w-48 justify-center hover:bg-slate-700 hover:text-white transition-colors duration-500 cursor-pointer">
                                            <p class=" text-lg py-1 px-2 ">
                                                View Site
                                            </p>
                                            <HiOutlineExternalLink class="w-6 h-6" />
                                        </a>
                                    }
                                    {selectedProject.git !== '' &&
                                        <a href={selectedProject.git} target='_blank' rel='noopener noreferrer' class="flex flex-row mt-2 ml-auto items-center border-1 border border-slate-700 text-slate-700 rounded-lg w-48 max-w-full justify-center hover:bg-slate-700 hover:text-white transition-colors duration-500 cursor-pointer">
                                            <p class=" text-lg py-1 px-2 ">
                                                Repo
                                            </p>
                                            <BsGithub class="w-6 h-6" />
                                        </a>
                                    }
                                    {selectedProject.git == '' && selectedProject.link == '' &&
                                        <div class="flex flex-row mt-2 ml-auto mr-6 items-center border-1 border border-slate-700 text-slate-700 rounded-lg w-72 max-w-full justify-center cursor-not-allowed">
                                            <p class=" text-lg py-1 px-2 ">
                                                Repo Currently Private
                                            </p>
                                            <RiGitRepositoryPrivateFill class="w-6 h-6" />
                                        </div>
                                    }
                                    <hr class="h-[1px] bg-slate-400 rounded-sm border-slate-400 mt-2"></hr>
                                    <div class="flex flex-wrap gap-x-2 gap-y-2 items-center mt-2 ">
                                        {selectedProject.technologies.map((item) => (
                                            <p class="font-normal text-xs  text-slate-500 border-1 border border-slate-400  px-3 py-1 rounded-full inline-block">{item}</p>
                                        ))}
                                    </div>
                                </div>
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
                                        <p class="font-normal flex text-center justify-center mt-2 hover:underline ">{project.title}</p>
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
