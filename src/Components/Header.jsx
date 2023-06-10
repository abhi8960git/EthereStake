import React from 'react';
import { Link } from 'react-router-dom';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

import { useEffect, useState } from 'react';






const Header = () => {

    const [theme, setTheme] = useState(localStorage.theme);
    const themeColor = theme === 'dark' ? 'light' : 'dark';
    console.log("themeColor", themeColor);
    console.log("theme", theme);
    const darken = theme === 'dark' ? true : false;






    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(themeColor);
        root.classList.add(theme);
        localStorage.setItem('theme', theme);


    }, [themeColor, theme])

    const toggleLight = () => {
        const root = window.document.documentElement;
        root.classList.remove(themeColor);
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
        setTheme(themeColor);
    }

    return (
        <header className='sticky top-0 z-50 text-white bg-slate-500 dark:text-orange-500 dark:bg-red-300'>

            <nav className='navbar navbar-expand-lg shadow-md py-2 relative flex items-center justify-between bg-gray-300 dark:bg-[#3F0071]'>
                <div className="grow flex flex-row justify-between items-center p-2">

                    <div>
                        <span className='grow flex flex-row justify-between items-center p-2  font-[700] uppercase'>
                            Ethere-Stake
                        </span>
                    </div>



                    <div className='flex flex-row justify-center items-center space-x-5'>
                        {
                            darken ?
                                (
                                    <MdLightMode
                                        size={25}
                                        onClick={toggleLight}
                                    ></MdLightMode>

                                ) : (
                                    <MdDarkMode
                                        size={25}
                                        onClick={toggleLight}
                                    ></MdDarkMode>
                                )

                        }


                        {
                            false ? (
                                <button
                                    className='px-4 py-2.5 bg-orange-600 text-white
                                font-medium text-xs leading-tight uppercase
                                shadow-md hover:bg-orange-700 hover:shadow-lg
                                focus:bg-orange-700 focus:shadow-lg focus:outline-none
                                focus:ring-0 active:bg-orange-800 active:shadow-lg
                                transition duration-150 ease-in-out dark:text-orange-500
                                dark:border dark:border-orange-500 dark:bg-transparent rounded-[5px]'
                                >

                                    connected

                                </button>
                            ) : (
                                <button
                                    className='px-4 py-2.5 bg-orange-600 text-white
                                font-medium text-xs leading-tight uppercase
                               shadow-md hover:bg-orange-700 hover:shadow-lg
                                focus:bg-orange-700 focus:shadow-lg focus:outline-none
                                focus:ring-0 active:bg-orange-800 active:shadow-lg
                                transition duration-150 ease-in-out dark:text-orange-500
                                dark:border dark:border-orange-500 dark:bg-transparent rounded-[5px]'
                                >
                                    Connect Wallet
                                </button>
                            )
                        }


                    </div>






                </div>

            </nav>

        </header>
    )
}

export default Header