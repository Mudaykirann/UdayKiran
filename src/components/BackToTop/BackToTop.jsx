import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

/**
 * Floating "Back to Top" button.
 * Appears after the user scrolls 400px down.
 * Smooth-scrolls back to top on click.
 */
export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 400);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    onClick={scrollUp}
                    aria-label="Scroll back to top"
                    className="fixed bottom-8 right-6 z-[9990] w-11 h-11 bg-black text-white flex items-center justify-center shadow-lg hover:bg-gray-800 transition-colors duration-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.25 }}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <FaArrowUp size={14} />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
