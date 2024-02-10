import ChatWithUS from "./ChatWithUs";
import FAQCTA from "./FAQCTA";
import FAQList from "./FAQList";

const FAQs: React.FC = () => {
  return (
    <div className="px-4 sm:px-32 py-20">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8">
        <div className="col-span-1 sm:col-span-5 flex flex-col gap-6">
          <FAQCTA />
          <div className="hidden sm:block">
            <ChatWithUS />
          </div>
        </div>
        <FAQList />
        <div className="block sm:hidden">
          <ChatWithUS />
        </div>
      </div>
      <hr className="text-divider-default mt-6" />
    </div>
  );
};

export default FAQs;
