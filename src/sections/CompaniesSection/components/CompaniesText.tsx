export type CompaniesTextProps = {
  variant: string;
  imageUrl?: string;
  imageAlt?: string;
  highlightedText?: string;
  headingText?: string;
  descriptionText?: string;
};

export const CompaniesText = (props: CompaniesTextProps) => {
  if (props.variant === "image") {
    return (
      <div className="relative box-border caret-transparent gap-x-5 max-w-full min-h-[auto] gap-y-5 w-full self-start text-center z-[4] ml-4 -mb-4 md:w-[483px]">
        <img
          src={props.imageUrl}
          alt={props.imageAlt}
          className="aspect-[auto_725_/_522] box-border caret-transparent inline-block max-w-full w-[725px]"
        />
      </div>
    );
  }

  return (
    <div className="relative box-border caret-transparent gap-x-5 max-w-full min-h-[auto] gap-y-5 w-full mb-4 md:mb-0">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent w-full">
          <h3 className="text-neutral-900 text-2xl md:text-[32px] font-medium box-border caret-transparent leading-[1.25] mt-2 mb-[5px] font-aalto_sans_pro">
            <span className="text-blue-700 box-border caret-transparent">
              {props.highlightedText}
            </span>
            {props.headingText}
          </h3>
          <p className="text-stone-700 text-base box-border caret-transparent leading-[25.2px] font-aalto_sans_pro md:text-xl md:leading-[30px]">
            {props.descriptionText}
          </p>
        </div>
      </div>
    </div>
  );
};
