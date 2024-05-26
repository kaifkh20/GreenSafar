import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";


const Contact = () => {
    return (
        <div>
            <div className="px-10 md:px-20 bg-gray-100 dark:bg-[#111111] dark:text-white p-6 grid grid-cols-1 md:grid-cols-2">
                <div>
                    <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
                    <p>
                        Have questions or want to get involved with GreenSafar? Reach out to us using the contact information below or fill out the form, and we'll get back to you as soon as possible.
                    </p>
                    <h2 className="text-2xl font-bold mt-8 md:mt-4 mb-3 text-[#68A95E]">Contact Information</h2>
                    <ul className="list-disc space-y-1 flex justify-center flex-col">
                        <li className="flex items-center gap-4"><MdOutlineEmail /><span><b>Email:</b>     info@greensafar.com</span></li>
                        <li className="flex items-center gap-4"><FaMobileAlt /><span><b>Phone:</b> +1 (555) 123-4567</span></li>
                        <li className="flex items-center gap-4"><FaLocationArrow /><span><b>Address:</b>        Jamshedpur, Jharkhand</span></li>
                    </ul>
                    <h2 className="text-2xl font-bold mt-8 md:mt-4 mb-3 text-[#68A95E]">Send Us Message</h2>
                    <p>
                        Fill out the form below to send us a message. We're here to answer any questions you may have and welcome any feedback or suggestions.
                    </p>
                    <h2 className="text-2xl font-bold mt-8 md:mt-4 mb-3 text-[#68A95E]">Follow us</h2>
                    <p>
                        Stay updated on our latest news, events, and conservation efforts by following us on social media.
                    </p>
                    <div className="flex gap-4 mt-5 md:mt-3 text-3xl">
                        <FaFacebook />
                        <FaInstagram />
                        <FaLinkedin />
                        <FaSquareXTwitter />
                    </div>

                </div>
                <div className="mt-8 md:ml-16">
                    <form className='md:p-6' name="submit-to-google-sheet">
                        <input className="w-full border-0 outline-none p-4 bg-[#68A95E]/50 text-white text-lg rounded-lg my-2 md:my-1 placeholder-white" type="text" name="Name" placeholder="Name" required />
                        <input className="w-full border-0 outline-none p-4 bg-[#68A95E]/50 text-white text-lg rounded-lg my-2 md:my-1 placeholder-white"
                            type="text"
                            name="Email"
                            placeholder="E-Mail"
                            required
                        />
                        <input className="w-full border-0 outline-none p-4 bg-[#68A95E]/50 text-white text-lg rounded-lg my-2 md:my-1 placeholder-white" type="text" name="Subject" placeholder="Subject" required />
                        <textarea className="w-full border-0 outline-none p-4 bg-[#68A95E]/50 text-white text-lg rounded-lg my-2 md:my-1 placeholder-white"
                            name="Message"
                            rows="6"
                            placeholder="Message"
                        ></textarea>
                        <button type="submit" class="block mx-auto mt-3 px-4 py-2 bg-[#68A95E]/80 text-white rounded-xl hover:bg-[#68A95E]">Submit</button>
                    </form>
                    <span id="msg"></span>
                </div>
            </div>
        </div>
    )
}

export default Contact
