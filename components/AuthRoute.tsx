import React, { ReactNode } from "react";
import useAuth from "@/hooks/queries/useAuth";
import { useFocusEffect, router } from "expo-router";

const AuthRoute = ({ children }: { children: ReactNode }) => {
  const { auth } = useAuth();

  useFocusEffect(() => {
    if (!auth.id) {
      router.replace("/auth");
    }
  });

  return <>{children}</>;
};

export default AuthRoute;
