import { PlaceCard } from "@/components";
import AdditionalInfo from "./AdditionalInfo";
import FreeCancel from "./FreeCancel";
import PaymentMethods from "./PaymentMethods";
import UserDetails from "./UserDetails";

const ConfirmAndPay: React.FC = () => {
  return (
    <div className="px-32 grid grid-cols-3 gap-6 mt-20">
      <div className="col-span-2 flex flex-col gap-8">
        <h1 className="font-bold text-5xl font-serif text-neutral-900">
          Confirm & Pay
        </h1>
        <FreeCancel cancelTill="13th, December, 2024" />
        <UserDetails />
        <AdditionalInfo />
        <PaymentMethods />
      </div>
      <div className="col-span-1">
        <PlaceCard
          title="Amsterdam open boat canal cruise - Live Guiye - from Anne Frank Housef"
          ticketType="<ticket type - variant>"
          date="<day>, <month> <date>"
          time="<time>"
          duration="<duration>"
          totalGuests={5}
          rating={4.9}
          ratedBy={45000}
          category="<category>"
          pictures={[""]}
        />
      </div>
    </div>
  );
};

export default ConfirmAndPay;
