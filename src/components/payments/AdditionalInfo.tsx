const AdditionalInfo: React.FC = () => {
  return (
    <div>
      <h3 className="text-neutral-900 font-semibold text-2xl">
        Additional Information
      </h3>
      <p className="text-neutral-700 text-sm">
        We need a few more details to complete your reservation.
      </p>
      <form>
        <input
          className="rounded-xl border p-3"
          type="text"
          placeholder="Input label"
          required
        />
        <input
          className="rounded-xl border p-3"
          type="text"
          placeholder="Select"
          required
        />
        <input
          className="rounded-xl border p-3"
          type="text"
          placeholder="Multiselect"
          required
        />
      </form>
    </div>
  );
};

export default AdditionalInfo;
