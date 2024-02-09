import Image from "next/image";

const ChatWithUS: React.FC = () => {
  return (
    <div className="col-span-5 flex flex-col gap-6">
      <h3 className="text-grey-primary font-semibold text-2xl">
        Frequently Asked Questions
      </h3>
      <p className="text-grey-secondary text-base font-normal pb-4">
        Here are some of our most asked questions.
      </p>
      <div className="bg-bg-grey-default p-6 rounded-2xl flex flex-row justify-between items-start">
        <div className="flex flex-col gap-4">
          <h4 className="text-neutral-900 text-xl font-semibold">
            Still need help?
            <br />
            We&apos;re here for you.
          </h4>
          <button className="px-4 py-3 rounded-xl bg-brand-default text-base font-semibold text-grey-10 border shadow">
            Chat with Us
          </button>
        </div>
        <Image src="/about-illustration.svg" alt="" height={105} width={144} />
      </div>
    </div>
  );
};

export default ChatWithUS;
