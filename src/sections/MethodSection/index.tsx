import { MethodText } from "@/sections/MethodSection/components/MethodText";
import { MethodFeatures } from "@/sections/MethodSection/components/MethodFeatures";

export const MethodSection = () => {
  return (
    <div className="relative bg-blue-50 box-border caret-transparent flex flex-col max-w-full w-full mx-auto">
      <div className="box-border caret-transparent gap-x-5 flex flex-col grow flex-wrap h-full max-w-full px-5 min-h-[auto] min-w-[auto] gap-y-5 w-full mx-auto py-10 md:px-0 md:flex-nowrap md:max-w-6xl md:pt-20 md:pb-0">
        <div className="relative self-center bg-white shadow-[rgba(0,0,0,0.07)_0px_2.448px_4.897px_-2.448px,rgba(0,0,0,0.1)_0px_12.241px_18.362px_-3.672px] box-border caret-transparent gap-x-5 flex flex-col flex-wrap min-h-[auto] gap-y-5 w-full z-[1] mt-20 -mb-20 p-8 rounded-3xl md:flex-row md:flex-nowrap md:w-[1008px]">
          <MethodText />
          <MethodFeatures />
        </div>
      </div>
    </div>
  );
};
