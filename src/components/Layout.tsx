import { Outlet, useLocation } from 'react-router';
import { AnimatePresence } from 'motion/react';
import Header from './Header.tsx';

const Layout = () => {
    const location = useLocation();

    return (
        <>
            <Header />
            <main className="text-white">
                <AnimatePresence mode="wait">
                    <Outlet key={location.pathname} />
                </AnimatePresence>
            </main>
        </>
    );
};
export default Layout;
