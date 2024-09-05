import React, { useEffect, useState, useRef } from 'react';
import { BiPhone } from 'react-icons/bi';
import { BsInstagram, BsTelegram } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../assets/al_sarays-removebg-preview.png';
import { Link } from 'react-router-dom';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false); // State for modal

    const menuRef = useRef(null); // Ref for the menu

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
                document.documentElement.style.setProperty('--header-bg-color', 'rgba(5, 5, 5, 0.7)');
                document.documentElement.style.setProperty('--button-border-color', 'gold');
                document.documentElement.style.setProperty('--button-text-color', 'gold');
            } else {
                setScrolled(false);
                document.documentElement.style.setProperty('--header-bg-color', 'rgba(5, 5, 5, 0.3)');
                document.documentElement.style.setProperty('--button-border-color', 'gray');
                document.documentElement.style.setProperty('--button-text-color', 'white');
            }
        };

        const handleResize = () => {
            if (window.innerWidth >= 640 && menuOpen) {
                setMenuOpen(false);
            }
        };

        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(true); // Close menu if clicked outside
                setOpenModal(false); // Close modal if clicked outside
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        document.addEventListener('mousedown', handleClickOutside); // Listen for clicks outside the menu

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('mousedown', handleClickOutside); // Cleanup listener
        };
    }, [menuOpen, openModal]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        setOpenModal(!openModal); // Toggle modal state
    };

    const handleLinkClick = () => {
        setMenuOpen(false);
        setOpenModal(false); // Close modal on link click
    };

    return (
        <div
            className={`2xl:w-[1500px] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%] h-[90px] mx-auto fixed header z-50 ${scrolled ? 'scrolled' : ''}`}
            style={{ backgroundColor: 'var(--header-bg-color)' }}
        >
            <div className='2xl:w-[85%] xl:w-[85%] lg:w-[85%] md:w-[85%] sm:w-[85%] w-[85%] mx-auto h-[100%]'>
                <div className='w-[100%] h-[100%] flex justify-between items-center'>
                    <div>
                        <div className='2xl:hidden xl:hidden lg:hidden md:hidden sm:block block'>
                            <GiHamburgerMenu className='text-[28px]' onClick={toggleMenu} />
                        </div>
                        <ul className='2xl:flex xl:flex lg:flex md:flex sm:hidden hidden items-center 2xl:gap-8 xl:gap-7 lg:gap-6 md:gap-5 sm:gap-4 gap-3 font-medium text-[#c0bfbf] list'>
                            <li className='2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[14px] sm:text-[13px]'>
                                <ScrollLink
                                    to='aboutUs'
                                    smooth={true}
                                    duration={500}
                                    className='flex items-center gap-1 cursor-pointer'
                                    onClick={handleLinkClick}
                                >
                                    Biz haqimizda
                                </ScrollLink>
                            </li>
                            <li className='2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[14px] sm:text-[13px]'>
                                <ScrollLink
                                    to='offer'
                                    smooth={true}
                                    duration={500}
                                    className='flex items-center gap-1 cursor-pointer'
                                    onClick={handleLinkClick}
                                >
                                    Tariflar
                                </ScrollLink>
                            </li>
                            <li className='2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[14px] sm:text-[13px]'>
                                <ScrollLink
                                    to='document'
                                    smooth={true}
                                    duration={500}
                                    className='flex items-center gap-1 cursor-pointer'
                                    onClick={handleLinkClick}
                                >
                                    Hujjatlar
                                </ScrollLink>
                            </li>
                            <li className='2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[14px] sm:text-[13px]'>
                                <ScrollLink
                                    to='quesion'
                                    smooth={true}
                                    duration={500}
                                    className='flex items-center gap-1 cursor-pointer'
                                    onClick={handleLinkClick}
                                >
                                    Savollar
                                </ScrollLink>
                            </li>
                            <li className='2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[14px] sm:text-[13px]'>
                                <ScrollLink
                                    to='footer'
                                    smooth={true}
                                    duration={500}
                                    className='flex items-center gap-1 cursor-pointer'
                                    onClick={handleLinkClick}
                                >
                                    Aloqa
                                </ScrollLink>
                            </li>
                        </ul>
                    </div>
                    <div className='cursor-pointer 2xl:block xl:flex lg:hidden md:flex sm:flex flex items-center justify-center text-[40px] font-semibold'>
                        <img src={logo} alt="" className='2xl:w-[250px] xl:w-[250px] lg:w-[250px] md:w-[200px] sm:w-[180px] w-[200px]' />
                    </div>
                    <div className='2xl:flex xl:flex lg:flex md:hidden sm:hidden hidden items-center gap-8'>
                        <Link to='tel:+998880156869'>
                            <button className='2xl:flex xl:flex lg:flex md:hidden sm:hidden hidden items-center px-5 py-2 rounded-[20px] border border-[var(--button-border-color)] border-opacity-20 transition duration-500 text-[var(--button-text-color)] hover:border-[var(--button-border-color)] hover:text-[var(--button-text-color)] bg-opacity-20 bg-gray-500 2xl:text-[16px] xl:text-[16px] lg:text-[16px]'>
                                <BiPhone />
                                +998 (91) 590 66 63
                            </button>
                        </Link>
                        <ul className='flex items-center gap-2 text-white text-[20px]'>
                            <a href='https://t.me/AL_Saray_Travel' target='_blank'>
                                <li className='cursor-pointer py-3 px-3 rounded-full bg-[#458fea]'>
                                    <BsTelegram />
                                </li>
                            </a>
                            <a href='https://www.instagram.com/al_saray_travel/' target='_blank'>
                                <li className='cursor-pointer py-3 px-3 rounded-full bg-red-600'>
                                    <BsInstagram />
                                </li>
                            </a>
                            <a href='https://www.facebook.com/Al.Saray.Travel' target='_blank'>
                                <li className='cursor-pointer py-3 px-3 rounded-full bg-[#3046b3]'>
                                    <FaFacebook />
                                </li>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
            {menuOpen && (
                <div ref={menuRef} className='fixed top-[90px] left-0 w-[350px] h-[450px] bg-black bg-opacity-30 z-40 shadow-lg text-white'>
                    <ul className='flex flex-col items-start p-4'>
                        <li className='py-2'>
                            <ScrollLink to='aboutUs' smooth={true} duration={500} className='cursor-pointer' onClick={handleLinkClick}>
                                Biz haqimizda
                            </ScrollLink>
                        </li>
                        <li className='py-2'>
                            <ScrollLink to='offer' smooth={true} duration={500} className='cursor-pointer' onClick={handleLinkClick}>
                                Tariflar
                            </ScrollLink>
                        </li>
                        <li className='py-2'>
                            <ScrollLink to='document' smooth={true} duration={500} className='cursor-pointer' onClick={handleLinkClick}>
                                Hujjatlar
                            </ScrollLink>
                        </li>
                        <li className='py-2'>
                            <ScrollLink to='quesion' smooth={true} duration={500} className='cursor-pointer' onClick={handleLinkClick}>
                                Savollar
                            </ScrollLink>
                        </li>
                        <li className='py-2'>
                            <ScrollLink to='footer' smooth={true} duration={500} className='cursor-pointer' onClick={handleLinkClick}>
                                Aloqa
                            </ScrollLink>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Header;
