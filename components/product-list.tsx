"use client";
import { Product } from "@/types";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import { cn } from "@/lib/utils";

interface ProductListProps {
  title: string;
  items: Product[];
  type?: "grid" | "scroll"
}

const ProductList: React.FC<ProductListProps> = ({ title, items = [], type="grid" }) => {
    const gridClassNames = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    const scrollClassNames = "h-[310px] flex items-start justify-start gap-x-2 md:gap-x-4 overflow-auto scroll-m-4 no-scrollbar sm:show-scrollbar pb-1 snap-x"
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {items.length === 0 && <NoResults />}
      <div className={cn((type === "grid" && gridClassNames) || (type === "scroll" && scrollClassNames),)}>
        {items.map((item) => (
          <ProductCard key={item.id} data={item} className={cn("snap-start shrink-0",type === "scroll" ? "w-44 h-full" : "" )} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
