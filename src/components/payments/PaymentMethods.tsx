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
      <PaymentMethod />
    </div>
  );
};

export default PaymentMethods;
