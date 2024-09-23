import getBillboards from "@/actions/get-billboards";
import { getProductsByStore } from "@/actions/get-products";
import BillboardCarousel from "@/components/billboard-carousel";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import React from "react";

const StorePage = async ({ params }: { params: { storeId: string } }) => {
  const billboards = await getBillboards({ storeId: params.storeId });

  const products = await getProductsByStore({
    storeId: params.storeId,
    isFeatured: true,
  });

  return (
    <Container>
      <div className="space-y-10 pb-10 mt-8">
        <BillboardCarousel billboards={billboards} />

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default StorePage;
