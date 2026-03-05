export const FAQList = () => {
  return (
    <div className="relative self-center box-border caret-transparent gap-x-5 max-w-full min-h-[auto] gap-y-5 w-full md:w-6/12">
      <div
        aria-label="Accordion. Open links with Enter or Space, close with Escape, and navigate with Arrow Keys"
        className="box-border caret-transparent"
      >
        <details className="relative bg-white box-border caret-transparent flex flex-col mb-3.5 rounded-md">
          <summary className="relative text-neutral-800 items-center box-border caret-transparent gap-x-2.5 flex justify-between list-none min-h-[auto] min-w-[auto] gap-y-0 p-4 rounded-md before:accent-auto before:bg-blue-700 before:bg-contain before:box-border before:caret-transparent before:text-neutral-800 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-0.5 before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:translate-x-[-7.5px] before:-translate-y-px before:visible before:w-[15px] before:rounded-[100px] before:border-separate before:-scale-100 before:right-5 before:top-[calc(50%_+_2px)] before:font-apple_system after:accent-auto after:bg-blue-700 after:bg-contain after:box-border after:caret-transparent after:text-neutral-800 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-0.5 after:tracking-[normal] after:leading-6 after:list-outside after:list-none after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:-translate-x-2 after:-translate-y-px after:visible after:w-[15px] after:rounded-[100px] after:border-separate after:-scale-100 after:right-5 after:top-[calc(50%_+_2px)] after:font-apple_system">
            <span className="box-border caret-transparent flex min-h-[auto] min-w-[auto] pr-12">
              <div className="text-xl font-medium items-center box-border caret-transparent flex justify-start leading-[30px] min-h-[auto] min-w-[auto] w-full font-aalto_sans_pro">
                {" "}
                Quais são as áreas de atuação do escritório?{" "}
              </div>
            </span>
          </summary>
          <div
            role="region"
            className="relative box-border caret-transparent gap-x-5 flex flex-col flex-wrap gap-y-5 w-full p-4 md:flex-nowrap"
          >
            <div className="relative box-border caret-transparent gap-x-5 max-w-full min-h-[auto] gap-y-5">
              <p className="text-neutral-700 text-lg font-light box-border caret-transparent leading-[27px] font-aalto_sans_pro">
                Atuamos em duas áreas principais: Propriedade Intelectual (registro de marcas no INPI, direitos autorais e patentes) e Direito à Saúde (ações contra planos de saúde e defesa do consumidor).
              </p>
            </div>
          </div>
        </details>
        <details className="relative bg-white box-border caret-transparent flex flex-col mb-3.5 rounded-md">
          <summary className="relative text-neutral-800 items-center box-border caret-transparent gap-x-2.5 flex justify-between list-none min-h-[auto] min-w-[auto] gap-y-0 p-4 rounded-md before:accent-auto before:bg-blue-700 before:bg-contain before:box-border before:caret-transparent before:text-neutral-800 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-0.5 before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:translate-x-[-7.5px] before:-translate-y-px before:rotate-90 before:visible before:w-[15px] before:rounded-[100px] before:border-separate before:right-5 before:top-[calc(50%_+_2px)] before:font-apple_system after:accent-auto after:bg-blue-700 after:bg-contain after:box-border after:caret-transparent after:text-neutral-800 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-0.5 after:tracking-[normal] after:leading-6 after:list-outside after:list-none after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:translate-x-[-7.5px] after:-translate-y-px after:visible after:w-[15px] after:rounded-[100px] after:border-separate after:-scale-100 after:right-5 after:top-[calc(50%_+_2px)] after:font-apple_system">
            <span className="box-border caret-transparent flex min-h-[auto] min-w-[auto] pr-12">
              <div className="text-xl font-medium items-center box-border caret-transparent flex justify-start leading-[30px] min-h-[auto] min-w-[auto] w-full font-aalto_sans_pro">
                {" "}
                Quanto tempo leva o registro de uma marca?{" "}
              </div>
            </span>
          </summary>
          <div
            role="region"
            className="relative box-border caret-transparent gap-x-5 hidden flex-col flex-wrap gap-y-5 w-full p-4 md:flex-nowrap"
          >
            <div className="relative box-border caret-transparent gap-x-5 max-w-full gap-y-5">
              <p className="text-neutral-700 text-lg font-light box-border caret-transparent leading-[27px] font-aalto_sans_pro">
                O processo de registro de marca no INPI pode levar de 6 a 12 meses, dependendo da complexidade do caso. Realizamos a pesquisa de viabilidade, protocolo do pedido e acompanhamento até a concessão definitiva.
              </p>
            </div>
          </div>
        </details>
        <details className="relative bg-white box-border caret-transparent flex flex-col mb-3.5 rounded-md">
          <summary className="relative text-neutral-800 items-center box-border caret-transparent gap-x-2.5 flex justify-between list-none min-h-[auto] min-w-[auto] gap-y-0 p-4 rounded-md before:accent-auto before:bg-blue-700 before:bg-contain before:box-border before:caret-transparent before:text-neutral-800 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-0.5 before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:translate-x-[-7.5px] before:-translate-y-px before:rotate-90 before:visible before:w-[15px] before:rounded-[100px] before:border-separate before:right-5 before:top-[calc(50%_+_2px)] before:font-apple_system after:accent-auto after:bg-blue-700 after:bg-contain after:box-border after:caret-transparent after:text-neutral-800 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-0.5 after:tracking-[normal] after:leading-6 after:list-outside after:list-none after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:translate-x-[-7.5px] after:-translate-y-px after:visible after:w-[15px] after:rounded-[100px] after:border-separate after:-scale-100 after:right-5 after:top-[calc(50%_+_2px)] after:font-apple_system">
            <span className="box-border caret-transparent flex min-h-[auto] min-w-[auto] pr-12">
              <div className="text-xl font-medium items-center box-border caret-transparent flex justify-start leading-[30px] min-h-[auto] min-w-[auto] w-full font-aalto_sans_pro">
                {" "}
                Como funciona a primeira consulta?{" "}
              </div>
            </span>
          </summary>
          <div
            role="region"
            className="relative box-border caret-transparent gap-x-5 hidden flex-col flex-wrap gap-y-5 w-full p-4 md:flex-nowrap"
          >
            <div className="relative box-border caret-transparent gap-x-5 max-w-full gap-y-5">
              <p className="text-neutral-700 text-lg font-light box-border caret-transparent leading-[27px] font-aalto_sans_pro">
                Na primeira consulta, analisamos o seu caso gratuitamente, identificamos as melhores estratégias jurídicas e apresentamos um plano de ação personalizado para proteger seus direitos.
              </p>
            </div>
          </div>
        </details>
        <details className="relative bg-white box-border caret-transparent flex flex-col mb-3.5 rounded-md">
          <summary className="relative text-neutral-800 items-center box-border caret-transparent gap-x-2.5 flex justify-between list-none min-h-[auto] min-w-[auto] gap-y-0 p-4 rounded-md before:accent-auto before:bg-blue-700 before:bg-contain before:box-border before:caret-transparent before:text-neutral-800 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-0.5 before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:translate-x-[-7.5px] before:-translate-y-px before:rotate-90 before:visible before:w-[15px] before:rounded-[100px] before:border-separate before:right-5 before:top-[calc(50%_+_2px)] before:font-apple_system after:accent-auto after:bg-blue-700 after:bg-contain after:box-border after:caret-transparent after:text-neutral-800 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-0.5 after:tracking-[normal] after:leading-6 after:list-outside after:list-none after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:translate-x-[-7.5px] after:-translate-y-px after:visible after:w-[15px] after:rounded-[100px] after:border-separate after:-scale-100 after:right-5 after:top-[calc(50%_+_2px)] after:font-apple_system">
            <span className="box-border caret-transparent flex min-h-[auto] min-w-[auto] pr-12">
              <div className="text-xl font-medium items-center box-border caret-transparent flex justify-start leading-[30px] min-h-[auto] min-w-[auto] w-full font-aalto_sans_pro">
                {" "}
                Qual a diferença de um escritório boutique?{" "}
              </div>
            </span>
          </summary>
          <div
            role="region"
            className="relative box-border caret-transparent gap-x-5 hidden flex-col flex-wrap gap-y-5 w-full p-4 md:flex-nowrap"
          >
            <div className="relative box-border caret-transparent gap-x-5 max-w-full gap-y-5">
              <p className="text-neutral-700 text-lg font-light box-border caret-transparent leading-[27px] font-aalto_sans_pro">
                Um escritório boutique oferece atendimento personalizado e especializado, com foco em áreas específicas do Direito. Isso garante maior atenção ao seu caso e soluções mais eficientes.
              </p>
            </div>
          </div>
        </details>
        <details className="relative bg-white box-border caret-transparent flex flex-col mb-3.5 rounded-md">
          <summary className="relative text-neutral-800 items-center box-border caret-transparent gap-x-2.5 flex justify-between list-none min-h-[auto] min-w-[auto] gap-y-0 p-4 rounded-md before:accent-auto before:bg-blue-700 before:bg-contain before:box-border before:caret-transparent before:text-neutral-800 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-0.5 before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:translate-x-[-7.5px] before:-translate-y-px before:rotate-90 before:visible before:w-[15px] before:rounded-[100px] before:border-separate before:right-5 before:top-[calc(50%_+_2px)] before:font-apple_system after:accent-auto after:bg-blue-700 after:bg-contain after:box-border after:caret-transparent after:text-neutral-800 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-0.5 after:tracking-[normal] after:leading-6 after:list-outside after:list-none after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:translate-x-[-7.5px] after:-translate-y-px after:visible after:w-[15px] after:rounded-[100px] after:border-separate after:-scale-100 after:right-5 after:top-[calc(50%_+_2px)] after:font-apple_system">
            <span className="box-border caret-transparent flex min-h-[auto] min-w-[auto] pr-12">
              <div className="text-xl font-medium items-center box-border caret-transparent flex justify-start leading-[30px] min-h-[auto] min-w-[auto] w-full font-aalto_sans_pro">
                {" "}
                Meu plano de saúde negou um procedimento. O que fazer?{" "}
              </div>
            </span>
          </summary>
          <div
            role="region"
            className="relative box-border caret-transparent gap-x-5 hidden flex-col flex-wrap gap-y-5 w-full p-4 md:flex-nowrap"
          >
            <div className="relative box-border caret-transparent gap-x-5 max-w-full gap-y-5">
              <p className="text-neutral-700 text-lg font-light box-border caret-transparent leading-[27px] font-aalto_sans_pro">
                Se seu plano de saúde negou indevidamente um procedimento, você tem direito de recorrer judicialmente. Entre em contato conosco para uma análise do seu caso e orientação sobre os próximos passos.
              </p>
            </div>
          </div>
        </details>
        <details className="relative bg-white box-border caret-transparent flex flex-col mb-3.5 rounded-md">
          <summary className="relative text-neutral-800 items-center box-border caret-transparent gap-x-2.5 flex justify-between list-none min-h-[auto] min-w-[auto] gap-y-0 p-4 rounded-md before:accent-auto before:bg-blue-700 before:bg-contain before:box-border before:caret-transparent before:text-neutral-800 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-0.5 before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:translate-x-[-7.5px] before:-translate-y-px before:rotate-90 before:visible before:w-[15px] before:rounded-[100px] before:border-separate before:right-5 before:top-[calc(50%_+_2px)] before:font-apple_system after:accent-auto after:bg-blue-700 after:bg-contain after:box-border after:caret-transparent after:text-neutral-800 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-0.5 after:tracking-[normal] after:leading-6 after:list-outside after:list-none after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:translate-x-[-7.5px] after:-translate-y-px after:visible after:w-[15px] after:rounded-[100px] after:border-separate after:-scale-100 after:right-5 after:top-[calc(50%_+_2px)] after:font-apple_system">
            <span className="box-border caret-transparent flex min-h-[auto] min-w-[auto] pr-12">
              <div className="text-xl font-medium items-center box-border caret-transparent flex justify-start leading-[30px] min-h-[auto] min-w-[auto] w-full font-aalto_sans_pro">
                {" "}
                Vocês atendem em todo o Brasil?{" "}
              </div>
            </span>
          </summary>
          <div
            role="region"
            className="relative box-border caret-transparent gap-x-5 hidden flex-col flex-wrap gap-y-5 w-full p-4 md:flex-nowrap"
          >
            <div className="relative box-border caret-transparent gap-x-5 max-w-full gap-y-5">
              <p className="text-neutral-700 text-lg font-light box-border caret-transparent leading-[27px] font-aalto_sans_pro">
                Sim, atendemos clientes em todo o Brasil. Nosso escritório fica na Barra da Tijuca, Rio de Janeiro, mas realizamos consultas presenciais e remotas para atender clientes de qualquer região.
              </p>
            </div>
          </div>
        </details>
        <details className="relative bg-white box-border caret-transparent flex flex-col mb-3.5 rounded-md">
          <summary className="relative text-neutral-800 items-center box-border caret-transparent gap-x-2.5 flex justify-between list-none min-h-[auto] min-w-[auto] gap-y-0 p-4 rounded-md before:accent-auto before:bg-blue-700 before:bg-contain before:box-border before:caret-transparent before:text-neutral-800 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-0.5 before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:translate-x-[-7.5px] before:-translate-y-px before:rotate-90 before:visible before:w-[15px] before:rounded-[100px] before:border-separate before:right-5 before:top-[calc(50%_+_2px)] before:font-apple_system after:accent-auto after:bg-blue-700 after:bg-contain after:box-border after:caret-transparent after:text-neutral-800 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-0.5 after:tracking-[normal] after:leading-6 after:list-outside after:list-none after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:translate-x-[-7.5px] after:-translate-y-px after:visible after:w-[15px] after:rounded-[100px] after:border-separate after:-scale-100 after:right-5 after:top-[calc(50%_+_2px)] after:font-apple_system">
            <span className="box-border caret-transparent flex min-h-[auto] min-w-[auto] pr-12">
              <div className="text-xl font-medium items-center box-border caret-transparent flex justify-start leading-[30px] min-h-[auto] min-w-[auto] w-full font-aalto_sans_pro">
                {" "}
                Qual o horário de atendimento do escritório?{" "}
              </div>
            </span>
          </summary>
          <div
            role="region"
            className="relative box-border caret-transparent gap-x-5 hidden flex-col flex-wrap gap-y-5 w-full p-4 md:flex-nowrap"
          >
            <div className="relative box-border caret-transparent gap-x-5 max-w-full gap-y-5">
              <p className="text-neutral-700 text-lg font-light box-border caret-transparent leading-[27px] font-aalto_sans_pro">
                Nosso horário de atendimento é de segunda a domingo, das 09:00 às 18:00. Estamos localizados na Av. José Silva de Azevedo Neto, 200 – Bloco V Cobertura 419, Barra da Tijuca, Rio de Janeiro, RJ.
              </p>
            </div>
          </div>
        </details>
        <details className="relative bg-white box-border caret-transparent flex flex-col rounded-md">
          <summary className="relative text-neutral-800 items-center box-border caret-transparent gap-x-2.5 flex justify-between list-none min-h-[auto] min-w-[auto] gap-y-0 p-4 rounded-md before:accent-auto before:bg-blue-700 before:bg-contain before:box-border before:caret-transparent before:text-neutral-800 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-0.5 before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:translate-x-[-7.5px] before:-translate-y-px before:rotate-90 before:visible before:w-[15px] before:rounded-[100px] before:border-separate before:right-5 before:top-[calc(50%_+_2px)] before:font-apple_system after:accent-auto after:bg-blue-700 after:bg-contain after:box-border after:caret-transparent after:text-neutral-800 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-0.5 after:tracking-[normal] after:leading-6 after:list-outside after:list-none after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:translate-x-[-7.5px] after:-translate-y-px after:visible after:w-[15px] after:rounded-[100px] after:border-separate after:-scale-100 after:right-5 after:top-[calc(50%_+_2px)] after:font-apple_system">
            <span className="box-border caret-transparent flex min-h-[auto] min-w-[auto] pr-12">
              <div className="text-xl font-medium items-center box-border caret-transparent flex justify-start leading-[30px] min-h-[auto] min-w-[auto] w-full font-aalto_sans_pro">
                {" "}
                Como entro em contato com o escritório?{" "}
              </div>
            </span>
          </summary>
          <div
            role="region"
            className="relative box-border caret-transparent gap-x-5 hidden flex-col flex-wrap gap-y-5 w-full p-4 md:flex-nowrap"
          >
            <div className="relative box-border caret-transparent gap-x-5 max-w-full gap-y-5">
              <p className="text-neutral-700 text-lg font-light box-border caret-transparent leading-[27px] font-aalto_sans_pro">
                Você pode entrar em contato pelo WhatsApp +55 (21) 97272-8787, pelo e-mail info@avilanascimento.adv.br ou pelas nossas redes sociais. Também pode agendar uma consulta diretamente pelo nosso WhatsApp.
              </p>
            </div>
          </div>
        </details>
      </div>
    </div>
  );
};
