import { AppText } from "@/sections/AppSection/components/AppText";

export const AppSection = () => {
  return (
    <div className="relative box-border caret-transparent flex flex-col max-w-full w-full border-zinc-100 mx-auto border-b border-solid before:accent-auto before:bg-blue-700 before:box-border before:caret-transparent before:text-zinc-800 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-1/5 before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:border-zinc-100 before:border-b before:border-separate before:border-solid before:right-0 before:top-auto before:bottom-0 before:font-apple_system before:md:h-full before:md:w-[45%] before:md:top-0 before:md:bottom-auto">
      <div className="items-center box-border caret-transparent gap-x-5 flex flex-col grow flex-wrap h-full justify-between max-w-full px-5 min-h-[auto] min-w-[auto] gap-y-5 w-full mx-auto pt-10 pb-8 md:px-0 md:flex-row md:flex-nowrap md:max-w-6xl md:pt-32 md:pb-20">
        <AppText />
        <div className="relative self-center box-border caret-transparent gap-x-5 max-w-full min-h-[auto] gap-y-5 text-center w-full -mb-12 md:text-start md:w-[54%] md:-mb-20">
          <img
            src="/images/office.jpg"
            alt=""
            className="aspect-[auto_755_/_933] box-border caret-transparent inline-block max-w-full text-center w-[83%] md:text-start"
          />
        </div>
      </div>
    </div>
  );
};
