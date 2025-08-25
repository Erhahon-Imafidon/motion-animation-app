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
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-200 mx-auto"
        >
            <h2>Thank you for your order :)</h2>
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
