import { Link } from 'react-router';
import { motion } from 'motion/react';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="home max-w-200 mt-25 mb-10 mx-auto text-center"
        >
            <h2 className="mb-7.5 text-[2em]">Welcome to Pizza Joint</h2>
            <Link to="/base">
                <motion.button
                    animate={{}}
                    className="!py-4 !text-[1.6em] !border-3 my-7.5 mx-5"
                >
                    Create Your Pizza
                </motion.button>
            </Link>
        </motion.div>
    );
};

export default Home;
