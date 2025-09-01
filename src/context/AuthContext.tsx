import { createContext, useState, useEffect } from "react";
import type { UserDetailProps } from "@/config/interfaces";
import { getUserDetailInstance } from "@/config/axiosConfig";

type AuthContextType = {
  user: UserDetailProps | undefined;
  setUser: (user: UserDetailProps | undefined) => void;
  refreshUser: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserDetailProps>();

  async function refreshUser() {
    const at = localStorage.getItem("at");
    if (at) {
      try {
        const res = await getUserDetailInstance(at).get("");
        setUser(res.data.data);
      } catch {
        setUser(undefined);
      }
    }
  }

  useEffect(() => {
    refreshUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
}