import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const projects = [
    {
        title: "ProTrack – DSA Problem Tracker",
        description:
            "A real-time tracker for LeetCode/DSA progress with issue logging, topic categorization, progress analytics, and favorites.",
        img: "/works/1.png",
    },
    {
        title: "SecureVault - A Password Manager",
        description:
            "A fully-featured password manager that uses a zero-knowledge architecture to keep your data private and secure, all while running completely client-side.",
        img: "/works/8.png",
    },
    {
        title: "Link Vault",
        description:
            "A Next.js app to organize and manage links with categories, search, and quick access — designed for productivity and clean UI experience.",
        img: "/works/2.png",
    },
];

function Projects() {
    return (
        <section className="w-full px-6 py-12">
            <motion.h2
                className="text-2xl clash lg:mx-24 md:text-3xl font-[500] mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                WORK
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        className="flex flex-col group"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, delay: i * 0.13 }}
                    >
                        {/* Image with hover overlay */}
                        <div className="overflow-hidden relative">
                            <img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Dark overlay — slides up on hover */}
                            <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Link
                                    to="/work"
                                    className="clash text-white text-sm font-bold border border-white px-5 py-2 hover:bg-white hover:text-black transition-all duration-200"
                                >
                                    VIEW ALL WORK →
                                </Link>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h3 className="font-bold clash text-lg md:text-xl mb-3">
                                {project.title}
                            </h3>
                            <p className="rubik text-sm md:text-base text-gray-800 leading-relaxed">
                                {project.description}
                            </p>
                            <Link
                                to="/work"
                                className="mt-3 rubik inline-block font-semibold underline underline-offset-2 hover:text-gray-600 transition"
                            >
                                View More
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
