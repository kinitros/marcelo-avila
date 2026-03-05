import { useState } from "react";
import { HeroContent } from "@/sections/Hero/components/HeroContent";

export const Hero = () => {
  const [activeArea, setActiveArea] = useState<number | null>(0);
  return (
    <div className="box-border caret-transparent">
      <div className="relative box-border caret-transparent flex flex-col max-w-full w-full mx-auto px-[0%] md:px-0">
        <div className="absolute box-border caret-transparent hidden h-[max(100%_+_0px,100%)] list-none w-[max(100%_+_0px,100%)] z-0 overflow-hidden mx-auto inset-0 md:block bg-neutral-900">
          <div className="relative caret-transparent flex h-full w-full z-[1] justify-center">
            <div
              role="group"
              aria-label="1 / 3"
              className="relative box-border caret-transparent shrink-0 h-full min-h-[auto] min-w-[auto] w-[65%] ml-auto mr-[10%]"
            >
              <div className="bg-[url('/images/advogado.jpg')] bg-contain bg-no-repeat box-border caret-transparent h-[115%] w-full bg-[position:center_top_2rem] relative [transform:scaleX(-1)] brightness-110"></div>
            </div>
          </div>
        </div>
        <HeroContent />
      </div>
      <div className="relative bg-white box-border caret-transparent flex flex-col max-w-full w-full z-[4] border-zinc-200 mx-auto px-2.5 border-b border-solid">
        <div className="box-border caret-transparent gap-x-0 flex grow flex-wrap h-full justify-between max-w-full px-5 md:px-0 min-h-[auto] min-w-[auto] gap-y-0 w-full mx-auto py-2.5 md:flex-nowrap md:max-w-[min(100%,1216px)]">
          <div className="relative box-border caret-transparent gap-x-0 max-w-full min-h-[auto] gap-y-0 w-full py-6 px-5 md:p-8 md:w-[31%]">
            <div className="box-border caret-transparent gap-x-3 flex flex-row gap-y-3 md:gap-x-[9px] md:gap-y-[9px] md:flex-col">
              <div className="box-border caret-transparent shrink-0 leading-[0px] min-h-[auto] min-w-[auto]">
                <span className="text-sky-300 text-2xl box-border caret-transparent inline-block fill-sky-300 leading-6 text-center">
                  <img
                    src="/icons/icon-12.svg"
                    alt="Icon"
                    className="relative box-border caret-transparent h-8 align-baseline w-8 md:h-6 md:w-6"
                  />
                </span>
              </div>
              <div className="box-border caret-transparent grow min-h-[auto] min-w-[auto] w-full">
                <h3 className="text-neutral-950 text-xl md:text-xl font-medium box-border caret-transparent leading-[1.35] font-aalto_sans_pro">
                  <span className="box-border caret-transparent">
                    +28 Anos{" "}
                  </span>
                </h3>
                <p className="text-neutral-700 text-base box-border caret-transparent font-montserrat">
                  em Propriedade Intelectual{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="relative self-center box-border caret-transparent gap-x-0 hidden leading-[0px] max-w-full min-h-0 gap-y-0 md:block md:min-h-[auto]">
            <div className="box-border caret-transparent text-center">
              <div className="text-sky-300 text-[134px] box-border caret-transparent inline-block leading-[134px]">
                <img
                  src="/icons/icon-13.svg"
                  alt="Icon"
                  className="relative box-border caret-transparent h-[134px] align-baseline"
                />
              </div>
            </div>
          </div>
          <div className="relative box-border caret-transparent gap-x-0 max-w-full min-h-[auto] gap-y-0 w-full py-6 px-5 md:p-8 md:w-[31%]">
            <div className="box-border caret-transparent gap-x-3 flex flex-row gap-y-3 md:gap-x-[9px] md:gap-y-[9px] md:flex-col">
              <div className="box-border caret-transparent shrink-0 leading-[0px] min-h-[auto] min-w-[auto]">
                <span className="text-sky-300 text-2xl box-border caret-transparent inline-block fill-sky-300 leading-6 text-center">
                  <img
                    src="/icons/icon-14.svg"
                    alt="Icon"
                    className="relative box-border caret-transparent h-8 align-baseline w-8 md:h-6 md:w-6"
                  />
                </span>
              </div>
              <div className="box-border caret-transparent grow min-h-[auto] min-w-[auto] w-full">
                <h3 className="text-neutral-950 text-xl md:text-xl font-medium box-border caret-transparent leading-[1.35] font-aalto_sans_pro">
                  <span className="box-border caret-transparent">+21 Anos </span>
                </h3>
                <p className="text-neutral-700 text-base box-border caret-transparent font-montserrat">
                  de advocacia{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="relative self-center box-border caret-transparent gap-x-0 hidden leading-[0px] max-w-full min-h-0 gap-y-0 md:block md:min-h-[auto]">
            <div className="box-border caret-transparent text-center">
              <div className="text-sky-300 text-[134px] box-border caret-transparent inline-block leading-[134px]">
                <img
                  src="/icons/icon-13.svg"
                  alt="Icon"
                  className="relative box-border caret-transparent h-[134px] align-baseline"
                />
              </div>
            </div>
          </div>
          <div className="relative box-border caret-transparent gap-x-0 max-w-full min-h-[auto] gap-y-0 w-full py-6 px-5 md:p-8 md:w-[31%]">
            <div className="box-border caret-transparent gap-x-3 flex flex-row gap-y-3 md:gap-x-[9px] md:gap-y-[9px] md:flex-col">
              <div className="box-border caret-transparent shrink-0 leading-[0px] min-h-[auto] min-w-[auto]">
                <span className="text-sky-300 text-2xl box-border caret-transparent inline-block fill-sky-300 leading-6 text-center">
                  <img
                    src="/icons/icon-15.svg"
                    alt="Icon"
                    className="relative box-border caret-transparent h-8 align-baseline w-8 md:h-6 md:w-6"
                  />
                </span>
              </div>
              <div className="box-border caret-transparent grow min-h-[auto] min-w-[auto] w-full">
                <h3 className="text-neutral-950 text-xl md:text-xl font-medium box-border caret-transparent leading-[1.35] font-aalto_sans_pro">
                  <span className="box-border caret-transparent">Registro </span>
                </h3>
                <p className="text-neutral-700 text-base box-border caret-transparent font-montserrat">
                  de Marcas no INPI{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="relative self-center box-border caret-transparent gap-x-0 hidden leading-[0px] max-w-full min-h-0 gap-y-0 md:block md:min-h-[auto]">
            <div className="box-border caret-transparent text-center">
              <div className="text-sky-300 text-[134px] box-border caret-transparent inline-block leading-[134px]">
                <img
                  src="/icons/icon-13.svg"
                  alt="Icon"
                  className="relative box-border caret-transparent h-[134px] align-baseline"
                />
              </div>
            </div>
          </div>
          <div className="relative box-border caret-transparent gap-x-0 max-w-full min-h-[auto] gap-y-0 w-full py-6 px-5 md:p-8 md:w-[31%]">
            <div className="box-border caret-transparent gap-x-3 flex flex-row gap-y-3 md:gap-x-[9px] md:gap-y-[9px] md:flex-col">
              <div className="box-border caret-transparent shrink-0 leading-[0px] min-h-[auto] min-w-[auto]">
                <span className="text-sky-300 text-2xl box-border caret-transparent inline-block fill-sky-300 leading-6 text-center">
                  <img
                    src="/icons/icon-15.svg"
                    alt="Icon"
                    className="relative box-border caret-transparent h-8 align-baseline w-8 md:h-6 md:w-6"
                  />
                </span>
              </div>
              <div className="box-border caret-transparent grow min-h-[auto] min-w-[auto] w-full">
                <h3 className="text-neutral-950 text-xl md:text-xl font-medium box-border caret-transparent leading-[1.35] font-aalto_sans_pro">
                  <span className="box-border caret-transparent">Direito </span>
                </h3>
                <p className="text-neutral-700 text-base box-border caret-transparent font-montserrat">
                  à Saúde{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative box-border caret-transparent flex flex-col max-w-full w-full mx-auto before:accent-auto before:bg-blue-700 before:box-border before:caret-transparent before:text-zinc-800 before:hidden before:text-base before:not-italic before:normal-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-2/5 before:border-separate before:left-0 before:top-0 before:font-apple_system before:md:block">
        <div className="box-border caret-transparent gap-x-5 flex grow flex-wrap h-full max-w-full px-5 md:px-0 min-h-[auto] min-w-[auto] gap-y-5 w-full mx-auto pt-8 pb-6 md:flex-nowrap md:max-w-6xl md:pt-20 md:pb-0">
          <div className="relative self-stretch box-border caret-transparent max-w-full min-h-[auto] text-center w-full z-[4] mb-0 md:w-[45%]">
            <img
              src="/images/advogado avila.png"
              alt="Dr. Marcello Avila do Nascimento Souza - Advogado Especialista"
              className="box-border caret-transparent inline-block max-w-full w-full h-full rounded-xl object-cover object-top"
            />
          </div>
          <div className="relative self-start box-border caret-transparent flex flex-col min-h-[auto] gap-y-4 w-full md:w-[55%]">
            <div className="relative box-border caret-transparent max-w-full min-h-[auto] w-full">
              <h3 className="text-blue-700 text-2xl md:text-[32px] font-medium box-border caret-transparent leading-[1.25] mt-2 mb-2 font-aalto_sans_pro">
                Advogado especialista em propriedade intelectual e direito à saúde.
              </h3>
              <p className="text-neutral-600 text-[15px] box-border caret-transparent leading-[23px] font-montserrat mt-4">
                <strong className="text-neutral-800 font-aalto_sans_pro">Ávila Nascimento Advocacia</strong> é um escritório boutique especializado em Direito à Saúde e Propriedade Intelectual com forte atuação como <strong className="text-neutral-800">advogado plano de saúde</strong> e <strong className="text-neutral-800">advogado de marcas (advogado de INPI)</strong>.
              </p>
              <p className="text-neutral-600 text-[15px] box-border caret-transparent leading-[23px] font-montserrat mt-3">
                Ou seja, auxiliamos clientes contra as abusividades dos planos de saúde e em todas as etapas do <strong className="text-neutral-800">registro</strong> e proteção de ativos intelectuais.
              </p>
              <p className="text-neutral-600 text-[15px] box-border caret-transparent leading-[23px] font-montserrat mt-3">
                Nosso sócio fundador é Advogado inscrito sob o nº 128.829 na OAB-RJ e Agente da Propriedade Industrial registrado perante o INPI sob matrícula 0636 de 29/09/1998 além de ser associado à ABPI (nº 43657) e à ABAPI (nº 0522).
              </p>
              <p className="text-neutral-600 text-[15px] box-border caret-transparent leading-[23px] font-montserrat mt-3">
                Acima de tudo, nosso propósito é oferecer serviços jurídicos de excelência, garantindo segurança legal por meio de atendimento individualizado e soluções <em>tailor-made</em>, personalizadas para cada cliente.
              </p>
            </div>
            {/* Cards de credibilidade */}
            <div className="flex flex-col gap-3 w-full">
              <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-sm">
                <img
                  src="/images/advogado-frente.jpg"
                  alt="Ranking Análise Advocacia Regional 2023"
                  className="w-16 h-16 object-cover flex-shrink-0 rounded"
                />
                <div>
                  <p className="text-neutral-800 text-sm font-semibold font-aalto_sans_pro m-0">Ranking Análise Advocacia 2023</p>
                  <p className="text-neutral-600 text-[13px] font-montserrat leading-[18px] m-0 mt-1">Reconhecido como um dos escritórios mais admirados do Brasil na categoria Escritório Especializado.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-sm">
                <img
                  src="/images/abpi-logo.png"
                  alt="ABPI - Associação Brasileira da Propriedade Intelectual"
                  className="w-16 h-16 object-contain flex-shrink-0"
                />
                <div>
                  <p className="text-neutral-800 text-sm font-semibold font-aalto_sans_pro m-0">Associado ABPI</p>
                  <p className="text-neutral-600 text-[13px] font-montserrat leading-[18px] m-0 mt-1">Associação Brasileira da Propriedade Intelectual — referência nacional em PI no Brasil.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-white box-border caret-transparent flex flex-col max-w-full w-full z-[3] mx-auto">
        <div className="items-end box-border caret-transparent gap-x-5 flex grow flex-wrap h-full justify-between max-w-full px-5 md:px-0 min-h-[auto] min-w-[auto] gap-y-5 w-full mx-auto py-8 md:max-w-[1216px] md:py-20">
          <div className="relative box-border caret-transparent gap-x-5 max-w-full min-h-[auto] gap-y-5 w-full md:w-[449px]">
            <h2 className="text-black text-2xl font-medium box-border caret-transparent leading-[1.25] font-aalto_sans_pro md:text-[32px]">
              <span className="text-blue-700 text-xs box-border caret-transparent block leading-[19.6px] font-aalto_sans_pro">
                {" "}
                SATISFAÇÃO 97/100
              </span>
              Milhares de{" "}
              <span className="text-blue-700 text-2xl box-border caret-transparent md:text-[32px]">
                {" "}
                clientes felizes
              </span>
            </h2>
          </div>
          <div className="relative box-border caret-transparent gap-x-5 max-w-full min-h-[auto] gap-y-5">
            <div className="box-border caret-transparent">
              <div className="box-border caret-transparent text-left w-full">
                <div className="text-black text-sm box-border caret-transparent leading-[19.6px] mt-[5px] mb-[15px] font-trustindex_poppins">
                  <div className="relative box-border caret-transparent">
                    <div className="absolute box-border caret-transparent hidden h-0 mt-[-15px] w-full z-[1] top-0 md:block">
                      <div
                        aria-label="Próxima avaliação"
                        role="button"
                        className="absolute bg-blue-700 box-border caret-transparent h-[30px] outline-zinc-300 outline outline-1 transform-none w-[30px] border border-blue-700 p-[18px] rounded-[100px] border-solid right-0 top-0 md:translate-y-[-58px] before:accent-auto before:box-border before:caret-transparent before:text-black before:block before:text-sm before:not-italic before:normal-nums before:font-normal before:h-2.5 before:tracking-[normal] before:leading-[19.6px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-left before:no-underline before:indent-[0px] before:normal-case before:transform-none before:visible before:w-2.5 before:border-l-2 before:border-b-2 before:border-separate before:border-solid before:border-white before:left-2/4 before:top-2/4 before:font-trustindex_poppins before:md:translate-x-[-7px] before:md:translate-y-[-5px] before:md:rotate-[-135deg]"
                      ></div>
                      <div
                        aria-label="Avaliação anterior"
                        role="button"
                        className="absolute bg-blue-700 box-border caret-transparent h-[30px] outline-zinc-300 outline outline-1 transform-none w-[30px] border border-blue-700 p-[18px] rounded-[100px] border-solid right-0 top-0 md:translate-x-[-54px] md:translate-y-[-58px] before:accent-auto before:box-border before:caret-transparent before:text-black before:block before:text-sm before:not-italic before:normal-nums before:font-normal before:h-2.5 before:tracking-[normal] before:leading-[19.6px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-left before:no-underline before:indent-[0px] before:normal-case before:transform-none before:visible before:w-2.5 before:border-l-2 before:border-b-2 before:border-separate before:border-solid before:border-white before:left-2/4 before:top-2/4 before:font-trustindex_poppins before:md:translate-x-[-3px] before:md:translate-y-[-5px] before:md:rotate-45"
                      ></div>
                    </div>
                    <div className="relative">
                    <button
                      aria-label="Avaliação anterior"
                      onClick={(e) => {
                        const container = e.currentTarget.nextElementSibling?.nextElementSibling as HTMLElement;
                        if (container) container.scrollBy({ left: -(container.offsetWidth * 0.78), behavior: 'smooth' });
                      }}
                      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 bg-blue-700 text-white w-9 h-9 rounded-full flex items-center justify-center shadow-lg md:hidden cursor-pointer"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button
                      aria-label="Próxima avaliação"
                      onClick={(e) => {
                        const container = e.currentTarget.nextElementSibling as HTMLElement;
                        if (container) container.scrollBy({ left: container.offsetWidth * 0.78, behavior: 'smooth' });
                      }}
                      className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 bg-blue-700 text-white w-9 h-9 rounded-full flex items-center justify-center shadow-lg md:hidden cursor-pointer"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                    </button>
                    <div className="box-border caret-transparent flex overflow-x-auto -mx-2 py-3 md:mx-2 md:overflow-hidden scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
                      <div className="relative box-border caret-transparent basis-[75%] shrink-0 max-w-[75%] min-h-[auto] min-w-[auto] px-2 md:basis-3/12 md:max-w-[25%]">
                        <div className="relative backdrop-blur-0 bg-white bg-no-repeat bg-size-[270px] shadow-[rgba(0,0,0,0.03)_1px_4px_10px_0px,rgba(0,0,0,0.05)_0px_0px_2px_0px] box-border caret-transparent bg-[position:calc(100%_+_70px)_-70px] p-5 rounded-xl">
                          <div className="relative box-border caret-transparent flex">
                            <div className="absolute box-border caret-transparent h-5 w-5 right-0 top-0">
                              <img
                                src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
                                alt=""
                                className="aspect-[auto_20_/_20] box-border caret-transparent inline align-baseline w-5"
                              />
                            </div>
                            <div className="box-border caret-transparent min-h-[auto] min-w-[auto] mr-[15px]">
                              <img
                                src="https://lh3.googleusercontent.com/a/ACg8ocI_-jCOPjhKUUijbdD931_9PNjufk_lQ0wKYdOj5SZ1t_W2UA=w40-h40-c-rp-mo-br100"
                                alt="Ariene profile picture"
                                className="box-border caret-transparent h-10 object-cover object-[50%_0%] align-baseline w-10 rounded-[30px]"
                              />
                            </div>
                            <div className="box-border caret-transparent flex basis-[0%] flex-col grow justify-center min-h-[auto] text-ellipsis text-nowrap">
                              <div className="text-[15px] font-semibold box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] text-ellipsis text-nowrap overflow-hidden pr-[25px]">
                                {" "}
                                Ariene{" "}
                              </div>
                              <div className="text-zinc-500 text-[13px] box-border caret-transparent leading-[18.2px] min-h-[auto] min-w-[auto] text-nowrap">
                                <span className="relative box-border caret-transparent text-nowrap">
                                  4 meses atrás
                                </span>
                              </div>
                            </div>
                          </div>
                          <span className="box-border caret-transparent block h-[17px] leading-[17px] text-nowrap my-[11px]">
                            <img
                              src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                              alt="Google"
                              className="aspect-[auto_17_/_17] box-border caret-transparent inline-block h-[17px] leading-[19.6px] text-nowrap align-baseline w-[17px] mr-px"
                            />
                            <img
                              src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                              alt="Google"
                              className="aspect-[auto_17_/_17] box-border caret-transparent inline-block h-[17px] leading-[19.6px] text-nowrap align-baseline w-[17px] mr-px"
                            />
                            <img
                              src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                              alt="Google"
                              className="aspect-[auto_17_/_17] box-border caret-transparent inline-block h-[17px] leading-[19.6px] text-nowrap align-baseline w-[17px] mr-px"
                            />
                            <img
                              src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                              alt="Google"
                              className="aspect-[auto_17_/_17] box-border caret-transparent inline-block h-[17px] leading-[19.6px] text-nowrap align-baseline w-[17px] mr-px"
                            />
                            <img
                              src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                              alt="Google"
                              className="aspect-[auto_17_/_17] box-border caret-transparent inline-block h-[17px] leading-[19.6px] text-nowrap align-baseline w-[17px] mr-px"
                            />
                            <span className="relative bg-contain box-border caret-transparent inline-block h-[15px] leading-[19.6px] text-nowrap w-[15px] z-[2] ml-[7px]"></span>
                          </span>
                          <div className="text-[15px] box-border caret-transparent flow-root h-[87px] leading-[21.75px] overflow-hidden">
                            Ótimo atendimento
                          </div>
                        </div>
                      </div>
                      <div className="relative box-border caret-transparent basis-[75%] shrink-0 max-w-[75%] min-h-[auto] min-w-[auto] px-2 md:basis-3/12 md:max-w-[25%]">
                        <div className="relative backdrop-blur-0 bg-white bg-no-repeat bg-size-[270px] shadow-[rgba(0,0,0,0.03)_1px_4px_10px_0px,rgba(0,0,0,0.05)_0px_0px_2px_0px] box-border caret-transparent bg-[position:calc(100%_+_70px)_-70px] p-5 rounded-xl">
                          <div className="relative box-border caret-transparent flex">
                            <div className="absolute box-border caret-transparent h-5 w-5 right-0 top-0">
                              <img
                                src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
                                alt=""
                                className="aspect-[auto_20_/_20] box-border caret-transparent inline align-baseline w-5"
                              />
                            </div>
                            <div className="box-border caret-transparent min-h-[auto] min-w-[auto] mr-[15px]">
                              <img
                                src="https://lh3.googleusercontent.com/a/ACg8ocKxbmVfcnfbO2ibHh3ADT0bpm4PWBaggaigTkyCGj1v1z0hfg=w40-h40-c-rp-mo-br100"
                                alt="Luciana Leal profile picture"
                                className="box-border caret-transparent h-10 object-cover object-[50%_0%] align-baseline w-10 rounded-[30px]"
                              />
                            </div>
                            <div className="box-border caret-transparent flex basis-[0%] flex-col grow justify-center min-h-[auto] text-ellipsis text-nowrap">
                              <div className="text-[15px] font-semibold box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] text-ellipsis text-nowrap overflow-hidden pr-[25px]">
                                {" "}
                                Luciana Leal{" "}
                              </div>
                              <div className="text-zinc-500 text-[13px] box-border caret-transparent leading-[18.2px] min-h-[auto] min-w-[auto] text-nowrap">
                                <span className="relative box-border caret-transparent text-nowrap">
                                  4 meses atrás
                                </span>
                              </div>
                            </div>
                          </div>
                          <span className="box-border caret-transparent block h-[17px] leading-[17px] text-nowrap my-[11px]">
                            <img
                              src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                              alt="Google"
                              className="aspect-[auto_17_/_17] box-border caret-transparent inline-block h-[17px] leading-[19.6px] text-nowrap align-baseline w-[17px] mr-px"
                            />
                            <img
                              src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                              alt="Google"
                              className="aspect-[auto_17_/_17] box-border caret-transparent inline-block h-[17px] leading-[19.6px] text-nowrap align-baseline w-[17px] mr-px"
                            />
                            <img
                              src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                              alt="Google"
                              className="aspect-[auto_17_/_17] box-border caret-transparent inline-block h-[17px] leading-[19.6px] text-nowrap align-baseline w-[17px] mr-px"
                            />
                            <img
                              src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                              alt="Google"
                              className="aspect-[auto_17_/_17] box-border caret-transparent inline-block h-[17px] leading-[19.6px] text-nowrap align-baseline w-[17px] mr-px"
                            />
                            <img
                              src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                              alt="Google"
                              className="aspect-[auto_17_/_17] box-border caret-transparent inline-block h-[17px] leading-[19.6px] text-nowrap align-baseline w-[17px] mr-px"
                            />
                            <span className="relative bg-contain box-border caret-transparent inline-block h-[15px] leading-[19.6px] text-nowrap w-[15px] z-[2] ml-[7px]"></span>
                          </span>
                          <div className="text-[15px] box-border caret-transparent flow-root h-[87px] leading-[21.75px] overflow-hidden">
                            Empresa séria que preza pela qualidade e
                            assertividade nos atendimentos dos clientes.
                          </div>
                        </div>
                      </div>
                      <div className="relative box-border caret-transparent basis-[75%] shrink-0 max-w-[75%] min-h-[auto] min-w-[auto] px-2 md:basis-3/12 md:max-w-[25%]">
                        <div className="relative backdrop-blur-0 bg-white bg-no-repeat bg-size-[270px] shadow-[rgba(0,0,0,0.03)_1px_4px_10px_0px,rgba(0,0,0,0.05)_0px_0px_2px_0px] box-border caret-transparent bg-[position:calc(100%_+_70px)_-70px] p-5 rounded-xl">
                          <div className="relative box-border caret-transparent flex">
                            <div className="absolute box-border caret-transparent h-5 w-5 right-0 top-0">
                              <img
                                src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
                                alt=""
                                className="aspect-[auto_20_/_20] box-border caret-transparent inline align-baseline w-5"
                              />
                            </div>
                            <div className="box-border caret-transparent min-h-[auto] min-w-[auto] mr-[15px]">
                              <img
                                src="https://lh3.googleusercontent.com/a-/ALV-UjXIpMkKLqG5BvEvNPxzWpUtqs4iGSmBhjnApiQ3O8RKLxYnCFik5g=w40-h40-c-rp-mo-ba3-br100"
                                alt="Juliana Becker profile picture"
                                className="box-border caret-transparent h-10 object-cover object-[50%_0%] align-baseline w-10 rounded-[30px]"
                              />
                            </div>
                            <div className="box-border caret-transparent flex basis-[0%] flex-col grow justify-center min-h-[auto] text-ellipsis text-nowrap">
                              <div className="text-[15px] font-semibold box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] text-ellipsis text-nowrap overflow-hidden pr-[25px]">
                                {" "}
                                Juliana Becker{" "}
                              </div>
                              <div className="text-zinc-500 text-[13px] box-border caret-transparent leading-[18.2px] min-h-[auto] min-w-[auto] text-nowrap">
                                <span className="relative box-border caret-transparent text-nowrap">
                                  4 meses atrás
                                </span>
                              </div>
                            </div>
                          </div>
                          <span className="box-border caret-transparent block h-[17px] leading-[17px] text-nowrap my-[11px]">
                            <img
                              src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                              alt="Google"
                              className="aspect-[auto_17_/_17] box-border caret-transparent inline-block h-[17px] leading-[19.6px] text-nowrap align-baseline w-[17px] mr-px"
                            />
                            <img
                              src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                              alt="Google"
                              className="aspect-[auto_17_/_17] box-border caret-transparent inline-block h-[17px] leading-[19.6px] text-nowrap align-baseline w-[17px] mr-px"
                            />
                            <img
                              src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                              alt="Google"
                              className="aspect-[auto_17_/_17] box-border caret-transparent inline-block h-[17px] leading-[19.6px] text-nowrap align-baseline w-[17px] mr-px"
                            />
                            <img
                              src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                              alt="Google"
                              className="aspect-[auto_17_/_17] box-border caret-transparent inline-block h-[17px] leading-[19.6px] text-nowrap align-baseline w-[17px] mr-px"
                            />
                            <img
                              src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                              alt="Google"
                              className="aspect-[auto_17_/_17] box-border caret-transparent inline-block h-[17px] leading-[19.6px] text-nowrap align-baseline w-[17px] mr-px"
                            />
                            <span className="relative bg-contain box-border caret-transparent inline-block h-[15px] leading-[19.6px] text-nowrap w-[15px] z-[2] ml-[7px]"></span>
                          </span>
                          <div className="text-[15px] box-border caret-transparent flow-root h-[87px] leading-[21.75px] overflow-hidden">
                            Excelente atendimento e resultado. O escritório
                            Ávila Nascimento resolveu nosso caso de forma
                            rápida e profissional.
                          </div>
                          <span className="relative box-border caret-transparent block pt-2 after:accent-auto after:bg-zinc-300 after:box-border after:caret-transparent after:text-black after:hidden after:text-sm after:not-italic after:normal-nums after:font-normal after:h-[25px] after:tracking-[normal] after:leading-[19.6px] after:list-outside after:list-disc after:[mask-image:url('https://cdn.trustindex.io/assets/icon/ti-quote.svg')] after:[mask-position:50%_50%] after:[mask-repeat:no-repeat] after:[mask-size:contain] after:pointer-events-auto after:absolute after:text-left after:no-underline after:indent-[0px] after:normal-case after:visible after:w-[25px] after:border-separate after:right-0 after:top-[calc(50%_+_3px)] after:font-trustindex_poppins">
                            <span
                              aria-label="Consulte Mais informação"
                              role="button"
                              className="text-[13.5px] box-border caret-transparent inline-block leading-[18.9px] opacity-50 text-nowrap"
                            >
                              Consulte Mais informação
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="relative box-border caret-transparent basis-[75%] shrink-0 max-w-[75%] min-h-[auto] min-w-[auto] px-2 md:basis-3/12 md:max-w-[25%]">
                        <div className="relative backdrop-blur-0 bg-white bg-no-repeat bg-size-[270px] shadow-[rgba(0,0,0,0.03)_1px_4px_10px_0px,rgba(0,0,0,0.05)_0px_0px_2px_0px] box-border caret-transparent bg-[position:calc(100%_+_70px)_-70px] p-5 rounded-xl">
                          <div className="relative box-border caret-transparent flex">
                            <div className="absolute box-border caret-transparent h-5 w-5 right-0 top-0">
                              <img
                                src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
                                alt=""
                                className="aspect-[auto_20_/_20] box-border caret-transparent inline align-baseline w-5"
                              />
                            </div>
                            <div className="box-border caret-transparent min-h-[auto] min-w-[auto] mr-[15px]">
                              <img
                                src="https://lh3.googleusercontent.com/a/ACg8ocIjx4lmk_MW3dctpaMyX_Etryj9jVbcA6zlefT6GlVEIHaRiQ=w40-h40-c-rp-mo-br100"
                                alt="Fernando Motta profile picture"
                                className="box-border caret-transparent h-10 object-cover object-[50%_0%] align-baseline w-10 rounded-[30px]"
                              />
                            </div>
                            <div className="box-border caret-transparent flex basis-[0%] flex-col grow justify-center min-h-[auto] text-ellipsis text-nowrap">
                              <div className="text-[15px] font-semibold box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] text-ellipsis text-nowrap overflow-hidden pr-[25px]">
                                {" "}
                                Fernando Motta{" "}
                              </div>
                              <div className="text-zinc-500 text-[13px] box-border caret-transparent leading-[18.2px] min-h-[auto] min-w-[auto] text-nowrap">
                                <span className="relative box-border caret-transparent text-nowrap">
                                  4 meses atrás
                                </span>
                              </div>
                            </div>
                          </div>
                          <span className="box-border caret-transparent block h-[17px] leading-[17px] text-nowrap my-[11px]">
                            <img
                              src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                              alt="Google"
                              className="aspect-[auto_17_/_17] box-border caret-transparent inline-block h-[17px] leading-[19.6px] text-nowrap align-baseline w-[17px] mr-px"
                            />
                            <img
                              src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                              alt="Google"
                              className="aspect-[auto_17_/_17] box-border caret-transparent inline-block h-[17px] leading-[19.6px] text-nowrap align-baseline w-[17px] mr-px"
                            />
                            <img
                              src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                              alt="Google"
                              className="aspect-[auto_17_/_17] box-border caret-transparent inline-block h-[17px] leading-[19.6px] text-nowrap align-baseline w-[17px] mr-px"
                            />
                            <img
                              src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                              alt="Google"
                              className="aspect-[auto_17_/_17] box-border caret-transparent inline-block h-[17px] leading-[19.6px] text-nowrap align-baseline w-[17px] mr-px"
                            />
                            <img
                              src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                              alt="Google"
                              className="aspect-[auto_17_/_17] box-border caret-transparent inline-block h-[17px] leading-[19.6px] text-nowrap align-baseline w-[17px] mr-px"
                            />
                            <span className="relative bg-contain box-border caret-transparent inline-block h-[15px] leading-[19.6px] text-nowrap w-[15px] z-[2] ml-[7px]"></span>
                          </span>
                          <div className="text-[15px] box-border caret-transparent flow-root h-[87px] leading-[21.75px] overflow-hidden">
                            Empresa conta com excelentes profissionais e
                            trabalha com seriedade. Recomendo
                          </div>
                        </div>
                      </div>
                      <div className="relative box-border caret-transparent basis-[75%] shrink-0 max-w-[75%] min-h-[auto] min-w-[auto] px-2 md:basis-3/12 md:max-w-[25%]">
                        <div className="relative backdrop-blur-0 bg-white bg-no-repeat bg-size-[270px] shadow-[rgba(0,0,0,0.03)_1px_4px_10px_0px,rgba(0,0,0,0.05)_0px_0px_2px_0px] box-border caret-transparent bg-[position:calc(100%_+_70px)_-70px] p-5 rounded-xl">
                          <div className="relative box-border caret-transparent flex">
                            <div className="absolute box-border caret-transparent h-5 w-5 right-0 top-0">
                              <img
                                src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
                                alt=""
                                className="aspect-[auto_20_/_20] box-border caret-transparent inline align-baseline w-5"
                              />
                            </div>
                            <div className="box-border caret-transparent min-h-[auto] min-w-[auto] mr-[15px]">
                              <img
                                src="https://lh3.googleusercontent.com/a-/ALV-UjXF3cgS7ir6iz3pa3G3b6C8GeAM9tQAl5ksP71SNftlCs3hfWbl=w40-h40-c-rp-mo-br100"
                                alt="Salete Soares da Rosa profile picture"
                                className="box-border caret-transparent h-10 object-cover object-[50%_0%] align-baseline w-10 rounded-[30px]"
                              />
                            </div>
                            <div className="box-border caret-transparent flex basis-[0%] flex-col grow justify-center min-h-[auto] text-ellipsis text-nowrap">
                              <div className="text-[15px] font-semibold box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] text-ellipsis text-nowrap overflow-hidden pr-[25px]">
                                {" "}
                                Salete Soares da Rosa{" "}
                              </div>
                              <div className="text-zinc-500 text-[13px] box-border caret-transparent leading-[18.2px] min-h-[auto] min-w-[auto] text-nowrap">
                                <span className="relative box-border caret-transparent text-nowrap">
                                  4 meses atrás
                                </span>
                              </div>
                            </div>
                          </div>
                          <span className="box-border caret-transparent block h-[17px] leading-[17px] text-nowrap my-[11px]">
                            <img
                              src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                              alt="Google"
                              className="aspect-[auto_17_/_17] box-border caret-transparent inline-block h-[17px] leading-[19.6px] text-nowrap align-baseline w-[17px] mr-px"
                            />
                            <img
                              src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                              alt="Google"
                              className="aspect-[auto_17_/_17] box-border caret-transparent inline-block h-[17px] leading-[19.6px] text-nowrap align-baseline w-[17px] mr-px"
                            />
                            <img
                              src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                              alt="Google"
                              className="aspect-[auto_17_/_17] box-border caret-transparent inline-block h-[17px] leading-[19.6px] text-nowrap align-baseline w-[17px] mr-px"
                            />
                            <img
                              src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                              alt="Google"
                              className="aspect-[auto_17_/_17] box-border caret-transparent inline-block h-[17px] leading-[19.6px] text-nowrap align-baseline w-[17px] mr-px"
                            />
                            <img
                              src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                              alt="Google"
                              className="aspect-[auto_17_/_17] box-border caret-transparent inline-block h-[17px] leading-[19.6px] text-nowrap align-baseline w-[17px] mr-px"
                            />
                            <span className="relative bg-contain box-border caret-transparent inline-block h-[15px] leading-[19.6px] text-nowrap w-[15px] z-[2] ml-[7px]"></span>
                          </span>
                          <div className="text-[15px] box-border caret-transparent flow-root h-[87px] leading-[21.75px] overflow-hidden">
                            Profissionais extremamente competentes e atenciosos.
                            Resolveram meu caso com agilidade e dedicação
                            exemplar.
                          </div>
                        </div>
                      </div>
                      <div className="relative box-border caret-transparent basis-[75%] shrink-0 max-w-[75%] min-h-[auto] min-w-[auto] px-2 md:basis-3/12 md:max-w-[25%]">
                        <div className="relative backdrop-blur-0 bg-white bg-no-repeat bg-size-[270px] shadow-[rgba(0,0,0,0.03)_1px_4px_10px_0px,rgba(0,0,0,0.05)_0px_0px_2px_0px] box-border caret-transparent bg-[position:calc(100%_+_70px)_-70px] p-5 rounded-xl">
                          <div className="relative box-border caret-transparent flex">
                            <div className="absolute box-border caret-transparent h-5 w-5 right-0 top-0">
                              <img
                                src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
                                alt=""
                                className="aspect-[auto_20_/_20] box-border caret-transparent inline align-baseline w-5"
                              />
                            </div>
                            <div className="box-border caret-transparent min-h-[auto] min-w-[auto] mr-[15px]">
                              <img
                                src="https://lh3.googleusercontent.com/a-/ALV-UjUfvcHd7-EC9pMOkiPlTcvfPzANjeHIsCX93qbWGTi3KtDN6DnkNQ=w40-h40-c-rp-mo-br100"
                                alt="Ana Saskia Tavares profile picture"
                                className="box-border caret-transparent h-10 object-cover object-[50%_0%] align-baseline w-10 rounded-[30px]"
                              />
                            </div>
                            <div className="box-border caret-transparent flex basis-[0%] flex-col grow justify-center min-h-[auto] text-ellipsis text-nowrap">
                              <div className="text-[15px] font-semibold box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] text-ellipsis text-nowrap overflow-hidden pr-[25px]">
                                {" "}
                                Ana Saskia Tavares{" "}
                              </div>
                              <div className="text-zinc-500 text-[13px] box-border caret-transparent leading-[18.2px] min-h-[auto] min-w-[auto] text-nowrap">
                                <span className="relative box-border caret-transparent text-nowrap">
                                  4 meses atrás
                                </span>
                              </div>
                            </div>
                          </div>
                          <span className="box-border caret-transparent block h-[17px] leading-[17px] text-nowrap my-[11px]">
                            <img
                              src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                              alt="Google"
                              className="aspect-[auto_17_/_17] box-border caret-transparent inline-block h-[17px] leading-[19.6px] text-nowrap align-baseline w-[17px] mr-px"
                            />
                            <img
                              src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                              alt="Google"
                              className="aspect-[auto_17_/_17] box-border caret-transparent inline-block h-[17px] leading-[19.6px] text-nowrap align-baseline w-[17px] mr-px"
                            />
                            <img
                              src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                              alt="Google"
                              className="aspect-[auto_17_/_17] box-border caret-transparent inline-block h-[17px] leading-[19.6px] text-nowrap align-baseline w-[17px] mr-px"
                            />
                            <img
                              src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                              alt="Google"
                              className="aspect-[auto_17_/_17] box-border caret-transparent inline-block h-[17px] leading-[19.6px] text-nowrap align-baseline w-[17px] mr-px"
                            />
                            <img
                              src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                              alt="Google"
                              className="aspect-[auto_17_/_17] box-border caret-transparent inline-block h-[17px] leading-[19.6px] text-nowrap align-baseline w-[17px] mr-px"
                            />
                            <span className="relative bg-contain box-border caret-transparent inline-block h-[15px] leading-[19.6px] text-nowrap w-[15px] z-[2] ml-[7px]"></span>
                          </span>
                          <div className="text-[15px] box-border caret-transparent flow-root h-[87px] leading-[21.75px] overflow-hidden">
                            O escritório Ávila Nascimento alia expertise jurídica
                            e atendimento humanizado, essencial para quem busca
                            proteção de seus direitos com segurança.
                          </div>
                          <span className="relative box-border caret-transparent block pt-2 after:accent-auto after:bg-zinc-300 after:box-border after:caret-transparent after:text-black after:hidden after:text-sm after:not-italic after:normal-nums after:font-normal after:h-[25px] after:tracking-[normal] after:leading-[19.6px] after:list-outside after:list-disc after:[mask-image:url('https://cdn.trustindex.io/assets/icon/ti-quote.svg')] after:[mask-position:50%_50%] after:[mask-repeat:no-repeat] after:[mask-size:contain] after:pointer-events-auto after:absolute after:text-left after:no-underline after:indent-[0px] after:normal-case after:visible after:w-[25px] after:border-separate after:right-0 after:top-[calc(50%_+_3px)] after:font-trustindex_poppins">
                            <span
                              aria-label="Consulte Mais informação"
                              role="button"
                              className="text-[13.5px] box-border caret-transparent inline-block leading-[18.9px] opacity-50 text-nowrap"
                            >
                              Consulte Mais informação
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="relative box-border caret-transparent basis-[75%] shrink-0 max-w-[75%] min-h-[auto] min-w-[auto] px-2 md:basis-3/12 md:max-w-[25%]">
                        <div className="relative backdrop-blur-0 bg-white bg-no-repeat bg-size-[270px] shadow-[rgba(0,0,0,0.03)_1px_4px_10px_0px,rgba(0,0,0,0.05)_0px_0px_2px_0px] box-border caret-transparent bg-[position:calc(100%_+_70px)_-70px] p-5 rounded-xl">
                          <div className="relative box-border caret-transparent flex">
                            <div className="absolute box-border caret-transparent h-5 w-5 right-0 top-0">
                              <img
                                src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
                                alt=""
                                className="aspect-[auto_20_/_20] box-border caret-transparent inline align-baseline w-5"
                              />
                            </div>
                            <div className="box-border caret-transparent min-h-[auto] min-w-[auto] mr-[15px]">
                              <img
                                src="https://lh3.googleusercontent.com/a-/ALV-UjU32Uz7TRIbQCX_nx2RrYFGEvoot0w5l-e_Knb5m9IUa5pihVdn1Q=w40-h40-c-rp-mo-br100"
                                alt="*Raquel Perret* profile picture"
                                className="box-border caret-transparent h-10 object-cover object-[50%_0%] align-baseline w-10 rounded-[30px]"
                              />
                            </div>
                            <div className="box-border caret-transparent flex basis-[0%] flex-col grow justify-center min-h-[auto] text-ellipsis text-nowrap">
                              <div className="text-[15px] font-semibold box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] text-ellipsis text-nowrap overflow-hidden pr-[25px]">
                                {" "}
                                *Raquel Perret*{" "}
                              </div>
                              <div className="text-zinc-500 text-[13px] box-border caret-transparent leading-[18.2px] min-h-[auto] min-w-[auto] text-nowrap">
                                <span className="relative box-border caret-transparent text-nowrap">
                                  4 meses atrás
                                </span>
                              </div>
                            </div>
                          </div>
                          <span className="box-border caret-transparent block h-[17px] leading-[17px] text-nowrap my-[11px]">
                            <img
                              src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                              alt="Google"
                              className="aspect-[auto_17_/_17] box-border caret-transparent inline-block h-[17px] leading-[19.6px] text-nowrap align-baseline w-[17px] mr-px"
                            />
                            <img
                              src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                              alt="Google"
                              className="aspect-[auto_17_/_17] box-border caret-transparent inline-block h-[17px] leading-[19.6px] text-nowrap align-baseline w-[17px] mr-px"
                            />
                            <img
                              src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                              alt="Google"
                              className="aspect-[auto_17_/_17] box-border caret-transparent inline-block h-[17px] leading-[19.6px] text-nowrap align-baseline w-[17px] mr-px"
                            />
                            <img
                              src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                              alt="Google"
                              className="aspect-[auto_17_/_17] box-border caret-transparent inline-block h-[17px] leading-[19.6px] text-nowrap align-baseline w-[17px] mr-px"
                            />
                            <img
                              src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                              alt="Google"
                              className="aspect-[auto_17_/_17] box-border caret-transparent inline-block h-[17px] leading-[19.6px] text-nowrap align-baseline w-[17px] mr-px"
                            />
                            <span className="relative bg-contain box-border caret-transparent inline-block h-[15px] leading-[19.6px] text-nowrap w-[15px] z-[2] ml-[7px]"></span>
                          </span>
                          <div className="text-[15px] box-border caret-transparent flow-root h-[87px] leading-[21.75px] overflow-hidden">
                            Registro da minha marca foi feito de forma impecável.
                            Todo o processo acompanhado de perto, com
                            transparência e profissionalismo.
                            <br className="text-sm box-border caret-transparent leading-[19.6px]" />
                            Recomendo!
                          </div>
                          <span className="relative box-border caret-transparent block pt-2 after:accent-auto after:bg-zinc-300 after:box-border after:caret-transparent after:text-black after:hidden after:text-sm after:not-italic after:normal-nums after:font-normal after:h-[25px] after:tracking-[normal] after:leading-[19.6px] after:list-outside after:list-disc after:[mask-image:url('https://cdn.trustindex.io/assets/icon/ti-quote.svg')] after:[mask-position:50%_50%] after:[mask-repeat:no-repeat] after:[mask-size:contain] after:pointer-events-auto after:absolute after:text-left after:no-underline after:indent-[0px] after:normal-case after:visible after:w-[25px] after:border-separate after:right-0 after:top-[calc(50%_+_3px)] after:font-trustindex_poppins">
                            <span
                              aria-label="Consulte Mais informação"
                              role="button"
                              className="text-[13.5px] box-border caret-transparent inline-block leading-[18.9px] opacity-50 text-nowrap"
                            >
                              Consulte Mais informação
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="relative box-border caret-transparent basis-[75%] shrink-0 max-w-[75%] min-h-[auto] min-w-[auto] px-2 md:basis-3/12 md:max-w-[25%]">
                        <div className="relative backdrop-blur-0 bg-white bg-no-repeat bg-size-[270px] shadow-[rgba(0,0,0,0.03)_1px_4px_10px_0px,rgba(0,0,0,0.05)_0px_0px_2px_0px] box-border caret-transparent bg-[position:calc(100%_+_70px)_-70px] p-5 rounded-xl">
                          <div className="relative box-border caret-transparent flex">
                            <div className="absolute box-border caret-transparent h-5 w-5 right-0 top-0">
                              <img
                                src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
                                alt=""
                                className="aspect-[auto_20_/_20] box-border caret-transparent inline align-baseline w-5"
                              />
                            </div>
                            <div className="box-border caret-transparent min-h-[auto] min-w-[auto] mr-[15px]">
                              <img
                                src="https://lh3.googleusercontent.com/a/ACg8ocKILAVJro1unybJJ5bEPB12b449761PWsFYKWqD0uBMqnmaXA=w40-h40-c-rp-mo-br100"
                                alt="Vânia Togni VALENTIM profile picture"
                                className="box-border caret-transparent h-10 object-cover object-[50%_0%] align-baseline w-10 rounded-[30px]"
                              />
                            </div>
                            <div className="box-border caret-transparent flex basis-[0%] flex-col grow justify-center min-h-[auto] text-ellipsis text-nowrap">
                              <div className="text-[15px] font-semibold box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] text-ellipsis text-nowrap overflow-hidden pr-[25px]">
                                {" "}
                                Vânia Togni VALENTIM{" "}
                              </div>
                              <div className="text-zinc-500 text-[13px] box-border caret-transparent leading-[18.2px] min-h-[auto] min-w-[auto] text-nowrap">
                                <span className="relative box-border caret-transparent text-nowrap">
                                  4 meses atrás
                                </span>
                              </div>
                            </div>
                          </div>
                          <span className="box-border caret-transparent block h-[17px] leading-[17px] text-nowrap my-[11px]">
                            <img
                              src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                              alt="Google"
                              className="aspect-[auto_17_/_17] box-border caret-transparent inline-block h-[17px] leading-[19.6px] text-nowrap align-baseline w-[17px] mr-px"
                            />
                            <img
                              src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                              alt="Google"
                              className="aspect-[auto_17_/_17] box-border caret-transparent inline-block h-[17px] leading-[19.6px] text-nowrap align-baseline w-[17px] mr-px"
                            />
                            <img
                              src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                              alt="Google"
                              className="aspect-[auto_17_/_17] box-border caret-transparent inline-block h-[17px] leading-[19.6px] text-nowrap align-baseline w-[17px] mr-px"
                            />
                            <img
                              src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                              alt="Google"
                              className="aspect-[auto_17_/_17] box-border caret-transparent inline-block h-[17px] leading-[19.6px] text-nowrap align-baseline w-[17px] mr-px"
                            />
                            <img
                              src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                              alt="Google"
                              className="aspect-[auto_17_/_17] box-border caret-transparent inline-block h-[17px] leading-[19.6px] text-nowrap align-baseline w-[17px] mr-px"
                            />
                            <span className="relative bg-contain box-border caret-transparent inline-block h-[15px] leading-[19.6px] text-nowrap w-[15px] z-[2] ml-[7px]"></span>
                          </span>
                          <div className="text-[15px] box-border caret-transparent flow-root h-[87px] leading-[21.75px] overflow-hidden">
                            Empresa comprometida com seus clientes e parceiros
                          </div>
                        </div>
                      </div>
                      <div className="relative box-border caret-transparent basis-[75%] shrink-0 max-w-[75%] min-h-[auto] min-w-[auto] px-2 md:basis-3/12 md:max-w-[25%]">
                        <div className="relative backdrop-blur-0 bg-white bg-no-repeat bg-size-[270px] shadow-[rgba(0,0,0,0.03)_1px_4px_10px_0px,rgba(0,0,0,0.05)_0px_0px_2px_0px] box-border caret-transparent bg-[position:calc(100%_+_70px)_-70px] p-5 rounded-xl">
                          <div className="relative box-border caret-transparent flex">
                            <div className="absolute box-border caret-transparent h-5 w-5 right-0 top-0">
                              <img
                                src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
                                alt=""
                                className="aspect-[auto_20_/_20] box-border caret-transparent inline align-baseline w-5"
                              />
                            </div>
                            <div className="box-border caret-transparent min-h-[auto] min-w-[auto] mr-[15px]">
                              <img
                                src="https://lh3.googleusercontent.com/a/ACg8ocJ4O2ftYu6nkXUYLGg8a2hoKzdp6Fz8aPxJYlauNjzxsIuDlA=w40-h40-c-rp-mo-br100"
                                alt="sou desenvolvimento profile picture"
                                className="box-border caret-transparent h-10 object-cover object-[50%_0%] align-baseline w-10 rounded-[30px]"
                              />
                            </div>
                            <div className="box-border caret-transparent flex basis-[0%] flex-col grow justify-center min-h-[auto] text-ellipsis text-nowrap">
                              <div className="text-[15px] font-semibold box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] text-ellipsis text-nowrap overflow-hidden pr-[25px]">
                                {" "}
                                sou desenvolvimento{" "}
                              </div>
                              <div className="text-zinc-500 text-[13px] box-border caret-transparent leading-[18.2px] min-h-[auto] min-w-[auto] text-nowrap">
                                <span className="relative box-border caret-transparent text-nowrap">
                                  4 meses atrás
                                </span>
                              </div>
                            </div>
                          </div>
                          <span className="box-border caret-transparent block h-[17px] leading-[17px] text-nowrap my-[11px]">
                            <img
                              src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                              alt="Google"
                              className="aspect-[auto_17_/_17] box-border caret-transparent inline-block h-[17px] leading-[19.6px] text-nowrap align-baseline w-[17px] mr-px"
                            />
                            <img
                              src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                              alt="Google"
                              className="aspect-[auto_17_/_17] box-border caret-transparent inline-block h-[17px] leading-[19.6px] text-nowrap align-baseline w-[17px] mr-px"
                            />
                            <img
                              src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                              alt="Google"
                              className="aspect-[auto_17_/_17] box-border caret-transparent inline-block h-[17px] leading-[19.6px] text-nowrap align-baseline w-[17px] mr-px"
                            />
                            <img
                              src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                              alt="Google"
                              className="aspect-[auto_17_/_17] box-border caret-transparent inline-block h-[17px] leading-[19.6px] text-nowrap align-baseline w-[17px] mr-px"
                            />
                            <img
                              src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                              alt="Google"
                              className="aspect-[auto_17_/_17] box-border caret-transparent inline-block h-[17px] leading-[19.6px] text-nowrap align-baseline w-[17px] mr-px"
                            />
                            <span className="relative bg-contain box-border caret-transparent inline-block h-[15px] leading-[19.6px] text-nowrap w-[15px] z-[2] ml-[7px]"></span>
                          </span>
                          <div className="text-[15px] box-border caret-transparent flow-root h-[87px] leading-[21.75px] overflow-hidden">
                            Ávila Nascimento é um escritório que nos entrega todo o
                            suporte jurídico necessário, além de conhecimento
                            técnico e prático. Um ambiente acolhedor, em que
                            seus profissionais realmente se importam com o
                            bem-estar dos clientes. Só tenho a
                            agradecer.
                          </div>
                          <span className="relative box-border caret-transparent block pt-2 after:accent-auto after:bg-zinc-300 after:box-border after:caret-transparent after:text-black after:hidden after:text-sm after:not-italic after:normal-nums after:font-normal after:h-[25px] after:tracking-[normal] after:leading-[19.6px] after:list-outside after:list-disc after:[mask-image:url('https://cdn.trustindex.io/assets/icon/ti-quote.svg')] after:[mask-position:50%_50%] after:[mask-repeat:no-repeat] after:[mask-size:contain] after:pointer-events-auto after:absolute after:text-left after:no-underline after:indent-[0px] after:normal-case after:visible after:w-[25px] after:border-separate after:right-0 after:top-[calc(50%_+_3px)] after:font-trustindex_poppins">
                            <span
                              aria-label="Consulte Mais informação"
                              role="button"
                              className="text-[13.5px] box-border caret-transparent inline-block leading-[18.9px] opacity-50 text-nowrap"
                            >
                              Consulte Mais informação
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CTA - Entrar em Contato */}
      <div className="flex justify-center pt-0 pb-2 md:pt-0 md:pb-2 px-5">
        <a href="https://wa.me/5521972728787?text=Olá! Gostaria de mais informações sobre os serviços do escritório." className="text-white text-lg font-medium bg-blue-700 flex items-center justify-center gap-2 w-full max-w-md px-5 py-3.5 rounded-[100px] font-aalto_sans_pro shadow-lg hover:bg-blue-800 transition-colors duration-200 md:text-lg md:px-10 md:py-4 md:max-w-none md:w-auto md:inline-flex">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.613.613l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.352 0-4.55-.764-6.325-2.055l-.44-.334-2.634.883.883-2.634-.334-.44A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
          Entrar em Contato
        </a>
      </div>
      <div id="escritorio" className="relative box-border caret-transparent flex flex-col max-w-full w-full mx-auto">
        <div className="box-border caret-transparent gap-x-5 flex flex-col grow flex-wrap h-full max-w-full px-5 md:px-0 min-h-[auto] min-w-[auto] gap-y-5 w-full mx-auto py-8 md:flex-nowrap md:max-w-6xl md:py-20">
          <div className="relative self-center bg-white shadow-[rgba(0,0,0,0.07)_0px_2.448px_4.897px_-2.448px,rgba(0,0,0,0.1)_0px_12.241px_18.362px_-3.672px] box-border caret-transparent gap-x-5 flex flex-col-reverse flex-wrap justify-center min-h-[auto] gap-y-5 w-full mb-12 pt-5 pb-5 px-5 md:pt-8 md:pb-8 md:px-8 rounded-3xl md:self-auto md:flex-row md:flex-nowrap md:mb-20">
            <div className="relative box-border caret-transparent gap-x-5 max-w-full min-h-[auto] gap-y-5 text-center w-full md:w-2/5 overflow-hidden rounded-2xl">
              <img
                src="/images/galeria02.jpg"
                alt="Escritório Ávila Nascimento Advocacia"
                className="box-border caret-transparent inline-block max-w-full w-full h-full object-cover"
              />
            </div>
            <div className="relative self-center box-border caret-transparent gap-x-5 max-w-full min-h-[auto] gap-y-5 w-full mb-4 md:w-[424px] md:mb-0">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent w-full">
                  <h3 className="text-neutral-900 text-2xl font-medium box-border caret-transparent leading-[1.25] mt-2 mb-[5px] font-aalto_sans_pro md:text-[32px]">
                    <span className="text-blue-700 text-xs font-medium uppercase tracking-wider box-border caret-transparent block mb-3 font-aalto_sans_pro">
                      {" "}
                      SOBRE O ESCRITÓRIO
                    </span>
                    Mais de 28 anos protegendo marcas no INPI —{" "}
                    <span className="text-blue-700 box-border caret-transparent">
                      {" "}
                      com acompanhamento jurídico do início ao certificado.
                    </span>
                  </h3>
                  <p className="text-stone-700 text-base box-border caret-transparent leading-[1.5] font-aalto_sans_pro md:text-lg md:leading-[1.6]">
                    Somos um dos poucos escritórios do Brasil que une a atuação como Agente de Propriedade Industrial registrado no INPI desde 1998 com advocacia especializada. Isso significa registro com segurança jurídica, não apenas burocracia.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative items-center box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-between min-h-[auto] gap-y-5 w-full rounded-3xl md:[align-items:normal] md:flex-row md:flex-nowrap">
            <div className="relative self-center box-border caret-transparent gap-x-5 flex flex-col flex-wrap min-h-[auto] gap-y-5 w-full md:flex-nowrap md:w-[41%]">
              <div className="relative self-center box-border caret-transparent gap-x-5 max-w-full min-h-[auto] gap-y-5 w-full mb-4">
                <div className="box-border caret-transparent">
                  <div className="box-border caret-transparent w-full">
                    <h3 className="text-neutral-900 text-2xl font-medium box-border caret-transparent leading-[1.25] mt-2 mb-[5px] font-aalto_sans_pro md:text-[32px]">
                      <span className="text-blue-700 text-xs box-border caret-transparent block leading-[19.6px] mb-4 font-aalto_sans_pro">
                        {" "}
                        ÁREAS DE ATUAÇÃO
                      </span>
                      O escritório Ávila Nascimento atua para{" "}
                      <span className="text-blue-700 text-2xl box-border caret-transparent md:text-[32px]">
                        {" "}
                        garantir a proteção dos seus direitos
                      </span>
                      {" "}com experiência e dedicação em cada caso.
                    </h3>
                    <p className="text-stone-700 text-lg box-border caret-transparent leading-[25.2px] font-aalto_sans_pro md:text-xl md:leading-[30px]">
                      Conte com nossos especialistas para:
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative box-border caret-transparent gap-x-5 max-w-full min-h-[auto] gap-y-5">
                <ul className="box-border caret-transparent list-none pl-0">
                  {/* REGISTRO DE MARCAS */}
                  <li className="relative box-border caret-transparent pb-[18.5px] after:accent-auto after:box-border after:caret-transparent after:text-zinc-800 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-6 after:list-outside after:list-none after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:w-full after:border-zinc-300 after:border-separate after:border-t after:bottom-0 after:inset-x-0 after:font-apple_system">
                    <button
                      onClick={() => setActiveArea(activeArea === 0 ? null : 0)}
                      className="flex items-center w-full bg-transparent border-none cursor-pointer p-0 text-left"
                    >
                      <span className="relative box-border caret-transparent flex min-h-[auto] min-w-[auto] top-0">
                        <img
                          src="/icons/icon-17.svg"
                          alt="Icon"
                          className="box-border caret-transparent h-[25px] align-baseline w-[25px] mr-[6.25px]"
                        />
                      </span>
                      <span className="text-neutral-950 text-2xl font-medium self-center box-border caret-transparent block leading-9 min-h-[auto] min-w-[auto] pl-[5px] font-aalto_sans_pro">
                        Registro de Marcas no INPI
                      </span>
                      <span className={`ml-auto text-blue-700 text-xl transition-transform duration-300 ${activeArea === 0 ? "rotate-180" : ""}`}>&#9660;</span>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${activeArea === 0 ? "max-h-[800px] opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
                      <p className="text-stone-400 text-xs leading-4 font-montserrat mb-3 italic">
                        Agente da Propriedade Industrial - INPI no. 0636 | +28 anos | Mestrado em PI - INPI
                      </p>
                      <ul className="list-none pl-0 flex flex-col gap-2.5 m-0">
                        <li className="text-stone-700 text-sm font-montserrat leading-5 pl-5 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-700 before:rounded-full">Auditoria Estrategica (Due Diligence em PI) e IPR Clearance para mitigar riscos de litigio em transacoes de alto valor.</li>
                        <li className="text-stone-700 text-sm font-montserrat leading-5 pl-5 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-700 before:rounded-full">Deposito e acompanhamento de Registro de Marcas. Valor unico para todo o processo. Pagamento parcelado.</li>
                        <li className="text-stone-700 text-sm font-montserrat leading-5 pl-5 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-700 before:rounded-full">Registro de Patentes, Desenhos Industriais e Programas de Computador.</li>
                        <li className="text-stone-700 text-sm font-montserrat leading-5 pl-5 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-700 before:rounded-full">Registro de Direitos Autorais e pedidos no Brasil e Exterior.</li>
                        <li className="text-stone-700 text-sm font-montserrat leading-5 pl-5 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-700 before:rounded-full">Contencioso administrativo e judicial: plagio, violacao de marcas e patentes.</li>
                        <li className="text-stone-700 text-sm font-montserrat leading-5 pl-5 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-700 before:rounded-full">Disputas de concorrencia desleal e Contratos de Tecnologia e Franquia.</li>
                        <li className="text-stone-700 text-sm font-montserrat leading-5 pl-5 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-700 before:rounded-full">Registro de Indicacoes Geograficas.</li>
                      </ul>
                    </div>
                  </li>
                  {/* DIREITOS AUTORAIS E PATENTES */}
                  <li className="relative box-border caret-transparent mt-[18.5px] pb-[18.5px] after:accent-auto after:box-border after:caret-transparent after:text-zinc-800 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-6 after:list-outside after:list-none after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:w-full after:border-zinc-300 after:border-separate after:border-t after:bottom-0 after:inset-x-0 after:font-apple_system">
                    <button
                      onClick={() => setActiveArea(activeArea === 1 ? null : 1)}
                      className="flex items-center w-full bg-transparent border-none cursor-pointer p-0 text-left"
                    >
                      <span className="relative box-border caret-transparent flex min-h-[auto] min-w-[auto] top-0">
                        <img
                          src="/icons/icon-18.svg"
                          alt="Icon"
                          className="box-border caret-transparent h-[25px] align-baseline w-[25px] mr-[6.25px]"
                        />
                      </span>
                      <span className="text-neutral-950 text-2xl font-medium self-center box-border caret-transparent block leading-9 min-h-[auto] min-w-[auto] pl-[5px] font-aalto_sans_pro">
                        Direitos Autorais e Patentes
                      </span>
                      <span className={`ml-auto text-blue-700 text-xl transition-transform duration-300 ${activeArea === 1 ? "rotate-180" : ""}`}>&#9660;</span>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${activeArea === 1 ? "max-h-[800px] opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
                      <ul className="list-none pl-0 flex flex-col gap-2.5 m-0">
                        <li className="text-stone-700 text-sm font-montserrat leading-5 pl-5 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-700 before:rounded-full">Registro e protecao de Obras Literarias, Artisticas e Musicais.</li>
                        <li className="text-stone-700 text-sm font-montserrat leading-5 pl-5 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-700 before:rounded-full">Registro de Software e Aplicativos junto ao INPI.</li>
                        <li className="text-stone-700 text-sm font-montserrat leading-5 pl-5 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-700 before:rounded-full">Pesquisa de Anterioridade e Redacao de Patentes.</li>
                        <li className="text-stone-700 text-sm font-montserrat leading-5 pl-5 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-700 before:rounded-full">Deposito e acompanhamento de Patentes de Invencao e Modelo de Utilidade.</li>
                        <li className="text-stone-700 text-sm font-montserrat leading-5 pl-5 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-700 before:rounded-full">Licenciamento, Cessao de Direitos e combate a Plagio.</li>
                        <li className="text-stone-700 text-sm font-montserrat leading-5 pl-5 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-700 before:rounded-full">Contencioso e Defesa de Patentes e Direitos Autorais.</li>
                      </ul>
                    </div>
                  </li>
                  {/* ACOES CONTRA PLANOS DE SAUDE */}
                  <li className="relative box-border caret-transparent mt-[18.5px]">
                    <button
                      onClick={() => setActiveArea(activeArea === 2 ? null : 2)}
                      className="flex items-center w-full bg-transparent border-none cursor-pointer p-0 text-left"
                    >
                      <span className="relative box-border caret-transparent flex min-h-[auto] min-w-[auto] top-0">
                        <img
                          src="/icons/icon-19.svg"
                          alt="Icon"
                          className="box-border caret-transparent h-[25px] align-baseline w-[25px] mr-[6.25px]"
                        />
                      </span>
                      <span className="text-neutral-950 text-2xl font-medium self-center box-border caret-transparent block leading-9 min-h-[auto] min-w-[auto] pl-[5px] font-aalto_sans_pro">
                        Ações contra Planos de Saúde
                      </span>
                      <span className={`ml-auto text-blue-700 text-xl transition-transform duration-300 ${activeArea === 2 ? "rotate-180" : ""}`}>&#9660;</span>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${activeArea === 2 ? "max-h-[800px] opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
                      <ul className="list-none pl-0 flex flex-col gap-2.5 m-0">
                        <li className="text-stone-700 text-sm font-montserrat leading-5 pl-5 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-700 before:rounded-full">Negativas de Medicamentos de alto custo e uso continuo.</li>
                        <li className="text-stone-700 text-sm font-montserrat leading-5 pl-5 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-700 before:rounded-full">Negativas de Home Care, Cirurgias e procedimentos hospitalares.</li>
                        <li className="text-stone-700 text-sm font-montserrat leading-5 pl-5 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-700 before:rounded-full">Negativas de Fisioterapia, Fonoaudiologia e Transplantes.</li>
                        <li className="text-stone-700 text-sm font-montserrat leading-5 pl-5 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-700 before:rounded-full">Reembolso de despesas medicas e aumento abusivo de mensalidade.</li>
                        <li className="text-stone-700 text-sm font-montserrat leading-5 pl-5 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-700 before:rounded-full">Cancelamento indevido de plano e negativas de Protese e Ortese.</li>
                        <li className="text-stone-700 text-sm font-montserrat leading-5 pl-5 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-700 before:rounded-full">Negativas de Tratamentos Oncologicos e Terapias para TEA (Autismo).</li>
                        <li className="text-stone-700 text-sm font-montserrat leading-5 pl-5 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-700 before:rounded-full">Internacao Psiquiatrica e Danos Morais contra operadoras.</li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <div className="mt-6">
                  <a href="https://wa.me/5521972728787?text=Olá! Gostaria de mais informações sobre os serviços do escritório." className="text-white text-lg font-medium bg-blue-700 flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-[100px] font-aalto_sans_pro shadow-lg hover:bg-blue-800 transition-colors duration-200 md:inline-flex md:w-auto md:px-10 md:py-4">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.613.613l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.352 0-4.55-.764-6.325-2.055l-.44-.334-2.634.883.883-2.634-.334-.44A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                    Entrar em Contato
                  </a>
                </div>
              </div>
            </div>
            <div className="relative self-end box-border caret-transparent gap-x-5 hidden md:flex flex-col flex-wrap min-h-[auto] gap-y-5 w-full md:self-auto md:flex-nowrap md:w-[49%]">
              <div className="relative box-border caret-transparent gap-x-5 max-w-full min-h-[auto] gap-y-5 text-center w-full">
                <img
                  src="/images/galeria03.jpg"
                  alt="Escritório Ávila Nascimento"
                  className="aspect-[auto_888_/_765] box-border caret-transparent inline-block max-w-full w-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-blue-50 box-border caret-transparent flex flex-col max-w-full w-full mx-auto">
        <div className="box-border caret-transparent gap-x-5 flex flex-col grow flex-wrap h-full max-w-full px-5 md:px-0 min-h-[auto] min-w-[auto] gap-y-5 w-full mx-auto py-10 md:flex-nowrap md:max-w-6xl md:pt-20 md:pb-0">
          <div className="relative self-center bg-white shadow-[rgba(0,0,0,0.07)_0px_2.448px_4.897px_-2.448px,rgba(0,0,0,0.1)_0px_12.241px_18.362px_-3.672px] box-border caret-transparent gap-x-5 flex flex-col flex-wrap min-h-[auto] gap-y-5 w-full z-[1] mt-0 mb-0 p-5 md:p-8 rounded-3xl md:flex-row md:flex-nowrap md:items-center md:w-[1008px] md:mt-20 md:-mb-20">
            <div className="relative box-border caret-transparent gap-x-5 max-w-full min-h-[auto] gap-y-5 w-full md:w-[45%]">
              <h2 className="text-neutral-900 text-2xl font-medium box-border caret-transparent leading-[1.25] font-aalto_sans_pro md:text-[32px]">
                <span className="text-blue-700 text-xs box-border caret-transparent block leading-[19.6px] mb-4 font-aalto_sans_pro">
                  NOSSO MÉTODO
                </span>
                Veja como nosso escritório trabalha para{" "}
                <span className="text-blue-700 text-2xl box-border caret-transparent md:text-[32px]">
                  proteger seus direitos com eficiência
                </span>
              </h2>
              <img
                src="/images/galeria01.jpg"
                alt="Escritório Ávila Nascimento Advocacia"
                className="w-full rounded-2xl mt-6 object-cover h-[200px] md:h-[240px]"
              />
            </div>
            <div className="relative box-border caret-transparent gap-x-5 flex flex-col flex-wrap min-h-[auto] gap-y-5 w-full z-[1] md:flex-nowrap md:w-[52%]">
              <div className="relative box-border caret-transparent gap-x-5 max-w-full min-h-[auto] gap-y-5 w-full">
                <ul className="list-none pl-0 flex flex-col gap-3 md:gap-4">
                  <li className="flex items-center gap-3 bg-white border border-gray-100 px-4 py-3 rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.03)] transition-all duration-200 hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:border-blue-100 md:px-6 md:py-4 md:gap-4">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 bg-blue-50 rounded-xl md:w-10 md:h-10">
                      <svg className="w-4 h-4 text-blue-600 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <span className="text-neutral-800 text-sm font-medium font-aalto_sans_pro md:text-lg">Análise personalizada do seu caso</span>
                  </li>
                  <li className="flex items-center gap-3 bg-white border border-gray-100 px-4 py-3 rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.03)] transition-all duration-200 hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:border-blue-100 md:px-6 md:py-4 md:gap-4">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 bg-blue-50 rounded-xl md:w-10 md:h-10">
                      <svg className="w-4 h-4 text-blue-600 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <span className="text-neutral-800 text-sm font-medium font-aalto_sans_pro md:text-lg">Acompanhamento transparente em cada etapa</span>
                  </li>
                  <li className="flex items-center gap-3 bg-white border border-gray-100 px-4 py-3 rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.03)] transition-all duration-200 hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:border-blue-100 md:px-6 md:py-4 md:gap-4">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 bg-blue-50 rounded-xl md:w-10 md:h-10">
                      <svg className="w-4 h-4 text-blue-600 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <span className="text-neutral-800 text-sm font-medium font-aalto_sans_pro md:text-lg">Honorários justos e previsíveis</span>
                  </li>
                  <li className="flex items-center gap-3 bg-white border border-gray-100 px-4 py-3 rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.03)] transition-all duration-200 hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:border-blue-100 md:px-6 md:py-4 md:gap-4">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 bg-blue-50 rounded-xl md:w-10 md:h-10">
                      <svg className="w-4 h-4 text-blue-600 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <span className="text-neutral-800 text-sm font-medium font-aalto_sans_pro md:text-lg">Resultados que geram confiança e recomendação</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contato" className="relative box-border caret-transparent flex flex-col max-w-full w-full border-zinc-100 mx-auto mt-10 md:mt-0 border-b border-solid overflow-hidden">
        <div className="relative md:absolute right-0 bottom-0 w-full h-[250px] md:h-full md:w-[45%] md:top-0 md:bottom-auto overflow-hidden">
          <img src="/images/O2 Corporate.jpg" alt="O2 Corporate &amp; Offices — Barra da Tijuca" className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="items-center box-border caret-transparent gap-x-5 flex flex-col grow flex-wrap h-full justify-between max-w-full px-5 md:px-0 min-h-[auto] min-w-[auto] gap-y-5 w-full mx-auto pt-8 pb-10 md:flex-row md:flex-nowrap md:max-w-6xl md:pt-32 md:pb-20">
          <div className="relative box-border caret-transparent gap-x-5 flex flex-col flex-wrap min-h-[auto] gap-y-5 w-full md:flex-nowrap md:w-2/5">
            <div className="relative self-center box-border caret-transparent gap-x-5 max-w-full min-h-[auto] gap-y-5 w-full mb-4 md:mb-0">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent w-full">
                  <h3 className="text-neutral-900 text-2xl font-medium box-border caret-transparent leading-[1.25] mt-2 mb-4 font-aalto_sans_pro md:text-[32px]">
                    <span className="text-blue-700 text-xs box-border caret-transparent block leading-[19.6px] mb-4 font-aalto_sans_pro">
                      {" "}
                      LOCALIZAÇÃO PRIVILEGIADA
                    </span>
                    Escritório no{" "}
                    <span className="text-blue-700 text-2xl box-border caret-transparent md:text-[32px]">
                      O2 Corporate &amp; Offices
                    </span>
                  </h3>
                  <p className="text-stone-700 text-base box-border caret-transparent leading-[22.4px] font-montserrat md:text-lg md:leading-[27px]">
                    Nosso escritório está localizado no O2 Corporate &amp; Offices,
                    um dos empreendimentos corporativos mais sofisticados da Barra
                    da Tijuca.
                    <br className="text-base box-border caret-transparent leading-[22.4px] md:text-lg md:leading-[27px]" />
                    <br className="text-base box-border caret-transparent leading-[22.4px] md:text-lg md:leading-[27px]" />
                    Infraestrutura de alto padrão para receber nossos clientes
                    com o conforto e a privacidade que merecem.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative box-border caret-transparent max-w-full min-h-[auto] w-full md:w-auto">
              <div className="rounded-xl overflow-hidden border border-zinc-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.2!2d-43.3647!3d-23.0003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda4e4b0b3e5f%3A0x2a5b3c7e8f9d0a1b!2sO2%20Corporate%20%26%20Offices!5e0!3m2!1spt-BR!2sbr!4v1709000000000"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="O2 Corporate &amp; Offices — Barra da Tijuca"
                  className="w-full"
                ></iframe>
              </div>
              <p className="text-neutral-800 text-sm font-medium box-border caret-transparent leading-[20px] font-aalto_sans_pro mt-3">
                O2 Corporate &amp; Offices
              </p>
              <p className="text-stone-700 text-sm box-border caret-transparent leading-[20px] font-montserrat mt-1">
                Av. das Américas, 12.551 — Barra da Tijuca, Rio de Janeiro – RJ
              </p>
              <div className="mt-5">
                <a href="https://wa.me/5521972728787?text=Olá! Gostaria de mais informações sobre os serviços do escritório." className="text-white text-lg font-medium bg-blue-700 flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-[100px] font-aalto_sans_pro shadow-lg hover:bg-blue-800 transition-colors duration-200 md:inline-flex md:w-auto md:px-10 md:py-4">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.613.613l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.352 0-4.55-.764-6.325-2.055l-.44-.334-2.634.883.883-2.634-.334-.44A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                  Entrar em Contato
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="propriedade-intelectual" className="relative box-border caret-transparent flex flex-col max-w-full w-full mx-auto">
        <div className="box-border caret-transparent gap-x-5 flex flex-col grow flex-wrap h-full justify-center max-w-full px-5 md:px-0 min-h-[auto] min-w-[auto] gap-y-5 w-full mx-auto py-10 md:max-w-[min(100%,1216px)] md:py-20">
          <div className="relative box-border caret-transparent max-w-full min-h-[auto] w-full text-center mb-4 md:mb-8">
            <h3 className="text-neutral-900 text-2xl font-medium box-border caret-transparent leading-[1.25] mt-2 mb-[5px] font-aalto_sans_pro md:text-[32px]">
              <span className="text-blue-700 text-xs box-border caret-transparent block leading-[19.6px] mb-4 font-aalto_sans_pro">
                NOSSAS ESPECIALIDADES
              </span>
              Atuação focada em duas áreas do{" "}
              <span className="text-blue-700 text-2xl box-border caret-transparent md:text-[32px]">
                Direito
              </span>
            </h3>
          </div>
          <div className="flex flex-col md:flex-row gap-5 w-full justify-center">
          <div className="relative self-center shadow-[rgba(0,0,0,0)_108px_165px_55px_0px,rgba(0,0,0,0.01)_69px_105px_50px_0px,rgba(0,0,0,0.02)_39px_59px_43px_0px,rgba(0,0,0,0.03)_17px_26px_32px_0px,rgba(0,0,0,0.04)_4px_7px_17px_0px] box-border caret-transparent gap-x-0 flex flex-wrap min-h-[auto] gap-y-0 w-full overflow-hidden rounded-xl md:self-auto md:flex-nowrap md:w-[47%]">
            <div className="relative overflow-hidden box-border caret-transparent min-h-[200px] w-full md:min-h-[auto] md:w-[46%]">
              <img
                src="/images/galeria03.jpg"
                alt="Propriedade Intelectual - Registro de Marcas"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-end min-h-[auto] gap-y-5 w-full p-5 md:p-8 md:flex-nowrap md:w-[54%]">
              <div className="relative box-border caret-transparent gap-x-5 max-w-full min-h-[auto] gap-y-5">
                <div className="box-border caret-transparent">
                  <div className="box-border caret-transparent w-full">
                    <h3 className="text-neutral-950 text-xl md:text-2xl font-medium box-border caret-transparent gap-x-2.5 flex flex-col leading-[1.3] gap-y-2.5 mt-2 mb-2.5 font-aalto_sans_pro after:accent-auto after:bg-blue-700 after:box-border after:caret-transparent after:text-neutral-950 after:block after:text-2xl after:not-italic after:normal-nums after:font-medium after:h-0.5 after:tracking-[normal] after:leading-[28.8px] after:list-outside after:list-disc after:min-h-[auto] after:min-w-[auto] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:w-5 after:border-separate after:font-aalto_sans_pro">
                      Propriedade Intelectual
                    </h3>
                    <p className="text-neutral-700 box-border caret-transparent font-montserrat">
                      Registro de marcas, patentes e direitos autorais com
                      acompanhamento especializado junto ao INPI.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative box-border caret-transparent gap-x-5 max-w-full min-h-[auto] gap-y-5">
                <a
                  href="#contato"
                  className="text-blue-700 text-lg font-medium bg-transparent box-border caret-transparent inline-block fill-blue-700 leading-[18px] text-center rounded-[3px] font-aalto_sans_pro"
                >
                  <span className="box-border caret-transparent gap-x-[5px] flex fill-blue-700 flex-row-reverse justify-center gap-y-[5px]">
                    <span className="items-center box-border caret-transparent flex fill-blue-700 min-h-[auto] min-w-[auto]">
                      <img
                        src="/icons/icon-26.svg"
                        alt="Icon"
                        className="box-border caret-transparent align-baseline w-[18px]"
                      />
                    </span>
                    <span className="box-border caret-transparent block fill-blue-700 min-h-[auto] min-w-[auto]">
                      Saiba mais
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div id="direito-saude" className="relative self-center shadow-[rgba(0,0,0,0)_108px_165px_55px_0px,rgba(0,0,0,0.01)_69px_105px_50px_0px,rgba(0,0,0,0.02)_39px_59px_43px_0px,rgba(0,0,0,0.03)_17px_26px_32px_0px,rgba(0,0,0,0.04)_4px_7px_17px_0px] box-border caret-transparent gap-x-0 flex flex-wrap min-h-[auto] gap-y-0 w-full overflow-hidden rounded-xl md:self-auto md:flex-nowrap md:w-[47%]">
            <div className="relative overflow-hidden box-border caret-transparent min-h-[200px] w-full md:min-h-[auto] md:w-[46%]">
              <img
                src="/images/galeria06.jpg"
                alt="Direito à Saúde - Ações contra Planos de Saúde"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-end min-h-[auto] gap-y-5 w-full p-5 md:p-8 md:flex-nowrap md:w-[54%]">
              <div className="relative box-border caret-transparent gap-x-5 max-w-full min-h-[auto] gap-y-5">
                <div className="box-border caret-transparent">
                  <div className="box-border caret-transparent w-full">
                    <h3 className="text-neutral-950 text-xl md:text-2xl font-medium box-border caret-transparent gap-x-2.5 flex flex-col leading-[1.3] gap-y-2.5 mt-2 mb-2.5 font-aalto_sans_pro after:accent-auto after:bg-blue-700 after:box-border after:caret-transparent after:text-neutral-950 after:block after:text-2xl after:not-italic after:normal-nums after:font-medium after:h-0.5 after:tracking-[normal] after:leading-[28.8px] after:list-outside after:list-disc after:min-h-[auto] after:min-w-[auto] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:w-5 after:border-separate after:font-aalto_sans_pro">
                      Direito à Saúde
                    </h3>
                    <p className="text-neutral-700 box-border caret-transparent font-montserrat">
                      Ações contra planos de saúde e defesa dos seus
                      direitos como consumidor de serviços de saúde.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative box-border caret-transparent gap-x-5 max-w-full min-h-[auto] gap-y-5">
                <a
                  href="#contato"
                  className="text-blue-700 text-lg font-medium bg-transparent box-border caret-transparent inline-block fill-blue-700 leading-[18px] text-center rounded-[3px] font-aalto_sans_pro"
                >
                  <span className="box-border caret-transparent gap-x-[5px] flex fill-blue-700 flex-row-reverse justify-center gap-y-[5px]">
                    <span className="items-center box-border caret-transparent flex fill-blue-700 min-h-[auto] min-w-[auto]">
                      <img
                        src="/icons/icon-26.svg"
                        alt="Icon"
                        className="box-border caret-transparent align-baseline w-[18px]"
                      />
                    </span>
                    <span className="box-border caret-transparent block fill-blue-700 min-h-[auto] min-w-[auto]">
                      Saiba Mais
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="relative bg-blue-50 box-border caret-transparent flex flex-col max-w-full w-full mx-auto">
        <div className="box-border caret-transparent gap-x-5 flex flex-col grow flex-wrap h-full justify-between max-w-full px-5 md:px-0 min-h-[auto] min-w-[auto] gap-y-5 w-full mx-auto py-8 md:flex-row md:flex-nowrap md:max-w-6xl md:py-20">
          <div className="relative self-start box-border caret-transparent gap-x-5 flex flex-col flex-wrap min-h-[auto] gap-y-5 w-full md:flex-nowrap md:w-[45%]">
            <div className="relative self-center box-border caret-transparent gap-x-5 max-w-full min-h-[auto] gap-y-5 w-full z-[2] md:w-[972px]">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent w-full">
                  <h3 className="text-neutral-900 text-2xl font-medium box-border caret-transparent leading-[1.25] mt-2 mb-1 font-aalto_sans_pro md:text-[32px]">
                    <span className="text-blue-700 text-xs box-border caret-transparent block leading-[19.6px] mb-4 font-aalto_sans_pro">
                      CENTRAL DE AJUDA
                    </span>
                    Ficou com alguma dúvida?
                  </h3>
                  <p className="text-stone-700 text-base box-border caret-transparent leading-6 font-montserrat md:text-xl md:leading-[30px]">
                    Confira nossas respostas com as perguntas mais frequentes
                    sobre nossos serviços jurídicos.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative box-border caret-transparent gap-x-5 hidden flex-col flex-wrap min-h-0 gap-y-5 w-full border border-zinc-300 p-[25.6px] rounded-lg border-solid md:flex md:flex-nowrap md:min-h-[auto] md:w-[380px]">
              <div className="relative box-border caret-transparent gap-x-5 max-w-full min-h-0 gap-y-5 w-full md:min-h-[auto]">
                <div className="box-border caret-transparent gap-x-3.5 flex flex-row gap-y-3.5 md:flex-col">
                  <div className="box-border caret-transparent shrink-0 leading-[0px] min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
                    <span className="text-sky-300 text-2xl box-border caret-transparent inline-block fill-sky-300 leading-6 text-center">
                      <img
                        src="/icons/icon-36.svg"
                        alt="Icon"
                        className="relative box-border caret-transparent h-6 align-baseline w-6"
                      />
                    </span>
                  </div>
                  <div className="box-border caret-transparent grow min-h-0 min-w-0 w-full md:min-h-[auto] md:min-w-[auto]">
                    <h3 className="text-neutral-950 text-xl md:text-2xl font-medium box-border caret-transparent leading-[1.3] mb-[9px] font-aalto_sans_pro">
                      <span className="box-border caret-transparent">
                        Não encontrou o que gostaria?{" "}
                      </span>
                    </h3>
                    <p className="text-neutral-700 box-border caret-transparent font-montserrat">
                      Fale com nosso time.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative box-border caret-transparent gap-x-5 max-w-full min-h-0 gap-y-5 md:min-h-[auto]">
                <a
                  href="https://wa.me/5521972728787?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20do%20escrit%C3%B3rio."
                  className="text-blue-700 text-lg font-medium bg-transparent box-border caret-transparent inline-block fill-blue-700 leading-[18px] text-center w-full border border-blue-700 p-[15px] rounded-[100px] border-solid font-aalto_sans_pro md:w-auto md:px-[42px] md:py-4"
                >
                  <span className="box-border caret-transparent gap-x-[5px] flex fill-blue-700 justify-center gap-y-[5px]">
                    <span className="box-border caret-transparent block fill-blue-700 min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
                      Quero tirar outra dúvida!
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="relative self-center w-full md:w-6/12">
            <div className="flex flex-col gap-3">
              {[
                { q: "Quais serviços o escritório oferece?", a: "Somos especializados em Propriedade Intelectual (registro de marcas, patentes e direitos autorais junto ao INPI) e Direito à Saúde (ações contra planos de saúde e defesa do consumidor)." },
                { q: "Quanto tempo leva o registro de uma marca?", a: "O processo de registro de marca no INPI leva em média de 12 a 18 meses. No entanto, a proteção começa desde o protocolo do pedido. Acompanhamos todo o processo até a concessão definitiva do registro." },
                { q: "O escritório atende em todo o Brasil?", a: "Sim! Nosso escritório está localizado na Barra da Tijuca, Rio de Janeiro, mas atendemos clientes de todo o Brasil, tanto presencialmente quanto de forma remota." },
                { q: "Como funciona o processo de registro de marca?", a: "O processo inclui pesquisa de anterioridade, elaboração e protocolo do pedido junto ao INPI, acompanhamento de publicações oficiais e resposta a eventuais exigências até a concessão do registro." },
                { q: "Meu plano de saúde negou um procedimento, o que fazer?", a: "Quando o plano de saúde nega um procedimento, tratamento ou exame, você pode buscar seus direitos judicialmente. Nossa equipe analisa seu caso e, se houver fundamento legal, ingressamos com a ação para garantir a cobertura devida." },
                { q: "Como são cobrados os honorários?", a: "Os honorários são definidos de forma transparente na consulta inicial, com valores acessíveis e previsíveis. Trabalhamos com honorários fixos para registros de marca e honorários condicionados ao êxito em ações judiciais, conforme o caso." },
                { q: "Qual a experiência do escritório?", a: "Nosso sócio fundador, Marcello Ávila do Nascimento Souza, é Advogado (OAB-RJ nº 128.829) e Agente da Propriedade Industrial (INPI matrícula 0636) com mais de 28 anos de atuação. É associado à ABPI e ABAPI, referências em propriedade intelectual no Brasil." },
                { q: "Como posso agendar uma consulta?", a: "Entre em contato pelo WhatsApp (21) 97272-8787, pelo e-mail info@avilanascimento.adv.br ou pelas nossas redes sociais. Atendemos de segunda a domingo, das 09:00 às 18:00." },
              ].map((item, i) => (
                <div key={i} className="group">
                  <button
                    onClick={(e) => {
                      const content = e.currentTarget.nextElementSibling as HTMLElement;
                      const icon = e.currentTarget.querySelector('.faq-icon') as HTMLElement;
                      if (content.style.maxHeight && content.style.maxHeight !== '0px') {
                        content.style.maxHeight = '0px';
                        content.style.opacity = '0';
                        icon.style.transform = 'rotate(0deg)';
                        e.currentTarget.parentElement!.classList.remove('is-open');
                      } else {
                        content.style.maxHeight = content.scrollHeight + 'px';
                        content.style.opacity = '1';
                        icon.style.transform = 'rotate(180deg)';
                        e.currentTarget.parentElement!.classList.add('is-open');
                      }
                    }}
                    className="w-full flex items-center justify-between gap-4 bg-white border border-gray-100 px-5 py-4 rounded-2xl text-left shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.03)] transition-all duration-200 hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:border-blue-100 md:px-6 md:py-5 cursor-pointer"
                  >
                    <span className="text-neutral-800 text-base font-medium font-aalto_sans_pro md:text-lg leading-snug">{item.q}</span>
                    <span className="faq-icon flex-shrink-0 text-blue-700 text-xl transition-transform duration-300">&#9660;</span>
                  </button>
                  <div className="overflow-hidden transition-all duration-300 ease-in-out" style={{ maxHeight: '0px', opacity: 0 }}>
                    <div className="bg-white border border-gray-100 rounded-2xl mt-1.5 px-5 py-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)] md:px-6">
                      <p className="text-stone-700 text-sm font-montserrat leading-relaxed md:text-base">{item.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative box-border caret-transparent gap-x-5 flex flex-col flex-wrap min-h-[auto] gap-y-5 w-full border border-zinc-300 p-[25.6px] rounded-lg border-solid md:hidden md:flex-nowrap md:min-h-0 md:w-[380px]">
            <div className="relative box-border caret-transparent gap-x-5 max-w-full min-h-[auto] gap-y-5 w-full md:min-h-0">
              <div className="box-border caret-transparent gap-x-3.5 flex flex-row gap-y-3.5 md:flex-col">
                <div className="box-border caret-transparent shrink-0 leading-[0px] min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
                  <span className="text-sky-300 text-2xl box-border caret-transparent inline-block fill-sky-300 leading-6 text-center">
                    <img
                      src="/icons/icon-36.svg"
                      alt="Icon"
                      className="relative box-border caret-transparent h-6 align-baseline w-6"
                    />
                  </span>
                </div>
                <div className="box-border caret-transparent grow min-h-[auto] min-w-[auto] w-full md:min-h-0 md:min-w-0">
                  <h3 className="text-neutral-950 text-xl md:text-2xl font-medium box-border caret-transparent leading-[1.3] mb-[9px] font-aalto_sans_pro">
                    <span className="box-border caret-transparent">
                      Não encontrou o que gostaria?{" "}
                    </span>
                  </h3>
                  <p className="text-neutral-700 box-border caret-transparent font-montserrat">
                    Fale com nosso time.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative box-border caret-transparent gap-x-5 max-w-full min-h-[auto] gap-y-5 md:min-h-0">
              <a
                href="https://wa.me/5521972728787?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20do%20escrit%C3%B3rio."
                className="text-blue-700 text-lg font-medium bg-transparent box-border caret-transparent inline-block fill-blue-700 leading-[18px] text-center w-full border border-blue-700 p-[15px] rounded-[100px] border-solid font-aalto_sans_pro md:w-auto md:px-[42px] md:py-4"
              >
                <span className="box-border caret-transparent gap-x-[5px] flex fill-blue-700 justify-center gap-y-[5px]">
                  <span className="box-border caret-transparent block fill-blue-700 min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
                    Quero tirar outra dúvida!
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
