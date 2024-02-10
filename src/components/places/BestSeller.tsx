import Image from "next/image";

const BestSeller: React.FC = () => {
  return (
    <div className="h-[26px] flex flex-row rounded items-start gap-1 py-1 px-2 bg-surface-default absolute top-2 left-2">
      <Image src="/trophy.svg" alt="" width={13} height={10} />
      <p className="text-xs font-semibold text-grey-primary">Bestseller</p>
    </div>
  );
};

export default BestSeller;
