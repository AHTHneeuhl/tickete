const ChatWithUS: React.FC = () => {
  return (
    <div className="grid col-span-1">
      <h3 className="text-neutral-900 font-semibold text-2xl">
        Frequently Asked Questions
      </h3>
      <p className="text-neutral-700 text-sm">
        Here are some of our most asked questions.
      </p>
      <div className="bg-neutral-100 p-4 rounded-xl">
        <h4 className="text-neutral-900 text-xl font-semibold">
          Still need help?
          <br />
          We&apos;re here for you.
        </h4>
        <button className="px-4 py-3 rounded-2xl bg-black text-white border shadow">
          Chat with Us
        </button>
      </div>
    </div>
  );
};

export default ChatWithUS;
