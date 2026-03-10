import { useEffect } from "react";

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.613.613l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.352 0-4.55-.764-6.325-2.055l-.44-.334-2.634.883.883-2.634-.334-.44A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
);

const CheckIcon = () => (
  <svg className="w-4 h-4 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
);

const XIcon = () => (
  <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
);

const faqData = [
  {
    q: "Caso opte por não registrar, cometo alguma irregularidade? Posso perder a marca?",
    a: "A ausência de registro não implica em qualquer irregularidade administrativa, fiscal ou cadastral. No entanto, aquele que não registra pode ser obrigado a deixar de usar a marca a qualquer momento por reclamação de um titular de registro idêntico ou semelhante para o mesmo produto/serviço ou afim e, ainda, ter que pagar indenização pelos últimos 5 (cinco) anos de uso, partindo em média de R$ 50.000,00, fora todo o investimento perdido e custo da defesa judicial (aprox. R$ 20.000,00 com advogado especialista)."
  },
  {
    q: "Quanto custa para registrar uma marca?",
    a: "Em vista dos riscos financeiros que envolvem o uso de marca sem registro, o CUSTO TOTAL do registro com taxas federais e honorários profissionais — que incluem análise de viabilidade, adequação do pedido, acompanhamento processual, defesa do pedido contra terceiros e recurso contra negativa do INPI — é baixo e toda empresa/empresário consegue pagar, em média R$ 6.000,00 (taxas + honorários) com escritórios tradicionais da área ou R$ 3.000,00 (taxas + serviços) com empresas \"telemarcas\" por TODO O PROCESSO."
  },
  {
    q: "Quanto vou gastar registrando com a Ávila Nascimento Advocacia?",
    a: "Somos advogados especialistas. Não podemos informar valores por aqui. Mas podemos assegurar que, considerados os riscos financeiros que envolvem o uso de marca sem registro (partindo facilmente de R$ 70.000,00), gastará pouco, muito pouco. Nossa assessoria é prestada de forma personalizada por advogado especialista com aprox. 30 anos de INPI. Adotamos: valor único para todo o processo, all inclusive (do pedido até o certificado), sem surpresas e pagamento parcelado."
  },
  {
    q: "Não tenho CNPJ, posso registrar minha marca?",
    a: "Sim, o registro pode pertencer à pessoa física que exerça atividade compatível com aquela identificada pela marca."
  },
  {
    q: "Já tenho CNPJ com nome de empresa, mesmo assim preciso registrar marca?",
    a: "Nome de empresa e nome de fantasia não garantem a propriedade sobre a marca e sua utilização. O nome empresarial e nome fantasia conferem essencialmente o direito de uso em documentos empresariais e letreiro, nos limites da unidade federativa responsável pelo registro. Para identificar serviços ou produtos de forma ampla, em todo o território nacional, é necessário o registro da marca."
  },
  {
    q: "A marca pode ficar no nome de duas ou mais pessoas?",
    a: "Sim, o regime de cotitularidade permite a anotação de mais de um requerente por pedido de registro de marca. Todos os titulares deverão assinar a Procuração e demonstrar atividade compatível com a especificação da classe escolhida para a marca."
  },
  {
    q: "Ainda não tenho uma logo, aguardo o desenvolvimento ou peço só o nome?",
    a: "Enquanto você pensa, outros agem e pedem na sua frente. Nossa orientação é sempre pelo depósito imediato da marca sob a apresentação nominativa (só o elemento verbal). Concluída a elaboração da logo, um novo pedido sob a forma mista poderá ser solicitado. O ideal é sempre pedir separadamente, um registro do nome e outro com a parte figurativa."
  },
  {
    q: "Protocolado o pedido de registro, já estou garantido?",
    a: "A marca só é utilizada com total segurança após a concessão do registro. Todavia, uma qualificada análise de disponibilidade e viabilidade antes do depósito poderá reduzir significativamente os riscos. Além disso, a expectativa de direito de exclusividade gerada pelo pedido confere ao titular o direito de zelar pela integridade e reputação da marca."
  }
];

