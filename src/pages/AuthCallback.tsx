import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "@/context/AuthContext";
import { Center, Spinner, Text } from "@chakra-ui/react";

export default function AuthCallback() {
    const navigate = useNavigate();
    const { loadUser } = useAuthContext();

    useEffect(() => {
        async function finalizeLogin() {
            try {
                const res = await loadUser();
                // If /me succeeded → user is logged in
                navigate("/dashboard");
            } catch (err) {
                console.error("OAuth callback failed:", err);
                navigate("/login/user");
            }
        }

        finalizeLogin();
    }, [loadUser, navigate]);

    return (
        <Center h="80vh" flexDir="column" gap={3}>
            <Spinner size="lg" />
            <Text>Authenticating... please wait</Text>
        </Center>
    );
}
