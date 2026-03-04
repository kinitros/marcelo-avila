export const NavbarActions = () => {
  return (
    <div className="relative items-center box-border caret-transparent gap-x-5 flex flex-wrap justify-end min-h-[auto] gap-y-5 w-fit md:flex-nowrap md:justify-normal">
      <div className="relative box-border caret-transparent gap-x-5 hidden max-w-full min-h-0 gap-y-5 md:block md:min-h-[auto]">
        <a
          href="tel:+552138023838"
          className="text-blue-700 text-[15px] font-medium bg-transparent box-border caret-transparent inline-block fill-blue-700 leading-[15px] text-center px-6 py-3 rounded-[100px] font-aalto_sans_pro"
        >
          <span className="box-border caret-transparent gap-x-[5px] flex fill-blue-700 justify-center gap-y-[5px]">
            <span className="box-border caret-transparent block fill-blue-700 min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
              (21) 3802-3838
            </span>
          </span>
        </a>
      </div>
      <div className="relative box-border caret-transparent gap-x-5 hidden max-w-full min-h-0 gap-y-5 md:block md:min-h-[auto]">
        <a
          href="#contato"
          className="text-white text-[15px] font-medium bg-blue-700 box-border caret-transparent inline-block fill-white leading-[15px] text-center px-6 py-3 rounded-[100px] font-aalto_sans_pro"
        >
          <span className="box-border caret-transparent gap-x-[5px] flex fill-white justify-center gap-y-[5px]">
            <span className="box-border caret-transparent block fill-white min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
              Fale Conosco
            </span>
          </span>
        </a>
      </div>
      <div className="absolute box-border caret-transparent gap-x-5 h-fit max-w-full gap-y-5"></div>
      <div className="relative self-center box-border caret-transparent gap-x-5 block leading-[0px] max-w-full min-h-[auto] gap-y-5 md:self-auto md:hidden md:min-h-0">
        <div className="box-border caret-transparent text-center">
          <a
            href="https://empregga.com.br/#elementor-action%3Aaction%3Doff_canvas%3Aopen%26settings%3DeyJpZCI6IjRiZmFhZDYiLCJkaXNwbGF5TW9kZSI6Im9wZW4ifQ%3D%3D"
            className="text-blue-700 text-[21px] box-border caret-transparent inline-block leading-[21px] md:text-[50px] md:leading-[50px]"
          >
            <img
              src="https://c.animaapp.com/mmaw5r5q6lUknB/assets/icon-6.svg"
              alt="Icon"
              className="relative text-[21px] box-border caret-transparent h-[21px] leading-[21px] align-baseline md:text-[50px] md:h-[50px] md:leading-[50px]"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
