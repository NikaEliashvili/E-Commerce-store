"use client";

import { Store } from "@/types";
import NoResults from "@/components/ui/no-results";
import StoreCard from "@/components/ui/store-card";
import { cn } from "@/lib/utils";

interface StoreListProps {
  title: string;
  items: Store[];
}

const StoreList: React.FC<StoreListProps> = ({ title, items = [] }) => {
  return (
    <div className="space-y-4 mt-6">
      <h3 className="font-bold text-3xl">{title}</h3>
      {items.length === 0 && <NoResults />}
      <div
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        )}
      >
        {items.map((item) => (
          <StoreCard
            key={item.id}
            data={item}
            className={cn("snap-start shrink-0")}
          />
        ))}
      </div>
    </div>
  );
};

export default StoreList;
