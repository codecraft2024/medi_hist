'use client';

import { useRouter } from "next/navigation";
import { color } from "../theme/color";

export default function LogoutButton() {
    const router = useRouter();
    const handleLogout = () => {
        localStorage.removeItem("token");
        router.replace("/login");
    };
    return (
        <button
            onClick={handleLogout}
            className={`flex items-center gap-2 px-3 py-1 rounded-md ${color.logoutBg} transition-colors absolute right-4 top-4 sm:right-8 sm:top-8 text-sm sm:text-base`}
            title="Logout">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1" />
            </svg>
            Logout
        </button>
    );
}