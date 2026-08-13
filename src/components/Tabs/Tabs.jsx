import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Tabs = () => {
    const [active, setActive] = useState("experience");

    const tabs = [
        { id: "experience",   label: "Experience"   },
        { id: "education",    label: "Education"    },
        { id: "achievements", label: "Achievements" },
    ];

    const tabContent = {
        experience: [
            {
                date: "Apr 2025 – Present",
                title: "Program Analyst Trainee",
                org: "Cognizant Technology Solutions",
                desc: "Working in Application Support — ensuring smooth operation across all stages of the application lifecycle, proactively resolving issues, and maintaining system stability for business-critical applications.",
            },
            {
                date: "Apr 2024 – Jun 2024",
                title: "Web Developer Intern",
                org: "Reachify",
                desc: "Designed & deployed the official company website, enhancing UI/UX, performance, and cross-device responsiveness while contributing to both frontend & backend.",
            },
            {
                date: "Nov 2023 – Jan 2024",
                title: "Web Developer Intern",
                org: "BasketHunt",
                desc: "Developed and maintained responsive web applications, advancing from Intern to Subject Matter Expert (SME) by ensuring code quality, scalability, and best practices across projects.",
            },
        ],
        education: [
            {
                date: "2021 – 2025",
                title: "Bachelor of Technology – Information Technology",
                org: "SVEC, Tirupati",
                desc: "Focused on software engineering, algorithms, and web development. Built multiple academic and personal projects during the program.",
            },
            {
                date: "2019 – 2021",
                title: "Higher Secondary Education",
                org: "Sri Chaitanya Junior College, Vijayawada",
                desc: "Completed schooling with Mathematics and Science as major subjects.",
            },
        ],
        achievements: [
            {
                title: "SFI Exam – 2nd Prize",
                org: "Student Federation of India",
                desc: "Achieved town's second rank in the SFI exam, showcasing academic excellence and problem-solving skills.",
            },
        ],
    };

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-12 bg-white text-black">

            {/* ── Tab Buttons with sliding pill ── */}
            <div className="flex justify-center mb-16">
                <div className="relative flex gap-1 bg-gray-100 p-1 rounded-xl">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActive(tab.id)}
                            className={`relative px-5 py-2 clash text-sm font-medium transition-colors duration-200 rounded-lg z-10 ${
                                active === tab.id ? "text-white" : "text-gray-500 hover:text-black"
                            }`}
                        >
                            {active === tab.id && (
                                <motion.span
                                    layoutId="timeline-pill"
                                    className="absolute inset-0 bg-black rounded-lg"
                                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                                />
                            )}
                            <span className="relative z-10">{tab.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* ── Animated tab content ── */}
            <div className="relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                        {tabContent[active].map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="flex items-start gap-6 mb-10"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                            >
                                {/* Timeline indicator */}
                                <div className="flex flex-col items-center pt-1 flex-shrink-0">
                                    <div className="w-3 h-3 rounded-full bg-black ring-4 ring-gray-100 z-10" />
                                    {idx !== tabContent[active].length - 1 && (
                                        <div className="w-px flex-1 bg-gray-200 mt-2 min-h-[60px]" />
                                    )}
                                </div>

                                {/* Content card */}
                                <div className="flex-1 bg-[#f8f8f8] border border-gray-200 p-5 hover:border-gray-400 transition-colors duration-200">
                                    {item.date && (
                                        <p className="rubik text-xs text-gray-400 mb-1 uppercase tracking-wider">
                                            {item.date}
                                        </p>
                                    )}
                                    <h3 className="clash font-bold text-base md:text-lg text-black leading-snug">
                                        {item.title}
                                    </h3>
                                    {item.org && (
                                        <p className="rubik text-sm text-gray-500 mt-0.5 mb-2">
                                            {item.org}
                                        </p>
                                    )}
                                    <p className="rubik text-sm text-gray-700 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Tabs;
