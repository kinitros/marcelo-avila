import { NavbarLogo } from "@/sections/Header/components/NavbarLogo";
import { DesktopMenu } from "@/sections/Header/components/DesktopMenu";
import { NavbarActions } from "@/sections/Header/components/NavbarActions";

export const NavbarContent = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-5 flex grow flex-wrap h-full justify-between max-w-full px-5 min-h-[auto] min-w-[auto] gap-y-5 w-full mx-auto py-2.5 md:px-0 md:[align-items:normal] md:flex-nowrap md:max-w-[1216px]">
      <div className="flex items-center gap-0">
        <NavbarLogo />
        <DesktopMenu />
      </div>
      <NavbarActions />
    </div>
  );
};
