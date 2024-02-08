import AdditionalInfo from "./AdditionalInfo";
import FreeCancel from "./FreeCancel";
import PaymentMethods from "./PaymentMethods";
import UserDetails from "./UserDetails";

const ConfirmAndPay: React.FC = () => {
  return (
    <div>
      <h1 className="font-bold text-5xl text-neutral-900">Confirm & Pay</h1>
      <FreeCancel cancelTill="13th, December, 2024" />
      <UserDetails />
      <AdditionalInfo />
      <PaymentMethods />
    </div>
  );
};

export default ConfirmAndPay;
