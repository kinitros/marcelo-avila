import { FooterTop } from "@/sections/Footer/components/FooterTop";
import { FooterLinks } from "@/sections/Footer/components/FooterLinks";
import { FooterBottom } from "@/sections/Footer/components/FooterBottom";

export const Footer = () => {
  return (
    <footer className="box-border caret-transparent before:accent-auto before:box-border before:caret-transparent before:clear-both before:text-zinc-800 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-apple_system">
      <div className="relative box-border caret-transparent flex flex-col max-w-full w-full border-neutral-200 overflow-hidden mx-auto border-t border-solid">
        <div className="box-border caret-transparent gap-x-5 flex flex-col grow flex-wrap h-full max-w-full px-5 min-h-[auto] min-w-[auto] gap-y-5 w-full mx-auto pt-[50px] pb-32 md:px-0 md:flex-nowrap md:max-w-[1216px]">
          <FooterTop />
          <FooterLinks />
          <FooterBottom />
          <div className="absolute box-border caret-transparent gap-x-5 max-w-full gap-y-5 translate-x-[-50.0%] translate-y-[30.0%] w-[110%] left-2/4 bottom-0">
            <div className="box-border caret-transparent text-center">
              <div className="text-sky-300 box-border caret-transparent inline-block leading-4">
                <img
                  src="https://c.animaapp.com/mmaw5r5q6lUknB/assets/icon-43.svg"
                  alt="Icon"
                  className="relative box-border caret-transparent h-full -translate-x-5 align-baseline"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
