import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaWhatsappSquare } from "react-icons/fa";


function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const sendEmail = async (e) => {
        e.preventDefault();

        if (isLoading) return;

        setIsLoading(true);

        const serviceID = "service_qyaugqo";
        const templateID = "template_rg4jha8";
        const publicKey = "O0vF8WcbmDyvL9HLO";

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: "Uday Kiran",
            message: message,
        };

        try {
            const res = await emailjs.send(serviceID, templateID, templateParams, publicKey);
            console.log("EmailJS Success:", res.status, res.text);
            setName("");
            setEmail("");
            setMessage("");
            toast.success("Message sent successfully!");
        } catch (error) {
            toast.error("Failed to send message. Try again.");
            console.error("EmailJS Error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full px-4 sm:px-6 py-32 sm:py-16 md:py-24">
            <div className="bg-white text-black flex items-start justify-center">
                <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 auto-rows-max">

                    {/* ── LEFT COLUMN ── */}
                    <motion.div
                        className="space-y-8 order-2 md:order-1 mt-8 md:mt-0"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        {/* Heading */}
                        <div>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl clash font-bold leading-snug text-black">
                                Let's build something<br />great together.
                            </h1>
                            <p className="rubik mt-4 text-gray-600 text-sm sm:text-base leading-relaxed max-w-sm">
                                I'm always open to new opportunities, collaborations, and interesting conversations.
                                Drop a message — I read every one.
                            </p>
                        </div>

                        {/* Location + Response time */}
                        <div className="space-y-3 rubik text-sm sm:text-base">
                            <div className="flex items-center gap-3">
                                <span>📍</span>
                                <span className="text-gray-700">Hyderabad, Telangana, India</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span>⚡</span>
                                <span className="text-gray-700">
                                    Response time: <span className="font-semibold text-black">within 24 hours</span>
                                </span>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-12 h-px bg-gray-300" />

                        {/* Social links */}
                        <div className="space-y-4">
                            <p className="clash font-semibold text-xs text-gray-400 uppercase tracking-widest">
                                Find me on
                            </p>
                            <div className="flex flex-col gap-4">
                                <a
                                    href="https://www.linkedin.com/in/uday-kiran-mangala-a0105b228/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 group"
                                >
                                    <FaLinkedin size={22} className="text-gray-600 group-hover:text-black transition-colors" />
                                    <span className="rubik text-gray-700 group-hover:text-black group-hover:underline underline-offset-2 transition-all text-sm sm:text-base">
                                        LinkedIn — Uday Kiran Mangala
                                    </span>
                                </a>
                                <a
                                    href="https://github.com/Mudaykirann"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 group"
                                >
                                    <FaGithub size={22} className="text-gray-600 group-hover:text-black transition-colors" />
                                    <span className="rubik text-gray-700 group-hover:text-black group-hover:underline underline-offset-2 transition-all text-sm sm:text-base">
                                        GitHub — Mudaykirann
                                    </span>
                                </a>
                                <a
                                    href="https://wa.me/916301244145"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 group"
                                >
                                    <FaWhatsappSquare size={22} className="text-gray-600 group-hover:text-black transition-colors" />
                                    <span className="rubik text-gray-700 group-hover:text-black group-hover:underline underline-offset-2 transition-all text-sm sm:text-base">
                                        WhatsApp — Chat directly
                                    </span>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* ── RIGHT COLUMN — Contact Form ── */}
                    <div className="order-1 md:order-2">
                        <form onSubmit={sendEmail} className="space-y-4 sm:space-y-5 rubik sticky top-20 md:top-0 md:sticky">
                            <div>
                                <label className="block text-xs sm:text-sm font-semibold clash text-gray-900 mb-2">
                                    Name<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="user_name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Your Name"
                                    required
                                    disabled={isLoading}
                                    className="w-full bg-gray-50 border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm outline-none rounded transition hover:bg-gray-100 focus:border-black focus:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                                />
                            </div>

                            <div>
                                <label className="block text-xs sm:text-sm font-semibold clash text-gray-900 mb-2">
                                    Email<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="user_email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="name@email.com"
                                    required
                                    disabled={isLoading}
                                    className="w-full bg-gray-50 border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm outline-none rounded transition hover:bg-gray-100 focus:border-black focus:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                                />
                            </div>

                            <div>
                                <label className="block text-xs sm:text-sm font-semibold clash text-gray-900 mb-2">
                                    Message<span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    name="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Start typing your message here..."
                                    rows={4}
                                    required
                                    disabled={isLoading}
                                    className="w-full bg-gray-50 border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm outline-none rounded transition hover:bg-gray-100 focus:border-black focus:bg-white resize-none disabled:opacity-50 disabled:cursor-not-allowed sm:min-h-[180px]"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`w-full border-2 border-black px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm font-bold clash transition-all duration-300 rounded ${
                                    isLoading
                                        ? "bg-gray-400 text-white border-gray-400 cursor-not-allowed"
                                        : "bg-white text-black hover:bg-black hover:text-white"
                                }`}
                            >
                                {isLoading ? "SENDING..." : "SEND"}
                            </button>
                        </form>
                    </div>

                </div>

                <Toaster
                    position="top-center"
                    reverseOrder={false}
                    gutter={8}
                    containerClassName=""
                    containerStyle={{}}
                    toasterId="default"
                    toastOptions={{
                        className: '',
                        duration: 5000,
                        removeDelay: 2000,
                        style: {
                            background: '#fff',
                            color: '#000',
                        },
                        success: {
                            duration: 3000,
                            iconTheme: {
                                primary: 'green',
                                secondary: 'white',
                            },
                        },
                    }}
                />
            </div>
        </div>
    );
}

export default Contact;
