export type TestimonialCardProps = {
  platformIconUrl: string;
  profileImageUrl: string;
  profileImageAlt: string;
  authorName: string;
  timeAgo: string;
  starIconUrl: string;
  starCount: number;
  testimonialText: React.ReactNode;
  hasReadMore?: boolean;
};

export const TestimonialCard = (props: TestimonialCardProps) => {
  return (
    <div className="relative box-border caret-transparent basis-3/12 shrink-0 max-w-[25%] min-h-[auto] min-w-[auto] px-2">
      <div className="relative backdrop-blur-0 bg-white bg-no-repeat bg-size-[270px] shadow-[rgba(0,0,0,0.03)_1px_4px_10px_0px,rgba(0,0,0,0.05)_0px_0px_2px_0px] box-border caret-transparent bg-[position:calc(100%_+_70px)_-70px] p-5 rounded-xl">
        <div className="relative box-border caret-transparent flex">
          <div className="absolute box-border caret-transparent h-5 w-5 right-0 top-0">
            <img
              src={props.platformIconUrl}
              alt=""
              className="aspect-[auto_20_/_20] box-border caret-transparent inline align-baseline w-5"
            />
          </div>
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] mr-[15px]">
            <img
              src={props.profileImageUrl}
              alt={props.profileImageAlt}
              className="box-border caret-transparent h-10 object-cover object-[50%_0%] align-baseline w-10 rounded-[30px]"
            />
          </div>
          <div className="box-border caret-transparent flex basis-[0%] flex-col grow justify-center min-h-[auto] text-ellipsis text-nowrap">
            <div className="text-[15px] font-semibold box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] text-ellipsis text-nowrap overflow-hidden pr-[25px]">
              {" "}
              {props.authorName}{" "}
            </div>
            <div className="text-zinc-500 text-[13px] box-border caret-transparent leading-[18.2px] min-h-[auto] min-w-[auto] text-nowrap">
              <span className="relative box-border caret-transparent text-nowrap">
                {props.timeAgo}
              </span>
            </div>
          </div>
        </div>
        <span className="box-border caret-transparent block h-[17px] leading-[17px] text-nowrap my-[11px]">
          {Array.from({ length: props.starCount }).map((_, index) => (
            <img
              key={index}
              src={props.starIconUrl}
              alt="Google"
              className="aspect-[auto_17_/_17] box-border caret-transparent inline-block h-[17px] leading-[19.6px] text-nowrap align-baseline w-[17px] mr-px"
            />
          ))}
          <span className="relative bg-contain box-border caret-transparent inline-block h-[15px] leading-[19.6px] text-nowrap w-[15px] z-[2] ml-[7px]"></span>
        </span>
        <div className="text-[15px] box-border caret-transparent flow-root h-[87px] leading-[21.75px] overflow-hidden">
          {props.testimonialText}
        </div>
        {props.hasReadMore && (
          <span className="relative box-border caret-transparent block pt-2 after:accent-auto after:bg-zinc-300 after:box-border after:caret-transparent after:text-black after:hidden after:text-sm after:not-italic after:normal-nums after:font-normal after:h-[25px] after:tracking-[normal] after:leading-[19.6px] after:list-outside after:list-disc after:[mask-image:url('https://cdn.trustindex.io/assets/icon/ti-quote.svg')] after:[mask-position:50%_50%] after:[mask-repeat:no-repeat] after:[mask-size:contain] after:pointer-events-auto after:absolute after:text-left after:no-underline after:indent-[0px] after:normal-case after:visible after:w-[25px] after:border-separate after:right-0 after:top-[calc(50%_+_3px)] after:font-trustindex_poppins">
            <span
              aria-label="Consulte Mais informação"
              role="button"
              className="text-[13.5px] box-border caret-transparent inline-block leading-[18.9px] opacity-50 text-nowrap"
            >
              Consulte Mais informação
            </span>
          </span>
        )}
      </div>
    </div>
  );
};
