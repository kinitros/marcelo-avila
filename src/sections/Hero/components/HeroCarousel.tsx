export const HeroCarousel = () => {
  return (
    <div className="relative box-border caret-transparent gap-x-5 flex flex-col flex-wrap min-h-0 gap-y-5 w-full p-0 md:flex-nowrap md:min-h-[auto] md:w-[48%] md:p-2.5">
      <div className="relative box-border caret-transparent gap-x-5 block max-w-full min-h-[auto] gap-y-5 w-full md:hidden md:min-h-0">
        <div className="relative h-[400px] w-full overflow-hidden">
          <div
            role="img"
            aria-label="Dr. Marcelo Ávila Nascimento"
            className="bg-[url('/images/advogado.jpg')] bg-no-repeat bg-cover box-border caret-transparent min-h-full min-w-full bg-[position:65%_20%] [transform:scaleX(-1)]"
          ></div>
        </div>
      </div>
      <div className="absolute self-center bg-white shadow-[rgba(0,0,0,0.07)_0px_2px_4px_-2px,rgba(0,0,0,0.1)_0px_10px_15px_-3px] box-border caret-transparent gap-x-5 max-w-full gap-y-5 z-[1] pl-[5px] pr-2.5 py-[5px] rounded-[100px] right-[0%] top-[20%] md:z-auto">
        <ul className="box-border caret-transparent list-none pl-0">
          <li className="relative items-center box-border caret-transparent flex">
            <span className="relative box-border caret-transparent flex min-h-[auto] min-w-[auto] top-0">
              <img
                src="https://c.animaapp.com/mmaw5r5q6lUknB/assets/icon-9.svg"
                alt="Icon"
                className="box-border caret-transparent h-9 align-baseline w-9 mr-[9px]"
              />
            </span>
            <span className="text-neutral-600 font-medium self-center box-border caret-transparent block min-h-[auto] min-w-[auto] pl-[5px] font-aalto_sans_pro">
              Especialistas
            </span>
          </li>
        </ul>
      </div>
      <div className="absolute self-center bg-white shadow-[rgba(0,0,0,0.07)_0px_2px_4px_-2px,rgba(0,0,0,0.1)_0px_10px_15px_-3px] box-border caret-transparent gap-x-5 max-w-full gap-y-5 z-[1] pl-[5px] pr-2.5 py-[5px] rounded-[100px] right-[0%] bottom-[20%] md:z-auto">
        <ul className="box-border caret-transparent list-none pl-0">
          <li className="relative items-center box-border caret-transparent flex">
            <span className="relative box-border caret-transparent flex min-h-[auto] min-w-[auto] top-0">
              <img
                src="https://c.animaapp.com/mmaw5r5q6lUknB/assets/icon-10.svg"
                alt="Icon"
                className="box-border caret-transparent h-9 align-baseline w-9 mr-[9px]"
              />
            </span>
            <span className="text-neutral-600 font-medium self-center box-border caret-transparent block min-h-[auto] min-w-[auto] pl-[5px] font-aalto_sans_pro">
              Confiança
            </span>
          </li>
        </ul>
      </div>
      <div className="absolute self-center bg-white shadow-[rgba(0,0,0,0.07)_0px_2px_4px_-2px,rgba(0,0,0,0.1)_0px_10px_15px_-3px] box-border caret-transparent gap-x-5 max-w-full gap-y-5 z-[1] pl-[5px] pr-2.5 py-[5px] rounded-[100px] left-[0%] top-2/4 md:z-auto">
        <ul className="box-border caret-transparent list-none pl-0">
          <li className="relative items-center box-border caret-transparent flex">
            <span className="relative box-border caret-transparent flex min-h-[auto] min-w-[auto] top-0">
              <img
                src="https://c.animaapp.com/mmaw5r5q6lUknB/assets/icon-11.svg"
                alt="Icon"
                className="box-border caret-transparent h-9 align-baseline w-9 mr-[9px]"
              />
            </span>
            <span className="text-neutral-600 font-medium self-center box-border caret-transparent block min-h-[auto] min-w-[auto] pl-[5px] font-aalto_sans_pro">
              Experiência
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
