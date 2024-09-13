"use client";

import Image from "next/image";
import { Expand, ShoppingCart } from "lucide-react";

import { Product } from "@/types";
import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  data: Product;
  className?: string
}

const ProductCard: React.FC<ProductCardProps> = ({ data,className }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className={cn("bg-white group cursor-pointer rounded-xl border p-3 space-y-4", className)}
    >
      {/* Image and Actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative ">
        <Image
          alt="Image"
          src={data?.images?.[0].url}
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="absolute transition-opacity bg-transparent px-6 w-full bottom-5 opacity-0 group-hover:opacity-100">
          <div className="flex gap-x-6 justify-center ">
            <IconButton
              icon={<Expand size={20} />}
              onClick={() => {}}
              className="text-gray-800"
            />
            <IconButton
              icon={<ShoppingCart size={20} />}
              onClick={() => {}}
              className="text-gray-800"
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p  title={data?.name} className="font-semibold text-lg max-w-full truncate">{data.name}</p>
        <p  title={data?.category?.name} className="text-sm text-gray-500 max-w-full text-ellipsis ">{data.category?.name}</p>
      </div>
      {/* Price */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
