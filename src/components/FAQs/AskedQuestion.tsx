type TProps = {
  question: string;
  answer?: string;
};

const AskedQuestion: React.FC<TProps> = ({ question, answer }) => {
  return (
    <div className="rounded-2xl flex flex-col border border-border-grey-default py-6 px-7 gap-5">
      <p className="text-grey-primary text-lg font-semibold">{question}</p>
      {answer ? (
        <p className="text-base font-normal text-grey-secondary">{answer}</p>
      ) : null}
    </div>
  );
};

export default AskedQuestion;
