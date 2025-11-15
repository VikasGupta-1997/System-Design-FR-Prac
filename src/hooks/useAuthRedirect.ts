import { useEffect, useState, useCallback } from "react";

// You can set API base URL in .env or import it from your api config
const API = "http://localhost:8000";

export function useAuth() {
    const [user, setUser] = useState(null);
    const [checking, setChecking] = useState(true);

    // Load current session user
    const loadUser = useCallback(async () => {
        try {
            const res = await fetch(`${API}/api/v1/auth/me`, {
                credentials: "include",
            });
            if (res.ok) {
                const data = await res.json();
                setUser(data);
                return data
            }
            if (res.status === 401) {
                console.warn("Access session expired, trying refresh...");
                const refreshed = await refreshSession();
                if (refreshed) {
                    const retry = await fetch(`${API}/api/v1/auth/me`, {
                        credentials: "include",
                    });
                    if (retry.ok) {
                        const data = await retry.json();
                        setUser(data);
                        return data;
                    }
                }
            }
            setUser(null);
        } catch (err) {
            console.error("Auth check failed:", err);
            setUser(null);
        } finally {
            setChecking(false);
        }
    }, []);

    const refreshSession = useCallback(async () => {
        try {
            const res = await fetch(`${API}/api/v1/auth/refresh`, {
                method: "POST",
                credentials: "include",
            });
            if (res.ok) {
                console.log("🔁 Session refreshed successfully");
                return true;
            } else {
                console.warn("⚠️ Refresh failed");
                return false;
            }
        } catch (err) {
            console.error("Refresh error:", err);
            return false;
        }
    }, []);

    // Call on mount
    useEffect(() => {
        loadUser();
    }, [loadUser]);

    // ✅ Updated logout
    const logout = useCallback(async () => {
        try {
            // Get CSRF first
            const csrfRes = await fetch(`${API}/api/v1/auth/csrf`, {
                credentials: "include",
            });
            const { csrfToken } = await csrfRes.json();

            // Call logout
            await fetch(`${API}/api/v1/auth/logout`, {
                method: "GET",
                headers: { "x-csrf-token": csrfToken },
                credentials: "include",
            });
        } catch (err) {
            console.error("Logout failed:", err);
        } finally {
            setUser(null);
        }
    }, []);

    return { user, checking, loadUser, logout, isAuthenticated: !!user };
}
