import { Outlet } from 'react-router';
import Header from './Header.tsx';

const Layout = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <main className="text-white relative overflow-hidden">
                <Outlet />
            </main>
        </div>
    );
};
export default Layout;
