import React from 'react'
import AboutImg from "../assets/about.jpg"

const About = () => {
    return (
        <div className=" bg-gray-100 p-8 grid grid-cols-1 md:grid-cols-3 col-span-1 dark:bg-[#111111] dark:text-white">
            <div className="px-5 md:container">
                <img className="h-[300px] w-full md:h-[500px] rounded-xl" src={AboutImg} alt="" />
            </div>
            <div className="px-5 col-span-2 pr-[30px] md:text-justify md:pr-[50px]">
                <h1 className="mt-5 md:mt-0 text-xl font-bold text-[#68A95E]">GREEN SAFAR</h1>
                <h1 className="text-4xl font-bold mt-1 md:mt-0">About Us</h1>
                <p className="mt-4 md:mt-3 text-[16px]">Welcome to GreenSafar, where technology meets conservation to address biodiversity loss and heritage preservation. Our mission is to empower communities, leverage data, and promote education to protect our natural and cultural treasures.</p>
                <h1 className="mb-3 font-bold text-2xl text-[#68A95E] mt-10 md:mt-5">Our Vision</h1>
                <p className='text-[16px]'>We envision a world where technology helps protect and celebrate the rich biodiversity and heritage of our planet. Our goal is to unite conservationists, researchers, and enthusiasts to preserve these legacies for future generations.</p>
                <div className="space-y-4 mt-10 md:mt-5">
                    <h1 className="font-bold text-2xl text-[#68A95E]">What we Do</h1>
                    <p className="font-semibold text-[16px]">GreenSafar offers:</p>
                    <ul className="list-disc space-y-2 ml-[20px] md:ml-[0px] text-[16px]">
                        <li>
                            Biodiversity Mapping: Real-time data and interactive maps of biodiversity hotspots and endangered species.
                        </li>
                        <li>
                            Heritage Preservation: Virtual tours, historical archives, and conservation project showcases.
                        </li>
                        <li>
                            Education: Interactive learning modules, webinars, and workshops on conservation.
                            Community Engagement: Volunteer connections, crowdfunding, and forums for collaboration.
                        </li>
                        <li>
                            Community Engagement: Volunteer connections, crowdfunding, and forums for collaboration.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About
