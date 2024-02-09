import Image from "next/image";

const PaymentMethod: React.FC = () => {
  return (
    <div className="border border-border-grey-selected rounded-xl pt-7 pb-8 px-6 flex flex-col gap-8">
      <div className="flex flex-row gap-3 items-center">
        <Image src="/credit-card.svg" alt="" height={24} width={35} />
        <h4 className="text-grey-primary text-base font-semibold">
          Credit & debit card
        </h4>
      </div>
      <form className="grid grid-cols-2 gap-7">
        <input
          className="rounded-2xl border border-border-grey-default p-4 col-span-1"
          type="text"
          placeholder="Name of card"
          required
        />
        <input
          className="rounded-2xl border border-border-grey-default p-4 col-span-1"
          type="text"
          placeholder="Card number"
          required
        />
        <input
          className="rounded-2xl border border-border-grey-default p-4 col-span-1"
          type="text"
          placeholder="Expiry date"
          required
        />
        <input
          className="rounded-2xl border border-border-grey-default p-4 col-span-1"
          type="text"
          placeholder="<CVV/CVC>"
          required
        />
      </form>
      <hr className="text-divider-default" />
      <div className="flex flex-col gap-5 items-start">
        <div className="flex flex-row gap-2 items-center justify-between">
          <h4 className="text-lg font-semibold text-grey-primary">
            Total payable:
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
        <button className="bg-brand-default justify-center rounded-2xl inline-flex items-center gap-2 py-4 px-5 text-grey-10 text-lg font-semibold">
          <Image src="/lock.svg" alt="" height={20} width={20} />
          Confirm & Pay
        </button>
      </div>
    </div>
  );
};

export default PaymentMethod;
