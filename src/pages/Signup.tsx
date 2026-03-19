import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

const Signup = () => {

    const { signup, user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/browse');
        }
    }, [user, navigate]);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            await signup(name, email, password);
        } catch (err) {
            console.error(err);
            setError('Failed to create account');
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
                <h1 className="text-3xl font-bold mb-6">Sign Up</h1>

                {error && (
                    <div className="bg-red-600 text-white text-sm p-3 mb-4 rounded">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">

                    <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full p-3 rounded bg-[#333] text-white outline-none focus:ring-2 focus:ring-red-600"
                    />


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
                        {loading ? "Creating Account..." : "Sign Up"}
                    </button>
                </form>

                <p className="text-gray-400 text-sm mt-6">
                    Already have an account?{" "}
                    <span
                        onClick={() => navigate("/login")}
                        className="text-white cursor-pointer hover:underline"
                    >
                        Sign in now.
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Signup;