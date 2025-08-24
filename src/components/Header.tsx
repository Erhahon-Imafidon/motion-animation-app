import { motion } from 'motion/react';

const Header = () => {
    return (
        <header className="flex items-center text-white p-10 ">
            <div className="cursor-pointer">
                <svg
                    className="w-20 overflow-visible"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    width={80}
                    height={80}
                >
                    <path
                        d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
                        fill="none"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinejoin="round"
                        strokeLinecap="round"
                    />
                    <path
                        // shifted down so all coordinates are within the viewBox
                        d="M50 30 L50 10 C50 10 90 10 90 30 Z"
                        fill="none"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinejoin="round"
                        strokeLinecap="round"
                    />
                </svg>
            </div>
            <motion.div
                initial={{ y: -250 }}
                animate={{ y: -10 }}
                className=" mt-5 text-[1em] w-full"
            >
                <h1 className="border-b border-white/20 pb-2.5">Pizza Joint</h1>
            </motion.div>
        </header>
    );
};

export default Header;
