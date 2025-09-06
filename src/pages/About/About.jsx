import profile from '/public/my1.jpeg';
import ai from '/public/ai.jpeg';
import phy from '/public/phy.jpeg';
import Tabs from '../../components/Tabs/Tabs';
import Skill from '../../components/Skills/Skill';
import { FaDownload } from "react-icons/fa";


function About() {
    return (
        <div className='w-full px-6 py-12'>
            <div className='about_me'>
                <p className='clash font-[500] text-center md:text-4xl py-3 text-4xl lg:text-5xl  mt-24'>ABOUT</p>
                <div className='ab flex flex-col md:flex-row items-center max-w-6xl mx-auto my-12 gap-24 px-6 md:px-12 lg:px-0'>
                    <img src={profile} alt='Profile' className='w-auto object-cover' />
                    <div className='ab-text'>
                        <p className='clash font-bold pb-3 text-2xl'>Hi, I’m Uday Kiran — a Program Analyst Trainee at Cognizant. I believe technology isn’t just about writing code, but about building solutions that create real impact.</p>
                        <p className='rubik font-[300] py-2 text-[16px]'>With hands-on experience building and deploying 4+ web applications (2 full stack and 2 frontend with APIs), I specialize in creating scalable, responsive, and user-friendly solutions that bring ideas to life.</p>
                        <p className='rubik font-[300] py-2 text-[16px]'>I’ve built projects like ProTrack (a productivity tracker that helps users manage tasks, track progress, and stay organized with a clean, responsive UI) and GoodFood (a React + Tailwind recipe finder powered by the MealDB API). Alongside projects, I’ve solved 100+ DSA problems on GeeksforGeeks and 70+ on LeetCode, sharpening my problem-solving and coding efficiency.</p>
                        <p className='rubik font-[300] py-2 text-[16px]'>I’m driven to keep learning, experimenting, and delivering solutions that are not only functional but perform at scale. At my core, I’m building a career around full stack technology—crafting experiences that are impactful, reliable, and built to last.</p>
                    </div>
                </div>
            </div>

            <div className='tabs w-full'>
                <p className='clash font-[500] text-center md:text-4xl py-3 text-3xl lg:text-4xl underline underline-offset-4 mt-24'>TIMELINE</p>
                <Tabs />
            </div>

            <div className='skills'>
                <p className='clash font-[500] text-center md:text-4xl py-3 text-3xl lg:text-4xl underline underline-offset-4 mt-4'>SKILLS</p>
                <Skill />
            </div>
            <section className="py-12">
                <div className="max-w-6xl mx-auto px-4">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                        {/* Card 1 */}
                        <div className="bg-[#f1f1f1]  overflow-hidden  transition duration-300">
                            <img
                                src={ai}
                                alt="Interests"
                                className="w-full h-84 object-cover grayscale"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl clash font-bold">
                                    Interests & Passions
                                </h3>
                                <p className="mt-3 rubik leading-relaxed">
                                    I’m deeply excited about AI, full-stack web development, and
                                    solving challenging problems through technology.
                                    Open-source contributions and building impactful projects
                                    keep me motivated to grow every day.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#f1f1f1] overflow-hidden transition duration-300">
                            <img
                                src={phy}
                                alt="Values"
                                className="w-full h-84 object-cover grayscale"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold clash">
                                    Values & Philosophy
                                </h3>
                                <p className="mt-3 rubik leading-relaxed">
                                    I believe in continuous learning, clean and maintainable code,
                                    and teamwork that fosters creativity.
                                    For me, solving problems isn’t just about coding –
                                    it’s about creating meaningful impact with technology.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex  flex-col items-center md:justify-between gap-4">
                <h2 className="clash text-2xl font-semibold ">Want to see More here.!</h2>
                <a
                    download={true}
                    href="/src/assets/Mangala_Uday_Kiran_Resume.pdf"
                    target="_blank"
                    className="flex items-center justify-center gap-2 text-[16px] rubik border-2 border-black px-6 py-3 rubik font-bold hover:bg-black hover:text-white transition-all duration-300"
                >
                    <FaDownload /> Resume
                </a>
            </section>

            <section>
                <p className="text-gray-600 font-bold  clash leading-relaxed transition-all duration-300 text-center mt-12">
                    I find debugging as relaxing as sipping a cup of coffee ☕ — both keep
                    me sharp.
                </p>
            </section>
        </div>
    )
}

export default About
