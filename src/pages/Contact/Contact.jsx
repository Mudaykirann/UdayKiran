import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from 'react-hot-toast';


function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const sendEmail = async (e) => {
        e.preventDefault();

        if (isLoading) return; // Prevent double submission

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

                    <div className="space-y-4 sm:space-y-6 order-2 md:order-1 mt-8 md:mt-0">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl clash font-bold leading-snug text-black">
                            Let's connect to share knowledge <br />
                            and grow together in tech.
                        </h1>

                        <div className="space-y-3 sm:space-y-4 rubik text-xs sm:text-sm md:text-base leading-relaxed text-gray-700">
                            <p className="text-sm sm:text-base font-bold clash text-gray-900">A note for students entering tech:</p>
                            <p>
                                Breaking into technology can feel overwhelming at first — so many
                                tools, frameworks, and buzzwords! My advice: focus on the
                                fundamentals, build projects consistently, and stay curious.
                                Remember, it’s not about learning everything at once, but about{" "}
                                <span className="font-medium">solving problems step by step</span>.
                            </p>
                            <p>Here are a few useful resources to guide you along your journey:</p>
                        </div>

                        <div className="space-y-3 sm:space-y-4 rubik text-xs sm:text-sm md:text-base text-gray-700">
                            <div>
                                <p className="text-sm sm:text-base font-bold clash text-gray-900">Learning & Practice Platforms:</p>
                                <ul className="list-disc list-inside space-y-1 sm:space-y-2 mt-2">
                                    <li>
                                        <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                                            LeetCode
                                        </a>{" "}
                                        – Practice DSA and coding problems
                                    </li>
                                    <li>
                                        <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                                            FreeCodeCamp
                                        </a>{" "}
                                        – Hands-on tutorials for web development
                                    </li>
                                    <li>
                                        <a href="https://roadmap.sh/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                                            Roadmap.sh
                                        </a>{" "}
                                        – Step-by-step developer roadmaps
                                    </li>
                                    <li>
                                        <a href="https://cs50.harvard.edu/x/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                                            Harvard CS50
                                        </a>{" "}
                                        – A strong foundation in computer science
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <p className="text-sm sm:text-base font-bold clash text-gray-900">Career Development:</p>
                                <ul className="list-disc list-inside space-y-1 sm:space-y-2 mt-2">
                                    <li>
                                        <a href="https://www.linkedin.com/learning/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                                            LinkedIn Learning
                                        </a>{" "}
                                        – Professional courses
                                    </li>
                                    <li>
                                        <a href="https://github.com/ossu/computer-science" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                                            OSSU Computer Science
                                        </a>{" "}
                                        – Open-source self-taught CS degree
                                    </li>
                                    <li>
                                        <a href="https://interviewing.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                                            Interviewing.io
                                        </a>{" "}
                                        – Mock technical interviews
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 md:order-2">
                        <form onSubmit={sendEmail} className="space-y-4 sm:space-y-5 rubik sticky top-20 md:top-0 md:sticky">
                            <div>
                                <label className="block text-xs sm:text-sm font-semibold clash text-gray-900 mb-2">Name<span className="text-red-500">*</span></label>
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
                                <label className="block text-xs sm:text-sm font-semibold clash text-gray-900 mb-2">Email<span className="text-red-500">*</span></label>
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
                                <label className="block text-xs sm:text-sm font-semibold clash text-gray-900 mb-2">Message<span className="text-red-500">*</span></label>
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
                                className={`w-full border-2 border-black px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm font-bold clash transition-all duration-300 rounded ${isLoading
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
