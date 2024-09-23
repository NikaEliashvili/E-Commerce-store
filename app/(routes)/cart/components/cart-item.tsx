"use client";

import CloseIconButton from "@/components/ui/close-icon-button";
import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import { X } from "lucide-react";
import Image from "next/image";

interface CartItemProps {
  data: Product;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const { removeItem } = useCart();

  const onRemove = () => {
    removeItem(data.id);
  };

  return (
    <li className="flex py-6 border-b">
      <div className="relative size-24 rounded-md overflow-hidden sm:size-48">
        <Image
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={data.images[0]?.url}
          alt={`${data.name}`}
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <CloseIconButton onClose={onRemove} />
        </div>
        <div className="relative pr-9 flex flex-col justify-between sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0 size-full sm:size-auto">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{data.name}</p>
          </div>
          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{data.color.name}</p>
            <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">
              {data.size.name}
            </p>
          </div>
          <div className="mt-0 sm:mt-2 text-lg sm:text-xl">
            <Currency value={data.price} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
