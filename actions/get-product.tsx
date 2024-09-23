import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/7c8b1283-4c9b-4880-8a7e-0008e735050c/products`;

const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${URL}/${id}`);
  return res.json();
};

export default getProduct;
