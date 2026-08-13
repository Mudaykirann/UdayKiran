import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import banner2 from '/bg1.jpeg';
import profile from '/my1.jpeg';
import { Link } from 'react-router-dom';
import cts from '/public/cts.png';
import basket from '/Baskethunt.png';
import reachify from '/reachify.png';
import blog from '/blog.jpeg';
import Projects from '../../components/Projects/Projects';

/* ─── Reusable scroll-in wrapper ─── */
const FadeUp = ({ children, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
        {children}
    </motion.div>
);

/* ─── Counting number animation ─── */
function CountUp({ end, suffix = '' }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;
        let current = 0;
        const increment = end / (1200 / 16);
        const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [isInView, end]);

    return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── Stats data ─── */
const stats = [
    { number: 12,  suffix: '+', label: 'Projects Built'    },
    { number: 170, suffix: '+', label: 'DSA Problems'      },
    { number: 3,   suffix: '',  label: 'Internships'        },
    { number: 2,   suffix: '+', label: 'Years Experience'   },
];

/* ─── Coding profile cards ─── */
const profiles = [
    {
        title: "LeetCode",
        description: "Solved 100+ DSA problems, earned badges, and improved problem-solving skills.",
        link: "https://leetcode.com/u/codemaddy18/",
    },
    {
        title: "GeeksforGeeks",
        description: "Practicing DSA and coding challenges to strengthen algorithms and data structures.",
        link: "https://www.geeksforgeeks.org/user/udaykiran001/",
    },
];


function Home() {
    return (
        <div className="w-full">

            {/* ── HERO ── */}
            <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

                {/* Background image */}
                <img
                    src={banner2}
                    alt="Hero background"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/55" />

                {/* Content */}
                <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">

                    {/* Open to Work badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
                        </span>
                        <span className="rubik text-xs text-white font-medium tracking-wide">Open to Opportunities</span>
                    </motion.div>

                    {/* Role tag */}
                    <motion.p
                        className="rubik text-xs sm:text-sm uppercase tracking-[0.25em] text-gray-300 mb-6"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Full Stack Developer &nbsp;·&nbsp; MERN Specialist &nbsp;·&nbsp; Problem Solver
                    </motion.p>

                    {/* Main heading */}
                    <motion.h1
                        className="clash font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] text-white"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.75, delay: 0.35, ease: 'easeOut' }}
                    >
                        Transforming Ideas<br />
                        Into High-Impact<br />
                        <span className="relative inline-block">
                            Digital Solutions.
                            <motion.span
                                className="absolute bottom-0 left-0 h-[3px] bg-white w-full"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 1.1, ease: 'easeOut' }}
                                style={{ originX: 0 }}
                            />
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        className="rubik text-sm sm:text-base md:text-lg text-gray-300 mt-8 max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        Specializing in full stack development and modern frontend solutions,
                        built for performance at scale.
                    </motion.p>

                    {/* CTA buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <Link to="/work">
                            <button className="clash font-bold border-2 border-white text-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300 text-sm">
                                EXPLORE WORK
                            </button>
                        </Link>
                        <a
                            href="/Mangala_Uday_Kiran_Resume.pdf"
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="clash font-bold border-2 border-white/40 text-white/80 px-8 py-3 hover:border-white hover:text-white transition-all duration-300 text-sm"
                        >
                            DOWNLOAD RESUME
                        </a>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 0.8 }}
                >
                    <p className="rubik text-[10px] uppercase tracking-[0.2em] text-white/50">Scroll</p>
                    <motion.div
                        className="w-px h-10 bg-white/40"
                        animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.4, 1, 0.4] }}
                        transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
                        style={{ originY: 0 }}
                    />
                </motion.div>

            </section>

            {/* ── ABOUT SNIPPET ── */}
            <FadeUp delay={0.1}>
                <div className="ab flex flex-col md:flex-row items-center max-w-6xl mx-auto my-20 gap-24 px-6 md:px-12 lg:px-0">
                    <img src={profile} alt="Profile" className="w-auto object-cover" />
                    <div className="ab-text">
                        <p className="rubik font-[400] md:text-4xl py-3 text-3xl lg:text-3xl">ABOUT</p>
                        <p className="clash font-bold pb-3 text-2xl">Hi, I'm Uday — I craft digital solutions that go beyond code.</p>
                        <p className="clash font-bold text-2xl">For me, development isn't just about building apps, it's about building experiences.</p>
                        <Link to="/about">
                            <button className="mt-8 border-2 border-black px-6 py-3 rubik font-bold hover:bg-black hover:text-white transition-all duration-300">
                                SEE MORE
                            </button>
                        </Link>
                    </div>
                </div>
            </FadeUp>

            {/* ── CODING PROFILES ── */}
            <FadeUp>
                <section className="w-full px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        {profiles.map((item, i) => (
                            <div key={i} className="bg-[#F1F1F1] p-6">
                                <h2 className="clash font-semibold text-lg md:text-xl lg:text-2xl underline underline-offset-2 decoration-black mb-3">
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                        {item.title}
                                    </a>
                                </h2>
                                <p className="text-sm md:text-base rubik text-gray-900 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </FadeUp>

            {/* ── STATS STRIP ── */}
            <motion.section
                className="w-full border-y border-gray-200 py-12 px-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            className="flex flex-col items-center gap-2"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <p className="clash font-extrabold text-4xl md:text-5xl text-black">
                                <CountUp end={stat.number} suffix={stat.suffix} />
                            </p>
                            <p className="rubik text-sm text-gray-500 font-medium tracking-wide uppercase">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* ── FEATURED PROJECTS ── */}
            <Projects />

            {/* ── WORKING / ED IN ── */}
            <FadeUp>
                <section className="w-full px-6 py-12">
                    <h2 className="text-2xl clash lg:mx-24 md:text-3xl font-[500] mb-10">WORK-ING/ED IN</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">

                        {/* Cognizant */}
                        <div className="brand flex flex-col items-center gap-4 p-6 border border-gray-200 hover:bg-gray-50 transition-colors duration-200">
                            <img src={cts} alt="Cognizant" className="grayscale hover:grayscale-0 transition duration-300 h-12 object-contain" />
                            <div className="text-center">
                                <p className="clash font-bold text-sm">Cognizant Technology Solutions</p>
                                <p className="rubik text-xs text-gray-500 mt-1">Program Analyst Trainee</p>
                                <p className="rubik text-xs text-gray-400">Apr 2025 – Present</p>
                            </div>
                        </div>

                        {/* Reachify */}
                        <div className="brand flex flex-col items-center gap-4 p-6 border border-gray-200 hover:bg-gray-50 transition-colors duration-200">
                            <img src={reachify} alt="Reachify" className="grayscale hover:grayscale-0 transition duration-300 h-12 object-contain" />
                            <div className="text-center">
                                <p className="clash font-bold text-sm">Reachify</p>
                                <p className="rubik text-xs text-gray-500 mt-1">Full Stack Developer Intern</p>
                                <p className="rubik text-xs text-gray-400">Nov 2023 – Apr 2024</p>
                            </div>
                        </div>

                        {/* BasketHunt */}
                        <div className="brand flex flex-col items-center gap-4 p-6 border border-gray-200 hover:bg-gray-50 transition-colors duration-200">
                            <img src={basket} alt="BasketHunt" className="grayscale hover:grayscale-0 transition duration-300 h-12 object-contain" />
                            <div className="text-center">
                                <p className="clash font-bold text-sm">BasketHunt</p>
                                <p className="rubik text-xs text-gray-500 mt-1">Frontend Developer Intern</p>
                                <p className="rubik text-xs text-gray-400">Jun 2024 – Sep 2024</p>
                            </div>
                        </div>

                    </div>
                </section>
            </FadeUp>

            {/* ── BLOG TEASER ── */}
            <FadeUp>
                <div className="ab flex flex-col md:flex-row items-center max-w-6xl mx-auto my-20 gap-24 px-6 md:px-12 lg:px-0">
                    <img src={blog} alt="Blog" className="w-auto object-cover" />
                    <div className="ab-text">
                        <p className="rubik font-[400] md:text-4xl pb-2 text-3xl lg:text-3xl">BLOG</p>
                        <p className="rubik font-[400] md:text-xl pb-2 text-xl lg:text-sm">Aug 08 2025</p>
                        <p className="clash font-bold pb-3 text-2xl">SQL Roadmap: From Zero to Hero – The Complete Guide.</p>
                        <p className="clash font-bold text-2xl">
                            Struggling with SQL? 🚀 This roadmap takes you from absolute beginner to advanced query master.
                        </p>
                        <Link to="/blog">
                            <button className="mt-8 border-2 border-black px-6 py-3 rubik font-bold hover:bg-black hover:text-white transition-all duration-300">
                                READ MORE
                            </button>
                        </Link>
                    </div>
                </div>
            </FadeUp>

            {/* ── CONNECT CTA ── */}
            <FadeUp>
                <div className="connect flex flex-col items-center text-center max-w-3xl mx-auto my-20 px-6 md:px-12 lg:px-0">
                    <p className="clash font-bold lg:text-2xl">Let's connect to build a breakthrough brand that delivers.</p>
                    <Link to="/contact">
                        <button className="mt-8 border-2 border-black px-6 py-3 rubik font-bold hover:bg-black hover:text-white transition-all duration-300">
                            CONTACT
                        </button>
                    </Link>
                </div>
            </FadeUp>

        </div>
    );
}

export default Home;
