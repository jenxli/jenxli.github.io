import React from 'react'
import gmi_lab_logo from '../assets/images/gmi_lab_logo.png'
import brown_cs from '../assets/images/brown_cs.jpg'
import cne_logo from '../assets/images/cne.jpg'
import empow_logo from '../assets/images/empow_logo.png'

const Experience = () => {
  return (
    <div>
        <section id="experience" class="py-16 text-slate-700">
        <div class="container mx-auto items-center md:w-3/5 xl:w-1/2">
            <h2 class="text-2xl font-normal">Experience</h2>
            <hr class="h-0.5 bg-black rounded-sm border-black "></hr>
            <div>
                <ul>
                    <li> 
                        <div class="flex flex-col my-2 mt-4">
                            <div class="flex flex-row">
                                <img src={gmi_lab_logo} class="flex h-16 w-16 p-2 rounded-full border-[1.5px] border-slate-300"/>
                                <div class="flex flex-col justify-center mx-4">
                                    <a href="https://sites.brown.edu/gmilab/" target="_blank" class="font-medium text-lg text-teal-600 hover:underline">Genomics and Machine Intelligence Lab.</a>
                                    <p class="font-medium text-slate-500">Research Assistant</p>
                                </div>
                            </div>
                            <div class="relative flex flex-row">
                                <span class="absolute translate-x-8 h-full my-2 w-0.5 bg-slate-300" ></span>
                                <div>
                                    <p class="ml-20 font-medium text-slate-400 text-sm">January 2022 - Present</p>
                                    <ul class="list-disc ml-24 text-slate-700 text-[15px]">
                                        <li>Designed and deployed a full-stack infrastructure, implementing a scalable and maintainable object-oriented architecture.</li>
                                        <li>Successfully integrated data from various databases, including ClinVar, MSigDB, and gnoMAD.</li>
                                        <li>Implemented a REST API using Axios to enable seamless communication between frontend React and backend Spring Boot systems.</li>
                                        <li>Developed indexing and querying algorithms to optimize the handling of large-scale genomic datasets.</li>
                                        <li>Generated interactive graphics using React libraries and APIs to present genetic variant information
                                            effectively.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li> 
                        <div class="flex flex-col my-2 mt-4">
                            <div class="flex flex-row">
                                <img src={brown_cs} class="flex h-16 w-16 p-2 rounded-full border-[1.5px] border-slate-300"/>
                                <div class="flex flex-col justify-center mx-4">
                                    <a href="https://cs.brown.edu/" target="_blank" class="font-medium text-lg text-teal-600 hover:underline">Brown University Department of Computer Science</a>
                                    <p class="font-medium text-slate-500">Teaching Assistant</p>
                                </div>
                            </div>
                            <div class="relative flex flex-row">
                                <span class="absolute translate-x-8 h-full my-2 w-0.5 bg-slate-300" ></span>
                                <div>
                                    <p class="ml-20 font-medium text-slate-400 text-sm">January 2023 - Present</p>
                                    <ul class="list-disc ml-24 text-slate-700 text-[15px]">
                                        <li> Conducted weekly debugging and conceptual office hours to address student queries and provide one-on-one assistance.</li>
                                        <li>Led weekly lab sections, ensuring students’ understanding of key concepts including breadth-first search (BFS) and depth-first search (DFS), binary trees, stacks, queues, and file stream operations.
                                        </li>
                                        <li>Performed code reviews for students to assess understanding, as well as provide feedback and suggestions for improvement.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li> 
                        <div class="flex flex-col my-2 mt-4">
                            <div class="flex flex-row">
                                <img src={cne_logo} class="flex h-16 w-16 p-2 rounded-full border-[1.5px] border-slate-300"/>
                                <div class="flex flex-col justify-center mx-4">
                                    <a href="https://www.carenewengland.org/" target="_blank" class="font-medium text-lg text-teal-600 hover:underline">Care New England</a>
                                    <p class="font-medium text-slate-500">Research Intern, Software Engineering</p>
                                </div>
                            </div>
                            <div class="relative flex flex-row">
                                <span class="absolute translate-x-8 h-full my-2 w-0.5 bg-slate-300" ></span>
                                <div>
                                    <p class="ml-20 font-medium text-slate-400 text-sm">November 2022 - May 2023</p>
                                    <ul class="list-disc ml-24 text-slate-700 text-[15px]">
                                        <li>Developed and enhanced an interactive web application for generating multi-layer graph networks from protein interactomes.</li>
                                        <li>Implemented additional features for users to upload and analyze multiple dataset input types, offering a more versatile and comprehensive analysis experience.</li>
                                        <li>Implemented backend information retrieval quality improvements, optimizing analysis performance and user experience.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li> 
                        <div class="flex flex-col my-2 mt-4">
                            <div class="flex flex-row">
                                <img src={empow_logo} class="flex h-16 w-16 p-2 rounded-full border-[1.5px] border-slate-300"/>
                                <div class="flex flex-col justify-center mx-4">
                                    <a href="https://empow.me/" target="_blank" class="font-medium text-lg text-teal-600 hover:underline">Empow Studios</a>
                                    <p class="font-medium text-slate-500">Lead Instructor, Camp Counselor</p>
                                </div>
                            </div>
                            <div class="relative flex flex-row">
                                <span class="absolute translate-x-8 h-full my-2 w-0.5 bg-slate-300" ></span>
                                <div>
                                    <p class="ml-20 font-medium text-slate-400 text-sm">June 2019 - August 2021</p>
                                    <ul class="list-disc ml-24 text-slate-700 text-[15px]">
                                        <li>Led students in coding, 3D printing, and digital art projects both in-person and virtually (post COVID).</li>
                                        <li>Organized small-group activities including demos, project showcases, and partner projects.</li>
                                        <li>Communicated with parents regarding student progress, goals, and interests.</li>
                                        <li>Led discussions on the history of computers, real-world applications, and new developments in technology and science.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Experience