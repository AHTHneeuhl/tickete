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
    <div className="rounded">
      <h3 className="font-semibold">{title}</h3>
      <h4 className="text-sm font-semibold">{ticketType}</h4>
      <h4 className="text-sm font-semibold">{date}</h4>
      <h4 className="text-sm font-semibold">{time}</h4>
      <h4 className="text-sm font-semibold">{totalGuests} guests</h4>
    </div>
  );
};

export default PlaceCard;
