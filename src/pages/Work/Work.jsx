import Wprojects from "./Wprojects"
import { motion } from "framer-motion"

function Work() {
    return (
        <div className='py-24 px-4 md:px-0'>
            <div className='mx-auto max-w-6xl pt-12 px-4'>
                <motion.p
                    className='text-3xl md:text-3xl lg:text-5xl clash text-black font-medium'
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    I build sites that turn visitors into customers.
                </motion.p>
                <motion.p
                    className='text-sm md:text-xl lg:text-[16px] rubik font-[14px] text-black pt-4'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
                >
                    As a developer I build (or adapt) your designs into high performing, pixel-perfect
                    landing pages to save you time and cost. I understand what it takes to reach your
                    business goal — from designs to the technical bits.
                </motion.p>

                {/* Thin divider */}
                <motion.div
                    className="w-12 h-px bg-black mt-8"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
                    style={{ originX: 0 }}
                />
            </div>
            <Wprojects />
        </div>
    )
}

export default Work
