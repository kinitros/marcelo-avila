import { FAQText } from "@/sections/FAQSection/components/FAQText";
import { FAQList } from "@/sections/FAQSection/components/FAQList";

export const FAQSection = () => {
  return (
    <div className="relative bg-blue-50 box-border caret-transparent flex flex-col max-w-full w-full mx-auto">
      <div className="box-border caret-transparent gap-x-5 flex flex-col grow flex-wrap h-full justify-between max-w-full px-5 min-h-[auto] min-w-[auto] gap-y-5 w-full mx-auto py-8 md:px-0 md:flex-row md:flex-nowrap md:max-w-6xl md:py-20">
        <FAQText />
        <FAQList />
        <div className="relative box-border caret-transparent gap-x-5 flex flex-col flex-wrap min-h-[auto] gap-y-5 w-full border border-zinc-300 p-[25.6px] rounded-lg border-solid md:hidden md:flex-nowrap md:min-h-0 md:w-[380px]">
          <div className="relative box-border caret-transparent gap-x-5 max-w-full min-h-[auto] gap-y-5 w-full md:min-h-0">
            <div className="box-border caret-transparent gap-x-3.5 flex flex-row gap-y-3.5 md:flex-col">
              <div className="box-border caret-transparent shrink-0 leading-[0px] min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
                <span className="text-sky-300 text-2xl box-border caret-transparent inline-block fill-sky-300 leading-6 text-center">
                  <img
                    src="/icons/icon-36.svg"
                    alt="Icon"
                    className="relative box-border caret-transparent h-6 align-baseline w-6"
                  />
                </span>
              </div>
              <div className="box-border caret-transparent grow min-h-[auto] min-w-[auto] w-full md:min-h-0 md:min-w-0">
                <h3 className="text-neutral-950 text-2xl font-medium box-border caret-transparent leading-[28.8px] mb-[9px] font-aalto_sans_pro">
                  <span className="box-border caret-transparent">
                    Não encontrou o que gostaria?{" "}
                  </span>
                </h3>
                <p className="text-neutral-500 box-border caret-transparent font-montserrat">
                  Fale com nosso time.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="relative box-border caret-transparent gap-x-5 max-w-full min-h-[auto] gap-y-5 md:min-h-0">
            <a
              href="https://wa.me/5521972728787?text=Ol%C3%A1,%20quero%20saber%20mais%20sobre%20os%20servi%C3%A7os%20do%20%C3%81vila%20Nascimento%20Advocacia!"
              className="text-blue-700 text-lg font-medium bg-transparent box-border caret-transparent inline-block fill-blue-700 leading-[18px] text-center w-full border border-blue-700 p-[15px] rounded-[100px] border-solid font-aalto_sans_pro md:w-auto md:px-[42px] md:py-4"
            >
              <span className="box-border caret-transparent gap-x-[5px] flex fill-blue-700 justify-center gap-y-[5px]">
                <span className="box-border caret-transparent block fill-blue-700 min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
                  Quero tirar outra dúvida!
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
