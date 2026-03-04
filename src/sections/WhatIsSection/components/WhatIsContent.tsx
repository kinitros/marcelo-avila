export type WhatIsContentProps = {
  variant: string;
  imageUrl?: string;
  imageAlt?: string;
  tagText?: string;
  title?: string;
  highlightedText?: string;
  description?: string;
};

export const WhatIsContent = (props: WhatIsContentProps) => {
  if (props.variant === "image") {
    return (
      <div className="relative box-border caret-transparent gap-x-5 max-w-full min-h-[auto] gap-y-5 text-center w-[77%] md:w-2/5">
        <img
          src={props.imageUrl}
          alt={props.imageAlt}
          className="aspect-[auto_719_/_674] box-border caret-transparent inline-block max-w-full w-[719px]"
        />
      </div>
    );
  }

  return (
    <div className="relative box-border caret-transparent gap-x-5 max-w-full min-h-[auto] gap-y-5 self-center w-full mb-4 md:w-[424px] md:mb-0">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent w-full">
          <h3 className="text-neutral-900 text-2xl md:text-[32px] font-medium box-border caret-transparent leading-[1.25] mt-2 mb-[5px] font-aalto_sans_pro">
            <span className="text-blue-700 text-xs box-border caret-transparent block leading-[19.6px] mb-4 font-aalto_sans_pro">
              {props.tagText}
            </span>
            {props.title}{" "}
            <span className="text-blue-700 box-border caret-transparent">
              {props.highlightedText}
            </span>{" "}
            com excelência e dedicação
          </h3>
          <p className="text-stone-500 text-base box-border caret-transparent leading-[25.2px] font-aalto_sans_pro md:text-xl md:leading-[30px]">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};
