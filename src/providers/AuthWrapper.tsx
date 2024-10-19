"use client";
import { AuthProvider } from "@/context/authContext";

const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AuthWrapper;
