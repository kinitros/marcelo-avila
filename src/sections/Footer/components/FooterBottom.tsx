export const FooterBottom = () => {
  return (
    <div className="relative items-center box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-between min-h-[auto] gap-y-5 w-full pt-8 md:flex-row md:flex-nowrap">
      <div className="relative self-center box-border caret-transparent gap-x-5 max-w-full min-h-[auto] gap-y-5 text-center w-[326px] md:self-auto md:text-start md:w-auto">
        <p className="text-stone-400 box-border caret-transparent leading-4 text-center font-aalto_sans_pro md:text-start">
          Ávila Nascimento Advocacia. Copyright © 2026
        </p>
      </div>
      <div className="relative box-border caret-transparent gap-x-5 max-w-full min-h-[auto] gap-y-5">
        <div className="flex items-center gap-2">
          <span className="text-stone-400 text-sm font-aalto_sans_pro">Criado por:</span>
          <img
            src="/images/logo posicionesee sem p branco.png"
            alt="Posicionesee"
            className="h-6 object-contain brightness-0 opacity-60"
          />
        </div>
      </div>
    </div>
  );
};
