import Image from "next/image";

type TProps = {
  price: string;
};

const YouSaved: React.FC<TProps> = ({ price }) => {
  return (
    <div className="flex flex-row items-start gap-1 rounded-full border border-green-500 bg-green-900 py-[2px] px-[6px]">
      <Image src="/piggy-bank-white.svg" alt="" width={14} height={14} />
      <p className="font-semibold text-xs text-green-200">You saved {price}</p>
    </div>
  );
};

export default YouSaved;
