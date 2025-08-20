'use client';

import { useRef, useState } from "react";
import { authGuardWrapper } from "../router";
import LogoutButton from "../shared/components/LogoutButton";
import { color } from "@/app/shared/theme/color";
import WelcomeMessage from "@/app/shared/animation/WelcomeMessage";

function HomePageContent() {
    const [showHeader, setShowHeader] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const handleWelcomeAnimationDone = () => {
        setShowInput(true);
        setTimeout(() => {
            inputRef.current?.focus();
        }, 100);
    };

    const handleSend = () => {
        setInputValue("");
        inputRef.current?.focus();
    };

    return (
        <main
            className={`
                relative min-h-screen bg-gray-50 flex flex-col items-center justify-center overflow-hidden
                px-2 sm:px-0
            `}
        >

            {showHeader && <LogoutButton />}

            <WelcomeMessage
                showHeader={showHeader}
                setShowHeader={v => {
                    setShowHeader(v);
                    if (v) {
                        setTimeout(handleWelcomeAnimationDone, 1000); // match animation duration in WelcomeMessage
                    }
                }}
                inputRef={inputRef as React.RefObject<HTMLInputElement>}
            />

            <div
                className={`
                    transition-all duration-500 ease-in-out
                    ${showInput ? "opacity-100 scale-100 mt-20" : "opacity-0 scale-95 pointer-events-none mt-0"}
                    flex flex-col items-center w-full
                    px-0 sm:px-0
                `}
            >
                <div className="w-full flex justify-center">
                    <div className="relative w-full max-w-2xl px-0 sm:px-4">
                        <input
                            ref={inputRef}
                            type="text"
                            value={inputValue}
                            onChange={e => setInputValue(e.target.value)}
                            placeholder="What would you like to do today?"
                            className={`
                                w-full rounded-2xl border border-gray-300
                                px-4 py-4 sm:px-6 sm:py-6
                                text-sm sm:text-lg
                                shadow-lg focus:outline-none ${color.primaryRing} bg-white transition-all pr-14 sm:pr-16
                            `}
                            onKeyDown={e => {
                                if (e.key === "Enter") handleSend();
                            }}/>
                        <button
                            onClick={handleSend}
                            className={`
                                absolute right-2 sm:right-4 top-1/2 -translate-y-1/2
                                mr-1 sm:mr-2
                                ${color.button} rounded-full p-2 shadow transition-colors
                            `}
                            tabIndex={-1}
                            aria-label="Send">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default authGuardWrapper(HomePageContent);
