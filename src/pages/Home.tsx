import { Link } from 'react-router';

const Home = () => {
    return (
        <div className="home max-w-200 mt-25 mb-10 mx-auto text-center">
            <h2 className="text-[2em] mb-7.5">Welcome to Pizza Joint</h2>
            <Link to="/base">
                <button className="!py-4 !text-[1.6em] !border-3 my-7.5 mx-5">
                    Create Your Pizza
                </button>
            </Link>
        </div>
    );
};

export default Home;
