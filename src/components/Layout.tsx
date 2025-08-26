import { Outlet } from 'react-router';
import Header from './Header.tsx';

const Layout = () => {
    return (
        <>
            <Header />
            <main className="text-white">
                <Outlet />
            </main>
        </>
    );
};
export default Layout;
