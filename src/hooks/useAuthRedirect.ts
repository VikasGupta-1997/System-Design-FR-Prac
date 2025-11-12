// src/hooks/useAuthRedirect.ts
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useAuthRedirect() {
    const navigate = useNavigate();

    useEffect(() => {
        async function checkLogin() {
            try {
                const res = await fetch("http://localhost:8000/api/v1/auth/me", {
                    credentials: "include",
                });

                if (res.ok) {
                    // ✅ Logged in — redirect away from login
                    navigate("/dashboard");
                }
            } catch (err) {
                console.error("Auth check failed:", err);
            }
        }

        checkLogin();
    }, [navigate]);
}