const summaryClasses = "relative text-neutral-800 items-center box-border caret-transparent gap-x-2.5 flex justify-between list-none min-h-[auto] min-w-[auto] gap-y-0 p-4 rounded-md cursor-pointer";

export const RegistroMarcasPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="box-border caret-transparent">

      {/* HERO */}
      <div className="box-border caret-transparent">
        <div className="relative box-border caret-transparent flex flex-col max-w-full w-full mx-auto">
          {/* Background image desktop */}
          <div className="absolute box-border caret-transparent hidden h-[max(100%_+_0px,100%)] w-[max(100%_+_0px,100%)] z-0 overflow-hidden mx-auto inset-0 md:block bg-neutral-700">
            <div className="absolute right-[5%] top-0 h-full w-[42%] z-[1] [transform:scaleX(-1)]">
              <img src="/images/advogado-avila.png" alt="Dr. Marcelo Ávila Nascimento" className="h-full w-full object-cover object-top" />
            </div>
          </div>
          {/* Content */}
          <div className="box-border caret-transparent gap-x-0 flex flex-col grow flex-wrap h-full justify-between max-w-full min-h-[auto] min-w-[auto] gap-y-0 w-full mx-auto pt-[60px] pb-0 md:gap-x-5 md:flex-row md:flex-nowrap md:max-w-[1216px] md:gap-y-5 md:pt-[120px] md:pb-[55px]">
            {/* White card */}
            <div className="relative bg-white box-border caret-transparent gap-x-4 flex flex-wrap min-h-[auto] gap-y-4 w-full px-5 py-8 rounded-r-none md:gap-x-5 md:gap-y-5 md:w-[591px] md:px-8 md:rounded-r-[80px] before:bg-white before:block before:h-full before:absolute before:w-[500%] before:left-0 before:top-0 before:translate-x-[-1856.25px] before:md:translate-x-[-2925.45px]">
              <div className="relative box-border caret-transparent gap-x-2.5 max-w-full min-h-[auto] gap-y-2.5 w-full mb-4 md:gap-x-5 md:gap-y-5 md:mb-0">
                <div className="box-border caret-transparent w-full">
                  <h3 className="text-neutral-900 text-2xl font-medium box-border caret-transparent leading-[28.8px] mt-2 mb-[5px] font-aalto_sans_pro md:text-[32px] md:leading-[38.4px]">
                    <span className="text-blue-700 text-xs box-border caret-transparent block leading-[19.6px] mb-1 font-aalto_sans_pro">
                      PROPRIEDADE INTELECTUAL
                    </span>
                    Proteja o direito sobre{" "}
                    <span className="text-blue-700">sua marca !</span>
                  </h3>
                  <p className="text-stone-700 text-base box-border caret-transparent leading-[22.4px] font-montserrat md:text-lg md:leading-[27px] mt-3">
                    Registro com suporte qualificado de advogado especialista, com + 28 anos de INPI assessorando empresas nacionais e estrangeiras de grande renome.
                  </p>
                  <div className="flex flex-col gap-2 mt-5 mb-2">
                    {[
                      { label: "Valor único", desc: "por todo o processo." },
                      { label: "All inclusive:", desc: "do pedido até o certificado." },
                      { label: "Sem surpresas.", desc: "" },
                      { label: "Pagamento parcelado.", desc: "" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-blue-700 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        <span className="text-stone-700 text-sm font-montserrat">
                          <strong className="text-neutral-900">{item.label}</strong>{item.desc ? ` ${item.desc}` : ""}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-stone-700 text-sm box-border caret-transparent leading-[21px] font-montserrat mt-4">
                    <strong className="text-neutral-900">O melhor dos dois mundos da PI:</strong> assessoria jurídica de alto nível e registro simplificado com pagamento único.* Inicie o registro e entraremos em contato para lhe acompanhar durante todo o processo.
                  </p>
                </div>
              </div>
              <div className="relative self-center box-border caret-transparent gap-x-2.5 max-w-full min-h-[auto] gap-y-2.5 w-full md:gap-x-5 md:gap-y-5 md:w-auto">
                <a
                  href="https://wa.me/5521972728787?text=Olá! Gostaria de registrar minha marca."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-lg font-medium bg-blue-700 box-border caret-transparent inline-block fill-white leading-[18px] text-center w-full px-5 py-3.5 rounded-[100px] font-aalto_sans_pro md:w-auto md:px-[42px] md:py-4"
                >
                  <span className="box-border caret-transparent gap-x-[5px] flex fill-white justify-center gap-y-[5px]">
                    <span className="box-border caret-transparent block fill-white min-h-[auto] min-w-[auto]">
                      Fale com um Especialista
                    </span>
                  </span>
                </a>
              </div>
              <p className="text-stone-400 text-xs font-montserrat leading-relaxed w-full">
                * Atuamos com as modalidades de contratação <strong className="text-stone-500">Plano Start</strong> (essencial) e <strong className="text-stone-500">Plano Sênior</strong> (blindagem estratégica com defesas inclusas).
              </p>
            </div>
            {/* Image mobile */}
            <div className="relative box-border caret-transparent gap-x-5 flex flex-col flex-wrap min-h-0 gap-y-5 w-full p-0 md:flex-nowrap md:min-h-[auto] md:w-[48%] md:p-2.5">
              <div className="relative box-border caret-transparent gap-x-5 block max-w-full min-h-[auto] gap-y-5 w-full md:hidden md:min-h-0">
                <div className="relative h-[400px] w-full overflow-hidden bg-neutral-700">
                  <div role="img" aria-label="Dr. Marcelo Ávila Nascimento" className="bg-[url('/images/advogado-avila.png')] bg-no-repeat bg-contain box-border caret-transparent h-full w-full bg-[center_top] [transform:scaleX(-1)]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Stats bar */}
        <div className="relative bg-white box-border caret-transparent flex flex-col max-w-full w-full z-[4] border-zinc-200 mx-auto px-2.5 border-b border-solid">
          <div className="box-border caret-transparent gap-x-0 flex grow flex-wrap h-full justify-between max-w-full px-5 md:px-0 min-h-[auto] min-w-[auto] gap-y-0 w-full mx-auto py-2.5 md:flex-nowrap md:max-w-[min(100%,1216px)]">
            <div className="relative box-border caret-transparent gap-x-0 max-w-full min-h-[auto] gap-y-0 w-full py-6 px-5 md:p-8 md:w-[31%]">
              <div className="box-border caret-transparent gap-x-3 flex flex-row gap-y-3 md:gap-x-[9px] md:gap-y-[9px] md:flex-col">
                <div className="box-border caret-transparent grow min-h-[auto] min-w-[auto] w-full">
                  <h3 className="text-neutral-950 text-xl md:text-xl font-medium box-border caret-transparent leading-[1.35] font-aalto_sans_pro">+28 Anos</h3>
                  <p className="text-neutral-700 text-base box-border caret-transparent font-montserrat">de Propriedade Intelectual</p>
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center">
              <div className="w-px h-16 bg-zinc-200"></div>
            </div>
            <div className="relative box-border caret-transparent gap-x-0 max-w-full min-h-[auto] gap-y-0 w-full py-6 px-5 md:p-8 md:w-[31%]">
              <div className="box-border caret-transparent gap-x-3 flex flex-row gap-y-3 md:gap-x-[9px] md:gap-y-[9px] md:flex-col">
                <div className="box-border caret-transparent grow min-h-[auto] min-w-[auto] w-full">
                  <h3 className="text-neutral-950 text-xl md:text-xl font-medium box-border caret-transparent leading-[1.35] font-aalto_sans_pro">Valor Único</h3>
                  <p className="text-neutral-700 text-base box-border caret-transparent font-montserrat">do pedido até o certificado</p>
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center">
              <div className="w-px h-16 bg-zinc-200"></div>
            </div>
            <div className="relative box-border caret-transparent gap-x-0 max-w-full min-h-[auto] gap-y-0 w-full py-6 px-5 md:p-8 md:w-[31%]">
              <div className="box-border caret-transparent gap-x-3 flex flex-row gap-y-3 md:gap-x-[9px] md:gap-y-[9px] md:flex-col">
                <div className="box-border caret-transparent grow min-h-[auto] min-w-[auto] w-full">
                  <h3 className="text-neutral-950 text-xl md:text-xl font-medium box-border caret-transparent leading-[1.35] font-aalto_sans_pro">100% Online</h3>
                  <p className="text-neutral-700 text-base box-border caret-transparent font-montserrat">sem sair de casa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* POR QUE REGISTRAR — Comparativo */}
      <div id="por-que-registrar" className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <span className="text-blue-700 text-xs font-medium tracking-[0.2em] uppercase block mb-4 font-aalto_sans_pro">Evite Riscos</span>
            <h2 className="text-neutral-900 text-3xl md:text-[40px] font-medium leading-[1.15] font-aalto_sans_pro">
              Por que registrar a sua marca?
            </h2>
            <p className="text-stone-700 text-base font-montserrat mt-4 max-w-xl mx-auto">
              Registrar a sua marca é o primeiro passo para proteger a identidade do seu negócio.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-zinc-200 rounded-2xl p-8 md:p-10 bg-white shadow-[rgba(0,0,0,0.04)_0px_4px_24px_0px]">
              <h3 className="text-neutral-900 text-2xl font-medium mb-8 font-aalto_sans_pro">Com registro</h3>
              <div className="flex flex-col gap-5">
                {[
                  "Exclusividade sobre o nome e logotipo em todo o território nacional",
                  "Segurança jurídica para crescer e investir com tranquilidade",
                  "Valorização da marca no mercado e proteção contra concorrentes",
                  "Possibilidade de franquear ou licenciar no futuro",
                  "Proteção em marketplaces (Mercado Livre, Amazon)"
                ].map((t, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5"><CheckIcon /></span>
                    <span className="text-stone-700 text-base font-montserrat leading-relaxed">{t}</span>
                  </div>
                ))}
              </div>
              <a href="https://wa.me/5521972728787?text=Olá! Gostaria de registrar minha marca." target="_blank" rel="noopener noreferrer" className="text-blue-700 text-sm font-medium font-aalto_sans_pro uppercase tracking-wider mt-8 inline-flex items-center gap-2 hover:text-blue-800 transition-colors">
                Fale com um especialista <span className="text-lg">&rsaquo;</span>
              </a>
            </div>
            <div className="border border-zinc-200 rounded-2xl p-8 md:p-10 bg-white shadow-[rgba(0,0,0,0.04)_0px_4px_24px_0px]">
              <h3 className="text-neutral-900 text-2xl font-medium mb-8 font-aalto_sans_pro">Sem registro</h3>
              <div className="flex flex-col gap-5">
                {[
                  "Alguém pode registrar antes e te proibir de usar sua própria marca",
                  "Você pode ser processado por uso indevido e pagar indenização",
                  "Perda de reputação, clientes e todo investimento feito na marca",
                  "Dificuldade para expandir, vender ou franquear seu negócio",
                  "Loja desativada em marketplaces por falta de registro"
                ].map((t, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5"><XIcon /></span>
                    <span className="text-stone-700 text-base font-montserrat leading-relaxed">{t}</span>
                  </div>
                ))}
              </div>
              <a href="https://wa.me/5521972728787?text=Olá! Gostaria de registrar minha marca." target="_blank" rel="noopener noreferrer" className="text-blue-700 text-sm font-medium font-aalto_sans_pro uppercase tracking-wider mt-8 inline-flex items-center gap-2 hover:text-blue-800 transition-colors">
                Proteja sua marca agora <span className="text-lg">&rsaquo;</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ETAPAS — Grid numerado + imagem */}
      <div id="como-funciona" className="bg-zinc-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16">
            <div className="w-full md:w-[40%] relative">
              <div className="relative rounded-3xl overflow-hidden h-[350px] md:h-full min-h-[400px] shadow-xl">
                <img src="/images/galeria03.jpg" alt="Registro de Marcas" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-5 left-5 right-5 bg-white rounded-2xl p-4 shadow-lg">
                <p className="text-blue-700 text-2xl font-medium font-aalto_sans_pro">+3 milhões</p>
                <p className="text-stone-700 text-sm font-montserrat">de marcas ativas e registradas no Brasil.</p>
              </div>
            </div>
            <div className="w-full md:w-[60%]">
              <span className="text-blue-700 text-xs font-medium tracking-[0.2em] uppercase block mb-4 font-aalto_sans_pro">Simples e 100% online</span>
              <h2 className="text-neutral-900 text-3xl md:text-[40px] font-medium leading-[1.15] mb-10 font-aalto_sans_pro">
                Etapas do registro de marca
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { num: "01", title: "Solicitação", desc: "Entre em contato pelo WhatsApp. Faremos uma análise inicial sobre a disponibilidade do sinal e as chances de sucesso." },
                  { num: "02", title: "Análise", desc: "Verificação qualificada da documentação de modo a evitar exigências. Pesquisa de anterioridade completa." },
                  { num: "03", title: "Protocolo", desc: "Preparamos e protocolamos seu pedido no INPI com toda a documentação necessária." },
                  { num: "04", title: "Acompanhamento", desc: "Acompanhe o andamento com nosso suporte jurídico até a concessão do registro." },
                  { num: "05", title: "Registro", desc: "Receba seu Certificado de Registro válido por 10 anos. Sem cobrança pelo certificado." }
                ].map((step, i) => (
                  <div key={i} className={`border border-zinc-200 rounded-xl p-6 bg-white shadow-sm ${i === 4 ? "sm:col-span-2" : ""}`}>
                    <span className="text-blue-700 text-3xl font-medium font-aalto_sans_pro block mb-3">{step.num}.</span>
                    <h3 className="text-neutral-900 text-lg font-medium mb-2 font-aalto_sans_pro">{step.title}</h3>
                    <p className="text-stone-700 text-sm font-montserrat leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-6 mt-8">
                <a
                  href="https://wa.me/5521972728787?text=Olá! Gostaria de registrar minha marca."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-base font-medium bg-blue-700 inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-[100px] font-aalto_sans_pro hover:bg-blue-800 transition-colors duration-200"
                >
                  Solicitar Registro <span>&rsaquo;</span>
                </a>
                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  {["Sem burocracia", "Sem sair de casa", "Sem complicação"].map((t, i) => (
                    <span key={i} className="flex items-center gap-1.5 text-stone-700 text-xs font-montserrat uppercase tracking-wider">
                      <span className="w-4 h-4 rounded-full bg-blue-50 flex items-center justify-center"><svg className="w-3 h-3 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SERVIÇOS — Cards */}
      <div id="servicos" className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <span className="text-blue-700 text-xs font-medium tracking-[0.2em] uppercase block mb-4 font-aalto_sans_pro">Escolha seu atendimento</span>
            <h2 className="text-neutral-900 text-3xl md:text-[40px] font-medium leading-[1.15] font-aalto_sans_pro">
              Serviços de Propriedade Intelectual
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: "Registro de Marcas", desc: "Depósito e acompanhamento de registro de marcas no INPI. Valor único para todo o processo com pagamento parcelado.", icon: (<svg className="w-6 h-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>) },
              { title: "Patentes e Desenho Industrial", desc: "Registro de patentes de invenção, modelo de utilidade e desenhos industriais junto ao INPI.", icon: (<svg className="w-6 h-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>) },
              { title: "Direitos Autorais", desc: "Registro e proteção de obras literárias, artísticas, musicais e programas de computador.", icon: (<svg className="w-6 h-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>) },
              { title: "Contencioso e Defesa", desc: "Contencioso administrativo e judicial: plágio, violação de marcas, patentes e concorrência desleal.", icon: (<svg className="w-6 h-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97z" /></svg>) },
              { title: "Due Diligence em PI", desc: "Auditoria estratégica e IPR Clearance para mitigar riscos de litígio em transações de alto valor.", icon: (<svg className="w-6 h-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>) },
              { title: "Contratos e Licenciamento", desc: "Contratos de tecnologia, franquia, licenciamento, cessão de direitos e indicações geográficas.", icon: (<svg className="w-6 h-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg>) }
            ].map((item, i) => (
              <div key={i} className="border border-zinc-200 rounded-2xl p-7 bg-white shadow-[rgba(0,0,0,0.04)_0px_4px_24px_0px] hover:shadow-[rgba(0,0,0,0.08)_0px_8px_32px_0px] transition-shadow duration-300 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">{item.icon}</div>
                <h3 className="text-neutral-900 text-lg font-medium mb-3 font-aalto_sans_pro">{item.title}</h3>
                <p className="text-stone-700 text-sm font-montserrat leading-relaxed mb-6 flex-grow">{item.desc}</p>
                <a href="https://wa.me/5521972728787?text=Olá! Gostaria de saber mais sobre o serviço." target="_blank" rel="noopener noreferrer" className="text-blue-700 text-sm font-medium font-aalto_sans_pro uppercase tracking-wider inline-flex items-center gap-2 hover:text-blue-800 transition-colors">
                  Entrar em contato <span className="text-lg">&rsaquo;</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BIO DO ADVOGADO */}
      <div id="advogado" className="bg-zinc-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
            <div className="w-full md:w-[55%]">
              <span className="text-blue-700 text-xs font-medium tracking-[0.2em] uppercase block mb-4 font-aalto_sans_pro">Quem sou eu?</span>
              <h2 className="text-neutral-900 text-3xl md:text-[40px] font-medium leading-[1.15] mb-8 font-aalto_sans_pro">
                Dr. Marcelo Ávila do Nascimento Souza
              </h2>
              <div className="flex flex-col gap-5 text-stone-700 text-base font-montserrat leading-relaxed">
                <p>Advogado inscrito sob o n.o 128.829 na OAB-RJ e <strong className="text-neutral-900">Agente da Propriedade Industrial</strong> registrado perante o INPI sob matrícula 0636 de 29/09/1998, com <strong className="text-neutral-900">mais de 28 anos de experiência em Propriedade Intelectual</strong>.</p>
                <p>Associado à <strong className="text-neutral-900">ABPI</strong> (n.o 43657) e à <strong className="text-neutral-900">ABAPI</strong> (n.o 0522), referências nacionais em PI no Brasil.</p>
                <p>Sua trajetória combina excelência técnica, espírito empreendedor e um olhar sensível para a importância da proteção intelectual no mundo dos negócios.</p>
                <p>Nosso propósito é oferecer serviços jurídicos de excelência, garantindo segurança legal por meio de <strong className="text-neutral-900">atendimento individualizado</strong> e soluções <em>tailor-made</em>, personalizadas para cada cliente.</p>
              </div>
              <a href="https://wa.me/5521972728787?text=Olá! Gostaria de falar com o Dr. Marcelo." target="_blank" rel="noopener noreferrer" className="text-blue-700 text-sm font-medium font-aalto_sans_pro uppercase tracking-wider mt-8 inline-flex items-center gap-2 hover:text-blue-800 transition-colors">
                Entrar em contato <span className="text-lg">&rsaquo;</span>
              </a>
            </div>
            <div className="w-full md:w-[40%]">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-xl">
                  <img src="/images/advogado.jpg" alt="Dr. Marcelo Ávila do Nascimento Souza" className="w-full h-[450px] md:h-[550px] object-cover object-top [transform:scaleX(-1)]" />
                </div>
                <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-blue-700 rounded-xl p-4 md:p-5 shadow-xl">
                  <p className="text-white text-xl md:text-2xl font-medium font-aalto_sans_pro">+28 anos</p>
                  <p className="text-blue-200 text-xs font-montserrat">de Propriedade Intelectual</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA URGÊNCIA */}
      <div className="bg-blue-700 py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-blue-200 text-xs font-medium tracking-[0.2em] uppercase block mb-2 font-aalto_sans_pro">Não perca tempo</span>
              <h3 className="text-white text-2xl md:text-3xl font-medium font-aalto_sans_pro">Você pode perder o direito de usar sua própria marca</h3>
            </div>
            <a href="https://wa.me/5521972728787?text=Olá! Gostaria de registrar minha marca." target="_blank" rel="noopener noreferrer" className="text-blue-700 text-base font-medium bg-white inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-[100px] font-aalto_sans_pro hover:bg-blue-50 transition-colors duration-200 shrink-0 shadow-lg">
              Solicitar Registro Agora <span>&rsaquo;</span>
            </a>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div id="faq" className="bg-white py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-5">
          <div className="text-center mb-14">
            <span className="text-blue-700 text-xs font-medium tracking-[0.2em] uppercase block mb-4 font-aalto_sans_pro">Ficou com alguma dúvida?</span>
            <h2 className="text-neutral-900 text-3xl md:text-[40px] font-medium leading-[1.15] font-aalto_sans_pro">Dúvidas e Valores</h2>
          </div>
          <div className="flex flex-col gap-3.5">
            {faqData.map((item, i) => (
              <details key={i} className="group relative bg-white box-border caret-transparent flex flex-col rounded-md">
                <summary className={summaryClasses}>
                  <span className="box-border caret-transparent flex min-h-[auto] min-w-[auto] pr-12">
                    <div className="text-xl font-medium items-center box-border caret-transparent flex justify-start leading-[30px] min-h-[auto] min-w-[auto] w-full font-aalto_sans_pro">
                      {item.q}
                    </div>
                  </span>
                  <svg className="w-5 h-5 text-blue-700 shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div role="region" className="relative box-border caret-transparent gap-x-5 flex flex-col flex-wrap gap-y-5 w-full p-4 md:flex-nowrap">
                  <div className="relative box-border caret-transparent gap-x-5 max-w-full min-h-[auto] gap-y-5">
                    <p className="text-neutral-700 text-lg font-light box-border caret-transparent leading-[27px] font-aalto_sans_pro">
                      {item.a}
                    </p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* CTA FINAL */}
      <div className="bg-zinc-50 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <div className="bg-white border border-zinc-200 rounded-3xl p-10 md:p-16 shadow-[rgba(0,0,0,0.04)_0px_4px_24px_0px]">
            <span className="text-blue-700 text-xs font-medium tracking-[0.2em] uppercase block mb-4 font-aalto_sans_pro">Proteja o que é seu</span>
            <h2 className="text-neutral-900 text-2xl md:text-[36px] font-medium leading-[1.15] mb-4 font-aalto_sans_pro">Vamos registrar a sua marca?</h2>
            <p className="text-stone-700 text-base font-montserrat mb-8 max-w-xl mx-auto">Enquanto você pensa, outros agem e registram na sua frente. Garanta a proteção da sua marca hoje mesmo.</p>
            <a href="https://wa.me/5521972728787?text=Olá! Gostaria de registrar minha marca." target="_blank" rel="noopener noreferrer" className="text-white text-base font-medium bg-blue-700 inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-[100px] font-aalto_sans_pro hover:bg-blue-800 transition-colors duration-200">
              <WhatsAppIcon />
              Solicitar Registro
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
