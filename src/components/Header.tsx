import Image from "next/image";

const Header: React.FC = () => {
  return (
    <div className="px-32 flex flex-row justify-between items-center py-4">
      <Image src="/logo_small.svg" alt="" width={127} height={32} />
      <p>Checkout</p>
      <p>Help</p>
    </div>
  );
};

export default Header;
