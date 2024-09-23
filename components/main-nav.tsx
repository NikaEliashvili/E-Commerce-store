"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import CategorySwitcher from "./category-switcher";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const params = useParams();
  const pathname = usePathname();
  const routes = data.map((route) => ({
    href: `/store/${params.storeId}/category/${route.id}`,
    label: route.name,
    active: pathname === `/store/${params.storeId}/category/${route.id}`,
  }));

  if (!params.storeId) {
    return null;
  }

  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {/* {routes.map((route) => (
        <Link
          href={route.href}
          key={route.href}
          className={cn(
            "text-sm font-semibold transition-colors hover:text-black capitalize",
            route.active ? "text-black " : "text-neutral-500"
          )}
        >
          {route.label}
        </Link>
      ))} */}
      <CategorySwitcher items={routes} />
    </nav>
  );
};

export default MainNav;
