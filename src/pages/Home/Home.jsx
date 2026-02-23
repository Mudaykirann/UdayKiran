import React from 'react'
import banner2 from '/bg1.jpeg';
import profile from '/my1.jpeg';
import { Link } from 'react-router-dom';
import cts from '/public/cts.png';
import basket from '/Baskethunt.png';
import reachify from '/reachify.png';
import blog from '/blog.jpeg';
import Projects from '../../components/Projects/Projects';


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
            <div className="banner relative">
                <img
                    src={banner2}
                    alt="Banner"
                    className="w-full h-[350px] lg:h-auto md:h-[450px] object-cover"
                />

                <div className="relative z-10 -mt-16 md:-mt-24 lg:-mt-52">
                    <div className="bg-white max-w-5xl mx-auto text-center py-12 px-6 md:px-12 lg:px-24 ">
                        <h2 className="clash font-extrabold text-3xl md:text-xl lg:text-5xl leading-tight">
                            Transforming Ideas Into High-Impact Digital Solutions.
                        </h2>
                        <p className="rubik text-base md:text-lg lg:text-xl font-semibold mt-6 md:mt-8">
                            Specializing in full stack development and modern frontend solutions,
                            built for performance at scale.
                        </p>
                        <Link to={'/work'}>
                            <button className="mt-8 border-2 border-black px-6 py-3 rubik font-bold hover:bg-black hover:text-white transition-all duration-300">
                                EXPLORE WORK
                            </button>
                        </Link>
                    </div>
                </div>
            </div>


            <div className='ab flex flex-col md:flex-row items-center max-w-6xl mx-auto my-20 gap-24 px-6 md:px-12 lg:px-0'>
                <img src={profile} alt='Profile' className='w-auto object-cover' />
                <div className='ab-text'>
                    <p className='rubik font-[400] md:text-4xl py-3 text-3xl lg:text-3xl'>ABOUT</p>
                    <p className='clash font-bold pb-3 text-2xl'>Hi, I’m Uday — I craft digital solutions that go beyond code.</p>
                    <p className='clash font-bold text-2xl'>For me, development isn’t just about building apps, it’s about building experiences.</p>
                    <Link to={'/about'}>
                        <button className="mt-8 border-2 border-black px-6 py-3 rubik font-bold hover:bg-black hover:text-white transition-all duration-300">
                            SEE MORE
                        </button>
                    </Link>
                </div>
            </div>



            <section className="w-full px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {profiles.map((item, i) => (
                        <div
                            key={i}
                            className="bg-[#F1F1F1] p-6"
                        >
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



            <Projects />

            <section className="w-full px-6 py-8">

                <h2 className="text-2xl clash lg:mx-24 md:text-3xl font-[500]">WORK-ING/ED IN</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto'>

                    <div className='brand'>
                        <img src={cts} alt='cts' className='grayscale-100 hover:grayscale-0 transition duration-200' />
                    </div>
                    <div className='brand'>
                        <img src={reachify} alt='reachify' className='grayscale-100 hover:grayscale-0 transition duration-200' />
                    </div>
                    <div className='brand'>
                        <img src={basket} alt='baskethunt' className='grayscale-100 hover:grayscale-0 transition duration-200' />
                    </div>
                </div>
            </section>

            <div className='ab flex flex-col md:flex-row items-center max-w-6xl mx-auto my-20 gap-24 px-6 md:px-12 lg:px-0'>
                <img src={blog} alt='Profile' className='w-auto object-cover' />
                <div className='ab-text'>
                    <p className='rubik font-[400] md:text-4xl pb-2 text-3xl lg:text-3xl'>BLOG</p>
                    <p className='rubik font-[400] md:text-xl pb-2 text-xl lg:text-sm'>Aug 08 2025</p>
                    <p className='clash font-bold pb-3 text-2xl'>SQL Roadmap: From Zero to Hero – The Complete Guide.</p>
                    <p className='clash font-bold text-2xl'>Struggling with SQL? 🚀 This roadmap takes you from absolute beginner
                        to advanced query master.</p>
                    <Link to={'/blog'}>
                        <button className="mt-8 border-2 border-black px-6 py-3 rubik font-bold hover:bg-black hover:text-white transition-all duration-300">
                            READ MORE
                        </button>
                    </Link>
                </div>
            </div>


            <div className="connect flex flex-col items-center text-center max-w-3xl mx-auto my-20 px-6 md:px-12 lg:px-0">
                <p className='clash font-bold lg:text-2xl'>Let’s connect to build a breakthrough brand that delivers.</p>
                <Link to={'/contact'}>
                    <button className="mt-8 border-2 border-black px-6 py-3 rubik font-bold hover:bg-black hover:text-white transition-all duration-300">
                        CONTACT
                    </button>
                </Link>
            </div>


        </div>
    )
}

export default Home
