import { useAuth } from "@/hooks/useAuthRedirect";
import { createContext, useContext } from "react";
import type { ReactNode } from "react";

export interface User {
  id: string;
  email: string;
  username: string;
  role: string;
}

export interface AuthContextType {
  user: User | null;
  checking: boolean;
  loadUser: () => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const auth = useAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
