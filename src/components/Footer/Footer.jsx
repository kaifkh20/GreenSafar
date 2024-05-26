import React from 'react'
import FooterVid from "../../assets/footer.mp4"
import FooterLogo from "../../assets/logoN.png"
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <footer>
            <div className="relative bg-white/10 dark:bg-[#111111]/20 duration-200 h-[780px] md:h-[430px] flex justify-center items-center flex-col">
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute right-0 top-0 h-full w-full object-cover z-[-1]"
                >
                    <source src={FooterVid} type="video/mp4" />
                </video>
                <div className="w-[90%] h-[600px] md:h-[260px] bg-white/80 p-10 grid grid-cols-1 md:grid-cols-4 rounded-t-2xl px-10">
                    <div className="space-y-4 col-span-1">
                        <img className="w-[130px]" src={FooterLogo} alt="" />
                        <div className="flex items-center gap-4 ">
                            <FaLocationArrow />
                            <span>Jamshedpur, Jharkhnad</span>
                        </div>
                        <div className="flex items-center gap-4 ">
                            <FaMobileAlt />
                            <p>+ 123 456 789</p>
                        </div>
                        <div className="flex items-center gap-4 text-3xl mb-5">
                            <FaInstagram />
                            <FaFacebook />
                            <FaLinkedin />
                        </div>
                    </div>
                    <div className="col-span-3 mt-5 md:mt-0">
                        <p>GreenSafar is a tech-driven initiative committed to biodiversity and heritage conservation. We leverage technology, community engagement, and education to protect our planet's natural and cultural treasures.</p>
                        <h1 className="text-center mt-8 md:mt-5 text-2xl font-bold md:ml-[-180px]">Important Links</h1>
                        <ul className="flex flex-wrap gap-5  font-bold md:mr-[80px] text-black/70 justify-center mt-4 md:ml-[-110px]">
                            <li>
                                <NavLink activeClassName="active" to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active" to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active" to="/destination">Destinations</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active" to="/tours">Tours</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bg-[#68A95E] w-[90%] text-white p-4">
                    <div className="w-[90%] mx-auto text-center">
                        <p>© {new Date().getFullYear()} Team Bit Weavers. All rights reserved.</p>
                        <p>Privacy Policy | Terms of Service</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
