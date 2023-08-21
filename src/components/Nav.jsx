import React, { useState } from "react";
import { hamburger, close } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen);
    return (
        <header className='padding-x py-8 absolute z-20 w-full'>
            <nav className='flex justify-between items-center max-container'>
                <a href='/'>
                    <img
                        src={headerLogo}
                        alt='logo'
                        width={129}
                        height={29}
                        className='m-0 w-[129px] h-[29px] max-lg:absolute top-0 left-0 max-lg:ml-8 max-lg:mt-6  '
                    />
                </a>
                <div typeof="button" className='hidden absolute right-8 top-6 cursor-pointer max-lg:block  w-7 h-7' onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ?
                        <img src={close} alt='close icon' width={25} height={25} /> :
                        <img src={hamburger} alt='hamburger icon' width={25} height={25} />
                    }

                </div>
                <div className={`flex flex-col gap-16 lg:flex-row items-center justify-between flex-1 lg:bg-transparent lg:pb-0 pb-12 absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500  ease-in ${open ? 'top-14' : 'top-[-490px]'}`}>
                    <ul className={`flex-1 flex justify-center items-center gap-16 ${isOpen ? 'block flex-col' : 'max-lg:hidden'}  `}>
                        {navLinks.map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className='font-montserrat leading-normal text-lg text-slate-gray'
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className={`flex gap-2 text-lg leading-normal font-medium font-montserrat wide:mr-24 ${isOpen ? 'block  h-10' :'max-lg:hidden '}`}>
                        <a href='/'>Sign in</a>
                        <span>/</span>
                        <a href='/'>Explore now</a>
                    </div>
                </div>
                
            </nav>
        </header>
    );
};

export default Nav;