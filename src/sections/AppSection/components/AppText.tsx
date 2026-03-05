export const AppText = () => {
  return (
    <div className="relative box-border caret-transparent gap-x-5 flex flex-col flex-wrap min-h-[auto] gap-y-5 w-full md:flex-nowrap md:w-2/5">
      <div className="relative self-center box-border caret-transparent gap-x-5 max-w-full min-h-[auto] gap-y-5 w-full mb-4 md:mb-0">
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent w-full">
            <h3 className="text-neutral-900 text-2xl font-medium box-border caret-transparent leading-[1.25] mt-2 mb-4 font-aalto_sans_pro md:text-[32px]">
              <span className="text-blue-700 text-xs box-border caret-transparent block leading-[19.6px] mb-4 font-aalto_sans_pro">
                {" "}
                ACOMPANHE SEU CASO
              </span>
              Transparência em Cada Etapa
            </h3>
            <p className="text-stone-500 text-base box-border caret-transparent leading-[22.4px] font-montserrat md:text-lg md:leading-[27px]">
              Você acompanha tudo que está acontecendo no seu processo em tempo
              real, com total transparência.{" "}
              <br className="text-base box-border caret-transparent leading-[22.4px] md:text-lg md:leading-[27px]" />
              <br className="text-base box-border caret-transparent leading-[22.4px] md:text-lg md:leading-[27px]" />
              Saiba cada etapa do seu caso, o que falta para finalizar e qual o
              prazo previsto para a próxima fase.
              <br className="text-base box-border caret-transparent leading-[22.4px] md:text-lg md:leading-[27px]" />
              <br className="text-base box-border caret-transparent leading-[22.4px] md:text-lg md:leading-[27px]" />
              Nosso compromisso é a transparência total do início ao fim do seu
              processo jurídico.
            </p>
          </div>
        </div>
      </div>
      <div className="relative box-border caret-transparent gap-x-5 max-w-full min-h-[auto] gap-y-5 w-full md:w-[538px]">
        <ul className="box-border caret-transparent gap-x-2.5 flex list-none gap-y-2.5 pl-0">
          <li className="relative items-start box-border caret-transparent gap-x-2.5 flex flex-col justify-start min-h-[auto] min-w-[auto] gap-y-2.5 w-[34%] before:accent-auto before:bg-zinc-300 before:box-border before:caret-transparent before:text-zinc-800 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-px before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:pointer-events-auto before:absolute before:right-[calc(100%_-_60px)] before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-[120%] before:z-[-1] before:border-separate before:-left-2.5 before:top-5 before:font-apple_system">
            <span className="relative bg-zinc-50 box-border caret-transparent flex min-h-[auto] min-w-[auto] border border-zinc-300 p-2.5 rounded-[100px] border-solid top-0">
              <img
                src="/icons/icon-24.svg"
                alt="Icon"
                className="box-border caret-transparent h-[21px] align-baseline w-[21px]"
              />
            </span>
            <span className="text-neutral-950 text-base self-center box-border caret-transparent block leading-[21.6px] min-h-[auto] min-w-[auto] font-aalto_sans_pro">
              Acompanhe sem burocracia o andamento do seu caso com atualizações
              em tempo real.
            </span>
          </li>
          <li className="relative items-start box-border caret-transparent gap-x-2.5 flex flex-col justify-start min-h-[auto] min-w-[auto] gap-y-2.5 w-[34%] before:accent-auto before:bg-zinc-300 before:box-border before:caret-transparent before:text-zinc-800 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-px before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:pointer-events-auto before:absolute before:right-[calc(100%_-_60px)] before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-[120%] before:z-[-1] before:border-separate before:top-5 before:font-apple_system">
            <span className="relative bg-zinc-50 box-border caret-transparent flex min-h-[auto] min-w-[auto] border border-zinc-300 p-2.5 rounded-[100px] border-solid top-0">
              <img
                src="/icons/icon-24.svg"
                alt="Icon"
                className="box-border caret-transparent h-[21px] align-baseline w-[21px]"
              />
            </span>
            <span className="text-neutral-950 text-base self-center box-border caret-transparent block leading-[21.6px] min-h-[auto] min-w-[auto] font-aalto_sans_pro">
              Mantenha contato direto com o advogado responsável pelo seu caso.
            </span>
          </li>
          <li className="relative items-start box-border caret-transparent gap-x-2.5 flex flex-col justify-start min-h-[auto] min-w-[auto] gap-y-2.5 w-[34%] before:accent-auto before:bg-zinc-300 before:box-border before:caret-transparent before:text-zinc-800 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-px before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:pointer-events-auto before:absolute before:right-[calc(100%_-_60px)] before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-[120%] before:z-[-1] before:border-separate before:top-5 before:font-apple_system">
            <span className="relative bg-zinc-50 box-border caret-transparent flex min-h-[auto] min-w-[auto] border border-zinc-300 p-2.5 rounded-[100px] border-solid top-0">
              <img
                src="/icons/icon-24.svg"
                alt="Icon"
                className="box-border caret-transparent h-[21px] align-baseline w-[21px]"
              />
            </span>
            <span className="text-neutral-950 text-base self-center box-border caret-transparent block leading-[21.6px] min-h-[auto] min-w-[auto] font-aalto_sans_pro">
              Fique informado, passo a passo, sobre cada fase do seu processo.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
