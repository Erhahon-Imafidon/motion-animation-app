import { Routes, Route, useLocation } from 'react-router';
import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Base from './pages/Base.tsx';
import Home from './pages/Home.tsx';
import Toppings from './pages/Toppings.tsx';
import Layout from './components/Layout.tsx';
import Order from './pages/Order.tsx';
import Header from './components/Header.tsx';

type Pizza = {
    base: string;
    toppings: string[];
};

const App = () => {
    const [pizza, setPizza] = useState<Pizza>({ base: '', toppings: [] });
    const location = useLocation();

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
        <div className="min-h-screen">
            <Header />
            <main className="text-white relative overflow-hidden">
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route
                                path="base"
                                element={
                                    <Base addBase={addBase} pizza={pizza} />
                                }
                            />
                            <Route
                                path="toppings"
                                element={
                                    <Toppings
                                        addTopping={addTopping}
                                        pizza={pizza}
                                    />
                                }
                            />
                            <Route
                                path="order"
                                element={<Order pizza={pizza} />}
                            />
                        </Route>
                    </Routes>
                </AnimatePresence>
            </main>
        </div>
    );
};

export default App;
