import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from 'react-hot-toast';


function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        const serviceID = "service_qyaugqo";
        const templateID = "template_rg4jha8";
        const publicKey = "O0vF8WcbmDyvL9HLO";

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: "Uday Kiran",
            message: message,
        };

        emailjs.send(serviceID, templateID, templateParams, publicKey).then(
            (res) => {
                console.log("EmailJS Success:", res.status, res.text);
                setName("");
                setEmail("");
                setMessage("");
                toast.success("Message sent successfully!");
            },
            (error) => {
                toast.error("Failed to send message. Try again.");
                console.error("EmailJS Error:", error);
            }
        );
    };

    return (
        <div className="w-full px-6 py-24">
            <div className="min-h-screen bg-white text-black flex items-start justify-center px-8 py-16">
                <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16">

                    <div className="space-y-6">
                        <h1 className="text-3xl clash font-medium leading-snug">
                            Let’s connect to share knowledge <br />
                            and grow together in tech.
                        </h1>

                        <div className="space-y-4 text-sm leading-relaxed">
                            <p className="font-semibold">A note for students entering tech:</p>
                            <p>
                                Breaking into technology can feel overwhelming at first — so many
                                tools, frameworks, and buzzwords! My advice: focus on the
                                fundamentals, build projects consistently, and stay curious.
                                Remember, it’s not about learning everything at once, but about{" "}
                                <span className="font-medium">solving problems step by step</span>.
                            </p>
                            <p>Here are a few useful resources to guide you along your journey:</p>
                        </div>

                        <div className="space-y-4 text-sm">
                            <div>
                                <p className="font-medium clash">Learning & Practice Platforms:</p>
                                <ul className="list-disc list-inside space-y-1 mt-2">
                                    <li>
                                        <a href="https://leetcode.com/" className="text-blue-600 hover:underline">
                                            LeetCode
                                        </a>{" "}
                                        – Practice DSA and coding problems
                                    </li>
                                    <li>
                                        <a href="https://www.freecodecamp.org/" className="text-blue-600 hover:underline">
                                            FreeCodeCamp
                                        </a>{" "}
                                        – Hands-on tutorials for web development
                                    </li>
                                    <li>
                                        <a href="https://roadmap.sh/" className="text-blue-600 hover:underline">
                                            Roadmap.sh
                                        </a>{" "}
                                        – Step-by-step developer roadmaps
                                    </li>
                                    <li>
                                        <a href="https://cs50.harvard.edu/x/" className="text-blue-600 hover:underline">
                                            Harvard CS50
                                        </a>{" "}
                                        – A strong foundation in computer science
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <p className="font-medium clash">Career Development:</p>
                                <ul className="list-disc list-inside space-y-1 mt-2">
                                    <li>
                                        <a href="https://www.linkedin.com/learning/" className="text-blue-600 hover:underline">
                                            LinkedIn Learning
                                        </a>{" "}
                                        – Professional courses
                                    </li>
                                    <li>
                                        <a href="https://github.com/ossu/computer-science" className="text-blue-600 hover:underline">
                                            OSSU Computer Science
                                        </a>{" "}
                                        – Open-source self-taught CS degree
                                    </li>
                                    <li>
                                        <a href="https://interviewing.io/" className="text-blue-600 hover:underline">
                                            Interviewing.io
                                        </a>{" "}
                                        – Mock technical interviews
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div>
                        <form onSubmit={sendEmail} className="space-y-6 rubik">
                            <div>
                                <label className="block text-sm mb-1">Name*</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Your Name"
                                    required
                                    className="w-full bg-gray-100 px-4 py-3 text-sm outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm mb-1">Email*</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="name@email.com"
                                    required
                                    className="w-full bg-gray-100 px-4 py-3 text-sm outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm mb-1">Message*</label>
                                <textarea
                                    name="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Start typing your message here..."
                                    rows={6}
                                    required
                                    className="w-full bg-gray-100 px-4 py-3 text-sm outline-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="border border-black px-8 py-3 text-sm font-medium hover:bg-black hover:text-white transition"
                            >
                                SEND
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
