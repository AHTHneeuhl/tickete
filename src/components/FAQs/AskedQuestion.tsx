type TProps = {
  question: string;
  answer: string;
};

const AskedQuestion: React.FC<TProps> = ({ question, answer }) => {
  return (
    <div className="rounded-xl border p-4">
      <p className="text-neutral-900 font-semibold">{question}</p>
      <p className="text-sm text-neutral-700">{answer}</p>
    </div>
  );
};

export default AskedQuestion;
