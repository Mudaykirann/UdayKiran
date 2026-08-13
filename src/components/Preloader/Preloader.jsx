import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Full-screen preloader shown on first page visit.
 * Fades out after 1.4s revealing the app beneath.
 */
export default function Preloader() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    className="fixed inset-0 z-[999999] bg-black flex items-center justify-center"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                    >
                        {/* Initials */}
                        <motion.p
                            className="clash font-extrabold text-white text-6xl md:text-8xl tracking-tight leading-none"
                            animate={{ opacity: [1, 0.6, 1] }}
                            transition={{ repeat: 1, duration: 0.7, ease: 'easeInOut' }}
                        >
                            UK
                        </motion.p>

                        {/* Animated loading bar */}
                        <div className="mt-8 w-32 h-[2px] bg-white/20 mx-auto overflow-hidden">
                            <motion.div
                                className="h-full bg-white origin-left"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 1.2, ease: 'easeInOut' }}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
