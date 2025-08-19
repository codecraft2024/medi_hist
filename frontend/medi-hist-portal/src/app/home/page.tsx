'use client';

import { useEffect, useRef, useState } from "react";
import { authGuardWrapper } from "../router";

function HomePageContent() {
    const [stage, setStage] = useState<"center" | "animating" | "header">("center");
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setStage("animating");
            const timer2 = setTimeout(() => {
                setStage("header");
                setTimeout(() => {
                    inputRef.current?.focus();
                }, 400);
            }, 1200); // animation duration
            return () => clearTimeout(timer2);
        }, 1200);
        return () => clearTimeout(timer1);
    }, []);

    return (
        <main className="relative min-h-screen bg-gray-50 flex flex-col items-center justify-center overflow-hidden">
            {/* Animated Welcome Message */}
            <div
                className={`
                    fixed left-0 right-0 flex justify-center z-20
                    font-bold text-green-700
                    transition-all duration-[1200ms] ease-[cubic-bezier(0.77,0,0.175,1)]
                    ${stage === "center" 
                        ? "top-1/2 -translate-y-1/2 text-5xl opacity-100 scale-110"
                        : stage === "animating"
                            ? "top-16 translate-y-0 text-3xl opacity-90 scale-100"
                            : "top-8 translate-y-0 text-2xl opacity-80 scale-95"}`}
                style={{ pointerEvents: "none" }}>
                Welcome to Payment App
            </div>

            {/* Input field appears after animation */}
            <div
                className={`
                    transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]
                    ${stage === "header" ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
                    flex flex-col items-center w-full
                `}
                style={{
                    marginTop: stage === "header" ? "120px" : "0",
                }}
            >
                <div className="w-full flex justify-center">
                    <input
                        ref={inputRef}
                        type="text"
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                        placeholder="What would you like to do today?"
                        className="w-full max-w-2xl rounded-2xl border border-gray-300 px-6 py-6 text-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-white transition-all"
                        style={{
                            fontSize: "1.5rem",
                        }}
                    />
                </div>
            </div>
        </main>
    );
}

export default authGuardWrapper(HomePageContent);
