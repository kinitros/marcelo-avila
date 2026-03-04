export type HeroButtonsProps = {
  href: string;
  buttonVariant: string;
  spanVariant: string;
  text: string;
  showIcon?: boolean;
  iconSrc?: string;
  iconAlt?: string;
  textVariant: string;
};

export const HeroButtons = (props: HeroButtonsProps) => {
  return (
    <div className="relative self-center box-border caret-transparent gap-x-2.5 max-w-full min-h-[auto] gap-y-2.5 w-full md:gap-x-5 md:gap-y-5 md:w-auto">
      <a
        href={props.href}
        className={`text-lg font-medium box-border caret-transparent inline-block leading-[18px] text-center w-full px-5 py-3.5 rounded-[100px] font-aalto_sans_pro md:w-auto ${props.buttonVariant}`}
      >
        <span
          className={`box-border caret-transparent gap-x-[5px] flex justify-center gap-y-[5px] ${props.spanVariant}`}
        >
          {props.showIcon && (
            <span className="box-border caret-transparent min-h-[auto] min-w-[auto] items-center flex fill-blue-950">
              <img
                src={props.iconSrc}
                alt={props.iconAlt}
                className="box-border caret-transparent align-baseline w-[18px]"
              />
            </span>
          )}
          <span
            className={`box-border caret-transparent min-h-[auto] min-w-[auto] ${props.textVariant}`}
          >
            {props.text}
          </span>
        </span>
      </a>
    </div>
  );
};
