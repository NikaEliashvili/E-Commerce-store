"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { Store } from "@/types";
import { cn } from "@/lib/utils";
import { useEffect, useMemo, useState } from "react";
import { log } from "console";

interface StoreCardProps {
  data: Store;
  className?: string;
}

const StoreCard: React.FC<StoreCardProps> = ({ data, className }) => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const randomBillboard = useMemo(() => {
    const billboards = data?.billboards || [];
    return billboards?.[Math.floor(Math.random() * billboards.length)];
  }, [data?.billboards]);

  const handleClick = () => {
    router.push(`/store/${data?.id}`);
  };

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
    }
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      onClick={handleClick}
      className={cn(
        "bg-white group cursor-pointer rounded-xl border p-3 space-y-4 hover:scale-95 active:scale-95 transition duration-300 delay-100 group",
        className
      )}
    >
      <div>
        <p
          title={data?.name}
          className="font-semibold text-right text-lg max-w-full truncate"
        >
          {data.name}
        </p>
      </div>
      <div className="aspect-square rounded-xl bg-gray-100 relative ">
        <Image
          alt="Image"
          src={randomBillboard.imageUrl || "/not_found.png"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="aspect-square object-cover rounded-md"
        />
        <div
          className="absolute inset-0 p-1 m-auto w-fit h-fit flex items-center justify-center font-bold border-dashed border backdrop-blur-sm text-2xl sm:text-xl text-slate-100 px-2 rounded-md max-w-[60%]
          shadow-[inset_0_0_3px_1px_rgba(0,0,0,0.125)] text-center group-hover:opacity-0 transition duration-1000"
        >
          {randomBillboard.label}
        </div>
      </div>
    </div>
  );
};

export default StoreCard;
