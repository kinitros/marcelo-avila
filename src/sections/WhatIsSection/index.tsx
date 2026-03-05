import { ForWhoSection } from "@/sections/WhatIsSection/components/ForWhoSection";

export const WhatIsSection = () => {
  return (
    <div className="relative box-border caret-transparent flex flex-col max-w-full w-full mx-auto">
      <div className="box-border caret-transparent gap-x-5 flex flex-col grow flex-wrap h-full max-w-full px-5 min-h-[auto] min-w-[auto] gap-y-5 w-full mx-auto py-8 md:px-0 md:flex-nowrap md:max-w-6xl md:py-20">
        {/* Seção institucional */}
        <div className="relative self-center box-border caret-transparent gap-x-5 flex flex-col min-h-[auto] gap-y-5 w-full mb-12 md:mb-20">
          <div className="text-center mb-8">
            <span className="text-stone-700 text-sm font-medium uppercase tracking-wider font-aalto_sans_pro">
              Escritório de advocacia
            </span>
            <h2 className="text-blue-700 text-2xl font-medium mt-2 font-aalto_sans_pro md:text-[32px] md:leading-[38.4px]">
              Advogado especialista em propriedade intelectual e direito à saúde.
            </h2>
          </div>

          <div className="flex flex-col gap-8 md:flex-row md:gap-12">
            {/* Coluna esquerda - Texto institucional */}
            <div className="flex flex-col gap-5 md:w-[58%]">
              <p className="text-stone-600 text-base leading-7 font-aalto_sans_pro md:text-lg md:leading-8">
                <strong className="text-neutral-900">Ávila Nascimento Advocacia</strong> é um escritório boutique
                especializado em Direito à Saúde e Propriedade Intelectual com
                forte atuação como <strong>advogado plano de saúde</strong> e{" "}
                <strong>advogado de marcas (advogado de INPI)</strong>.
              </p>
              <p className="text-stone-600 text-base leading-7 font-aalto_sans_pro md:text-lg md:leading-8">
                Ou seja, auxiliamos clientes contra as abusividades dos planos de
                saúde e em todas as etapas do <strong>registro</strong> e proteção de ativos
                intelectuais.
              </p>
              <p className="text-stone-600 text-base leading-7 font-aalto_sans_pro md:text-lg md:leading-8">
                Nosso sócio fundador é Advogado inscrito sob o nº 128.829 na OAB-RJ
                e Agente da Propriedade Industrial registrado perante o{" "}
                <strong className="text-blue-700">INPI</strong> sob matrícula 0636 de 29/09/1998
                além de ser associado à ABPI (nº 43657) e à ABAPI (nº 0522).
              </p>
              <p className="text-stone-600 text-base leading-7 font-aalto_sans_pro md:text-lg md:leading-8">
                Acima de tudo, nosso propósito é oferecer serviços jurídicos de
                excelência, garantindo segurança legal por meio de atendimento
                individualizado e soluções <em>tailor-made</em>, personalizadas para cada
                cliente.
              </p>
              <p className="text-stone-600 text-base leading-7 font-aalto_sans_pro md:text-lg md:leading-8">
                Para tanto, contamos com <strong>sede própria</strong> no prestigiado bairro da
                Barra da Tijuca/RJ, situada no renomado{" "}
                <strong>condomínio O2 Corporate &amp; Offices</strong>, com estrutura moderna para atender{" "}
                <strong>clientes de todo o Brasil presencial ou remotamente</strong> com o mesmo
                cuidado e atenção.
              </p>
              <div className="mt-4">
                <a
                  href="#contato"
                  className="text-white text-[15px] font-medium bg-blue-700 inline-block leading-[15px] text-center px-8 py-4 rounded-[100px] font-aalto_sans_pro hover:bg-blue-800 transition-colors"
                >
                  ENTRE EM CONTATO
                </a>
              </div>
            </div>

            {/* Coluna direita - Reconhecimento e selos */}
            <div className="flex flex-col gap-6 md:w-[42%]">
              {/* Card Reconhecimento */}
              <div className="border border-gray-200 rounded-2xl p-6 md:p-8">
                <div className="flex flex-col items-center gap-4 md:flex-row md:items-start">
                  <div className="flex-shrink-0 w-28 h-28 bg-stone-100 rounded-full flex items-center justify-center">
                    <span className="text-stone-600 text-xs font-bold text-center leading-tight font-aalto_sans_pro px-2">
                      RANKING<br />ANÁLISE<br />ADVOCACIA<br />REGIONAL<br />2023
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blue-700 text-lg font-medium mb-2 font-aalto_sans_pro">
                      Reconhecimento
                    </h4>
                    <p className="text-stone-600 text-sm leading-6 font-aalto_sans_pro">
                      Com mais de 28 anos de atuação perante o INPI e mais de 21 anos de advocacia, o
                      sócio titular <strong className="text-neutral-900">Marcello Ávila do
                      Nascimento Souza</strong> teve destaque pela publicação Análise Advocacia como um
                      dos mais admirados do Brasil na categoria Escritório Especializado.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card ABAPI */}
              <div className="border border-gray-200 rounded-2xl p-6 md:p-8">
                <div className="flex items-center justify-center gap-6">
                  <div className="flex-shrink-0 w-24 h-24 bg-stone-100 rounded-full flex items-center justify-center">
                    <span className="text-stone-600 text-[10px] font-bold text-center leading-tight font-aalto_sans_pro">
                      ASSOCIADO<br />ABAPI
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="text-neutral-900 text-2xl font-bold font-aalto_sans_pro">abpi</span>
                    <p className="text-stone-700 text-xs leading-4 font-aalto_sans_pro mt-1">
                      ASSOCIAÇÃO<br />BRASILEIRA DA<br />PROPRIEDADE<br />INTELECTUAL
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ForWhoSection />
      </div>
    </div>
  );
};
