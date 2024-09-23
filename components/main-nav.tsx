"use client";

import { useParams, usePathname } from "next/navigation";

import { Category } from "@/types";
import CategorySwitcher from "./category-switcher";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const params = useParams();
  const pathname = usePathname();

  const routes = data.map((route) => ({
    routeId: route.id,
    href: `/store/${params.storeId}/category/${route.id}`,
    label: route.name,
    active: pathname === `/store/${params.storeId}/category/${route.id}`,
    storeName: route.store?.name,
    storeId: route.store?.id,
  }));

  if (!params.storeId) {
    return null;
  }

  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      <CategorySwitcher items={routes} />
    </nav>
  );
};

export default MainNav;
