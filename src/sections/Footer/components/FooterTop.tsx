import { FooterLogo } from "@/sections/Footer/components/FooterLogo";
import { FooterSocial } from "@/sections/Footer/components/FooterSocial";

export const FooterTop = () => {
  return (
    <div className="relative items-center box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-between min-h-[auto] gap-y-5 w-full border-neutral-200 pb-[41.6px] border-b border-solid md:flex-row md:flex-nowrap">
      <FooterLogo />
      <FooterSocial />
    </div>
  );
};
