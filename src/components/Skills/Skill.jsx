import { motion } from 'framer-motion';
import {
    FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
    FaGitAlt, FaGithub, FaFigma
} from "react-icons/fa";
import {
    SiTailwindcss, SiMysql, SiPostman, SiJsonwebtokens,
    SiFirebase, SiVercel, SiNetlify, SiCanva, SiOracle,
    SiC, SiHibernate, SiSpringboot
} from "react-icons/si";
import { BiCodeCurly } from "react-icons/bi";
import { FiKey } from "react-icons/fi";

/* ─── Skill categories ─── */
const categories = [
    {
        label: "Frontend",
        skills: [
            { name: "HTML",        icon: <FaHtml5       size={22} className="text-orange-500" /> },
            { name: "CSS",         icon: <FaCss3Alt     size={22} className="text-blue-500"   /> },
            { name: "TailwindCSS", icon: <SiTailwindcss size={22} className="text-sky-400"    /> },
            { name: "JavaScript",  icon: <FaJs          size={22} className="text-yellow-400" /> },
            { name: "React",       icon: <FaReact       size={22} className="text-cyan-400"   /> },
            { name: "Figma",       icon: <FaFigma       size={22} className="text-pink-500"   /> },
            { name: "Canva",       icon: <SiCanva       size={22} className="text-sky-600"    /> },
        ],
    },
    {
        label: "Backend",
        skills: [
            { name: "NodeJS",     icon: <FaNodeJs      size={22} className="text-green-600"  /> },
            { name: "Java",       icon: <FaJava        size={22} className="text-red-600"    /> },
            { name: "Hibernate",  icon: <SiHibernate   size={22} className="text-green-700"  /> },
            { name: "Springboot", icon: <SiSpringboot  size={22} className="text-green-600"  /> },
            { name: "C",          icon: <SiC           size={22} className="text-blue-600"   /> },
            { name: "REST API",   icon: <BiCodeCurly   size={22} className="text-indigo-600" /> },
            { name: "JWT",        icon: <SiJsonwebtokens size={22} className="text-purple-500" /> },
            { name: "Clerk",      icon: <FiKey         size={22} className="text-teal-500"   /> },
            { name: "Firebase",   icon: <SiFirebase    size={22} className="text-yellow-500" /> },
        ],
    },
    {
        label: "Database",
        skills: [
            { name: "MySQL",      icon: <SiMysql       size={22} className="text-blue-700"   /> },
            { name: "Oracle SQL", icon: <SiOracle      size={22} className="text-red-700"    /> },
        ],
    },
    {
        label: "Tools & DevOps",
        skills: [
            { name: "Git",     icon: <FaGitAlt  size={22} className="text-orange-600" /> },
            { name: "GitHub",  icon: <FaGithub  size={22} className="text-black"      /> },
            { name: "Postman", icon: <SiPostman size={22} className="text-orange-500" /> },
            { name: "Vercel",  icon: <SiVercel  size={22} className="text-black"      /> },
            { name: "Netlify", icon: <SiNetlify size={22} className="text-cyan-600"   /> },
        ],
    },
];

export default function Skills() {
    return (
        <section className="w-full bg-white py-8">
            <div className="max-w-5xl mx-auto px-6 space-y-10">
                {categories.map((cat, ci) => (
                    <motion.div
                        key={cat.label}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: ci * 0.08 }}
                    >
                        {/* Category label */}
                        <p className="clash font-semibold text-xs text-gray-400 uppercase tracking-[0.2em] mb-4">
                            {cat.label}
                        </p>

                        {/* Skill chips */}
                        <div className="flex flex-wrap gap-3">
                            {cat.skills.map((skill, si) => (
                                <motion.div
                                    key={skill.name}
                                    className="flex items-center gap-2 bg-[#f5f5f5] border border-gray-200 px-3 py-2 hover:border-gray-400 hover:bg-white transition-all duration-200 cursor-default"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: ci * 0.06 + si * 0.04 }}
                                    whileHover={{ y: -2 }}
                                >
                                    <span>{skill.icon}</span>
                                    <p className="clash text-sm font-medium text-gray-800">{skill.name}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
