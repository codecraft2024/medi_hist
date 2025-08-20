'use client';

import { useEffect } from "react";
import { color } from "../theme/color";

type WelcomeMessageProps = {
    showHeader: boolean;
    setShowHeader: (v: boolean) => void;
    inputRef: React.RefObject<HTMLInputElement>;
};

export default function WelcomeMessage({ showHeader, setShowHeader, inputRef }: WelcomeMessageProps) {
     useEffect(() => {
        const timer = setTimeout(() => {
            setShowHeader(true);
            // inputRef focus is now handled in parent after input appears
        }, 1200);
        return () => clearTimeout(timer);
    }, [setShowHeader]);

    return (
        <div
            className={`
                fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center z-20
                font-bold ${color.primaryText} pointer-events-none
                transition-all duration-1000 ease-in-out
                ${showHeader
                    ? "top-8 left-1/2 -translate-x-1/2 translate-y-0 text-xs sm:text-2xl opacity-80 scale-95"
                    : "text-base sm:text-5xl opacity-100 scale-110"}`}>
            Welcome to Payment App
        </div>
    );
}
