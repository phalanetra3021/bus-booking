import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo.png";
import { LiaTimesSolid } from 'react-icons/lia';
import { FaBars, FaPhone } from 'react-icons/fa6';
import Theme from '../theme/Theme';

const Navbar = () => {
    const [open, setOpen] = React.useState(false);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/bus", label: "Bus" },
        { href: "/services", label: "Services" },
        { href: "/about", label: "About" },
    ];

    const handleClick = () => {
        setOpen(!open);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className='container-flex w-full h-[7ch] bg-neutral-100 dark:bg-neutral-900 flex items-center justify-content-end md:flex-row lg:px-30 md:px-16 sm:px-7 px -4 sticky    top-0 z-50'>
            {/* Logo section */}
            <Link to={"/"} className='mr-16'>
                <img src={Logo} alt="logo" className="w-28 object-contain" />
            </Link>

            {/* Toggle button */}
            <button onClick={handleClick} className="flex-1 lg:hidden text-neutral-600 dark:text-neutral-300 ease-in-out duration-300 flex items-center justify-end">
                {
                    open ?
                        <LiaTimesSolid className='text-xl' />
                        :
                        <FaBars className='text-xl' />
                }
            </button>

            {/* Navigation links */}
            <div className={`${open ? 'flex absolute top-14 left-0 w-full h-auto md:h-auto md:relative' : 'hidden'} flex-1 ml-14 md:flex flex-col md:flex-row gap-x-5 gap-y-2 md:items-center md:p-0 sm:p-4 p-4 justify-between md:bg-transparent bg-neutral-100 md:shadow-none shadow-md rounded-md`}>
                <ul className="list-none flex md:items-center items-start gap-x-5 gap-y-1 flex-wrap md:flex-row flex-col text-base text-neutral-600 dark:text-neutral-500 font-medium">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link
                                to={link.href}
                                onClick={handleClose}
                                className="hover:text-violet-600 ease-in-out duration-300"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="flex m-0 md:items-center items-end gap-x-3  gap-y-2 flex-wrap md:flex-row flex text-base font-medium text-neutral-800">
                    <div className="relative bg-violet-600 rounded-md px-8 py-2 w-fit cursor-pointer">
                        <div className="absolute top-[50%] -left-6 translate-y-[-50%] w-9 h-9 rounded-full bg-violet-600 border-4 border-neutral-100 dark:border-neutral-900 flex items-center justify-center">
                            <FaPhone className='text-neutral-50 text-sm' />
                        </div>
                        <div className="space-y-0.5">
                            <p className="text-xs text-neutral-200 font-light">
                                Need Help?
                            </p>
                            <p className="text-xs font-normal text-neutral-50 tracking-wide">+91 9857687441</p>
                        </div>
                    </div>
                    {/* Theme */}
                    <Theme />

                    {/* Login Button */}
                    <Link
                        to="/login"
                        className="text-base font-medium text-neutral-800 hover:text-violet-600 ease-in-out duration-300 ml-5"
                        onClick={handleClose}
                    >
                        Login
                    </Link>
                    <Link
                        to="/login"
                        className="text-base font-medium text-neutral-800 hover:text-violet-600 ease-in-out duration-300 ml-3"
                        onClick={handleClose}
                    >
                       Agent Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
