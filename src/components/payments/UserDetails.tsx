const UserDetails: React.FC = () => {
  return (
    <div>
      <h3 className="font-semibold text-neutral-900 text-2xl">
        Enter your details
      </h3>
      <p className="text-sm text-neutral-700">
        We&apos;ll be sending your tickets to the details below. Booking for a
        friend? Add their details.
      </p>
      <form>
        <input
          className="rounded-xl border p-3"
          type="text"
          placeholder="Full name"
          required
        />
        <input
          className="rounded-xl border p-3"
          type="text"
          placeholder="Country code"
          required
        />
        <input
          className="rounded-xl border p-3"
          type="number"
          placeholder="Phone number"
          required
        />
        <input
          className="rounded-xl border p-3"
          type="email"
          placeholder="Email"
          required
        />
        <input
          className="rounded-xl border p-3"
          type="email"
          placeholder="Confirm email"
          required
        />
      </form>
    </div>
  );
};

export default UserDetails;
