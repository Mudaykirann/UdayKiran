import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Thin black progress bar fixed at the very top of the page.
 * Fills left-to-right as the user scrolls down.
 */
export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-[3px] bg-black origin-left z-[9999]"
            style={{ scaleX }}
        />
    );
}
