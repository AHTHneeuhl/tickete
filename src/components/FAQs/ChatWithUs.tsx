import Image from "next/image";

const ChatWithUS: React.FC = ({}) => {
  return (
    <div className="bg-bg-grey-default p-6 rounded-2xl flex flex-row justify-between items-start">
      <div className="flex flex-col gap-4">
        <h4 className="text-neutral-900 text-sm sm:text-xl font-semibold">
          Still need help?
          <br />
          We&apos;re here for you.
        </h4>
        <button className="px-4 py-3 rounded-xl bg-brand-default text-sm sm:text-base font-semibold text-grey-10 border shadow">
          Chat with Us
        </button>
      </div>
      <Image src="/about-illustration.svg" alt="" height={105} width={144} />
    </div>
  );
};

export default ChatWithUS;
