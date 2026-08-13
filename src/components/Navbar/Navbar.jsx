import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import './Navbar.css';
import { FaDownload } from "react-icons/fa";

function Navbar() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { path: "/", label: "HOME" },
        { path: "/about", label: "ABOUT" },
        { path: "/work", label: "WORK" },
        { path: "/blog", label: "BLOG" },
        { path: "/contact", label: "CONTACT" },
    ];

    return (
        <div className="z-1000">
            <header
                className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
                    scrolled
                        ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm'
                        : 'bg-white'
                }`}
            >
                <div className="container mx-auto flex items-center justify-between px-6 md:px-12 lg:px-48 py-4">
                    <Link to="/">
                        <div className="text-2xl uday md:text-3xl font-bold tracking-wide">
                            UDAY KIRAN
                        </div>
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-6 lg:gap-10">
                        <ul className="flex gap-6 lg:gap-10 font-[400]">
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <NavLink
                                        to={link.path}
                                        className={({ isActive }) =>
                                            `hover:underline underline-offset-4 decoration-1 decoration-black transition-all duration-300 text-sm lg:text-base ${
                                                isActive
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

                        {/* Resume CTA */}
                        <a
                            href="/Mangala_Uday_Kiran_Resume.pdf"
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 border border-black px-4 py-1.5 text-xs clash font-bold hover:bg-black hover:text-white transition-all duration-300"
                        >
                            <FaDownload size={11} />
                            RESUME
                        </a>
                    </nav>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden flex flex-col gap-1 z-50 cursor-pointer"
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMobileOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                        <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMobileOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                    </button>
                </div>

                {/* Mobile full-screen menu */}
                <div
                    className={`fixed inset-0 bg-white flex flex-col items-center justify-center gap-8 text-xl font-[400] transform transition-transform duration-500 ease-in-out ${
                        isMobileOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                `hover:underline underline-offset-4 decoration-1 decoration-black transition-all duration-300 mobile-nav-link ${
                                    isActive
                                        ? "underline underline-offset-4 decoration-1 decoration-black"
                                        : "text-black"
                                }`
                            }
                            onClick={() => setIsMobileOpen(false)}
                        >
                            {link.label}
                        </NavLink>
                    ))}

                    {/* Resume in mobile menu */}
                    <a
                        href="/Mangala_Uday_Kiran_Resume.pdf"
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMobileOpen(false)}
                        className="flex items-center gap-2 border-2 border-black px-6 py-2.5 clash font-bold text-base hover:bg-black hover:text-white transition-all duration-300"
                    >
                        <FaDownload size={14} />
                        RESUME
                    </a>
                </div>
            </header>
        </div>
    );
}

export default Navbar;
