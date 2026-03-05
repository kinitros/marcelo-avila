import { CompaniesText } from "@/sections/CompaniesSection/components/CompaniesText";

export const CompaniesSection = () => {
  return (
    <div className="relative box-border caret-transparent flex flex-col max-w-full w-full mx-auto before:accent-auto before:bg-blue-700 before:box-border before:caret-transparent before:text-zinc-800 before:hidden before:text-base before:not-italic before:normal-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-2/5 before:border-separate before:left-0 before:top-0 before:font-apple_system before:md:block">
      <div className="box-border caret-transparent gap-x-5 flex grow flex-wrap h-full max-w-full px-5 min-h-[auto] min-w-[auto] gap-y-5 w-full mx-auto pt-8 pb-6 md:px-0 md:flex-nowrap md:max-w-6xl md:pt-20 md:pb-0">
        <div className="relative self-center box-border caret-transparent gap-x-5 hidden leading-[0px] max-w-full min-h-0 gap-y-5 z-[3] md:block md:min-h-[auto] before:accent-auto before:bg-red-200 before:box-border before:caret-transparent before:text-zinc-800 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-[522px] before:tracking-[normal] before:leading-[0px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:transform-none before:visible before:w-px before:z-[-2] before:border-separate before:left-2/4 before:top-2/4 before:font-apple_system before:md:translate-x-[-0.5px] before:md:translate-y-[-246px] after:accent-auto after:bg-blue-700 after:box-border after:caret-transparent after:text-zinc-800 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[0px] after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:z-[-1] after:border-separate after:inset-x-0 after:-inset-y-2.5 after:font-apple_system">
          <div className="box-border caret-transparent text-center">
            <div className="text-sky-300 text-[94px] box-border caret-transparent inline-block leading-[94px]">
              <img
                src="/icons/icon-16.svg"
                alt="Icon"
                className="relative box-border caret-transparent h-[94px] align-baseline"
              />
            </div>
          </div>
        </div>
        <CompaniesText
          variant="image"
          imageUrl="/images/img04.jpg"
          imageAlt="Ávila Nascimento Advocacia"
        />
        <div className="relative self-start box-border caret-transparent gap-x-5 flex flex-col flex-wrap min-h-[auto] gap-y-5 w-full md:flex-nowrap md:w-[46%]">
          <CompaniesText
            variant=""
            highlightedText=" +28 Anos "
            headingText="de experiência em Propriedade Intelectual e Direito à Saúde."
            descriptionText="Liderado por Marcello Ávila Nascimento, nosso escritório oferece atendimento personalizado e especializado para proteger seus direitos com segurança e eficiência."
          />
        </div>
      </div>
    </div>
  );
};
