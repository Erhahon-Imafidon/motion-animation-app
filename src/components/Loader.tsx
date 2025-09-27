import { motion } from 'motion/react';
import type { Variants } from 'motion/react';

const loaderVariants: Variants = {
    animationOne: {
        x: [-20, 20],
        y: [0, -30],
        transition: {
            x: {
                repeat: Infinity,
                duration: 0.5,
                repeatType: 'reverse',
            },
            y: {
                repeat: Infinity,
                duration: 0.25,
                repeatType: 'reverse',
                ease: 'easeOut',
            },
        },
    },
};

const Loader = () => {
    return (
        <motion.div
            variants={loaderVariants}
            animate="animationOne"
            className="size-2.5 my-10 mx-auto rounded-full bg-white"
        />
    );
};

export default Loader;
