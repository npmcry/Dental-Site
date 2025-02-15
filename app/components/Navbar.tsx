"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link"; // ✅ Ensure Link is imported
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();
    const isHome = pathname === '/';
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        if (!isHome) {
            // If not on home page, navigate to home first
            window.location.href = `/#${sectionId}`;
            return;
        }
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMenuOpen(false);
    };

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: string) => {
        if (isHome) {
            e.preventDefault();
            scrollToSection(sectionId);
        }
    };

    // Auto-close menu when resizing back to large screens
    useEffect(() => {
        if (typeof window !== "undefined") {
            const handleResize = () => {
                if (window.innerWidth >= 1024) {
                    setMenuOpen(false);
                }
            };
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    // Add useEffect to handle body scroll lock
    useEffect(() => {
        if (menuOpen) {
            // Prevent scrolling when menu is open
            document.body.style.overflow = 'hidden';
        } else {
            // Re-enable scrolling when menu is closed
            document.body.style.overflow = 'unset';
        }

        // Cleanup function
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [menuOpen]);

    // Add scroll event handler
    useEffect(() => {
        const handleScroll = () => {
            if (menuOpen) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [menuOpen]);

    return (
        <nav className="w-full fixed top-0 left-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
            {/* Logo */}
            <div className="flex items-center space-x-3">
                <Link href="/" className="flex items-center space-x-3">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={50}
                        height={50}
                        unoptimized={true}
                        className="w-[50px] h-[50px] object-contain"
                    />
                    <div className="flex flex-col justify-center">
                        <span className="text-[#2469FD] text-[30px] md:text-[40px] lg:text-[50px] font-lisu font-bold leading-none">
                            Paradise
                        </span>
                        <span className="text-[#2469FD] text-[14px] md:text-[16px] lg:text-[20px] font-inter leading-none self-center">
                            family dental
                        </span>
                    </div>
                </Link>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-4 lg:space-x-12 text-[20px] text-[#2469FD] font-inter">
                <li>
                    <Link 
                        href="/#insurance" 
                        className="hover:text-white transition"
                        onClick={(e) => {
                            if (isHome) {
                                e.preventDefault();
                                scrollToSection('insurance');
                            }
                        }}
                    >
                        Insurance
                    </Link>
                </li>
                <li>
                    <Link 
                        href="/#services" 
                        className="hover:text-white transition-all duration-300"
                        onClick={(e) => handleNavClick(e, 'services')}
                    >
                        Services
                    </Link>
                </li>
                <li>
                    <Link href="/patients" className="hover:text-white transition">Patients</Link>
                </li>
                <li>
                    <Link href="/gallery" className="hover:text-white transition">Smile Gallery</Link>
                </li>
            </ul>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-[#2469FD]" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
            </button>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="fixed top-[70px] left-0 w-full h-[calc(100vh-70px)] animate-slideIn 
                    backdrop-blur-xl bg-white/95 md:hidden flex flex-col items-center pt-8 pb-12 px-6">
                    {/* Navigation Links Container */}
                    <div className="w-full max-w-md flex flex-col items-center space-y-5 mb-8">
                        <Link 
                            href="/#insurance" 
                            className="w-full text-[#2469FD] text-xl font-inter font-medium 
                                rounded-[20px] py-3 px-6 hover:blue-gradient hover:text-white 
                                transition-all duration-300 text-center"
                            onClick={(e) => {
                                handleNavClick(e, 'insurance');
                                setMenuOpen(false);
                            }}
                        >
                            Insurance
                        </Link>
                        <Link 
                            href="/#services" 
                            className="w-full text-[#2469FD] text-xl font-inter font-medium 
                                rounded-[20px] py-3 px-6 hover:blue-gradient hover:text-white 
                                transition-all duration-300 text-center"
                            onClick={(e) => {
                                handleNavClick(e, 'services');
                                setMenuOpen(false);
                            }}
                        >
                            Services
                        </Link>
                        <Link 
                            href="/patients" 
                            className="w-full text-[#2469FD] text-xl font-inter font-medium 
                                rounded-[20px] py-3 px-6 hover:blue-gradient hover:text-white 
                                transition-all duration-300 text-center"
                        >
                            Patients
                        </Link>
                        <Link 
                            href="/gallery" 
                            className="w-full text-[#2469FD] text-xl font-inter font-medium 
                                rounded-[20px] py-3 px-6 hover:blue-gradient hover:text-white 
                                transition-all duration-300 text-center"
                        >
                            Smile Gallery
                        </Link>
                    </div>

                    {/* Action Buttons */}
                    <div className="w-full max-w-md space-y-4 mt-auto">
                        <a
                            href="tel:9162591701"
                            className="w-full white-gradient text-[#2469FD] text-xl font-medium 
                                rounded-[30px] py-4 px-6 flex items-center justify-center 
                                transition-all duration-300 hover:opacity-90 active:scale-[0.98]
                                border-2 border-[#2469FD]"
                            onClick={() => setMenuOpen(false)}
                        >
                            Call To Book
                        </a>
                        <Link 
                            href="/appointment"
                            className="w-full blue-gradient text-white text-xl font-medium 
                                rounded-[30px] py-4 px-6 flex items-center justify-center 
                                transition-all duration-300 hover:opacity-90 active:scale-[0.98]"
                            onClick={() => setMenuOpen(false)}
                        >
                            Book Online
                        </Link>
                    </div>
                </div>
            )}

            {/* Buttons - Fixed for Tablets */}
            <div className="hidden md:flex space-x-2 lg:space-x-4">
                <a
                    href="tel:+1234567890"
                    className="px-4 lg:px-5 py-2 border border-[#2469FD] text-[#2469FD] rounded-[30px] text-lg 
                    hover:bg-white hover:text-[#2469FD] transition-all duration-300 ease-in-out"
                >
                    Call Now
                </a>

                {/* Improved Book Now Link */}
                <Link 
                    href="/appointment"
                    className="px-4 lg:px-5 py-2 bg-[#2469FD] text-white rounded-[30px] text-lg 
                    hover:bg-white hover:text-[#2469FD] transition-all duration-300 ease-in-out inline-block"
                >
                    Book Now
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
