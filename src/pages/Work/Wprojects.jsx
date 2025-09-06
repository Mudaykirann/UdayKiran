import { FaReact, FaNodeJs, FaJs, FaCss3Alt, FaHtml5, FaGithubSquare } from "react-icons/fa";
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
    SiReactrouter, SiLucide, SiCanva, SiCssmodules
} from "react-icons/si";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { FaLink } from "react-icons/fa6";


const projects = [
    {
        title: "ProTrack – DSA Problem Tracker",
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
        img: "/public/works/1.png",
    },
    {
        title: "Link Vault - Link Management App",
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
        img: "/public/works/2.png",
    },
    {
        title: "SecureVault - A Password Manager",
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
        img: "/public/works/8.png",
    },
    {
        title: "Todo App - Task Management Application",
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
        img: "/public/works/3.png",
    },

    {
        title: "Good Food Recipe App",
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
        img: "/public/works/6.png",
    },
    {
        title: "SpeedTyping - Typing Speed Test",
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
        img: "/public/works/7.png",
    },
    {
        title: "LineBeat - A Fitness Camp Website",
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
        img: "/public/works/5.png",
    },

    {
        title: "PromptCrafter – AI Prompt Workflow Tool",
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
        img: "/public/works/4.png",
    },
    {
        title: "Notes App – Local Storage Based",
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
        img: "/public/works/9.png",
    }

];


function Wprojects() {
    return (
        <div>
            <section className="w-full py-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {projects.map((project, i) => (
                        <div key={i} className="relative flex flex-col py-8">
                            {/* Image */}
                            <div className="overflow-hidden ">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
                                />
                            </div>

                            {/* Text Content */}
                            <div className="mt-2 overflow-auto bg-[#f1f1f1] p-4 h-[352px] md:h-[464px] lg:h-[396px]">
                                <h3 className="font-bold clash text-lg md:text-xl mb-3">
                                    {project.title}
                                </h3>
                                <p className="rubik text-sm md:text-base text-gray-800 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="features py-4">
                                    {project.features.map((feature, index) => (
                                        <li key={index} className="text-sm md:text-base rubik text-gray-800 leading-relaxed list-style-disc ml-3">
                                            {feature}
                                        </li>
                                    ))}
                                </div>
                                <div className="flex flex-wrap items-center space-y-1 my-1">
                                    {project.techStack.map((tech, i) => (
                                        <div key={i} className="flex items-center space-x-2 px-2 py-1">
                                            {tech.icon}
                                            <span className="text-sm clash font-medium">{tech.name}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="links flex items-center justify-between px-2 gap-2">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-3 clash inline-block font-medium underline underline-offset-2"
                                    >
                                        Github
                                    </a>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-3 clash inline-block font-medium underline underline-offset-2"
                                    >
                                        Live
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
export default Wprojects;

