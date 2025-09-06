// Footer.tsx
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithubSquare, FaWhatsappSquare } from "react-icons/fa";


export default function Footer() {
    return (
        <footer className="bg-[#e1e1e1] text-black py-16 px-8">
            <div className="max-w-7xl mx-auto flex flex-row items-center justify-center md:items-center gap-10">
                {/* Left Section */}
                <div className="flex flex-col items-center justify-center">
                    <div className="flex gap-4 mt-4 text-lg sm:text-xl">
                        <a href="https://www.linkedin.com/in/uday-kiran-mangala-a0105b228/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="opacity-80 hover:opacity-100 transition">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="https://github.com/Mudaykirann" target="_blank" rel="noopener noreferrer" aria-label="Github" className="opacity-80 hover:opacity-100  transition">
                            <FaGithubSquare size={24} />
                        </a>
                        <a
                            href="https://wa.me/916301244145"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Chat on WhatsApp"
                            className="opacity-80 hover:opacity-100 transition"
                        >
                            <FaWhatsappSquare size={24} />
                        </a>

                    </div>
                    <p className="rubik mt-3 text-xs sm:text-sm md:text-base italic leading-relaxed max-w-lg">
                        © 2025 Uday Kiran. All rights reserved.
                    </p>
                </div>

                {/* Right Section 
                <div className="rubik flex flex-col text-left md:text-right font-[400] tracking-wide text-sm sm:text-base gap-2 sm:gap-3">
                    <Link to="/" className="hover:opacity-70 transition">HOME</Link>
                    <Link to="/about" className="hover:opacity-70 transition">ABOUT</Link>
                    <Link to="/work" className="hover:opacity-70 transition">WORK</Link>
                    <Link to="/blog" className="hover:opacity-70 transition">BLOG</Link>
                    <Link to="/contact" className="hover:opacity-70 transition">CONTACT</Link>
                </div>
                */}
            </div>
        </footer>
    );
}
