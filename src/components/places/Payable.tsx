import Image from "next/image";

const Payable: React.FC = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row items-center justify-between">
        <h4 className="text-lg font-semibold text-grey-primary">
          Total payable
        </h4>
        <h4 className="text-lg font-semibold text-grey-primary">$XXX</h4>
      </div>
      <p className="text-xs font-semibold text-grey-secondary">
        You will be charged in AED
      </p>
      <p className="text-xs font-normal text-grey-secondary">
        By clicking &ldquo;confirm & pay&rdquo;, you agree{" "}
        <span className="text-indigo-900">
          to Tickete&apos;s general terms and conditions
        </span>{" "}
        and <span className="text-indigo-900">cancellation policy</span>.
      </p>
      <button className="bg-brand-default rounded-2xl inline-flex justify-center items-center gap-2 py-4 px-5 text-grey-10 text-lg font-semibold">
        <Image src="/lock.svg" alt="" height={20} width={20} />
        Confirm & Pay
      </button>
    </div>
  );
};

export default Payable;
