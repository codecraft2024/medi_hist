'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser } from './authService';

// Purple theme colors
const purpleTheme = {
    gradientFrom: "from-purple-200",
    gradientVia: "via-purple-300",
    gradientTo: "to-purple-100",
    border: "border-purple-300",
    primaryText: "text-purple-800",
    inputFocus: "focus:border-purple-500 focus:ring-purple-500",
    link: "text-purple-600 hover:underline",
    error: "text-red-500",
    button: "bg-purple-600 hover:bg-purple-700 text-white",
};

function AdCard({
    image,
    title,
    subtitle,
    banner,
    onClose,
}: {
    image: string;
    title: string;
    subtitle: string;
    banner?: boolean;
    onClose: () => void;
}) {
    return (
        <div className={`relative ${banner ? "w-56 h-32 border border-purple-200 rounded-xl shadow" : "w-56 h-80 border-2 border-purple-300 rounded-2xl shadow-xl"} bg-white flex flex-col items-center justify-center overflow-hidden`}>
            <button
                onClick={onClose}
                className="absolute top-2 right-2 z-20 bg-purple-100 hover:bg-purple-200 rounded-full p-1"
                aria-label="Close Ad"
                type="button"
            >
                <svg className="h-4 w-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <img
                src={image}
                alt={title}
                className={banner ? "absolute inset-0 w-full h-full object-cover opacity-70" : "w-full h-2/3 object-cover"}
            />
            {banner ? (
                <span className="relative text-purple-800 font-semibold text-base text-center px-2 z-10">
                    {title}
                </span>
            ) : (
                <>
                    <div className="w-full h-1/3 flex flex-col items-center justify-center px-3 z-10 bg-white bg-opacity-80">
                        <span className="text-purple-700 font-bold text-lg">{title}</span>
                        <span className="text-purple-400 text-xs mt-1 text-center">{subtitle}</span>
                    </div>
                    <span className="absolute top-2 left-2 bg-purple-200 text-purple-700 text-xs px-2 py-0.5 rounded-full font-semibold z-10">Ad</span>
                </>
            )}
        </div>
    );
}

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    // Ad visibility state
    const [showLeftMainAd, setShowLeftMainAd] = useState(true);
    const [showLeftBannerAd, setShowLeftBannerAd] = useState(true);
    const [showRightMainAd, setShowRightMainAd] = useState(true);
    const [showRightBannerAd, setShowRightBannerAd] = useState(true);

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.removeItem('token');
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        const result = await loginUser(email, password);
        if (result.success) {
            if (typeof window !== "undefined" && result.token) {
                localStorage.setItem('token', result.token);
            }
            router.push('/home');
        } else {
            setError(result.error || 'Login failed');
        }
    };

    return (
        <main
            className={`flex min-h-screen items-center justify-center bg-gradient-to-tr ${purpleTheme.gradientFrom} ${purpleTheme.gradientVia} ${purpleTheme.gradientTo} px-4 relative overflow-hidden`}
        >
            {/* Left Ad Space */}
            <div className="hidden lg:flex flex-col items-center mr-8 gap-6">
                {showLeftMainAd && (
                    <AdCard
                        image="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
                        title="Upgrade to Premium"
                        subtitle="Enjoy exclusive features and offers!"
                        onClose={() => setShowLeftMainAd(false)}
                    />
                )}
                {showLeftBannerAd && (
                    <AdCard
                        image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
                        title="Get 20% off on your first payment!"
                        subtitle=""
                        banner
                        onClose={() => setShowLeftBannerAd(false)}
                    />
                )}
            </div>

            <div className={`w-full max-w-md rounded-2xl bg-white p-10 shadow-2xl backdrop-blur-md border ${purpleTheme.border}`}>
                {/* Logo */}
                <div className="mb-6 flex justify-center">
                    <img
                        src="/logo-login.jpg"
                        alt="Payment App Logo"
                        className="h-24 w-24 rounded-full object-cover shadow-lg border-4 border-purple-200"
                    />
                </div>

                {/* Title */}
                <div className="text-center mb-6">
                    <h1 className={`text-4xl font-extrabold ${purpleTheme.primaryText}`}>Payment App</h1>
                    <p className="text-base text-purple-500">Secure login to manage your payments</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-purple-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-full rounded-lg border border-purple-300 px-4 py-3 bg-purple-50 text-purple-900 ${purpleTheme.inputFocus} focus:outline-none`}
                            placeholder="you@email.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-purple-700 mb-1">Password</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={`w-full rounded-lg border border-purple-300 px-4 py-3 bg-purple-50 text-purple-900 ${purpleTheme.inputFocus} focus:outline-none`}
                            placeholder="Enter your password"
                        />
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox text-purple-600" />
                            <span className="text-purple-700">Remember me</span>
                        </label>
                        <a href="#" className={purpleTheme.link}>Forgot password?</a>
                    </div>

                    {error && (
                        <div className={purpleTheme.error + " text-sm text-center"}>{error}</div>
                    )}

                    <button
                        type="submit"
                        className={`w-full rounded-lg ${purpleTheme.button} px-4 py-3 font-semibold transition duration-200 shadow-md`}>
                        Log In
                    </button>
                </form>

                <p className="mt-8 text-center text-sm text-purple-600">
                    New to Payment App?
                    <a href="#" className={`ml-1 ${purpleTheme.link}`}>Create account</a>
                </p>
            </div>

            {/* Right Ad Space */}
            <div className="hidden lg:flex flex-col items-center ml-8 gap-6">
                {showRightMainAd && (
                    <AdCard
                        image="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
                        title="Refer & Earn"
                        subtitle="Invite friends and get rewards!"
                        onClose={() => setShowRightMainAd(false)}
                    />
                )}
                {showRightBannerAd && (
                    <AdCard
                        image="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
                        title="Special Offer: Free transactions this week!"
                        subtitle=""
                        banner
                        onClose={() => setShowRightBannerAd(false)}
                    />
                )}
            </div>
        </main>
    );
}
