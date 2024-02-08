const UserDetails: React.FC = () => {
  return (
    <div>
      <h3>Enter your details</h3>
      <p>
        We&apos;ll be sending your tickets to the details below. Booking for a
        friend? Add their details.
      </p>
      <form>
        <input type="text" placeholder="Full name" required />
        <input type="text" placeholder="Country code" required />
        <input type="number" placeholder="Phone number" required />
        <input type="email" placeholder="Email" required />
        <input type="email" placeholder="Confirm email" required />
      </form>
    </div>
  );
};

export default UserDetails;
