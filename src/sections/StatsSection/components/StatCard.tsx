export type StatCardProps = {
  variant: string;
  iconUrl: string;
  iconClassName?: string;
  title?: string;
  description?: string;
};

export const StatCard = (props: StatCardProps) => {
  return (
    <div
      className={`relative box-border caret-transparent gap-x-0 max-w-full gap-y-0 ${props.variant}`}
    >
      <div
        className={`box-border caret-transparent ${props.variant === "min-h-[auto] w-full p-8 md:w-[31%]" ? "gap-x-[9px] flex flex-row gap-y-[9px] md:flex-col" : "text-center"}`}
      >
        <div
          className={`box-border caret-transparent ${props.variant === "min-h-[auto] w-full p-8 md:w-[31%]" ? "shrink-0 leading-[0px] min-h-[auto] min-w-[auto]" : "text-sky-300 text-[134px] inline-block leading-[134px]"}`}
        >
          {props.variant === "min-h-[auto] w-full p-8 md:w-[31%]" ? (
            <span className="text-sky-300 text-2xl box-border caret-transparent inline-block fill-sky-300 leading-6 text-center">
              <img
                src={props.iconUrl}
                alt="Icon"
                className={
                  props.iconClassName ||
                  "relative box-border caret-transparent h-6 align-baseline w-6"
                }
              />
            </span>
          ) : (
            <img
              src={props.iconUrl}
              alt="Icon"
              className={
                props.iconClassName ||
                "relative box-border caret-transparent h-[134px] align-baseline"
              }
            />
          )}
        </div>
        {props.title && props.description && (
          <div className="box-border caret-transparent grow min-h-[auto] min-w-[auto] w-full">
            <h3 className="text-neutral-950 text-lg md:text-xl font-medium box-border caret-transparent leading-[1.35] font-aalto_sans_pro">
              <span className="box-border caret-transparent">
                {props.title}
              </span>
            </h3>
            <p className="text-neutral-500 box-border caret-transparent font-montserrat">
              {props.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
