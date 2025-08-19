'use client';

import { useRef } from "react";
import { redirect } from "next/navigation";

function App() {
    let inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    redirect("/login");

    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center"
            style={{
                background: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
            }}
        >
            <h1
                className="mb-8 text-4xl font-extrabold"
                style={{
                    color: "#6c3483",
                    textShadow: "0 2px 8px #e0b3ff",
                }}
            >
                Page is working..
            </h1>
            <input
                ref={inputRef}
                className="rounded-lg px-4 py-2 border-2 border-purple-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-300 outline-none transition-all bg-white text-purple-900 shadow-md"
                style={{
                    marginBottom: "1.5rem",
                    width: "300px",
                    fontSize: "1.1rem",
                }}
            />
            <button
                className="classic-link"
                style={{
                    background: "linear-gradient(90deg, #a18cd1 0%, #6c3483 100%)",
                    color: "#fff",
                    border: "none",
                    borderRadius: "999px",
                    padding: "0.75rem 2.5rem",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                    boxShadow: "0 2px 8px #d1b3ff",
                    cursor: "pointer",
                    transition: "background 0.2s",
                }}
                onClick={handleClick}
            >
                Click to Increment
            </button>
        </div>
    );
}

export default App;
