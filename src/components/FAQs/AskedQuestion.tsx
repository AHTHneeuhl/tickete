import Image from "next/image";

type TProps = {
  question: string;
  answer?: string;
};

const AskedQuestion: React.FC<TProps> = ({ question, answer }) => {
  return (
    <div className="rounded-2xl border flex flex-row gap-5 sm:gap-6 items-start border-border-grey-default py-6 px-7">
      {answer ? (
        <Image
          src="/close.svg"
          alt=""
          width={18}
          height={18}
          className="w-5 h-5 sm:w-6 sm:h-6"
        />
      ) : (
        <Image
          src="/plus.svg"
          alt=""
          width={18}
          height={18}
          className="w-5 h-5 sm:w-6 sm:h-6"
        />
      )}
      <div className="flex flex-col gap-5">
        <p className="text-grey-primary text-sm sm:text-lg font-semibold">
          {question}
        </p>
        {answer ? (
          <p className="text-sm sm:text-base font-normal text-grey-secondary">
            {answer}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default AskedQuestion;
