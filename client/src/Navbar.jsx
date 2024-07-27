import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold ml-20 ">
                    <img className="h-20" src='https://www.indusaction.org/wp-content/themes/indusaction/img/logo.svg' alt="Logo" />
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-black focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                        </svg>
                    </button>
                </div>

                <div className={`md:flex ${isOpen ? "block" : "hidden"} `}>
                    <a href="#" className="block md:inline-block mt-4 md:mt-0 text-black mr-6 font-medium">About</a>
                    <a href="#" className="block md:inline-block mt-4 md:mt-0 text-black mr-6 font-medium">Services</a>
                    <a href="#" className="block md:inline-block mt-4 md:mt-0 text-black mr-6 font-medium">Contact</a>
                    <a href="#" className="block md:inline-block mt-4 md:mt-0 text-black mr-6 font-medium">Home</a>
                    <Link to="/login">
                        <button className="ml-6 text-2xl border border-stone-500 bg-yellow-600 rounded-2xl px-4 py-2 font-bold hover:text-sky-200 transition-transform hover:scale-125">
                            LOGIN
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
