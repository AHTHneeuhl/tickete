import Image from "next/image";

const PaymentMethod: React.FC = () => {
  return (
    <div className="border border-border-grey-selected rounded-xl p-4">
      <h4 className="text-neutral-900">Credit & debit card</h4>
      <form>
        <input
          className="rounded-xl border border-border-grey-default p-3"
          type="text"
          placeholder="Name of card"
          required
        />
        <input
          className="rounded-xl border border-border-grey-default p-3"
          type="text"
          placeholder="Card number"
          required
        />
        <input
          className="rounded-xl border border-border-grey-default p-3"
          type="text"
          placeholder="Expiry date"
          required
        />
        <input
          className="rounded-xl border border-border-grey-default p-3"
          type="text"
          placeholder="<CVV/CVC>"
          required
        />
      </form>
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
