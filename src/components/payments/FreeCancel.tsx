import Image from "next/image";

type TProps = {
  cancelTill: string;
};

const FreeCancel: React.FC<TProps> = ({ cancelTill }) => {
  return (
    <div className="rounded-2xl border border-border-grey-default p-4 flex flex-row justify-between items-start gap-3">
      <div className="flex flex-col items-start gap-1">
        <h4 className="text-grey-primary text-sm font-semibold">
          Free Cancellation
        </h4>
        <p className="text-grey-secondary text-sm font-normal">
          Tickets can be cancelled by {cancelTill}.
        </p>
      </div>
      <Image src="/info.svg" alt="" width={16} height={16} />
    </div>
  );
};

export default FreeCancel;
