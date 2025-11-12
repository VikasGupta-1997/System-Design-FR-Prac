// src/pages/AuthCallback.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthCallback() {
    const navigate = useNavigate();

    useEffect(() => {
        async function checkAuth() {
            try {
                const res = await fetch("http://localhost:8000/api/v1/auth/me", {
                    credentials: "include",
                });

                if (res.ok) {
                    const data = await res.json();
                    console.log("✅ Logged in as user:", data.userId);
                    // Redirect user to dashboard or homepage
                    navigate("/dashboard");
                } else {
                    console.warn("⚠️ No session found, redirecting to login...");
                    navigate("/login/user");
                }
            } catch (err) {
                console.error("Session check failed:", err);
                navigate("/login/user");
            }
        }

        checkAuth();
    }, [navigate]);

    return <p>Authenticating... please wait</p>;
}
