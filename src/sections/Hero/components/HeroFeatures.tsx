export type HeroFeaturesProps = {
  variant: string;
  iconUrl: string;
  text: string;
};

export const HeroFeatures = (props: HeroFeaturesProps) => {
  return (
    <div
      className={`absolute self-center bg-white shadow-[rgba(0,0,0,0.07)_0px_2px_4px_-2px,rgba(0,0,0,0.1)_0px_10px_15px_-3px] box-border caret-transparent gap-x-5 max-w-full gap-y-5 z-[1] pl-[5px] pr-2.5 py-[5px] rounded-[100px] md:z-auto ${props.variant}`}
    >
      <ul className="box-border caret-transparent list-none pl-0">
        <li className="relative items-center box-border caret-transparent flex">
          <span className="relative box-border caret-transparent flex min-h-[auto] min-w-[auto] top-0">
            <img
              src={props.iconUrl}
              alt="Icon"
              className="box-border caret-transparent h-9 align-baseline w-9 mr-[9px]"
            />
          </span>
          <span className="text-neutral-600 font-medium self-center box-border caret-transparent block min-h-[auto] min-w-[auto] pl-[5px] font-aalto_sans_pro">
            {props.text}
          </span>
        </li>
      </ul>
    </div>
  );
};
