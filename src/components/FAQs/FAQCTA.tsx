import ChatWithUS from "./ChatWithUs";

const FAQCTA: React.FC = () => {
  return (
    <div className="col-span-5 flex flex-col gap-6">
      <h3 className="text-grey-primary font-semibold text-xl sm:text-2xl">
        Frequently Asked Questions
      </h3>
      <p className="text-grey-secondary text-sm sm:text-base font-normal pb-4">
        Here are some of our most asked questions.
      </p>
      <ChatWithUS />
    </div>
  );
};

export default FAQCTA;
