import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Tabs = () => {
    const [active, setActive] = useState("experience");

    const tabs = [
        { id: "experience", label: "Experience" },
        { id: "education", label: "Education" },
        { id: "achievements", label: "Achievements" },
    ];

    const tabContent = {
        experience: [
            {
                date: "Apr 2025 – Present",
                title: "Program Analyst Trainee – Cognizant",
                desc: "Currently working in Application Support, ensuring smooth operation across all stages of the application lifecycle, proactively resolving issues, and maintaining system stability for business-critical applications.",
            },
            {
                date: "Apr 2024 – Jun 2024",
                title: "Web Developer Intern – Reachify",
                desc: "Designed & deployed the official company website, enhancing UI/UX, performance, and cross-device responsiveness while contributing to both frontend & backend.",
            },
            {
                date: "Nov 2023 – Jan 2024",
                title: "Web Developer Intern – BasketHunt",
                desc: "Developed and maintained responsive web applications, advancing from Intern to Subject Matter Expert (SME) by ensuring code quality, scalability, and best practices across projects.",
            },
        ],
        education: [
            {
                date: "2021 – 2025",
                title: "Bachelor of Technology – IT",
                desc: "Pursued Information Technology in SVEC Tirupathi with a focus on software engineering, algorithms, and web development. Built multiple academic and personal projects.",
            },
            {
                date: "2019 – 2021",
                title: "Higher Secondary Education",
                desc: "Completed schooling with Mathematics and Science as major subjects in Sri Chaitanya Junior College Vijayawada.",
            },
        ],
        achievements: [
            {
                title: "SFI Exam – 2nd Prize",
                desc: "Achieved town’s second rank in the Student Federation of India exam, showcasing academic excellence and problem-solving skills.",
            }

        ],
    };

    return (
        <div className="max-w-4xl mx-auto px-3 sm:px-6 md:px-8 py-12 bg-white text-black">
            {/* Tab Buttons */}
            <div className="flex justify-center mb-16">
                <div className="bg-gray-100 rounded-xl   p-1 flex space-x-1 ">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActive(tab.id)}
                            className={`px-6 py-2 clash rounded-xl text-[14px] font-medium transition-all duration-300
                ${active === tab.id
                                    ? "bg-white text-black"
                                    : "text-gray-600 hover:bg-gray-200"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Animated Tab Content */}
            <div className="relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="space-y-10 relative"
                    >
                        {tabContent[active].map((item, idx) => (
                            <div key={idx} className="flex items-start relative">
                                {/* Dot + Line */}
                                <div className="flex flex-col items-center mt-1 mr-6 relative">
                                    <span className="w-3 h-3 bg-gray-500 rounded-full z-10"></span>
                                    {idx !== tabContent[active].length - 1 && (
                                        <span className="absolute top-3 left-1/2 -translate-x-1/2 w-px h-full"></span>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="pb-4">
                                    {item.date && (
                                        <p className="rubik text-sm text-gray-500 mb-1">
                                            {item.date}
                                        </p>
                                    )}
                                    <h3 className="text-lg clash font-semibold leading-snug">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 rubik text-gray-700 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

        </div>
    );
};

export default Tabs;
