export const DesktopMenu = () => {
  return (
    <div className="relative box-border caret-transparent gap-x-5 hidden max-w-full min-h-0 gap-y-5 border-stone-300 pl-4 border-l border-solid md:block md:min-h-[auto]">
      <ul className="box-border caret-transparent flex flex-wrap list-none -mx-2 pl-0">
        <li className="relative items-center box-border caret-transparent flex min-h-0 min-w-0 mx-2 md:min-h-[auto] md:min-w-[auto]">
          <a
            href="#escritorio"
            className="text-blue-700 font-medium items-center box-border caret-transparent flex min-h-0 min-w-0 w-full font-aalto_sans_pro md:min-h-[auto] md:min-w-[auto]"
          >
            <span className="text-zinc-600 box-border caret-transparent block min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
              O Escritório
            </span>
          </a>
        </li>
        <li className="relative items-center box-border caret-transparent flex min-h-0 min-w-0 mx-2 md:min-h-[auto] md:min-w-[auto]">
          <a
            href="#propriedade-intelectual"
            className="text-blue-700 font-medium items-center box-border caret-transparent flex min-h-0 min-w-0 w-full font-aalto_sans_pro md:min-h-[auto] md:min-w-[auto]"
          >
            <span className="text-zinc-600 box-border caret-transparent block min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
              Propriedade Intelectual
            </span>
          </a>
        </li>
        <li className="relative items-center box-border caret-transparent flex min-h-0 min-w-0 mx-2 md:min-h-[auto] md:min-w-[auto]">
          <a
            href="#direito-saude"
            className="text-blue-700 font-medium items-center box-border caret-transparent flex min-h-0 min-w-0 w-full font-aalto_sans_pro md:min-h-[auto] md:min-w-[auto]"
          >
            <span className="text-zinc-600 box-border caret-transparent block min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
              Direito à Saúde
            </span>
          </a>
        </li>
        <li className="relative items-center box-border caret-transparent flex min-h-0 min-w-0 mx-2 md:min-h-[auto] md:min-w-[auto]">
          <a
            href="#contato"
            className="text-blue-700 font-medium items-center box-border caret-transparent flex min-h-0 min-w-0 w-full font-aalto_sans_pro md:min-h-[auto] md:min-w-[auto]"
          >
            <span className="text-zinc-600 box-border caret-transparent block min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
              Contato
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};
