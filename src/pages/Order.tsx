import { motion, Variants, AnimatePresence } from 'motion/react';
import { useState } from 'react';

type OrderProps = {
    pizza: {
        base: string;
        toppings: string[];
    };
};

const containerVariants: Variants = {
    hidden: {
        x: '100vw',
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            mass: 0.4,
            damping: 8,
            when: 'beforeChildren',
            staggerChildren: 0.4,
        },
    },
};

const childVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
    },
};

const Order = ({ pizza }: OrderProps) => {
    const [showTitle, setShowTitle] = useState(true);

    setTimeout(() => {
        setShowTitle(false);
    }, 4000);

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-200 mx-auto"
        >
            <AnimatePresence>
                {showTitle && (
                    <motion.h2 exit={{ y: -1000 }} className="text-2xl">
                        Thank you for your order :)
                    </motion.h2>
                )}
            </AnimatePresence>
            <motion.p variants={childVariants} className="my-5 mx-auto">
                You ordered a {pizza.base} pizza with:
            </motion.p>
            <motion.div variants={childVariants}>
                {pizza.toppings.map((topping) => (
                    <div key={topping}>{topping}</div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Order;
