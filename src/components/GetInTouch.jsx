import React from 'react'

const GetInTouch = () => {
    const handleEmailClick = () => {
        const emailAddress = 'jennzhli@gmail.com';
        const subject = 'Hello!';
        
        window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
    };

    return (

        
        <div>
            <section id="contact" class="py-16 text-slate-700 bg-gray-200 md:px-0 px-4">
                <div class="container mx-auto items-center md:w-3/5 xl:w-1/2">
                    <h2 class="text-2xl font-normal">Get in Touch</h2>
                    <hr class="h-0.5 bg-black rounded-sm border-black "></hr>

                    <p class="flex flex-col text-gray-700 mt-6 justify-center items-center">
                        I'm always up for a chat. Feel free to reach out!

                        <button class="flex border border-1 border-slate-700 p-2 rounded-lg items-center justify-center hover:text-slate-100 hover:border-slate-100 hover:bg-slate-700 transition-colors duration-400 mt-4" onClick={handleEmailClick}>
                            Say Hello
                        </button>
                    </p>
                </div>
            </section>
        </div>
    )
}

export default GetInTouch