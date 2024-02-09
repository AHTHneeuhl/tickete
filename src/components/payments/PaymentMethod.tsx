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
      <p className="text-xs font-semibold text-grey-secondary">
        You will be charged in AED
      </p>
      <p className="text-xs font-normal text-grey-secondary">
        By clicking &ldquo;confirm & pay&rdquo;, you agree{" "}
        <span className="text-indigo-900">
          to Tickete&apos;s general terms and conditions
        </span>{" "}
        and <span className="text-indigo-900">cancellation policy</span>.
      </p>
    </div>
  );
};

export default PaymentMethod;
