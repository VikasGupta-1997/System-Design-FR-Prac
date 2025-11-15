import { useNavigate } from "react-router-dom";
import { Center, Spinner } from "@chakra-ui/react";
import { useAuthContext } from "@/context/AuthContext";
import type { ReactNode } from "react";
import { useEffect } from "react";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const { user, checking } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!checking && !user) {
      navigate("/login/user");
    }
  }, [user, checking, navigate]);

  if (checking)
    return (
      <Center h="80vh">
        <Spinner size="lg" />
      </Center>
    );

  if (!user) return null;

  return children;
}
