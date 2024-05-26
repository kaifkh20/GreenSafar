import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { BiSolidSun, BiSolidMoon } from 'react-icons/bi'
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveNav from "./ResponsiveNav"
import DarkLogo from "../../assets/LOGO.png"
import Logo from "../../assets/logoN.png"

const Navbar = () => {

    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
    const [logoSrc, setLogoSrc] = useState(theme === 'dark' ? DarkLogo : Logo);
    const element = document.documentElement;

    useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
        setLogoSrc(theme === 'dark' ? DarkLogo : Logo);


    }, [theme])

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    const responsive = () => {
        console.log
    }

    return (
        <nav>
            <div className="conatiner flex justify-between sticky top-0  items-center shadow-md px-20 dark:bg-black dark:text-white">
                {/* logo section  */}
                <img src={logoSrc} className="w-[100px] md:w-[120px] m-2 mx-[-50px] md:mx-0" alt="" />
                {/* link section  */}
                <div className='flex items-center mx-[-60px] md:mx-0'>
                    <div className='hidden md:block'>
                        <ul className="flex gap-8 font-bold mr-[80px] text-black/70 dark:text-white">
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
                    {/* darkmode section  */}
                    {
                        theme === "dark" ? <BiSolidSun onClick={() => setTheme("light")} /> : <BiSolidMoon onClick={() => setTheme("dark")} />
                    }
                    <div className='flex items-center'>
                        <button className="hidden md:block  ml-16 mb-[10px] mt-3 px-4 py-2 bg-[#68A95E]/80 text-white rounded-xl hover:bg-[#68A95E]">Login/SignUp</button>
                    </div>
                    <div className="md:hidden block ml-5">
                        {showMenu ? (
                            <HiMenuAlt1
                                onClick={toggleMenu}
                                className=" cursor-pointer transition-all"
                                size={30}
                            />
                        ) : (
                            <HiMenuAlt3
                                onClick={toggleMenu}
                                className="cursor-pointer transition-all"
                                size={30}
                            />
                        )}
                    </div>
                </div>
            </div>
            <ResponsiveNav setShowMenu={setShowMenu} showMenu={showMenu} />
        </nav>
    )
}

export default Navbar