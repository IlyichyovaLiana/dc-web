"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { RouterPaths, getUserData } from "@/utils";

const AuthGuard = ({ children }) => {
  const router = useRouter();

  const isExpired = (lastLoginTime) => {
    const now = Date.now();
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
    return now - lastLoginTime > oneDayInMilliseconds;
  };

  useEffect(() => {
    const data = getUserData();
    if (!data || isExpired(data.lastLoginAt)) {
      router.push(RouterPaths.LOGIN);
    }
  }, [router]);

  return <>{children}</>;
};

export default AuthGuard;
