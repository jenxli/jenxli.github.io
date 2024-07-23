import React from 'react'
import brownu from '../assets/images/gmi_lab_logo.png'


const About = () => {
    return (
        <div>
            <section id="about" class="py-16 text-slate-700 md:px-0 px-4">
                <div class="container mx-auto items-center md:w-3/5 xl:w-1/2">
                    <h2 class="text-2xl font-normal">About</h2>
                    <hr class="h-0.5 bg-black rounded-sm border-black "></hr>

                    <p class="text-gray-700 mt-6">
                        Hi there! I'm Jenny, a rising senior at Brown University.
                        <br></br>
                        <br></br>
                        I'm currently pursuing a B.S. in computer science, with a focus on machine learning and theory.
                        <br></br>
                        <br></br>
                        From creating a full-stack genetic variant visualization tool to building a model to translate ASL
                        fingerspelling in real-time, I'm passionate about finding ways of solving real-world problems through tech.
                    </p>
                </div>
            </section>

            <section id="education" class="py-6  text-slate-700 md:px-0 px-4">
                <div class="container mx-auto items-center md:w-3/5 xl:w-1/2">
                    <h2 class="text-2xl">Education</h2>
                    <hr class="h-0.5 bg-black rounded-sm border-black "></hr>

                    <p class="mt-6 text-xl col-span-2">Brown University </p>
                    <p class="text-slate-500 col-span-2">Sc.B. Computer Science, Sep 2021 – June 2025 </p>
                    <p class="mt-2 text-[18px] col-span-2 ">Revelant Coursework: </p>
                    <p class="mb-8 text-slate-500 col-span-2">Algorithms and Data Structures, Machine Learning, Discrete Structures, Linear Algebra, Computer Systems, Deep Learning in Genomics, Probability, Optimization and Stochastic Calculus, Formal Proof and Verification, Data Science, Introductory Security</p>


                </div>
            </section>
        </div>
    )
}

export default About