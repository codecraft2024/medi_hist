'use client';

import { useState } from 'react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ email, password });
    };

    return (
        <main className="flex min-h-screen items-center justify-center bg-gradient-to-tr from-teal-100 via-blue-100 to-white px-4">
            <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-2xl backdrop-blur-md border border-blue-100">
                {}
                <div className="mb-6 flex justify-center">
                    <img
                        src="/logo-icon-only.png"
                        alt="Medical Logo"
                        className="h-24 w-24 rounded-full object-cover shadow-md"
                    />
                </div>

                {/* Title */}
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-extrabold text-blue-800">Portal</h1>
                    <p className="text-sm text-gray-500">Secure login for patient medical files </p>
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
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-teal-500 focus:ring-teal-500 focus:outline-none"
                            placeholder="you@healthcare.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-teal-500 focus:ring-teal-500 focus:outline-none"
                            placeholder="••••••••"
                        />
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox text-blue-600" />
                            <span className="text-gray-700">Remember me</span>
                        </label>
                        <a href="#" className="text-teal-600 hover:underline">Forgot password?</a>
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-teal-600 px-4 py-2 font-semibold text-white hover:bg-teal-700 transition duration-200 shadow-md"
                    >
                        Sign In
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                    New patient?
                    <a href="#" className="ml-1 text-blue-600 hover:underline">Create account</a>
                </p>
            </div>
        </main>
    );
}
