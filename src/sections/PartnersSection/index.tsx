export const PartnersSection = () => {
  return (
    <div className="relative box-border caret-transparent flex flex-col max-w-full w-full mx-auto">
      <div className="items-center box-border caret-transparent gap-x-2 flex grow flex-wrap h-full justify-between max-w-full px-5 min-h-[auto] min-w-[auto] gap-y-2 w-full mx-auto py-6 md:px-0 md:gap-x-5 md:flex-nowrap md:max-w-6xl md:gap-y-5">
        <div className="relative box-border caret-transparent gap-x-2 max-w-full min-h-[auto] gap-y-2 text-center w-[460px] md:gap-x-5 md:gap-y-5 md:text-start">
          <h3 className="text-neutral-900 text-2xl font-medium box-border caret-transparent leading-6 text-center font-aalto_sans_pro md:text-[32px] md:leading-8 md:text-start">
            Excelência jurídica reconhecida por nossos parceiros e instituições:
          </h3>
        </div>
        <div className="relative box-border caret-transparent gap-x-2 max-w-full min-h-[auto] gap-y-2 text-center w-[590px] md:gap-x-5 md:gap-y-5">
          <img
            src="/images/banner.jpg"
            alt=""
            className="aspect-[auto_903_/_190] box-border caret-transparent inline-block max-w-full w-[903px]"
          />
        </div>
      </div>
    </div>
  );
};
