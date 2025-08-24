import { Link } from 'react-router';
import { motion } from 'motion/react';

const Home = () => {
    return (
        <motion.div
            animate={{ rotateZ: 180, opacity: 0.5 }}
            className="home max-w-200 mt-25 mb-10 mx-auto text-center"
        >
            <motion.h2
                animate={{
                    fontSize: '50px',
                    color: '#ff2994',
                    x: 100,
                    y: -100,
                }}
                className="mb-7.5 text-[2em]"
            >
                Welcome to Pizza Joint
            </motion.h2>
            <Link to="/base">
                <motion.button
                    animate={{ scale: 1.5 }}
                    className="!py-4 !text-[1.6em] !border-3 my-7.5 mx-5"
                >
                    Create Your Pizza
                </motion.button>
            </Link>
        </motion.div>
    );
};

export default Home;
