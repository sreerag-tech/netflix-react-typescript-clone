import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

const Header = () => {

    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleAuthAction = async () => {
        if (user) {
            await logout();
            navigate("/");
        } else {
            navigate("/login");
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/90 to-transparent">
            <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">

                <h1
                    className="text-xl lg:text-3xl font-bold text-red-600 cursor-pointer"
                    onClick={() => navigate(user ? "/browse" : "/")}
                >
                    NETFLIX
                </h1>

                {user && (
                    <nav className="hidden md:flex items-center gap-6">
                        <span
                            onClick={() => navigate("/browse")}
                            className="text-white cursor-pointer hover:underline"
                        >
                            Home
                        </span>
                        <span className="text-sm text-white cursor-pointer hover:underline">
                            TV Shows
                        </span>
                        <span className="text-sm text-white cursor-pointer hover:underline">
                            Movies
                        </span>
                        <span
                            onClick={() => navigate("/watchlist")}
                            className="text-white cursor-pointer hover:underline"
                        >
                            Watchlist
                        </span>

                    </nav>
                )}

                <button
                    onClick={handleAuthAction}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded text-sm"
                >
                    {user ? "Logout" : "Sign In"}
                </button>
            </div>
        </header>
    );
};

export default Header;