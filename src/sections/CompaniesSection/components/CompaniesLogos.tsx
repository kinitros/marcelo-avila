export const CompaniesLogos = () => {
  return (
    <div className="relative items-center bg-neutral-900 box-border caret-transparent gap-x-2 flex flex-col flex-wrap justify-center max-w-full gap-y-4 w-full mx-auto py-8 md:gap-x-8 md:flex-row md:flex-nowrap md:gap-y-5 md:py-6 before:accent-auto before:bg-blue-700 before:box-border before:caret-transparent before:text-zinc-800 before:hidden before:text-base before:not-italic before:normal-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-2/5 before:border-separate before:left-0 before:top-0 before:font-apple_system before:md:block">
      <div className="relative box-border caret-transparent gap-x-2 max-w-full min-h-[auto] gap-y-2 text-center md:gap-x-5 md:gap-y-5 md:text-start">
        <h3 className="text-stone-50 text-lg font-medium box-border caret-transparent leading-6 text-center font-aalto_sans_pro md:text-xl md:leading-5 md:text-start">
          Registrado e associado a:
        </h3>
      </div>
      <div className="relative box-border caret-transparent flex flex-wrap items-center justify-center gap-6 max-w-full min-h-[auto] md:gap-10">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center flex-shrink-0">
            <span className="text-white text-xs font-bold font-aalto_sans_pro">OAB</span>
          </div>
          <div>
            <span className="text-stone-300 text-sm font-medium font-aalto_sans_pro block">OAB-RJ</span>
            <span className="text-stone-700 text-xs font-aalto_sans_pro">nº 128.829</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center flex-shrink-0">
            <span className="text-white text-xs font-bold font-aalto_sans_pro">INPI</span>
          </div>
          <div>
            <span className="text-stone-300 text-sm font-medium font-aalto_sans_pro block">INPI</span>
            <span className="text-stone-700 text-xs font-aalto_sans_pro">Matrícula 0636</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center flex-shrink-0">
            <span className="text-white text-[10px] font-bold font-aalto_sans_pro">ABPI</span>
          </div>
          <div>
            <span className="text-stone-300 text-sm font-medium font-aalto_sans_pro block">ABPI</span>
            <span className="text-stone-700 text-xs font-aalto_sans_pro">nº 43657</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center flex-shrink-0">
            <span className="text-white text-[9px] font-bold font-aalto_sans_pro">ABAPI</span>
          </div>
          <div>
            <span className="text-stone-300 text-sm font-medium font-aalto_sans_pro block">ABAPI</span>
            <span className="text-stone-700 text-xs font-aalto_sans_pro">nº 0522</span>
          </div>
        </div>
      </div>
    </div>
  );
};
