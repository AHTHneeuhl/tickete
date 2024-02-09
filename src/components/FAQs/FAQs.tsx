import ChatWithUS from "./ChatWithUs";
import FAQList from "./FAQList";

const FAQs: React.FC = () => {
  return (
    <div className="px-32 py-20">
      <div className="grid grid-cols-12 gap-8">
        <ChatWithUS />
        <FAQList />
      </div>
      <hr className="text-divider-default mt-6" />
    </div>
  );
};

export default FAQs;
