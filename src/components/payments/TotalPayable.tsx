const TotalPayable: React.FC = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row items-center justify-between">
        <h4 className="text-lg font-semibold text-grey-primary">
          Total payable
        </h4>
        <h4 className="text-lg font-semibold text-grey-primary">$XXX</h4>
      </div>
      <div>
        <h4>You will be charged in AED</h4>
        <p>
          The price shown here is in US Dollar (USD) as per the current
          conversion rate. You will be charged in United Arab Emirates Dirham
          (AED).
        </p>
      </div>
    </div>
  );
};

export default TotalPayable;
