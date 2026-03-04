import { StatCard } from "@/sections/StatsSection/components/StatCard";

export const StatsSection = () => {
  return (
    <div className="relative bg-white box-border caret-transparent flex flex-col max-w-full w-full z-[4] border-zinc-200 mx-auto px-2.5 border-b border-solid">
      <div className="box-border caret-transparent gap-x-0 flex grow flex-wrap h-full justify-between max-w-full px-5 min-h-[auto] min-w-[auto] gap-y-0 w-full mx-auto py-2.5 md:px-0 md:flex-nowrap md:max-w-[min(100%,1216px)]">
        <StatCard
          variant="min-h-[auto] w-full p-8 md:w-[31%]"
          iconUrl="https://c.animaapp.com/mmaw5r5q6lUknB/assets/icon-12.svg"
          title="01 Vaga Preenchida"
          description="a cada 60 minutos"
        />
        <StatCard
          variant="relative self-center box-border caret-transparent gap-x-0 hidden leading-[0px] max-w-full min-h-0 gap-y-0 md:block md:min-h-[auto]"
          iconUrl="https://c.animaapp.com/mmaw5r5q6lUknB/assets/icon-13.svg"
        />
        <div className="relative box-border caret-transparent gap-x-0 max-w-full min-h-[auto] gap-y-0 w-full p-8 md:w-[31%]">
          <div className="box-border caret-transparent gap-x-[9px] flex flex-row gap-y-[9px] md:flex-col">
            <div className="box-border caret-transparent shrink-0 leading-[0px] min-h-[auto] min-w-[auto]">
              <span className="text-sky-300 text-2xl box-border caret-transparent inline-block fill-sky-300 leading-6 text-center">
                <img
                  src="https://c.animaapp.com/mmaw5r5q6lUknB/assets/icon-14.svg"
                  alt="Icon"
                  className="relative box-border caret-transparent h-6 align-baseline w-6"
                />
              </span>
            </div>
            <div className="box-border caret-transparent grow min-h-[auto] min-w-[auto] w-full">
              <h3 className="text-neutral-950 text-lg md:text-xl font-medium box-border caret-transparent leading-[1.35] font-aalto_sans_pro">
                <span className="box-border caret-transparent">+6.000 </span>
              </h3>
              <p className="text-neutral-500 box-border caret-transparent font-montserrat">
                profissionais contratados{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="relative self-center box-border caret-transparent gap-x-0 hidden leading-[0px] max-w-full min-h-0 gap-y-0 md:block md:min-h-[auto]">
          <div className="box-border caret-transparent text-center">
            <div className="text-sky-300 text-[134px] box-border caret-transparent inline-block leading-[134px]">
              <img
                src="https://c.animaapp.com/mmaw5r5q6lUknB/assets/icon-13.svg"
                alt="Icon"
                className="relative box-border caret-transparent h-[134px] align-baseline"
              />
            </div>
          </div>
        </div>
        <StatCard
          variant="min-h-[auto] w-full p-8 md:w-[31%]"
          iconUrl="https://c.animaapp.com/mmaw5r5q6lUknB/assets/icon-15.svg"
          iconClassName="relative box-border caret-transparent h-6 align-baseline w-6"
          title="+2.700"
          description="empresas atendidas"
        />
        <div className="relative self-center box-border caret-transparent gap-x-0 hidden leading-[0px] max-w-full min-h-0 gap-y-0 md:block md:min-h-[auto]">
          <div className="box-border caret-transparent text-center">
            <div className="text-sky-300 text-[134px] box-border caret-transparent inline-block leading-[134px]">
              <img
                src="https://c.animaapp.com/mmaw5r5q6lUknB/assets/icon-13.svg"
                alt="Icon"
                className="relative box-border caret-transparent h-[134px] align-baseline"
              />
            </div>
          </div>
        </div>
        <StatCard
          variant="min-h-[auto] w-full p-8 md:w-[31%]"
          iconUrl="https://c.animaapp.com/mmaw5r5q6lUknB/assets/icon-15.svg"
          title="+200"
          description="agentes em todo Brasil"
        />
      </div>
    </div>
  );
};
