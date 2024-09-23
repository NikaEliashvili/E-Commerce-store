import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}`;

interface CategoryProps {
  storeId: string;
  categoryId: string;
}

const getCategory = async (props: CategoryProps): Promise<Category> => {
  const res = await fetch(
    `${URL}/${props.storeId}/categories/${props.categoryId}`
  );
  return res.json();
};

export default getCategory;
