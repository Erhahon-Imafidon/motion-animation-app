import { Link } from 'react-router';

type Pizza = {
    base: string;
    toppings: string[];
};

type ToppingsProps = {
    pizza: Pizza;
    addTopping: (topping: string) => void;
};

const Toppings: React.FC<ToppingsProps> = ({ addTopping, pizza }) => {
    const toppings = [
        'mushrooms',
        'peppers',
        'onions',
        'olives',
        'extra cheese',
        'tomatoes',
    ];

    return (
        <div className="toppings container">
            <h3>Step 2: Choose Toppings</h3>
            <ul>
                {toppings.map((topping) => {
                    const spanClass = pizza.toppings.includes(topping)
                        ? 'active'
                        : '';
                    return (
                        <li key={topping} onClick={() => addTopping(topping)}>
                            <span className={spanClass}>{topping}</span>
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
