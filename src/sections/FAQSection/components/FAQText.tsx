export const FAQText = () => {
  return (
    <div className="relative self-start box-border caret-transparent gap-x-5 flex flex-col flex-wrap min-h-[auto] gap-y-5 w-full md:flex-nowrap md:w-[45%]">
      <div className="relative self-center box-border caret-transparent gap-x-5 max-w-full min-h-[auto] gap-y-5 w-full z-[2] md:w-[972px]">
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent w-full">
            <h3 className="text-neutral-900 text-2xl font-medium box-border caret-transparent leading-[1.25] mt-2 mb-1 font-aalto_sans_pro md:text-[32px]">
              <span className="text-blue-700 text-xs box-border caret-transparent block leading-[19.6px] mb-4 font-aalto_sans_pro">
                CENTRAL DE AJUDA
              </span>
              Ficou com alguma dúvida?
            </h3>
            <p className="text-stone-700 text-base box-border caret-transparent leading-6 font-montserrat md:text-xl md:leading-[30px]">
              Confira nossas respostas com as perguntas mais frequentes sobre o
              escritório Ávila Nascimento.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="relative box-border caret-transparent gap-x-5 hidden flex-col flex-wrap min-h-0 gap-y-5 w-full border border-zinc-300 p-[25.6px] rounded-lg border-solid md:flex md:flex-nowrap md:min-h-[auto] md:w-[380px]">
        <div className="relative box-border caret-transparent gap-x-5 max-w-full min-h-0 gap-y-5 w-full md:min-h-[auto]">
          <div className="box-border caret-transparent gap-x-3.5 flex flex-row gap-y-3.5 md:flex-col">
            <div className="box-border caret-transparent shrink-0 leading-[0px] min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
              <span className="text-sky-300 text-2xl box-border caret-transparent inline-block fill-sky-300 leading-6 text-center">
                <img
                  src="/icons/icon-36.svg"
                  alt="Icon"
                  className="relative box-border caret-transparent h-6 align-baseline w-6"
                />
              </span>
            </div>
            <div className="box-border caret-transparent grow min-h-0 min-w-0 w-full md:min-h-[auto] md:min-w-[auto]">
              <h3 className="text-neutral-950 text-xl md:text-2xl font-medium box-border caret-transparent leading-[1.3] mb-[9px] font-aalto_sans_pro">
                <span className="box-border caret-transparent">
                  Não encontrou o que gostaria?{" "}
                </span>
              </h3>
              <p className="text-neutral-700 box-border caret-transparent font-montserrat">
                Fale com nosso time.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="relative box-border caret-transparent gap-x-5 max-w-full min-h-0 gap-y-5 md:min-h-[auto]">
          <a
            href="https://wa.me/5521972728787?text=Ol%C3%A1,%20quero%20saber%20mais%20sobre%20os%20servi%C3%A7os%20do%20%C3%81vila%20Nascimento%20Advocacia!"
            className="text-blue-700 text-lg font-medium bg-transparent box-border caret-transparent inline-block fill-blue-700 leading-[18px] text-center w-full border border-blue-700 p-[15px] rounded-[100px] border-solid font-aalto_sans_pro md:w-auto md:px-[42px] md:py-4"
          >
            <span className="box-border caret-transparent gap-x-[5px] flex fill-blue-700 justify-center gap-y-[5px]">
              <span className="box-border caret-transparent block fill-blue-700 min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
                Quero tirar outra dúvida!
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
