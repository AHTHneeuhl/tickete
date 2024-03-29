const UserDetails: React.FC = () => {
  return (
    <div>
      <h3 className="font-semibold text-grey-primary text-xl sm:text-2xl pb-4">
        Enter your details
      </h3>
      <p className="text-grey-secondary text-sm sm:text-base font-normal pb-4">
        We&apos;ll be sending your tickets to the details below. Booking for a
        friend? Add their details.
      </p>
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7">
        <input
          className="rounded-xl sm:rounded-2xl text-sm sm:text-base border border-border-grey-default p-4 col-span-1 sm:col-span-2 focus:outline-none"
          type="text"
          placeholder="Full name *"
          required
        />
        <input
          className="rounded-xl sm:rounded-2xl text-sm sm:text-base border border-border-grey-default p-4 col-span-1 focus:outline-none"
          type="text"
          placeholder="Country code *"
          required
        />
        <input
          className="rounded-xl sm:rounded-2xl text-sm sm:text-base border border-border-grey-default p-4 col-span-1 focus:outline-none"
          type="number"
          placeholder="Phone number *"
          required
        />
        <input
          className="rounded-xl sm:rounded-2xl text-sm sm:text-base border border-border-grey-default p-4 col-span-1 focus:outline-none"
          type="email"
          placeholder="Email *"
          required
        />
        <input
          className="rounded-xl sm:rounded-2xl text-sm sm:text-base border border-border-grey-default p-4 col-span-1 focus:outline-none"
          type="email"
          placeholder="Confirm email *"
          required
        />
      </form>
    </div>
  );
};

export default UserDetails;
