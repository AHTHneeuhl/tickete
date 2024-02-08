type TProps = {
  question: string;
  answer: string;
};

const AskedQuestion: React.FC<TProps> = ({ question, answer }) => {
  return (
    <div>
      <p>{question}</p>
      <p>{answer}</p>
    </div>
  );
};

export default AskedQuestion;
