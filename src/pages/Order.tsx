import { motion, Variants } from 'motion/react';

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
        transition: { type: 'spring', delay: 0.5 },
    },
    exit: {
        x: '-100vw',
        transition: { ease: 'easeInOut' },
    },
};

const Order = ({ pizza }: OrderProps) => {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="text-center max-w-200 mx-auto"
        >
            <h2>Thank you for your order :)</h2>
            <p className="my-5 mx-auto">
                You ordered a {pizza.base} pizza with:
            </p>
            {pizza.toppings.map((topping) => (
                <div key={topping}>{topping}</div>
            ))}
        </motion.div>
    );
};

export default Order;
