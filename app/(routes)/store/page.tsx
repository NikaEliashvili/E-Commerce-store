"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const StorePage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, []);
  return null;
};

export default StorePage;
