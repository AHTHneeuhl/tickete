import PaymentMethod from "./PaymentMethod";

const PaymentMethods: React.FC = () => {
  return (
    <div>
      <h3 className="font-semibold text-neutral-900 text-2xl">
        Select your mode of payment
      </h3>
      <p className="text-neutral-700 text-sm">
        Payments with Tickete are secure and encrypted.
      </p>
      <PaymentMethod />
    </div>
  );
};

export default PaymentMethods;
