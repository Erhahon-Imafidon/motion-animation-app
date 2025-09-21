import { Link } from 'react-router';
import { useState, useEffect } from 'react';
import { motion, Variants } from 'motion/react';

type Pizza = {
    base: string;
    toppings: string[];
};

type ToppingsProps = {
    pizza: Pizza;
    addTopping: (topping: string) => void;
};

const Toppings: React.FC<ToppingsProps> = ({ addTopping, pizza }) => {
    const [activeToppings, setActiveToppings] = useState<string[]>(
        pizza.toppings
    );

    useEffect(() => {
        setActiveToppings(pizza.toppings);
    }, [pizza.toppings]);

    const toppings = [
        'mushrooms',
        'peppers',
        'onions',
        'olives',
        'extra cheese',
        'tomatoes',
    ];

    const handleActive = (topping: string) => {
        setActiveToppings((prev) =>
            prev.includes(topping)
                ? prev.filter((t) => t !== topping)
                : [...prev, topping]
        );
        addTopping(topping);
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
            className="toppings max-w-75 mt-25 mb-10 mx-auto"
        >
            <h3 className="pb-2.5 mb-2.5 border-b border-white/20">
                Step 2: Choose Toppings
            </h3>
            <ul>
                {toppings.map((topping) => {
                    const isActive = activeToppings.includes(topping);
                    return (
                        <motion.li
                            whileHover={{
                                scale: 1.3,
                                color: '#f8e112',
                                originX: 0,
                            }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            className="p-2.5 cursor-pointer"
                            key={topping}
                            onClick={() => handleActive(topping)}
                        >
                            <span
                                className={`${
                                    isActive
                                        ? 'font-bold relative before:content-["›"] before:mr-1.5 before:scale-[0.8_1] before:inline-block before:-top-[2px]'
                                        : ''
                                }`}
                            >
                                {topping}
                            </span>
                        </motion.li>
                    );
                })}
            </ul>

            <Link to="/order">
                <motion.button
                    whileHover={{
                        scale: 1.1,
                        textShadow: '0px 0px 8px rgb(255,255,255)',
                        boxShadow: '0px 0px 8px rgb(255,255,255)',
                    }}
                >
                    Order
                </motion.button>
            </Link>
        </motion.div>
    );
};

export default Toppings;
