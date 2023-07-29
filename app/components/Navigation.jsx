"use client"
import React, {useState} from 'react';

const Navigation = () => {

const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
        <header className="relative">
        
          <button className="z-30 fixed top-10 left-6 xl:hidden" onClick={() => setIsOpen(!isOpen)}>
            {!isOpen ? <img src="/images/icon-hamburger.svg" alt="Hamburger Icon" /> : <img src="/images/icon-close.svg" alt="Close Icon" />}
          </button>
        <nav className={`${isOpen ? "translate-x-0 z-20 opacity-100" : "-translate-x-full xl:translate-x-0 xl:bg-transparent "} fixed top-0 right-0 bg-white w-full z-10 p-4 h-24 px-4 gap-7 flex items-center justify-end xl:justify-start transition-transform duration-500 ease-in-out`}>
          <ul className="w-10/12 xl:w-72 xl:ml-24 my-auto flex flex-row  items-center justify-around">
            <li className="font-bold xl:text-white cursor-pointer group">home
            <span className='w-3 xl:mt-0.5 mx-auto xl:h-0.5 group-hover:bg-white flex z-50 '></span>
            </li>
            <li className="font-bold xl:text-white my-auto cursor-pointer group">shop
            <span className='w-3 xl:mt-0.5 mx-auto xl:h-0.5 group-hover:bg-white flex z-50 '></span>
            </li>
            <li className="font-bold xl:text-white my-auto cursor-pointer group">about
            <span className='w-3 xl:mt-0.5 mx-auto xl:h-0.5 group-hover:bg-white flex z-50 '></span>
            </li>
            <li className="font-bold xl:text-white my-auto cursor-pointer group">contact
            <span className='w-3 xl:mt-0.5 mx-auto xl:h-0.5 group-hover:bg-white flex z-50 '></span>
            </li>
          </ul>
        </nav>
        {isOpen && (
          <div className={`fixed inset-0 top-0 z-10 left-0 right-0 bottom-0 bg-black bg-opacity-50 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}></div>
        )}
        </header>
        
      </div>
    );
}

export default Navigation;

/* <ul className={`md:absolute  z-0 p-4  md:flex md:w-5/12   md:flex-row md:justify-between  ${menuOpen ? "fixed top-0 right-0 bg-white w-56 items-start px-4 h-screen flex flex-col gap-7 translate-x-0 ":"translate-x-full  opacity-0 md:opacity-100"} ease-in-out duration-500  `}>
        <li className='nav-link mt-32 md:mt-0'>Home</li>
        <li className='nav-link'>New</li>
        <li className='nav-link'>Popular</li>
        <li className='nav-link'>Trending</li>
        <li className='nav-link'>Categories</li>
    </ul>
     */

    /* <header className='absolute top-10 left-6'>
            <button className='z-20' onClick={() => setIsOpen(!isOpen)}>{!isOpen ?  <img src='/images/icon-hamburger.svg'/> : <img src='/images/icon-close.svg'/>}</button>
        <nav className={`${isOpen ? "fixed top-0 right-0 bg-white w-full z-10 p-4 h-24 px-4 gap-7 translate-x-0 ":"-translate-x-full  opacity-0"} ease-in-out duration-500`}>
                <ul className='w-1/2 flex flex-row items-center gap-7'>
                    <li className='font-bold'>home</li>
                    <li className='font-bold'>shop</li>
                    <li className='font-bold'>about</li>
                    <li className='font-bold'>contact</li>
                </ul>
        </nav>
    </header> */

/* <header className="relative">
          <button className="z-20 absolute top-10 left-6" onClick={() => setIsOpen(!isOpen)}>
            {!isOpen ? <img src="/images/icon-hamburger.svg" alt="Hamburger Icon" /> : <img src="/images/icon-close.svg" alt="Close Icon" />}
          </button>
        
        <nav className={`${isOpen ? "translate-x-0 z-10 opacity-100" : "-translate-x-full"} fixed top-0 right-0 bg-white w-full z-10 p-4 h-24 px-4 gap-7 transition-transform duration-500 ease-in-out`}>
          <ul className="w-1/2 flex flex-row  items-center gap-7">
            <li className="font-bold">home</li>
            <li className="font-bold">shop</li>
            <li className="font-bold">about</li>
            <li className="font-bold">contact</li>
          </ul>
        </nav>
        </header>
 */
    