import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function NotFound() {
    return (
        <motion.div
            className="w-full min-h-[80vh] flex flex-col items-center justify-center px-6 text-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            {/* Large 404 */}
            <p className="clash font-extrabold text-[120px] md:text-[180px] leading-none text-black select-none">
                404
            </p>

            {/* Divider line */}
            <div className="w-16 h-px bg-black my-6" />

            {/* Heading */}
            <h1 className="clash font-bold text-2xl md:text-3xl lg:text-4xl text-black leading-tight max-w-xl">
                This page doesn't exist.
            </h1>

            {/* Sub-text */}
            <p className="rubik font-[400] text-gray-600 mt-4 text-base md:text-lg max-w-md leading-relaxed">
                Looks like you've wandered somewhere that isn't mapped yet.
                Head back and explore what's actually here.
            </p>

            {/* CTA button — matches site's button style exactly */}
            <Link to="/">
                <button className="mt-10 border-2 border-black px-8 py-3 rubik font-bold hover:bg-black hover:text-white transition-all duration-300">
                    BACK TO HOME
                </button>
            </Link>
        </motion.div>
    );
}

export default NotFound;
