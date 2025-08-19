import { Link } from 'react-router';
import { useState, useEffect } from 'react';

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

    return (
        <div className="toppings max-w-75 mt-25 mb-10 mx-auto">
            <h3 className="pb-2.5 mb-2.5 border-b border-white/20">
                Step 2: Choose Toppings
            </h3>
            <ul>
                {toppings.map((topping) => {
                    const isActive = activeToppings.includes(topping);
                    return (
                        <li
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
                        </li>
                    );
                })}
            </ul>

            <Link to="/order">
                <button>Order</button>
            </Link>
        </div>
    );
};

export default Toppings;
