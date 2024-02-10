import Image from "next/image";
import ComingSoon from "./ComingSoon";
import PaymentMethod from "./PaymentMethod";
import YouSaved from "./YouSaved";

const PaymentMethods: React.FC = () => {
  const price = "<price>";

  return (
    <div className="flex flex-col">
      <h3 className="font-semibold text-grey-primary text-2xl pb-4">
        Select your mode of payment
      </h3>
      <p className="text-grey-secondary text-base font-normal pb-4">
        Payments with Tickete are secure and encrypted.
      </p>
      <div className="flex flex-col gap-6">
        <PaymentMethod />
        <ComingSoon method="ApplePay" imageUrl="/apple-pay.svg" />
        <ComingSoon method="GooglePay" imageUrl="/google-pay.svg" />
        <div className="flex flex-col gap-5 items-start">
          <div className="flex sm:hidden flex-row items-start justify-center gap-1 rounded-full border border-green-500 bg-green-100 py-[2px] px-[6px]">
            <Image src="/piggy-bank.svg" alt="" width={14} height={14} />
            <p className="font-semibold text-xs text-green-900">
              You saved {price}
            </p>
          </div>
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
    </div>
  );
};

export default PaymentMethods;
