import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}`;

const getColors = async (storeId: string): Promise<Color[]> => {
  const res = await fetch(`${URL}/${storeId}/colors`);
  return res.json();
};

export default getColors;
