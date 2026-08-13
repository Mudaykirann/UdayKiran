import { motion } from 'framer-motion';
import blog from '/blog.jpeg';
import code from '/code.jpeg';

/* ─── All blog posts ─── */
const posts = [
    {
        date: "Aug 08, 2025",
        tag: "Database",
        title: "SQL Roadmap: From Zero to Hero – The Complete Guide.",
        excerpt:
            "Struggling with SQL? This roadmap takes you from absolute beginner to advanced query master, covering fundamentals, joins, subqueries, and performance tuning.",
        link: "https://ukiranblogs.blogspot.com/2025/08/corporate-level-sql-roadmap-from-zero.html",
        img: blog,
        aria: "Read the full Corporate-Level SQL Roadmap blog",
    },
    {
        date: "Sep 08, 2025",
        tag: "Career",
        title: "How to Learn PROGRAMMING in 2025.",
        excerpt:
            "Having trouble coding? This guide walks you from complete beginner to confident programming pro — with a practical, distraction-free learning path.",
        link: "https://ukiranblogs.blogspot.com/2025/09/how-to-learn-programming-in-2025-if.html",
        img: code,
        aria: "Read the full How to learn PROGRAMMING in 2025 blog",
    },
];

function Blog() {
    return (
        <div className="w-full px-6 py-12">

            {/* ── Page header ── */}
            <motion.div
                className="max-w-6xl mx-auto mb-16 mt-12"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
            >
                <h1 className="clash font-bold text-4xl md:text-5xl lg:text-6xl text-black">BLOG</h1>
                <p className="rubik mt-3 text-gray-500 text-sm md:text-base max-w-lg leading-relaxed">
                    Thoughts on development, tools, and the craft of building things on the web.
                </p>
                <div className="w-12 h-px bg-black mt-6" />
            </motion.div>

            {/* ── Article card grid ── */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {posts.map((post, i) => (
                    <motion.article
                        key={i}
                        className="group flex flex-col bg-white border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300"
                        initial={{ opacity: 0, y: 36 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.15 }}
                    >
                        {/* Thumbnail */}
                        <div className="overflow-hidden h-56">
                            <img
                                src={post.img}
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col flex-grow p-6 gap-3">

                            {/* Tag + Date row */}
                            <div className="flex items-center gap-3">
                                <span className="clash text-xs font-bold bg-black text-white px-2 py-0.5 uppercase tracking-widest">
                                    {post.tag}
                                </span>
                                <span className="rubik text-xs text-gray-400">{post.date}</span>
                            </div>

                            {/* Title */}
                            <h2 className="clash font-bold text-lg md:text-xl text-black leading-snug">
                                {post.title}
                            </h2>

                            {/* Excerpt */}
                            <p className="rubik text-sm text-gray-600 leading-relaxed flex-grow">
                                {post.excerpt}
                            </p>

                            {/* CTA */}
                            <a
                                href={post.link}
                                aria-label={post.aria}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 inline-flex items-center gap-2 clash text-sm font-bold text-black hover:underline underline-offset-2 transition-all group/link"
                            >
                                READ ARTICLE
                                <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
                            </a>
                        </div>
                    </motion.article>
                ))}
            </div>

            {/* ── View all on Blogspot ── */}
            <motion.div
                className="max-w-6xl mx-auto mt-16 flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <a
                    href="https://ukiranblogs.blogspot.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="clash font-bold border-2 border-black px-8 py-3 text-sm hover:bg-black hover:text-white transition-all duration-300"
                >
                    VIEW ALL ON BLOGSPOT →
                </a>
            </motion.div>

        </div>
    );
}

export default Blog;
