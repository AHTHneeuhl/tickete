import ComingSoon from "./ComingSoon";
import PaymentMethod from "./PaymentMethod";

const PaymentMethods: React.FC = () => {
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
      </div>
    </div>
  );
};

export default PaymentMethods;
