import { useRouter } from "next/navigation";
import { ComponentType, useEffect, useState } from "react";

export const ROUTES = {
    login: "/login",
    home: "/home",
};

export function authGuardWrapper<T>(Component: ComponentType<T>) {
    return function AuthGuard(props: T) {
        const router = useRouter();
        const [checked, setChecked] = useState(false);

        useEffect(() => {
             if (typeof window !== "undefined") {
                const token = localStorage.getItem("token");
                if (!token) {
                    setChecked(false);
                    router.replace(ROUTES.login);
                } else {
                    setChecked(true);
                }
            }
        }, [router]);

        if (typeof window === "undefined" || !checked)
            return null;

        return <Component {...props} />;
    };
}
