"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link"; // ✅ Ensure Link is imported

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMenuOpen(false);
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
                    <button 
                        onClick={() => scrollToSection('insurance')} 
                        className="hover:text-black transition"
                    >
                        Insurance
                    </button>
                </li>
                <li>
                    <button 
                        onClick={() => scrollToSection('services')} 
                        className="hover:text-black transition"
                    >
                        Services
                    </button>
                </li>
                <li><Link href="/patients" className="hover:text-black transition">Patients</Link></li>
                <li><Link href="/gallery" className="hover:text-black transition">Smile Gallery</Link></li>
            </ul>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-[#2469FD]" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
            </button>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-[70px] left-0 w-full bg-white md:hidden flex flex-col items-center space-y-4 py-4 transition-all duration-300">
                    <button 
                        onClick={() => scrollToSection('insurance')} 
                        className="text-[#2469FD] text-[20px] font-inter hover:text-black"
                    >
                        Insurance
                    </button>
                    <button 
                        onClick={() => scrollToSection('services')} 
                        className="text-[#2469FD] text-[20px] font-inter hover:text-black"
                    >
                        Services
                    </button>
                    <Link href="/patients" className="text-[#2469FD] text-[20px] font-inter hover:text-black" onClick={() => setMenuOpen(false)}>
                        Patients
                    </Link>
                    <Link href="/gallery" className="text-[#2469FD] text-[20px] font-inter hover:text-black" onClick={() => setMenuOpen(false)}>
                        Smile Gallery
                    </Link>
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
