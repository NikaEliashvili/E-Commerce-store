"use client";

import axios from "axios";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import toast from "react-hot-toast";
import { Loader, LoaderCircle } from "lucide-react";

const Summary = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { items, removeAll } = useCart();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const hasShownSuccessMessage = useRef(false); // Ref to track if success message has been shown

  useEffect(() => {
    if (hasShownSuccessMessage.current) {
      return;
    }
    const success = searchParams.get("success");
    const canceled = searchParams.get("canceled");

    if (success === "1") {
      hasShownSuccessMessage.current = true; // Set the ref to true after showing the message
      toast.success("Payment completed.");
      removeAll();
    }

    if (canceled === "1") {
      hasShownSuccessMessage.current = true;
      toast.error("Oops! Something went wrong.");
    }

    router.replace("/cart");
  }, [searchParams, removeAll, router]);

  const totalPrice = useMemo(() => {
    return items.reduce((total, item) => total + Number(item.price), 0);
  }, [items]);

  const onCheckout = async () => {
    if (!items || items.length === 0) {
      return;
    }
    setIsLoading(true);
    const currUrl = window.location.origin + window.location.pathname;
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: items.map((item) => item.id),
        redirectUrl: currUrl,
      }
    );
    setIsLoading(false);
    window.location = response.data.url;
  };

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:px-6 lg:py-4">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        onClick={onCheckout}
        disabled={!items?.length || isLoading}
        className="w-full mt-6 flex items-center justify-center relative"
      >
        Checkout {isLoading && "... "}
        {isLoading && (
          <LoaderCircle className="absolute right-4 size-5 animate-spin" />
        )}
      </Button>
    </div>
  );
};

export default Summary;
