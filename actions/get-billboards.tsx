import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}`;

interface GetBillboardProps {
  storeId: string;
}

const getBillboards = async ({
  storeId,
}: GetBillboardProps): Promise<Billboard[]> => {
  const res = await fetch(`${URL}/${storeId}/billboards`);
  return res.json();
};

export default getBillboards;
