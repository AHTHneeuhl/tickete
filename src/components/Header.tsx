import Image from "next/image";

const Header: React.FC = () => {
  return (
    <div className="px-32 flex flex-row justify-between items-center py-4">
      <Image src="/logo-small.svg" alt="" width={127} height={32} />
      <div className="flex flex-row items-center justify-center gap-2">
        <Image src="/lock.svg" alt="" width={20} height={20} />
        <p className="text-base font-semibold text-grey-secondary">Checkout</p>
      </div>
      <div className="flex flex-row items-center justify-center gap-2">
        <Image src="/question.svg" alt="" width={20} height={20} />
        <p className="text-base font-normal text-grey-secondary">Help</p>
      </div>
    </div>
  );
};

export default Header;
