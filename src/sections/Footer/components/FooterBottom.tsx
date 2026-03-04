export const FooterBottom = () => {
  return (
    <div className="relative items-center box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-between min-h-[auto] gap-y-5 w-full pt-8 md:flex-row md:flex-nowrap">
      <div className="relative self-center box-border caret-transparent gap-x-5 max-w-full min-h-[auto] gap-y-5 text-center w-[326px] md:self-auto md:text-start md:w-auto">
        <p className="text-stone-400 box-border caret-transparent leading-4 text-center font-aalto_sans_pro md:text-start">
          Ávila Nascimento Advocacia. Copyright © 2025
        </p>
      </div>
      <div className="relative box-border caret-transparent gap-x-5 max-w-full min-h-[auto] gap-y-5">
        <ul className="box-border caret-transparent justify-end list-none pl-0">
          <li className="relative items-center box-border caret-transparent flex justify-end text-end">
            <a
              href="https://felipevargas.studio/"
              className="text-blue-700 text-sm font-medium items-center box-border caret-transparent gap-x-[5px] flex flex-row-reverse justify-end leading-[21px] min-h-[auto] min-w-[auto] gap-y-[5px] w-fit font-aalto_sans_pro"
            >
              <span className="relative box-border caret-transparent flex min-h-[auto] min-w-[auto] top-0">
                <img
                  src="https://c.animaapp.com/mmaw5r5q6lUknB/assets/icon-42.svg"
                  alt="Icon"
                  className="box-border caret-transparent align-baseline w-[55px]"
                />
              </span>
              <span className="text-stone-400 self-center box-border caret-transparent block min-h-[auto] min-w-[auto] pl-[5px]">
                Criado por:{" "}
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
