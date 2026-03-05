import { HeroText } from "@/sections/Hero/components/HeroText";
import { HeroCarousel } from "@/sections/Hero/components/HeroCarousel";

export const HeroContent = () => {
  return (
    <div className="box-border caret-transparent gap-x-0 flex flex-col grow flex-wrap h-full justify-between max-w-full min-h-[auto] min-w-[auto] gap-y-0 w-full mx-auto pt-[60px] pb-0 md:gap-x-5 md:flex-row md:flex-nowrap md:max-w-[1216px] md:gap-y-5 md:pt-[120px] md:pb-[55px]">
      <HeroText />
      <HeroCarousel />
    </div>
  );
};
