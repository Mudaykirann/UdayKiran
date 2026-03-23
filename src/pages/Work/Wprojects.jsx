import { FaReact, FaNodeJs, FaJs, FaCss3Alt, FaHtml5, FaGithubSquare } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import "/src/index.css";
import {
    SiMongodb,
    SiTailwindcss,
    SiFirebase,
    SiClerk,
    SiExpress,
    SiSupabase,
    SiTypescript,
    SiJavascript,
    SiVite,
    SiWebauthn,
    SiRedux,
    SiFramer,
    SiCss3,
    SiSwiper,
    SiReactrouter, SiLucide, SiCanva, SiCssmodules,
} from "react-icons/si";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { FaLink } from "react-icons/fa6";


const projects = [
    {
        title: "ProTrack – DSA Problem Tracker",
        category: "FullStack",
        description:
            "A real-time tracker for LeetCode/DSA progress with issue logging, topic categorization, progress analytics, and favorites.",
        features: [
            "Progressive analytics",
            "Topic-wise and difficulty categorization",
            "Issue logging & resolution system",
            "Search functionality",
        ],
        techStack: [
            { name: "React", icon: <FaReact className="text-cyan-500" size={20} /> },
            { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" size={20} /> },
            { name: "Clerk", icon: <SiClerk className="text-teal-500" size={20} /> },
        ],
        github: "https://github.com/Mudaykirann/ProTracker",
        live: "https://pro-tracker-six.vercel.app/",
        img: "/works/1.png",
    },
    {
        title: "Link Vault - Link Management App",
        category: "FullStack",
        description:
            "A FullStack  app to organize and manage links with categories, search, and quick access.",
        features: [
            "Supabase Authentication",
            "CRUD operations",
            "Smart Search Filter",
            "One-click CSV backup & restore",
        ],
        techStack: [
            { name: "React", icon: <FaReact className="text-sky-400" size={20} /> },
            { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" size={20} /> },
            { name: "Node.js", icon: <FaNodeJs className="text-green-600" size={20} /> },
            { name: "Express.js", icon: <SiExpress className="text-gray-700" size={20} /> },
            { name: "Supabase", icon: <SiSupabase className="text-green-500" size={20} /> },
        ],
        github: "https://securevault1.netlify.app/",
        live: "https://link-vault-7tf4.vercel.app/",
        img: "/works/2.png",
    },
    {
        title: "SecureVault - A Password Manager",
        category: "Productivity",
        description:
            "A modern, client-side password manager with zero-knowledge architecture ensuring complete  security of user data.",
        features: [
            "Master password Security",
            "Complete Password Management (CRUD)",
            "Advanced Filtering & Smart Search",
            "Secure Password Generator",
        ],
        techStack: [
            { name: "React", icon: <FaReact className="text-sky-400" size={22} /> },
            { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" size={22} /> },
            { name: "Web Crypto API", icon: <SiWebauthn className="text-yellow-500" size={22} /> },
        ],
        github: "https://github.com/Mudaykirann/SecureVault",
        live: "https://securevault1.netlify.app/",
        img: "/works/8.png",
    },
    {
        title: "Todo App - Task Management Application",
        category: "Frontend",
        description:
            "A feature-rich task management application designed with a clean and responsive UI for productivity.",
        features: [
            "CRUD with title, status, and due date",
            "Filter tasks by status",
            "Search tasks by title or keywords",
        ],
        techStack: [
            { name: "React", icon: <FaReact className="text-sky-400" size={22} /> },
            { name: "Redux Toolkit", icon: <SiRedux className="text-purple-600" size={22} /> },
            { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" size={22} /> },
            { name: "Date API", icon: <FaRegCalendarAlt className="text-gray-600" size={22} /> },
        ],
        github: "https://github.com/Mudaykirann/Brand_Kiln_Todo",
        live: "https://brand-kiln-todo.vercel.app/",
        img: "/works/3.png",
    },

    {
        title: "Good Food Recipe App",
        category: "Frontend",
        description:
            "An interactive recipe discovery app that lets users explore, search, and prepare delicious meals with step-by-step instructions.",
        features: [
            "Explore a diverse collection of recipes",
            "Detailed step-by-step cooking instructions",
            "Comprehensive ingredient lists",
            "Search functionality to quickly find recipes",
        ],
        techStack: [
            { name: "React", icon: <FaReact className="text-sky-400" size={22} /> },
            { name: "CSS3", icon: <SiCss3 className="text-blue-500" size={22} /> },
            { name: "MealDB API", icon: <MdOutlineRestaurantMenu className="text-red-500" size={22} /> },
        ],
        github: "https://github.com/yourusername/good-food-recipe-app",
        live: "https://goodfood01.netlify.app",
        img: "/works/6.png",
    },
    {
        title: "SpeedTyping - Typing Speed Test",
        category: "Frontend",
        description:
            "A modern and interactive typing speed test that improve their typing speed with real-time feedback and detailed statistics.",
        features: [
            "Multiple test durations",
            "Real-time WPMcalculation",
            "Accuracy tracking ",
            "Error highlighting while typing",
        ],
        techStack: [
            { name: "React", icon: <FaReact className="text-sky-400" size={22} /> },
            { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" size={22} /> }
        ],
        github: "https://github.com/yourusername/typing-speed-test",
        live: "https://typingspeed-demo.netlify.app",
        img: "/works/7.png",
    },
    {
        title: "SubSafe - Subscription Tracker",
        category: "Productivity",
        description:
            "A premium subscription tracking app that helps you monitor monthly spend, get renewal alerts, and cancel what you don't need with AI-powered assistance.",
        features: [
            "Dashboard with monthly & yearly burn stats",
            "Renewal alerts with urgency badges",
            "Spending analytics & category breakdown",
            "AI-powered cancellation email generator",
        ],
        techStack: [
            { name: "React", icon: <FaReact className="text-sky-400" size={22} /> }
        ],
        github: "https://github.com/Mudaykirann/SubSafe",
        live: "https://sub-safe-brown.vercel.app/",
        img: "/works/subsafe.png",
    },
    {
        title: "GitHub Profile Analyzer",
        category: "Tools",
        description:
            "A developer analytics dashboard that allows users to analyze any GitHub profile by entering a username. It displays language usage, contribution insights, and top projects using data fetched from the GitHub API.",
        features: [
            "View profile stats like followers, repositories",
            "Top repositories sorted by stars and popularity",
            "Language usage visualized with charts",
            "Repository search and filtering",
        ],
        techStack: [
            { name: "React", icon: <FaReact className="text-sky-400" size={22} /> },
            { name: "GitHub API", icon: <FaGithubSquare className="text-gray-300" size={22} /> },
        ],
        github: "https://github.com/Mudaykirann/Github-Profile-Analyzer-",
        live: "https://github-profile-analyzer-opal.vercel.app/",
        img: "/works/gitprofileanalyser.png",
    },
    {
        title: "LineBeat - A Fitness Camp Website",
        category: "Frontend",
        description:
            "A responsive and engaging GYM website designed to showcase fitness services with a modern, colorful UI and smooth navigation.",
        features: [
            "Responsive design with colorful theme",
            "Interactive navigation menu",
            "Detailed service offerings section",
            "Integrated contact form",
        ],
        techStack: [
            { name: "React", icon: <FaReact className="text-sky-400" size={22} /> },
            { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-500" size={22} /> },
            { name: "SwiperJS", icon: <SiSwiper className="text-pink-500" size={22} /> },
        ],
        github: "https://github.com/Mudaykirann/GYM_WEBSITE",
        live: "https://line-beat-camp.vercel.app/",
        img: "/works/5.png",
    },

    {
        title: "PromptCrafter – AI Prompt Workflow Tool",
        category: "Tools",
        description:
            "A lightweight web app for crafting, organizing, and reusing high-quality AI prompts.",
        features: [
            "TypeScript-first architecture with strict typings",
            "CSS Modules for locally scoped styling",
            "Zero-backend setup for quick prototyping",
            "Modular prompt components for reusability",
        ],
        techStack: [
            { name: "TypeScript", icon: <SiTypescript className="text-blue-600" size={22} /> },
            { name: "React", icon: <FaReact className="text-sky-400" size={22} /> },
            { name: "CSS Modules", icon: <SiCssmodules className="text-indigo-500" size={22} /> }
        ],
        github: "https://github.com/Mudaykirann/PromptCrafter",
        live: "https://prompt-crafter-eight.vercel.app/",
        img: "/works/4.png",
    },
    {
        title: "Notes App – Local Storage Based",
        category: "Frontend",
        description:
            "A simple yet effective notes-taking application with full CRUD functionality.",
        features: [
            "CRUD operations performance",
            "Data storage using Local Storage",
            "Minimal and responsive UI",
            "Lightweight and fast",
        ],
        techStack: [
            { name: "HTML", icon: <FaHtml5 className="text-orange-500" size={22} /> },
            { name: "CSS", icon: <FaCss3Alt className="text-blue-500" size={22} /> },
            { name: "JavaScript", icon: <FaJs className="text-yellow-400" size={22} /> },
        ],
        github: "https://github.com/Mudaykirann/Notes-App",
        live: "https://notes-app-demo.vercel.app",
        img: "/works/9.png",
    }

];

const tabs = [
    "All",
    "FullStack",
    "Frontend",
    "Tools",
    "Security",
    "Productivity"
];



function Wprojects() {

    const [activeTab, setActiveTab] = useState("All");

    const filteredProjects =
        activeTab === "All"
            ? projects
            : projects.filter((p) => p.category === activeTab);
    return (
        <div>

            {/* TABS */}
            <div className="flex justify-center mb-12 px-4">
                <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-6 py-3 justify-center w-full">

                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`relative font-medium py-2 px-3 sm:px-4 border rounded shadow text-xs sm:text-sm md:text-base lg:text-lg clash transition-all duration-500 ${activeTab === tab
                                ? "bg-black text-white border-black"
                                : "bg-white text-gray-800 border-gray-400 hover:bg-black hover:text-white"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}

                </div>
            </div>
            <section className="w-full py-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 md:px-6 lg:px-0">
                    {filteredProjects.map((project, i) => (
                        <motion.div
                            key={i}
                            className="relative flex flex-col h-full bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.3 }}
                        >
                            {/* Image */}
                            <div className="overflow-hidden rounded-t-lg h-48">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer"
                                />
                            </div>

                            {/* Text Content */}
                            <div className="flex flex-col flex-grow p-5 gap-4">
                                {/* Title */}
                                <h3 className="font-bold clash text-lg line-clamp-2 text-black">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="rubik text-sm text-gray-700 leading-relaxed line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Features */}
                                <div className="space-y-1">
                                    {project.features.slice(0, 3).map((feature, index) => (
                                        <li key={index} className="text-xs rubik text-gray-600 list-disc ml-3">
                                            {feature}
                                        </li>
                                    ))}
                                </div>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mt-auto pt-3">
                                    {project.techStack.map((tech, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded text-xs"
                                            title={tech.name}
                                        >
                                            {tech.icon}
                                        </div>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex items-center justify-between gap-3 pt-4 border-t border-gray-200">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="clash text-sm font-medium text-black hover:underline transition-all"
                                    >
                                        GitHub
                                    </a>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="clash text-sm font-medium text-black hover:underline transition-all"
                                    >
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    )
}
export default Wprojects;

