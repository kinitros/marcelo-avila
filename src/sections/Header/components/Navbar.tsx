import { NavbarContent } from "@/sections/Header/components/NavbarContent";

export const Navbar = () => {
  return (
    <div className="fixed bg-stone-50 box-border caret-transparent flex flex-col max-w-full min-w-full w-[1526px] z-[99] border-stone-200 mx-auto px-2.5 border-b border-solid top-0">
      <NavbarContent />
    </div>
  );
};
