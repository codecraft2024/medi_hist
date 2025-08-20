'use client';

import { useEffect, useRef } from "react";
import { color } from "../theme/color";

type WelcomeAnimationProps = {
    showHeader: boolean;
    setShowHeader: (v: boolean) => void;
    inputRef: React.RefObject<HTMLInputElement>;
};

export default function WelcomeAnimation({ showHeader, setShowHeader, inputRef }: WelcomeAnimationProps) {
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowHeader(true);
            setTimeout(() => {
                inputRef.current?.focus();
            }, 300);
        }, 1200);
        return () => clearTimeout(timer);
    }, [setShowHeader, inputRef]);

    return (
        <div
            className={`
                fixed left-0 right-0 flex justify-center z-20
                font-bold ${color.primaryText}
                transition-all duration-1000 ease-in-out
                ${showHeader
                    ? "top-8 text-2xl opacity-80 scale-95"
                    : "top-1/2 -translate-y-1/2 text-5xl opacity-100 scale-110"}
            `}
            style={{ pointerEvents: "none" }}
        >
            Welcome to Payment App
        </div>
    );
}

