import { Billboard as BillboardType } from "@/types";

interface BillboardProps {
  data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="rounded-xl overflow-hidden">
      <div
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden max-h-[300px] w-full  md:h-auto"
        style={{
          backgroundImage: `url(${data?.imageUrl})`,
          backgroundPosition: "center",
        }}
      >
        <div className="h-full w-full flex flex-column justify-center items-center text-center gap-y-8">
          <div
            className="flex items-center justify-center p-1 px-4 sm:px-8 w-fit h-fit font-bold border-dashed border backdrop-blur-sm text-2xl sm:text-4xl sm:max-w-xl max-w-xs text-slate-100 rounded-md
          shadow-[inset_0_0_3px_1px_rgba(0,0,0,0.125)]"
          >
            {data?.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
