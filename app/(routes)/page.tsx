import { getAllProducts } from "@/actions/get-products";
import getStores from "@/actions/get-stores";
import ProductList from "@/components/product-list";
import StoreList from "@/components/store-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getAllProducts();
  const stores = await getStores();

  return (
    <>
      <Container>
        <div className="space-y-10 pb-10">
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <StoreList title="Available Stores" items={stores} />
          </div>
        </div>
      </Container>
      <Container>
        <div className="space-y-10 pb-10">
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title="All Products" items={products} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default HomePage;
