import { fAQs } from "@/config";
import AskedQuestion from "./AskedQuestion";

const FAQList: React.FC = () => {
  return (
    <div className="grid col-span-1 sm:col-span-7">
      <div className="flex flex-col gap-4">
        {fAQs.map(({ question, answer }) => (
          <AskedQuestion key={question} question={question} answer={answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQList;
