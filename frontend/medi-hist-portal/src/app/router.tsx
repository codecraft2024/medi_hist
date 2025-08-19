import { useRouter } from "next/navigation";
import { ComponentType, useEffect, useState, PropsWithChildren } from "react";

export const ROUTES = {
    login: "/login",
    home: "/home",
};

export function authGuardWrapper<P>(Component: ComponentType<P>) {
    return function AuthGuard(props: PropsWithChildren<P>) {
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
