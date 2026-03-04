import { AgentCTA } from "@/sections/CTASection/components/AgentCTA";
import { JobsCTA } from "@/sections/CTASection/components/JobsCTA";

export const CTASection = () => {
  return (
    <div className="relative box-border caret-transparent flex flex-col max-w-full w-full mx-auto">
      <div className="box-border caret-transparent gap-x-5 flex flex-col grow flex-wrap h-full justify-center max-w-full px-5 min-h-[auto] min-w-[auto] gap-y-5 w-full mx-auto py-10 md:px-0 md:flex-row md:max-w-[min(100%,1216px)] md:py-20">
        <AgentCTA />
        <JobsCTA />
      </div>
    </div>
  );
};
