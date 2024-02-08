const AdditionalInfo: React.FC = () => {
  return (
    <div>
      <h3>Additional information</h3>
      <p>We need a few more details to complete your reservation.</p>
      <form>
        <input type="text" placeholder="Input label" required />
        <input type="text" placeholder="Select" required />
        <input type="text" placeholder="Multiselect" required />
      </form>
    </div>
  );
};

export default AdditionalInfo;
