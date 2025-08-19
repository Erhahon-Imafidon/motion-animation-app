import { Link } from 'react-router';
import { useState } from 'react';

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

    return (
        <div className="base max-w-75 mt-25 mb-10 mx-auto">
            <h3 className="pb-2.5 mb-2.5 border-b border-white/20">
                Step 1: Choose Your Base
            </h3>
            <ul>
                {bases.map((base) => {
                    const isActive = activeBase === base;
                    return (
                        <li
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
                        </li>
                    );
                })}
            </ul>

            {pizza.base && (
                <div className="next">
                    <Link to="/toppings">
                        <button>Next</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Base;
