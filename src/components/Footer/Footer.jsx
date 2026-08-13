import { Link } from "react-router-dom";
import { FaLinkedin, FaGithubSquare, FaWhatsappSquare, FaArrowUp } from "react-icons/fa";

const navLinks = [
    { path: "/", label: "HOME" },
    { path: "/about", label: "ABOUT" },
    { path: "/work", label: "WORK" },
    { path: "/blog", label: "BLOG" },
    { path: "/contact", label: "CONTACT" },
];

export default function Footer() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#e8e8e8] text-black pt-16 pb-8 px-8">
            <div className="max-w-7xl mx-auto">

                {/* ── Top row: Logo + Nav + Social ── */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 pb-10 border-b border-gray-300">

                    {/* Left: Name + tagline */}
                    <div>
                        <p className="clash font-bold text-2xl tracking-wide">UDAY KIRAN</p>
                        <p className="rubik text-sm text-gray-500 mt-1">Full Stack Developer · Hyderabad, India</p>
                    </div>

                    {/* Center: Nav links */}
                    <nav>
                        <ul className="flex flex-wrap gap-4 sm:gap-6 rubik font-[400] text-sm">
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="hover:underline underline-offset-4 decoration-black transition-all duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Right: Social icons */}
                    <div className="flex gap-4">
                        <a
                            href="https://www.linkedin.com/in/uday-kiran-mangala-a0105b228/"
                            target="_blank" rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="opacity-70 hover:opacity-100 transition"
                        >
                            <FaLinkedin size={22} />
                        </a>
                        <a
                            href="https://github.com/Mudaykirann"
                            target="_blank" rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="opacity-70 hover:opacity-100 transition"
                        >
                            <FaGithubSquare size={22} />
                        </a>
                        <a
                            href="https://wa.me/916301244145"
                            target="_blank" rel="noopener noreferrer"
                            aria-label="WhatsApp"
                            className="opacity-70 hover:opacity-100 transition"
                        >
                            <FaWhatsappSquare size={22} />
                        </a>
                    </div>
                </div>

                {/* ── Bottom row: Copyright + Back to top ── */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
                    <p className="rubik text-xs sm:text-sm text-gray-500">
                        © 2025 Uday Kiran. All rights reserved. &nbsp;·&nbsp; Designed &amp; Built by Uday Kiran.
                    </p>

                    {/* Back to top */}
                    <button
                        onClick={scrollToTop}
                        aria-label="Back to top"
                        className="flex items-center gap-2 clash text-xs font-semibold border border-black px-4 py-2 hover:bg-black hover:text-white transition-all duration-300"
                    >
                        <FaArrowUp size={11} />
                        BACK TO TOP
                    </button>
                </div>

            </div>
        </footer>
    );
}
