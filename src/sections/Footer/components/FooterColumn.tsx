export type FooterColumnProps = {
  title: string;
  links: Array<{
    text: string;
    href: string;
    className?: string;
  }>;
};

export const FooterColumn = (props: FooterColumnProps) => {
  return (
    <div className="relative box-border caret-transparent gap-x-5 max-w-full min-h-[auto] gap-y-10 w-[45%] md:gap-x-16 md:gap-y-16 md:w-auto">
      <ul className="box-border caret-transparent list-none pl-0">
        <li className="relative items-center box-border caret-transparent flex pb-[5.5px]">
          <span className="text-neutral-900 font-medium box-border caret-transparent block leading-[20.8px] min-h-[auto] min-w-[auto] font-aalto_sans_pro">
            {props.title}
          </span>
        </li>
        {props.links.map((link, index) => (
          <li
            key={index}
            className={
              index === 0
                ? "relative items-center box-border caret-transparent flex mt-[5.5px] pb-[5.5px]"
                : index === props.links.length - 1
                  ? "relative items-center box-border caret-transparent flex mt-[5.5px]"
                  : "relative items-center box-border caret-transparent flex mt-[5.5px] pb-[5.5px]"
            }
          >
            <a
              href={link.href}
              className="text-blue-700 text-sm font-medium items-center box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] w-full font-aalto_sans_pro"
            >
              <span className="text-stone-400 box-border caret-transparent block min-h-[auto] min-w-[auto]">
                {link.text}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
