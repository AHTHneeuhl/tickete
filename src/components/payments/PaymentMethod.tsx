const PaymentMethod: React.FC = () => {
  return (
    <div className="border border-neutral-950 rounded-xl p-4">
      <h4 className="text-neutral-900">Credit & debit card</h4>
      <form>
        <input
          className="rounded-xl border p-3"
          type="text"
          placeholder="Name of card"
          required
        />
        <input
          className="rounded-xl border p-3"
          type="text"
          placeholder="Card number"
          required
        />
        <input
          className="rounded-xl border p-3"
          type="text"
          placeholder="Expiry date"
          required
        />
        <input
          className="rounded-xl border p-3"
          type="text"
          placeholder="<CVV/CVC>"
          required
        />
      </form>
      <h3>Total payable: $XXX</h3>
      <p>You will be charged in AED</p>
      <p>
        By clicking &ldquo;confirm & pay&rdquo;, you agree to Tickete&apos;s
        general terms and conditions and cancellation policy.
      </p>
    </div>
  );
};

export default PaymentMethod;
