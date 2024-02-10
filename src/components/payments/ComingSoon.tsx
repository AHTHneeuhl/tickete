import Image from "next/image";

type TProps = {
  method: string;
  imageUrl: string;
};

const ComingSoon: React.FC<TProps> = ({ method, imageUrl }) => {
  return (
    <div className="flex flex-row gap-4 items-center bg-grey-100 p-6 rounded-2xl border border-grey-default-subtle">
      <Image src={imageUrl} alt="" width={35} height={24} />
      <p className="text-grey-disabled text-base font-semibold">Coming Soon</p>
    </div>
  );
};

export default ComingSoon;
