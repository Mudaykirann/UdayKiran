import { motion } from 'framer-motion';
import profile from '/my1.jpeg';
import ai from '/ai.jpeg';
import phy from '/phy.jpeg';
import Tabs from '../../components/Tabs/Tabs';
import Skill from '../../components/Skills/Skill';
import { FaDownload } from "react-icons/fa";

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


function About() {
    return (
        <div className="w-full px-6 py-12">

            {/* ── HEADING ── */}
            <FadeUp>
                <p className="clash font-[500] text-center md:text-4xl py-3 text-4xl lg:text-5xl mt-24">ABOUT</p>
            </FadeUp>

            {/* ── BIO SECTION ── */}
            <FadeUp delay={0.1}>
                <div className="ab flex flex-col md:flex-row items-center max-w-6xl mx-auto my-12 gap-24 px-6 md:px-12 lg:px-0">
                    {/* Profile photo with offset border frame */}
                    <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 border-2 border-black translate-x-3 translate-y-3 z-0" />
                        <img src={profile} alt="Profile" className="relative z-10 w-auto object-cover" />
                    </div>
                    <div className="ab-text">
                        <motion.p
                            className="clash font-bold pb-3 text-2xl"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Hi, I'm Uday Kiran — a Program Analyst Trainee at Cognizant. I believe technology isn't just about writing code, but about building solutions that create real impact.
                        </motion.p>
                        <motion.p
                            className="rubik font-[300] py-2 text-[16px]"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            With hands-on experience building and deploying 4+ web applications (2 full stack and 2 frontend with APIs), I specialize in creating scalable, responsive, and user-friendly solutions that bring ideas to life.
                        </motion.p>
                        <motion.p
                            className="rubik font-[300] py-2 text-[16px]"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            I've built projects like ProTrack (a productivity tracker that helps users manage tasks, track progress, and stay organized with a clean, responsive UI) and GoodFood (a React + Tailwind recipe finder powered by the MealDB API). Alongside projects, I've solved 100+ DSA problems on GeeksforGeeks and 70+ on LeetCode, sharpening my problem-solving and coding efficiency.
                        </motion.p>
                        <motion.p
                            className="rubik font-[300] py-2 text-[16px]"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            I'm driven to keep learning, experimenting, and delivering solutions that are not only functional but perform at scale. At my core, I'm building a career around full stack technology—crafting experiences that are impactful, reliable, and built to last.
                        </motion.p>
                    </div>
                </div>
            </FadeUp>

            {/* ── TIMELINE ── */}
            <FadeUp>
                <div className="tabs w-full">
                    <p className="clash font-[500] text-center md:text-4xl py-3 text-3xl lg:text-4xl underline underline-offset-4 mt-24">
                        TIMELINE
                    </p>
                    <Tabs />
                </div>
            </FadeUp>

            {/* ── SKILLS ── */}
            <FadeUp>
                <div className="skills">
                    <p className="clash font-[500] text-center md:text-4xl py-3 text-3xl lg:text-4xl underline underline-offset-4 mt-4">
                        SKILLS
                    </p>
                    <Skill />
                </div>
            </FadeUp>

            {/* ── INTERESTS & VALUES CARDS ── */}
            <FadeUp>
                <section className="py-12">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">

                            {/* Card 1 */}
                            <motion.div
                                className="bg-[#f1f1f1] overflow-hidden transition duration-300 group hover:shadow-md"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.55, delay: 0.05 }}
                            >
                                <img
                                    src={ai}
                                    alt="Interests"
                                    className="w-full h-84 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                                />
                                <div className="p-6">
                                    <h3 className="text-2xl clash font-bold">Interests &amp; Passions</h3>
                                    <p className="mt-3 rubik leading-relaxed">
                                        I'm deeply excited about AI, full-stack web development, and
                                        solving challenging problems through technology.
                                        Open-source contributions and building impactful projects
                                        keep me motivated to grow every day.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Card 2 */}
                            <motion.div
                                className="bg-[#f1f1f1] overflow-hidden transition duration-300 group hover:shadow-md"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.55, delay: 0.15 }}
                            >
                                <img
                                    src={phy}
                                    alt="Values"
                                    className="w-full h-84 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                                />
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold clash">Values &amp; Philosophy</h3>
                                    <p className="mt-3 rubik leading-relaxed">
                                        I believe in continuous learning, clean and maintainable code,
                                        and teamwork that fosters creativity.
                                        For me, solving problems isn't just about coding –
                                        it's about creating meaningful impact with technology.
                                    </p>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </section>
            </FadeUp>

            {/* ── RESUME CTA ── */}
            <FadeUp>
                <section className="flex flex-col items-center md:justify-between gap-4">
                    <h2 className="clash text-2xl font-semibold">Want to see More here.!</h2>
                    <a
                        download={true}
                        href="/Mangala_Uday_Kiran_Resume.pdf"
                        target="_blank"
                        className="flex items-center justify-center gap-2 text-[16px] rubik border-2 border-black px-6 py-3 font-bold hover:bg-black hover:text-white transition-all duration-300"
                    >
                        <FaDownload /> Resume
                    </a>
                </section>
            </FadeUp>

            {/* ── CLOSING QUOTE ── */}
            <FadeUp>
                <section>
                    <p className="text-gray-600 font-bold clash leading-relaxed transition-all duration-300 text-center mt-12">
                        I find debugging as relaxing as sipping a cup of coffee ☕ — both keep me sharp.
                    </p>
                </section>
            </FadeUp>

        </div>
    );
}

export default About;
