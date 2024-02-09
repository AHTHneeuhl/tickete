import Image from "next/image";

const PaymentSummary: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-between border-b pb-4 border-border-grey-default">
      <p className="text-sm font-semibold text-grey-secondary cursor-pointer">
        View payment summary
      </p>
      <Image
        src="/plus.svg"
        alt=""
        height={16}
        width={16}
        className="cursor-pointer"
      />
    </div>
  );
};

export default PaymentSummary;
