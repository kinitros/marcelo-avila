import { Navbar } from "@/sections/Header/components/Navbar";

export const Header = () => {
  return (
    <header className="box-border caret-transparent before:accent-auto before:box-border before:caret-transparent before:clear-both before:text-zinc-800 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-apple_system">
      <Navbar />
    </header>
  );
};
