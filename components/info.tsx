"use client";

import { ShoppingCart } from "lucide-react";

import { Product } from "@/types";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const { addItem } = useCart();
  const addToCart = () => {
    addItem(data);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <div className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black ">Size:</h3>
          <span
            title={data?.size?.name}
            className="leading-[10px] p-2 flex items-center justify-center aspect-square rounded-md bg-slate-800 text-white font-bold text-lg"
          >
            {data?.size?.value}
          </span>
        </div>
        <div className="flex items-center gap-x-2 ">
          <h3 className="font-semibold text-black ">Color:</h3>
          <span
            title={data?.color?.name}
            className="w-6 h-6 rounded-full ring-2 ring-offset-1 ring-gray-300"
            style={{ background: data?.color?.value }}
          />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button
          onClick={addToCart}
          className="flex items-center gap-x-2 active:scale-95 hover:ring-2 hover:ring-offset-1 hover:ring-yellow-600 hover:text-yellow-400 hover:opacity-100"
        >
          Add To Cart
          <ShoppingCart size={18} />
        </Button>
      </div>
    </div>
  );
};

export default Info;
