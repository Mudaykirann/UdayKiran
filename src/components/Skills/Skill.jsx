// Skills.tsx
import { FaCuttlefish, FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMysql, SiPostgresql, SiPostman, SiJsonwebtokens, SiFirebase, SiVercel, SiNetlify, SiCanva, SiOracle } from "react-icons/si";
import { SiC, SiCplusplus, SiLinux } from "react-icons/si";
import { BiCodeCurly } from "react-icons/bi";
import { FiKey } from "react-icons/fi";

const skills = [
    { name: "C", icon: <SiC size={26} color='' className="text-blue-600" /> },
    { name: "C++", icon: <SiCplusplus size={26} color='' className="text-blue-800" /> },
    { name: "Java", icon: <FaJava size={26} color='' className="text-red-600" /> },
    { name: "HTML", icon: <FaHtml5 size={26} color='' className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt size={26} color='' className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs size={26} color='' className="text-yellow-400" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss size={26} color='' className="text-sky-400" /> },
    { name: "React", icon: <FaReact size={26} color='' className="text-cyan-400" /> },
    { name: "NodeJS", icon: <FaNodeJs size={26} color='' className="text-green-600" /> },
    { name: "ExpressJS", icon: <SiExpress size={26} color='' className="text-gray-700" /> },
    { name: "MySQL", icon: <SiMysql size={26} color='' className="text-blue-700" /> },
    { name: "Oracle SQL", icon: <SiOracle size={26} color='' className="text-red-700" /> },
    { name: "Linux", icon: <SiLinux size={26} color='' className="" /> },
    { name: "REST API", icon: <BiCodeCurly size={26} color='' className="text-indigo-600" /> },
    { name: "Postman", icon: <SiPostman size={26} color='' className="text-orange-500" /> },
    { name: "Git", icon: <FaGitAlt size={26} color='' className="text-orange-600" /> },
    { name: "GitHub", icon: <FaGithub size={26} color='' className="text-black" /> },
    { name: "JWT", icon: <SiJsonwebtokens size={26} color='' className="text-purple-500" /> },
    { name: "Clerk", icon: <FiKey size={26} color='' className="text-teal-500" /> }, // placeholder, Clerk has no react-icon
    { name: "Firebase", icon: <SiFirebase size={26} color='' className="text-yellow-500" /> },
    { name: "Figma", icon: <FaFigma size={26} color='' className="text-pink-500" /> },
    { name: "Canva", icon: <SiCanva size={26} color='' className="text-sky-600" /> },
    { name: "Vercel", icon: <SiVercel size={26} color='' className="text-black" /> },
    { name: "Netlify", icon: <SiNetlify size={26} color='' className="text-cyan-600" /> },
];

export default function Skills() {
    return (
        <section className="w-full bg-white py-12">
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-center ">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-6 cursor-pointer">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex items-center space-x-3 text-gray-700"
                        >
                            <span className="text-2xl">{skill.icon}</span>
                            <p className="text-sm font-medium clash">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
