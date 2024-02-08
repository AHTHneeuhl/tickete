type TProps = {
  cancelTill: string;
};

const FreeCancel: React.FC<TProps> = ({ cancelTill }) => {
  return (
    <div className="rounded-2xl border p-4 flex flex-col items-start">
      <h4 className="text-neutral-900 font-semibold">Free Cancellation</h4>
      <p className="text-neutral-700 text-sm">
        Tickets can be cancelled by {cancelTill}.
      </p>
    </div>
  );
};

export default FreeCancel;
