import type { UserDetailProps } from "@/config/interfaces";
import { createContext } from "react";

export const AuthContext = createContext<UserDetailProps | undefined>(undefined);

