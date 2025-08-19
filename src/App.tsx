import { Routes, Route } from 'react-router';
import { useState } from 'react';
import Base from './pages/Base.tsx';
import Home from './pages/Home.tsx';
import Toppings from './pages/Toppings.tsx';
import Layout from './components/Layout.tsx';
import Order from './pages/Order.tsx';

type Pizza = {
    base: string;
    toppings: string[];
};

const App = () => {
    const [pizza, setPizza] = useState<Pizza>({ base: '', toppings: [] });

    const addBase = (base: string) => {
        setPizza({ ...pizza, base });
    };

    const addTopping = (topping: string) => {
        let newToppings: string[];
        if (!pizza.toppings.includes(topping)) {
            newToppings = [...pizza.toppings, topping];
        } else {
            newToppings = pizza.toppings.filter((item) => item !== topping);
        }
        setPizza({ ...pizza, toppings: newToppings });
    };

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route
                    path="base"
                    element={<Base addBase={addBase} pizza={pizza} />}
                />
                <Route
                    path="toppings"
                    element={<Toppings addTopping={addTopping} pizza={pizza} />}
                />
                <Route path="order" element={<Order pizza={pizza} />} />
            </Route>
        </Routes>
    );
};

export default App;
