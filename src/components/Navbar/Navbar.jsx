import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const navLinks = [
        { path: "/", label: "HOME" },
        { path: "/about", label: "ABOUT" },
        { path: "/work", label: "WORK" },
        { path: "/blog", label: "BLOG" },
        { path: "/contact", label: "CONTACT" },
    ];

    return (
        <div className="z-1000">
            <header className="w-full fixed top-0 left-0  bg-white z-50  ">
                <div className="container mx-auto flex items-center justify-between px-6 md:px-12 lg:px-48 py-5">
                    <Link to="/">
                        <div className="text-2xl uday md:text-3xl font-bold tracking-wide">
                            UDAY KIRAN
                        </div>
                    </Link>

                    <nav className="hidden md:block">
                        <ul className="flex gap-6 lg:gap-12 font-[400]">
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <NavLink
                                        to={link.path}
                                        className={({ isActive }) =>
                                            `hover:underline underline-offset-4 decoration-1 decoration-black transition-all duration-300 ${isActive
                                                ? "underline underline-offset-4 decoration-1 decoration-black"
                                                : "text-black"
                                            }`
                                        }
                                    >
                                        {link.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <button
                        className="md:hidden flex flex-col gap-1 z-50 cursor-pointer"
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        <span
                            className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMobileOpen ? "rotate-45 translate-y-2" : ""
                                }`}
                        ></span>
                        <span
                            className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMobileOpen ? "-rotate-45 -translate-y-2" : ""
                                }`}
                        ></span>
                    </button>
                </div>

                <div
                    className={`fixed inset-0  bg-white flex flex-col items-center justify-center gap-8 text-xl font-[400] transform transition-transform duration-500 ease-in-out ${isMobileOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                `hover:underline underline-offset-4 decoration-1 decoration-black transition-all duration-300 mobile-nav-link ${isActive
                                    ? "underline underline-offset-4 decoration-1 decoration-black"
                                    : "text-black"
                                }`
                            }
                            onClick={() => setIsMobileOpen(false)}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>
            </header>
        </div>
    );
}

export default Navbar;
