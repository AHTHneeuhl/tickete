type TProps = {
  cancelTill: string;
};

const FreeCancel: React.FC<TProps> = ({ cancelTill }) => {
  return (
    <div className="rounded-2xl border p-4 flex items-start justify-center">
      <h4>Free Cancellation</h4>
      <p>Tickets can be cancelled by {cancelTill}.</p>
    </div>
  );
};

export default FreeCancel;
