import { motion, useCycle } from 'motion/react';
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

    animationTwo: {
        y: [0, -40],
        x: 0,
        transition: {
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
    const [animation, cycleAnimation] = useCycle(
        'animationOne',
        'animationTwo'
    );

    return (
        <>
            <motion.div
                variants={loaderVariants}
                animate={animation}
                className="size-2.5 my-10 mx-auto rounded-full bg-white"
            />

            <button onClick={() => cycleAnimation()}>
                Cycle Loader Animation
            </button>
        </>
    );
};

export default Loader;
