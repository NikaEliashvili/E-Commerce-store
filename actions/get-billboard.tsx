import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}`;

interface BillboardProps {
  storeId: string;
  billboardId: string;
}

const getBillboard = async ({
  storeId,
  billboardId,
}: BillboardProps): Promise<Billboard> => {
  const res = await fetch(`${URL}/${storeId}/billboards/${billboardId}`);
  return res.json();
};

export default getBillboard;
