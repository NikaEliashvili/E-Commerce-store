import qs from "query-string";

import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}`;

interface Query {
  storeId: string;
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

export const getProductsByStore = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: `${URL}/${query.storeId}/products`,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });
  const res = await fetch(url);
  return res.json();
};

export const getAllProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${URL}/products`);

  return res.json();
};
