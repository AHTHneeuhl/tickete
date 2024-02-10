import { formatNumber } from "@/lib/utils";
import Image from "next/image";
import Payable from "./Payable";
import PaymentSummary from "./PaymentSummary";
import BestSeller from "./BestSeller";

type TProps = {
  title: string;
  pictures: string[];
  ticketType: string;
  duration: string;
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
  rating,
  ticketType,
  date,
  time,
  totalGuests,
  ratedBy,
  category,
}) => {
  return (
    <div className="rounded-2xl border border-border-grey-default p-4 flex flex-col gap-4">
      <div className="relative">
        <BestSeller />
        <Image src="/place.png" alt="" height={198} width={352} />
      </div>
      <div className="flex flex-col gap-[2px]">
        <div className="flex flex-row gap-1">
          <Image src="/rating-star.svg" alt="" height={14} width={14} />
          <p className="text-grey-primary text-sm font-semibold">{rating}</p>
          <p className="text-grey-secondary text-sm font-normal">
            {formatNumber(ratedBy)}
          </p>
          <p className="text-grey-secondary text-sm font-normal">{category}</p>
        </div>
        <h3 className="font-semibold text-base">{title}</h3>
      </div>
      <div className="flex flex-col gap-6 border-dashed border-b pb-4 border-border-grey-default">
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
      <PaymentSummary />
      <Payable />
    </div>
  );
};

export default PlaceCard;
