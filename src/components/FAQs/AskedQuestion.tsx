type TProps = {
  question: string;
  answer: string;
};

const AskedQuestion: React.FC<TProps> = ({ question, answer }) => {
  return (
    <div className="rounded-xl border p-4">
      <p className="text-grey-primary text-lg font-semibold">{question}</p>
      <p className="text-base text-grey-secondary">{answer}</p>
    </div>
  );
};

export default AskedQuestion;
