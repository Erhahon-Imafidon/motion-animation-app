import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { Link } from 'react-router';

const Header = () => {
    const svgVariants: Variants = {
        initial: { rotate: -180 },
        animate: {
            rotate: 0,
            transition: { duration: 1 },
        },
    };

    const pathVariants: Variants = {
        hidden: { opacity: 0, pathLength: 0 },
        visible: {
            opacity: 1,
            pathLength: 1,
            transition: { duration: 2, ease: 'easeInOut' },
        },
    };

    return (
        <header className="flex items-center text-white p-10 h-32 relative">
            <motion.div
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0.8}
                className="cursor-pointer z-10"
            >
                <motion.svg
                    className="w-20 overflow-visible"
                    xmlns="http://www.w3.org/2000/motion.svg"
                    viewBox="0 0 100 100"
                    width={80}
                    height={80}
                    variants={svgVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.path
                        variants={pathVariants}
                        initial="hidden"
                        animate="visible"
                        d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
                        fill="none"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinejoin="round"
                        strokeLinecap="round"
                    />
                    <motion.path
                        variants={pathVariants}
                        initial="hidden"
                        animate="visible"
                        d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
                        fill="none"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinejoin="round"
                        strokeLinecap="round"
                    />
                </motion.svg>
            </motion.div>
            <motion.div
                initial={{ y: -250 }}
                animate={{ y: -10 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
                className="mt-5 text-[1em] w-full absolute left-30"
            >
                <h1 className="border-b border-white/20 pb-2.5">Pizza Joint</h1>
            </motion.div>
        </header>
    );
};

export default Header;
