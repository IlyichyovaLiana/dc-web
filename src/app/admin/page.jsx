"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { RouterPaths } from "@/utils";

function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace(RouterPaths.ADMIN_HERO_BANNER);
  }, [router]);

  return null;
}

export default AdminPage;
