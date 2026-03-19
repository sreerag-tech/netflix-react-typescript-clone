import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';


const Login = () => {

    const { login, user } = useAuth();
    const navigate = useNavigate();

    console.log('Login page')

    useEffect(() => {
        if (user) {
            navigate("/browse");
        }
    }, [user, navigate]);


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            await login(email, password);
        } catch (err) {
            console.error(err);
            setError("Invalid email or password");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
            style={{
                backgroundImage: "url('/src/assets/heroBg.jpg')"
            }}
        >

            <div className="w-full max-w-md bg-black/75 p-8 rounded-md">
                <h1 className="text-3xl font-bold mb-6">Sign In</h1>

                {error && (
                    <div className="bg-red-600 text-white text-sm p-3 mb-4 rounded">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full p-3 rounded bg-[#333] text-white outline-none focus:ring-2 focus:ring-red-600"
                    />

                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full p-3 rounded bg-[#333] text-white outline-none focus:ring-2 focus:ring-red-600"
                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-3 text-sm text-gray-300"
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>


                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-red-600 hover:bg-red-700 py-3 rounded font-semibold transition disabled:opacity-50"
                    >
                        {loading ? "Signing In..." : "Sign In"}
                    </button>
                </form>

                <p className="text-gray-400 text-sm mt-6">
                    New to Netflix?{" "}
                    <span
                        onClick={() => navigate("/signup")}
                        className="text-white cursor-pointer hover:underline"
                    >
                        Sign up now.
                    </span>
                </p>
            </div>
        </div>
    );
};
export default Login;