import React from 'react'
import { Link } from 'react-router-dom';
const projects = [
    {
        title: "ProTrack – DSA Problem Tracker",
        description:
            "A real-time tracker for LeetCode/DSA progress with issue logging, topic categorization, progress analytics, and favorites.",
        img: "/public/works/1.png",
    },
    {
        title: "SecureVault - A Password Manager",
        description:
            "A fully-featured password manager that uses a zero-knowledge architecture to keep your data private and secure, all while running completely client-side.",
        img: "/public/works/8.png",
    },
    {
        title: "Link Vault",
        description:
            "A Next.js app to organize and manage links with categories, search, and quick access — designed for productivity and clean UI experience.",
        img: "/public/works/2.png",
    },
];

function Projects() {
    return (
        <section className="w-full px-6 py-12">
            <h2 className="text-2xl clash lg:mx-24 md:text-3xl font-[500] mb-10">WORK</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {projects.map((project, i) => (
                    <div key={i} className="flex flex-col">

                        <div className="overflow-hidden ">
                            <img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
                            />
                        </div>

                        <div className="mt-8">
                            <h3 className="font-bold clash text-lg md:text-xl mb-3">
                                {project.title}
                            </h3>
                            <p className="rubik text-sm md:text-base text-gray-800 leading-relaxed">
                                {project.description}
                            </p>
                            <Link to={'/work'} className='mt-3 rubik inline-block font-semibold underline underline-offset-2 hover:text-gray-600 transition'>
                                View More
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects
