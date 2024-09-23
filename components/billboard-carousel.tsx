"use client";

import { Billboard as BillboardType } from "@/types";
import Billboard from "./billboard";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface BillboardCarouselProps {
  billboards: BillboardType[];
}

const BillboardCarousel: React.FC<BillboardCarouselProps> = ({
  billboards,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo({
        left: active * ref.current.clientWidth,
        behavior: "smooth",
      });
    }
  }, [active]);

  return (
    <div className="relative overflow-hidden p-4 sm:p-6 lg:p-8">
      <div
        ref={ref}
        className="relative w-full h-[300px] snap-mandatory snap-x no-scrollbar overflow-hidden flex flex-row items-start justify-start gap-4"
      >
        {billboards.map((billboard) => (
          <div key={billboard.id} className="shrink-0 w-full snap-start">
            <Billboard data={billboard} />
          </div>
        ))}
      </div>
      {active !== 0 && (
        <div
          onClick={() => setActive((prev) => prev - 1)}
          className="z-50 absolute left-8 top-0 bottom-0 m-auto w-fit h-fit p-2 rounded-md backdrop-blur-md shadow-md text-white cursor-pointer hover:scale-95 active:scale-95 border-2 border-transparent hover:border-slate-100/60  active:border-slate-200 transition"
        >
          <ArrowLeft />
        </div>
      )}
      {active !== billboards?.length - 1 && (
        <div
          onClick={() => setActive((prev) => prev + 1)}
          className="z-50 absolute right-8 top-0 bottom-0 m-auto w-fit h-fit p-2 rounded-md backdrop-blur-md shadow-md text-white cursor-pointer hover:scale-95 active:scale-95 border-2 border-transparent hover:border-slate-100/60  active:border-slate-200 transition"
        >
          <ArrowRight />
        </div>
      )}
    </div>
  );
};

export default BillboardCarousel;
