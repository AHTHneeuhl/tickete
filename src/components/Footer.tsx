import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <div className="px-32 bg-brand-default">
      <div className="pt-10 pb-6">
        <Image src="/logo.svg" alt="" width={200} height={50} />
      </div>
      <div className="flex flex-row items-center justify-start py-4 bg-brand-default text-grey-secondary text-sm font-semibold">
        Made with ❤️ - Privacy Policy - Terms of Usage - Cancellation Policy -
        Sitemap
      </div>
    </div>
  );
};

export default Footer;
