export const JobsCTA = () => {
  return (
    <div className="relative self-center shadow-[rgba(0,0,0,0)_108px_165px_55px_0px,rgba(0,0,0,0.01)_69px_105px_50px_0px,rgba(0,0,0,0.02)_39px_59px_43px_0px,rgba(0,0,0,0.03)_17px_26px_32px_0px,rgba(0,0,0,0.04)_4px_7px_17px_0px] box-border caret-transparent gap-x-0 flex flex-wrap min-h-[auto] gap-y-0 w-full overflow-hidden rounded-xl md:self-auto md:flex-nowrap md:w-[47%]">
      <div className="relative bg-red-100 bg-cover box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-end min-h-[auto] gap-y-5 w-full bg-center pt-2 md:flex-nowrap md:w-[46%]">
        <div className="relative self-start box-border caret-transparent gap-x-5 max-w-full min-h-[auto] gap-y-5 text-center w-[193px] md:self-end md:w-full">
          <img
            src="/images/slider.jpg"
            alt=""
            className="aspect-[auto_407_/_512] box-border caret-transparent inline-block max-w-full w-[407px]"
          />
        </div>
        <div className="absolute box-border caret-transparent gap-x-5 leading-[0px] max-w-full gap-y-5 translate-x-[-50.0%] translate-y-[-20.0%] left-2/4 top-2/4">
          <div className="box-border caret-transparent text-center">
            <div className="text-sky-300 text-[53px] box-border caret-transparent inline-block leading-[53px] md:text-[56px] md:leading-[56px]">
              <img
                src="/icons/icon-35.svg"
                alt="Icon"
                className="relative text-[53px] box-border caret-transparent h-[53px] leading-[53px] align-baseline md:text-[56px] md:h-14 md:leading-[56px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-end min-h-[auto] gap-y-5 w-full p-8 md:flex-nowrap md:w-[54%]">
        <div className="relative box-border caret-transparent gap-x-5 max-w-full min-h-[auto] gap-y-5">
          <div className="box-border caret-transparent">
            <div className="box-border caret-transparent w-full">
              <h3 className="text-neutral-950 text-xl md:text-2xl font-medium box-border caret-transparent gap-x-2.5 flex flex-col leading-[1.3] gap-y-2.5 mt-2 mb-2.5 font-aalto_sans_pro after:accent-auto after:bg-blue-700 after:box-border after:caret-transparent after:text-neutral-950 after:block after:text-2xl after:not-italic after:normal-nums after:font-medium after:h-0.5 after:tracking-[normal] after:leading-[28.8px] after:list-outside after:list-disc after:min-h-[auto] after:min-w-[auto] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:w-5 after:border-separate after:font-aalto_sans_pro">
                Direito à Saúde
              </h3>
              <p className="text-neutral-500 box-border caret-transparent font-montserrat">
                Ações contra planos de saúde, defesa do consumidor e
                garantia dos seus direitos à saúde.
              </p>
            </div>
          </div>
        </div>
        <div className="relative box-border caret-transparent gap-x-5 max-w-full min-h-[auto] gap-y-5">
          <a
            href="#contato"
            className="text-blue-700 text-lg font-medium bg-transparent box-border caret-transparent inline-block fill-blue-700 leading-[18px] text-center rounded-[3px] font-aalto_sans_pro"
          >
            <span className="box-border caret-transparent gap-x-[5px] flex fill-blue-700 flex-row-reverse justify-center gap-y-[5px]">
              <span className="items-center box-border caret-transparent flex fill-blue-700 min-h-[auto] min-w-[auto]">
                <img
                  src="/icons/icon-26.svg"
                  alt="Icon"
                  className="box-border caret-transparent align-baseline w-[18px]"
                />
              </span>
              <span className="box-border caret-transparent block fill-blue-700 min-h-[auto] min-w-[auto]">
                Agende uma consulta
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
