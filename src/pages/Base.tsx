import { Link } from 'react-router';
import { useState } from 'react';
import { motion, Variants } from 'motion/react';

interface IBaseProps {
    addBase: (base: string) => void;
    pizza: {
        base: string;
    };
}

const Base = ({ addBase, pizza }: IBaseProps) => {
    const [activeBase, setActiveBase] = useState<string | null>(null);
    const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

    const handleActive = (base: string) => {
        setActiveBase(base);
        addBase(base);
    };

    const containerVariants: Variants = {
        hidden: {
            x: '100vw',
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: { type: 'spring', delay: 0.5 },
        },
    };

    const nextVariants: Variants = {
        hidden: { x: '-100vw' },
        visible: {
            x: 0,
            transition: { type: 'spring', stiffness: 120 },
        },
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="base max-w-75 mt-25 mb-10 mx-auto"
        >
            <h3 className="pb-2.5 mb-2.5 border-b border-white/20">
                Step 1: Choose Your Base
            </h3>
            <ul>
                {bases.map((base) => {
                    const isActive = activeBase === base;
                    return (
                        <motion.li
                            whileHover={{
                                scale: 1.3,
                                color: '#f8e112',
                                originX: 0,
                            }}
                            className="p-2.5 cursor-pointer"
                            key={base}
                            onClick={() => handleActive(base)}
                        >
                            <span
                                className={`${
                                    isActive
                                        ? 'font-bold relative before:content-["›"] before:mr-1.5 before:scale-[0.8_1] before:inline-block before:-top-[2px]'
                                        : ''
                                }`}
                            >
                                {base}
                            </span>
                        </motion.li>
                    );
                })}
            </ul>

            {pizza.base && (
                <motion.div variants={nextVariants} className="next">
                    <Link to="/toppings">
                        <motion.button
                            whileHover={{
                                scale: 1.1,
                                textShadow: '0px 0px 8px rgb(255,255,255)',
                                boxShadow: '0px 0px 8px rgb(255,255,255)',
                            }}
                        >
                            Next
                        </motion.button>
                    </Link>
                </motion.div>
            )}
        </motion.div>
    );
};

export default Base;
