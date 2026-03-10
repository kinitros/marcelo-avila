import { Link } from "react-router-dom";

export const NavbarLogo = () => {
  return (
    <div className="relative items-center box-border caret-transparent gap-x-5 flex flex-wrap min-h-[auto] gap-y-5 w-fit md:flex-nowrap">
      <div className="relative box-border caret-transparent gap-x-5 leading-[0px] max-w-full min-h-[auto] gap-y-5">
        <div className="box-border caret-transparent text-center">
          <Link
            to="/"
            className="box-border caret-transparent inline-block leading-7 md:leading-9"
          >
            <img
              src="/images/logo.png"
              alt="Ávila Nascimento Advocacia"
              className="box-border caret-transparent h-10 md:h-12 w-auto"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
