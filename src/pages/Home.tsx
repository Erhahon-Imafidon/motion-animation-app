import { Link } from 'react-router';
import { motion, Variants } from 'motion/react';

const Home = () => {
    const buttonVariants = {
        hover: {
            scale: 1.1,
            textShadow: '0px 0px 8px rgb(255,255,255)',
            boxShadow: '0px 0px 8px rgb(255,255,255)',
            transition: {
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 0.3,
            },
        },
    };

    const containerVariants: Variants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: { delay: 1.5, duration: 1.5 },
        },
        exit: {
            x: '-100vw',
            transition: { ease: 'easeInOut' },
        },
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="home max-w-200 mt-25 mb-10 mx-auto text-center"
        >
            <h2 className="mb-7.5 text-[2em]">Welcome to Pizza Joint</h2>
            <Link to="/base">
                <motion.button
                    variants={buttonVariants}
                    whileHover={'hover'}
                    className="!py-4 !text-[1.6em] !border-3 my-7.5 mx-5"
                >
                    Create Your Pizza
                </motion.button>
            </Link>
        </motion.div>
    );
};

export default Home;
