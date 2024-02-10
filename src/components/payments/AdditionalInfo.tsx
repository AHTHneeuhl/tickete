const AdditionalInfo: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col">
        <h3 className="text-grey-primary font-semibold text-2xl pb-4">
          Additional Information
        </h3>
        <p className="text-grey-secondary text-base font-normal pb-4">
          We need a few more details to complete your reservation.
        </p>
      </div>
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7">
        <input
          className="rounded-xl sm:rounded-2xl text-sm sm:text-base border border-border-grey-default p-4 col-span-1 focus:outline-none"
          type="text"
          placeholder="Input label *"
          required
        />
        <input
          className="rounded-xl sm:rounded-2xl text-sm sm:text-base border border-border-grey-default p-4 col-span-1 focus:outline-none"
          type="text"
          placeholder="Select *"
          required
        />
        <input
          className="rounded-xl sm:rounded-2xl text-sm sm:text-base border border-border-grey-default p-4 col-span-1 sm:col-span-2 focus:outline-none"
          type="text"
          placeholder="Multiselect *"
          required
        />
      </form>
      <hr className="text-divider-default" />
    </div>
  );
};

export default AdditionalInfo;
