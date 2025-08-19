import { Routes, Route } from 'react-router';
import { useState } from 'react';
import Base from './pages/Base.tsx';
import Home from './pages/Home.tsx';
import Toppings from './pages/Toppings.tsx';
import Layout from './components/Layout.tsx';
import Order from './pages/Order.tsx';

const App = () => {
    const [pizza, setPizza] = useState({ base: '', toppings: [] });

    const addBase = (base) => {
        setPizza({ ...pizza, base });
    };

    const addTopping = (topping) => {
        let newToppings;
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
