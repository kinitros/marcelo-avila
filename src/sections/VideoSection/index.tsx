export const VideoSection = () => {
  return (
    <div className="relative bg-neutral-900 box-border caret-transparent flex flex-col max-w-full w-full mx-auto">
      <div className="box-border caret-transparent gap-x-5 flex flex-col grow flex-wrap h-full justify-between max-w-full px-5 min-h-[auto] min-w-[auto] gap-y-5 w-full mx-auto py-8 md:px-0 md:flex-row md:flex-nowrap md:max-w-6xl md:py-24">
        <div className="relative self-center box-border caret-transparent gap-x-5 flex flex-col flex-wrap min-h-[auto] gap-y-5 w-full p-2.5 md:flex-nowrap md:w-[41%]">
          <div className="relative box-border caret-transparent gap-x-5 max-w-full min-h-[auto] gap-y-5 w-full mb-4 md:mb-0 before:accent-auto before:bg-blue-700 before:box-border before:caret-transparent before:text-zinc-800 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-px before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-[500%] before:border-separate before:right-[60px] before:-top-5 before:font-apple_system">
            <div className="box-border caret-transparent">
              <div className="box-border caret-transparent w-full">
                <h3 className="text-stone-50 text-[32px] font-medium box-border caret-transparent leading-[38.4px] mt-2 mb-[5px] font-aalto_sans_pro md:text-[40px] md:leading-[48px]">
                  Veja como nosso processo resolve seu problema
                </h3>
                <p className="text-stone-400 text-lg box-border caret-transparent leading-[25.2px] font-aalto_sans_pro md:text-xl md:leading-[30px]">
                  Conheça nosso escritório e como podemos ajudar você a proteger
                  seus direitos.
                </p>
              </div>
            </div>
          </div>
          <div className="relative box-border caret-transparent gap-x-5 max-w-full min-h-[auto] gap-y-5 w-full md:w-auto">
            <a
              role="button"
              className="text-blue-700 text-lg font-medium bg-transparent box-border caret-transparent inline-block fill-blue-700 leading-[18px] text-center w-full border border-blue-700 px-5 py-3.5 rounded-[100px] border-solid font-aalto_sans_pro md:w-auto md:px-[42px] md:py-4"
            >
              <span className="box-border caret-transparent gap-x-[5px] flex fill-blue-700 flex-row-reverse justify-center gap-y-[5px]">
                <span className="items-center box-border caret-transparent flex fill-blue-700 min-h-[auto] min-w-[auto]">
                  <img
                    src="https://c.animaapp.com/mmaw5r5q6lUknB/assets/icon-26.svg"
                    alt="Icon"
                    className="box-border caret-transparent align-baseline w-[18px]"
                  />
                </span>
                <span className="box-border caret-transparent block fill-blue-700 min-h-[auto] min-w-[auto]">
                  Assista o vídeo ao lado
                </span>
              </span>
            </a>
          </div>
        </div>
        <div className="relative self-center box-border caret-transparent gap-x-5 max-w-full min-h-[auto] gap-y-5 w-full overflow-hidden rounded-xl md:w-[55%]">
          <div className="aspect-[1.77777_/_1] box-border caret-transparent">
            <div className="box-border caret-transparent"></div>
            <div className="absolute bg-cover box-border caret-transparent text-center bg-center inset-0">
              <div
                role="button"
                aria-label="Reproduzir vídeo"
                className="absolute box-border caret-transparent translate-x-[-50.0%] translate-y-[-50.0%] left-[88%] top-[80%]"
              >
                <img
                  src="https://c.animaapp.com/mmaw5r5q6lUknB/assets/icon-23.svg"
                  alt="Icon"
                  className="box-border caret-transparent inline h-[115px] opacity-80 align-baseline w-[115px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
