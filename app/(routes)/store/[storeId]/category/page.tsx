"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const CategoryPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, [router]);
  return null;
};

export default CategoryPage;
