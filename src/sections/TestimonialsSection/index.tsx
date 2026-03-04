import { TestimonialsHeader } from "@/sections/TestimonialsSection/components/TestimonialsHeader";
import { TestimonialsCarousel } from "@/sections/TestimonialsSection/components/TestimonialsCarousel";

export const TestimonialsSection = () => {
  return (
    <div className="relative bg-white box-border caret-transparent flex flex-col max-w-full w-full z-[3] mx-auto">
      <div className="items-end box-border caret-transparent gap-x-5 flex grow flex-wrap h-full justify-between max-w-full px-5 min-h-[auto] min-w-[auto] gap-y-5 w-full mx-auto py-8 md:px-0 md:max-w-[1216px] md:py-20">
        <TestimonialsHeader />
        <TestimonialsCarousel />
      </div>
    </div>
  );
};
