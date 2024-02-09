import Image from "next/image";

type TProps = {
  title: string;
  pictures: string[];
  ticketType: string;
  date: string;
  time: string;
  totalGuests: number;
  rating: number;
  ratedBy: number;
  category: string;
};

const PlaceCard: React.FC<TProps> = ({
  title,
  pictures,
  ticketType,
  date,
  time,
  totalGuests,
}) => {
  return (
    <div className="rounded-2xl border border-border-grey-default p-4">
      <Image src="/place.png" alt="" height={198} width={352} />
      <div className="flex flex-col gap-6">
        <h3 className="font-semibold text-base">{title}</h3>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center gap-2">
            <Image src="/ticket.svg" alt="" height={20} width={20} />
            <h4 className="text-sm font-semibold">{ticketType}</h4>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Image src="/calendar.svg" alt="" height={20} width={20} />
            <h4 className="text-sm font-semibold">{date}</h4>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Image src="/clock.svg" alt="" height={20} width={20} />
            <h4 className="text-sm font-semibold">{time}</h4>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Image src="/people.svg" alt="" height={20} width={20} />
            <h4 className="text-sm font-semibold">{totalGuests} guests</h4>
          </div>
        </div>
      </div>
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
    </div>
  );
};

export default PlaceCard;
