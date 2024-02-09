const AdditionalInfo: React.FC = () => {
  return (
    <div>
      <h3 className="text-grey-primary font-semibold text-2xl pb-4">
        Additional Information
      </h3>
      <p className="text-grey-secondary text-base font-normal pb-4">
        We need a few more details to complete your reservation.
      </p>
      <form>
        <input
          className="rounded-xl border border-border-grey-default p-3"
          type="text"
          placeholder="Input label"
          required
        />
        <input
          className="rounded-xl border border-border-grey-default p-3"
          type="text"
          placeholder="Select"
          required
        />
        <input
          className="rounded-xl border border-border-grey-default p-3"
          type="text"
          placeholder="Multiselect"
          required
        />
      </form>
    </div>
  );
};

export default AdditionalInfo;
