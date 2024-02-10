import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <div className="px-5 sm:px-32 bg-brand-default">
      <div className="pt-10 pb-6">
        <Image
          src="/logo.svg"
          alt=""
          width={200}
          height={50}
          className="h-8 w-32 sm:h-12 sm:w-48"
        />
      </div>
      <div className="hidden sm:flex flex-col gap-4 py-4 bg-brand-default text-grey-secondary text-xs sm:text-sm font-semibold">
        <ul className="flex flex-row gap-6 list-disc">
          <li className="text-xs sm:text-sm font-semibold first:list-none">
            Made with ❤️
          </li>
          <li className="text-xs sm:text-sm font-semibold">Privacy Policy</li>
          <li className="text-xs sm:text-sm font-semibold">Terms of Usage</li>
          <li className="text-xs sm:text-sm font-semibold">
            Cancellation Policy
          </li>
          <li className="text-xs sm:text-sm font-semibold">Sitemap</li>
        </ul>
      </div>
      <div className="flex sm:hidden flex-col gap-4 py-4 bg-brand-default text-grey-secondary text-xs sm:text-sm font-semibold">
        <ul className="flex flex-row gap-6 list-disc">
          <li className="text-xs sm:text-sm font-semibold first:list-none">
            Privacy Policy
          </li>
          <li className="text-xs sm:text-sm font-semibold">Terms of Usage</li>
          <li className="text-xs sm:text-sm font-semibold">
            Cancellation Policy
          </li>
          <li className="text-xs sm:text-sm font-semibold">Sitemap</li>
        </ul>
        <p className="text-xs sm:text-sm font-semibold">Made with ❤️</p>
      </div>
    </div>
  );
};

export default Footer;
