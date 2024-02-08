import ChatWithUS from "./ChatWithUs";
import FAQList from "./FAQList";

const FAQs: React.FC = () => {
  return (
    <div className="px-32 py-6">
      <div className="grid grid-cols-3 gap-8">
        <ChatWithUS />
        <FAQList />
      </div>
      <hr className="bg-black mt-6" />
    </div>
  );
};

export default FAQs;
