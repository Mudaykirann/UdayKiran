
import blog from '/blog.jpeg';
import code from '/code.jpeg';


function Blog() {
    return (
        <div className="w-full px-6 py-12">
            <h2 className="text-2xl clash lg:mx-24 md:text-3xl font-[500] mb-10">BLOG</h2>
            <div className='ab flex flex-col md:flex-row items-center max-w-6xl mx-auto my-20 gap-24 px-6 md:px-12 lg:px-0'>
                <img src={blog} alt='Blog' className='w-auto object-cover' />
                <div className='ab-text'>
                    <p className='rubik font-[400] md:text-xl pb-2 text-xl lg:text-sm'>Aug 08 2025</p>
                    <p className='clash font-bold pb-3 text-2xl'>SQL Roadmap: From Zero to Hero – The Complete Guide.</p>
                    <p className='clash font-medium text-sm'>Struggling with SQL? 🚀 This roadmap takes you from absolute beginner
                        to advanced query master.</p>
                    <a href="https://ukiranblogs.blogspot.com/2025/08/corporate-level-sql-roadmap-from-zero.html"
                        aria-label="Read the full Corporate-Level SQL Roadmap blog from zero to advanced"
                        target="_blank" rel="noopener noreferrer">
                        <button className="mt-4 rubik font-bold underline underline-offset-2 transition-all duration-300">
                            READ MORE
                        </button>
                    </a>
                </div>
            </div>
            <div className='ab flex flex-col-reverse md:flex-row items-center max-w-6xl mx-auto my-20 gap-24 px-6 md:px-12 lg:px-0'>
                <div className='ab-text'>
                    <p className='rubik font-[400] md:text-xl pb-2 text-xl lg:text-sm'>Sep 08 2025</p>
                    <p className='clash font-bold pb-3 text-2xl'>How to learn PROGRAMMING in 2025.</p>
                    <p className='clash font-medium text-sm'>Having trouble coding? 🚀 This blog will guide you from complete beginner to confident programming pro.</p>
                    <a href="https://ukiranblogs.blogspot.com/2025/09/how-to-learn-programming-in-2025-if.html"
                        aria-label="Read the full How to learn PROGRAMMING in 2025 blog from beginner to advanced"
                        target="_blank" rel="noopener noreferrer">
                        <button className="mt-4 rubik font-bold underline underline-offset-2 transition-all duration-300">
                            READ MORE
                        </button>
                    </a>
                </div>
                <img src={code} alt='Code' className='w-auto object-cover' />
            </div>
        </div>
    )
}

export default Blog
