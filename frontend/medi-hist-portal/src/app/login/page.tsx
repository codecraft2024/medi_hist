'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser } from './authService';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        const result = await loginUser(email, password);
        if (result.success) {
            // Optionally store token: localStorage.setItem('token', result.token);
            router.push('/home');
        } else {
            setError(result.error || 'Login failed');
        }
    };

    return (
        <main
            className="flex min-h-screen items-center justify-center bg-gray-50 px-4 relative overflow-hidden"
            style={{
                // Add a soft green radial gradient accent in the background
                background:
                    'radial-gradient(circle at 80% 10%, #a7f3d0 0%, transparent 60%), #f9fafb',
            }}
        >
            <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-2xl backdrop-blur-md border border-green-100">
                {/* Logo */}
                <div className="mb-6 flex justify-center">
                    <img
                        src="/logo-login.jpg"
                        alt="Payment App Logo"
                        className="h-24 w-24 rounded-full object-cover shadow-md"
                    />
                </div>

                {/* Title */}
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-extrabold text-green-800">Payment App</h1>
                    <p className="text-sm text-gray-500">Secure login to manage your payments</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-green-500 focus:ring-green-500 focus:outline-none"
                            placeholder="you@email.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-green-500 focus:ring-green-500 focus:outline-none"
                            placeholder="Enter your password"
                        />
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox text-green-600" />
                            <span className="text-gray-700">Remember me</span>
                        </label>
                        <a href="#" className="text-green-600 hover:underline">Forgot password?</a>
                    </div>

                    {error && (
                        <div className="text-red-600 text-sm text-center">{error}</div>
                    )}

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-green-600 px-4 py-2 font-semibold text-white hover:bg-green-700 transition duration-200 shadow-md">
                        Log In
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                    New to Payment App?
                    <a href="#" className="ml-1 text-green-600 hover:underline">Create account</a>
                </p>
            </div>
        </main>
    );
}
