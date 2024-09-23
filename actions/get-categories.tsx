import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}`;

export const getCategoriesByStore = async (
  storeId: string
): Promise<Category[]> => {
  try {
    const res = await fetch(`${URL}/${storeId}/categories`);

    if (!res.ok) {
      throw new Error(`Error fetching categories: ${res.statusText}`);
    }

    return res.json();
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    return [];
  }
};

export const getAllCategories = async (): Promise<Category[]> => {
  try {
    console.log(`${URL}/categories`);

    const res = await fetch(`${URL}/categories`);

    if (!res.ok) {
      throw new Error(`Error fetching categories: ${res.statusText}`);
    }

    return res.json();
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    return [];
  }
};
