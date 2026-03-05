export const HeroText = () => {
  return (
    <div className="relative bg-white box-border caret-transparent gap-x-4 flex flex-wrap min-h-[auto] gap-y-4 w-full px-5 py-8 rounded-r-none md:gap-x-5 md:gap-y-5 md:w-[591px] md:px-8 md:rounded-r-[80px] before:accent-auto before:bg-white before:box-border before:caret-transparent before:text-zinc-800 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:translate-x-[-1856.25px] before:visible before:w-[500%] before:border-separate before:left-0 before:top-0 before:font-apple_system before:md:translate-x-[-2925.45px]">
      <div className="relative box-border caret-transparent gap-x-2.5 max-w-full min-h-[auto] gap-y-2.5 w-full mb-4 md:gap-x-5 md:gap-y-5 md:mb-0">
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent w-full">
            <h3 className="text-neutral-900 text-2xl font-medium box-border caret-transparent leading-[28.8px] mt-2 mb-[5px] font-aalto_sans_pro md:text-[32px] md:leading-[38.4px]">
              <span className="text-blue-700 text-xs box-border caret-transparent block leading-[19.6px] mb-1 font-aalto_sans_pro">
                ÁVILA NASCIMENTO ADVOCACIA
              </span>
              Proteja seus direitos com quem tem{" "}
              <span className="text-blue-700 text-2xl box-border caret-transparent leading-[28.8px] md:text-[32px] md:leading-[38.4px]">
                {" "}
                mais de 28 anos de experiência.
              </span>
            </h3>
            <p className="text-stone-500 text-base box-border caret-transparent leading-[22.4px] font-montserrat md:text-[22px] md:leading-[33px]">
              Escritório boutique especializado em Propriedade Intelectual e
              Direito à Saúde. Registro de Marcas no INPI e Ações contra
              Planos de Saúde.
            </p>
          </div>
        </div>
      </div>
      <div className="relative self-center box-border caret-transparent gap-x-2.5 max-w-full min-h-[auto] gap-y-2.5 w-full md:gap-x-5 md:gap-y-5 md:w-auto">
        <a
          href="https://wa.me/5521972728787?text=Olá! Gostaria de falar com um especialista do Ávila Nascimento Advocacia."
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-lg font-medium bg-blue-700 box-border caret-transparent inline-block fill-white leading-[18px] text-center w-full px-5 py-3.5 rounded-[100px] font-aalto_sans_pro md:w-auto md:px-[42px] md:py-4"
        >
          <span className="box-border caret-transparent gap-x-[5px] flex fill-white justify-center gap-y-[5px]">
            <span className="box-border caret-transparent block fill-white min-h-[auto] min-w-[auto]">
              Fale com um Especialista
            </span>
          </span>
        </a>
      </div>
      <div className="relative self-center box-border caret-transparent gap-x-2.5 max-w-full min-h-[auto] gap-y-2.5 w-full md:gap-x-5 md:gap-y-5 md:w-auto">
        <a
          href="#escritorio"
          className="text-blue-950 text-lg font-medium bg-transparent box-border caret-transparent inline-block fill-blue-950 leading-[18px] text-center w-full px-5 py-3.5 rounded-[100px] font-aalto_sans_pro md:w-auto md:px-6 md:py-3"
        >
          <span className="box-border caret-transparent gap-x-[5px] flex fill-blue-950 flex-row-reverse justify-center gap-y-[5px]">
            <span className="items-center box-border caret-transparent flex fill-blue-950 min-h-[auto] min-w-[auto]">
              <img
                src="https://c.animaapp.com/mmaw5r5q6lUknB/assets/icon-8.svg"
                alt="Icon"
                className="box-border caret-transparent align-baseline w-[18px]"
              />
            </span>
            <span className="box-border caret-transparent block fill-blue-950 min-h-[auto] min-w-[auto]">
              Conheça o Escritório
            </span>
          </span>
        </a>
      </div>
    </div>
  );
};
