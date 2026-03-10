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
    q: "Meu plano de saúde negou um procedimento, o que fazer?",
    a: "Quando o plano de saúde nega um procedimento, tratamento ou exame, você pode buscar seus direitos judicialmente. Nossa equipe analisa seu caso e, se houver fundamento legal, ingressamos com a ação para garantir a cobertura devida. Em casos urgentes, é possível obter uma liminar em 24 a 72 horas."
  },
  {
    q: "Quanto tempo leva para conseguir uma liminar?",
    a: "Em casos de urgência médica comprovada, como negativas de cirurgias, internações ou tratamentos oncológicos, é possível obter uma decisão liminar (tutela de urgência) em 24 a 72 horas. O juiz analisa a documentação médica e, verificando o risco à saúde do paciente, determina que o plano cumpra a cobertura imediatamente."
  },
  {
    q: "Preciso pagar para entrar com a ação contra o plano?",
    a: "Na maioria dos casos, trabalhamos com honorários condicionados ao êxito da ação, ou seja, você só paga se ganhar. Além disso, é possível solicitar os benefícios da justiça gratuita, o que isenta o consumidor de custas processuais. Cada caso é analisado individualmente na consulta inicial."
  },
  {
    q: "O escritório atende em todo o Brasil?",
    a: "Sim! Nosso escritório está localizado na Barra da Tijuca, Rio de Janeiro, mas atendemos clientes de todo o Brasil, tanto presencialmente quanto de forma remota. As ações podem ser propostas no foro do domicílio do consumidor, facilitando o acesso à justiça."
  },
  {
    q: "Posso processar o plano de saúde por danos morais?",
    a: "Sim. Quando a negativa do plano de saúde causa sofrimento, angústia ou agravamento do estado de saúde do paciente, é possível pleitear indenização por danos morais além da cobertura do tratamento. Situações de urgência médica com negativa injustificada frequentemente resultam em condenação por danos morais."
  },
  {
    q: "O plano pode cancelar meu contrato por uso excessivo?",
    a: "Não. O cancelamento unilateral do contrato de plano de saúde por parte da operadora, especialmente durante tratamento médico, é considerado abusivo pelo Código de Defesa do Consumidor e pela jurisprudência consolidada. Se seu plano foi cancelado indevidamente, temos medidas judiciais para restabelecer a cobertura."
  },
  {
    q: "Como funciona a primeira consulta?",
    a: "Na primeira consulta, analisamos toda a documentação do seu caso (contrato do plano, laudos médicos, cartas de negativa) e orientamos sobre as chances de êxito e a melhor estratégia jurídica. O atendimento pode ser feito presencialmente em nosso escritório na Barra da Tijuca ou de forma remota, por videochamada."
  }
];

const summaryClasses = "relative text-neutral-800 items-center box-border caret-transparent gap-x-2.5 flex justify-between list-none min-h-[auto] min-w-[auto] gap-y-0 p-4 rounded-md cursor-pointer";

export const DireitoSaudePage = () => {
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
                      DIREITO À SAÚDE
                    </span>
                    Seu plano de saúde{" "}
                    <span className="text-blue-700">negou cobertura?</span>
                  </h3>
                  <p className="text-stone-700 text-base box-border caret-transparent leading-[22.4px] font-montserrat md:text-lg md:leading-[27px] mt-3">
                    Atuação especializada contra planos de saúde por advogado com mais de 21 anos de advocacia. Defendemos seus direitos como consumidor.
                  </p>
                  <div className="flex flex-col gap-2 mt-5 mb-2">
                    {[
                      { label: "Liminares em 24-72h", desc: "para casos de urgência médica." },
                      { label: "Honorários no êxito:", desc: "você só paga se ganhar." },
                      { label: "Atendimento em todo o Brasil", desc: "presencial ou remoto." },
                      { label: "Danos morais:", desc: "indenização por negativa abusiva." }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-blue-700 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        <span className="text-stone-700 text-sm font-montserrat">
                          <strong className="text-neutral-900">{item.label}</strong> {item.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-stone-700 text-sm box-border caret-transparent leading-[21px] font-montserrat mt-4">
                    Entendemos que por trás de cada processo existe uma pessoa fragilizada. Nosso escritório boutique oferece <strong className="text-neutral-900">atendimento acolhedor, transparente e acessível</strong>, com foco total na resolução do seu caso.
                  </p>
                </div>
              </div>
              <div className="relative self-center box-border caret-transparent gap-x-2.5 max-w-full min-h-[auto] gap-y-2.5 w-full md:gap-x-5 md:gap-y-5 md:w-auto">
                <a
                  href="https://wa.me/5521972728787?text=Olá! Preciso de ajuda com uma negativa do meu plano de saúde."
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
                  <h3 className="text-neutral-950 text-xl md:text-xl font-medium box-border caret-transparent leading-[1.35] font-aalto_sans_pro">+21 Anos</h3>
                  <p className="text-neutral-700 text-base box-border caret-transparent font-montserrat">de advocacia especializada</p>
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center">
              <div className="w-px h-16 bg-zinc-200"></div>
            </div>
            <div className="relative box-border caret-transparent gap-x-0 max-w-full min-h-[auto] gap-y-0 w-full py-6 px-5 md:p-8 md:w-[31%]">
              <div className="box-border caret-transparent gap-x-3 flex flex-row gap-y-3 md:gap-x-[9px] md:gap-y-[9px] md:flex-col">
                <div className="box-border caret-transparent grow min-h-[auto] min-w-[auto] w-full">
                  <h3 className="text-neutral-950 text-xl md:text-xl font-medium box-border caret-transparent leading-[1.35] font-aalto_sans_pro">24-72h</h3>
                  <p className="text-neutral-700 text-base box-border caret-transparent font-montserrat">para obter liminar urgente</p>
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center">
              <div className="w-px h-16 bg-zinc-200"></div>
            </div>
            <div className="relative box-border caret-transparent gap-x-0 max-w-full min-h-[auto] gap-y-0 w-full py-6 px-5 md:p-8 md:w-[31%]">
              <div className="box-border caret-transparent gap-x-3 flex flex-row gap-y-3 md:gap-x-[9px] md:gap-y-[9px] md:flex-col">
                <div className="box-border caret-transparent grow min-h-[auto] min-w-[auto] w-full">
                  <h3 className="text-neutral-950 text-xl md:text-xl font-medium box-border caret-transparent leading-[1.35] font-aalto_sans_pro">Todo o Brasil</h3>
                  <p className="text-neutral-700 text-base box-border caret-transparent font-montserrat">atendimento presencial e remoto</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COMPARATIVO — Seus Direitos vs Negativas */}
      <div id="seus-direitos" className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <span className="text-blue-700 text-xs font-medium tracking-[0.2em] uppercase block mb-4 font-aalto_sans_pro">Conheça seus direitos</span>
            <h2 className="text-neutral-900 text-3xl md:text-[40px] font-medium leading-[1.15] font-aalto_sans_pro">
              O que diz a lei sobre o seu caso?
            </h2>
            <p className="text-stone-700 text-base font-montserrat mt-4 max-w-xl mx-auto">
              A legislação brasileira protege o consumidor de serviços de saúde. Conheça seus direitos.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-zinc-200 rounded-2xl p-8 md:p-10 bg-white shadow-[rgba(0,0,0,0.04)_0px_4px_24px_0px]">
              <h3 className="text-neutral-900 text-2xl font-medium mb-8 font-aalto_sans_pro">Seus direitos</h3>
              <div className="flex flex-col gap-5">
                {[
                  "Cobertura obrigatória para todos os procedimentos do rol da ANS",
                  "Liminar judicial em 24-72h para garantir tratamento urgente",
                  "Indenização por danos morais em caso de negativa abusiva",
                  "Proibição de cancelamento unilateral durante tratamento",
                  "Reembolso integral de despesas médicas pagas indevidamente"
                ].map((t, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5"><CheckIcon /></span>
                    <span className="text-stone-700 text-base font-montserrat leading-relaxed">{t}</span>
                  </div>
                ))}
              </div>
              <a href="https://wa.me/5521972728787?text=Olá! Preciso de ajuda com uma negativa do meu plano de saúde." target="_blank" rel="noopener noreferrer" className="text-blue-700 text-sm font-medium font-aalto_sans_pro uppercase tracking-wider mt-8 inline-flex items-center gap-2 hover:text-blue-800 transition-colors">
                Defender meus direitos <span className="text-lg">&rsaquo;</span>
              </a>
            </div>
            <div className="border border-zinc-200 rounded-2xl p-8 md:p-10 bg-white shadow-[rgba(0,0,0,0.04)_0px_4px_24px_0px]">
              <h3 className="text-neutral-900 text-2xl font-medium mb-8 font-aalto_sans_pro">Negativas frequentes</h3>
              <div className="flex flex-col gap-5">
                {[
                  "Nega medicamentos de alto custo alegando que não estão no rol",
                  "Recusa cirurgias e internações com justificativas burocráticas",
                  "Cancela contratos unilateralmente durante tratamento",
                  "Aplica aumentos abusivos de mensalidade sem justificativa",
                  "Nega home care, fisioterapia e terapias para TEA (autismo)"
                ].map((t, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5"><XIcon /></span>
                    <span className="text-stone-700 text-base font-montserrat leading-relaxed">{t}</span>
                  </div>
                ))}
              </div>
              <a href="https://wa.me/5521972728787?text=Olá! Preciso de ajuda com uma negativa do meu plano de saúde." target="_blank" rel="noopener noreferrer" className="text-blue-700 text-sm font-medium font-aalto_sans_pro uppercase tracking-wider mt-8 inline-flex items-center gap-2 hover:text-blue-800 transition-colors">
                Fale com um especialista <span className="text-lg">&rsaquo;</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* COMO FUNCIONA — Steps numerados + imagem */}
      <div id="como-funciona" className="bg-zinc-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16">
            <div className="w-full md:w-[40%] relative">
              <div className="relative rounded-3xl overflow-hidden h-[350px] md:h-full min-h-[400px] shadow-xl">
                <img src="/images/galeria06.jpg" alt="Direito à Saúde" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-5 left-5 right-5 bg-white rounded-2xl p-4 shadow-lg">
                <p className="text-blue-700 text-2xl font-medium font-aalto_sans_pro">24-72h</p>
                <p className="text-stone-700 text-sm font-montserrat">para obter liminar em casos urgentes.</p>
              </div>
            </div>
            <div className="w-full md:w-[60%]">
              <span className="text-blue-700 text-xs font-medium tracking-[0.2em] uppercase block mb-4 font-aalto_sans_pro">Passo a passo</span>
              <h2 className="text-neutral-900 text-3xl md:text-[40px] font-medium leading-[1.15] mb-10 font-aalto_sans_pro">
                Como funciona a ação contra o plano
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { num: "01", title: "Análise do caso", desc: "Envie a carta de negativa e laudos médicos pelo WhatsApp. Analisamos a viabilidade jurídica do seu caso." },
                  { num: "02", title: "Estratégia jurídica", desc: "Definimos a melhor estratégia: liminar para casos urgentes ou ação ordinária. Explicamos todo o processo de forma transparente." },
                  { num: "03", title: "Ação judicial", desc: "Ingressamos com a ação e, em casos de urgência, obtemos a liminar em 24 a 72 horas para garantir o tratamento imediato." },
                  { num: "04", title: "Acompanhamento", desc: "Acompanhamos todo o processo até a decisão final, incluindo pedido de indenização por danos morais quando cabível." }
                ].map((step, i) => (
                  <div key={i} className="border border-zinc-200 rounded-xl p-6 bg-white shadow-sm">
                    <span className="text-blue-700 text-3xl font-medium font-aalto_sans_pro block mb-4">{step.num}.</span>
                    <h3 className="text-neutral-900 text-lg font-medium mb-2 font-aalto_sans_pro">{step.title}</h3>
                    <p className="text-stone-700 text-sm font-montserrat leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-6 mt-8">
                <a
                  href="https://wa.me/5521972728787?text=Olá! Preciso de ajuda com uma negativa do meu plano de saúde."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-base font-medium bg-blue-700 inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-[100px] font-aalto_sans_pro hover:bg-blue-800 transition-colors duration-200"
                >
                  Analisar meu caso <span>&rsaquo;</span>
                </a>
                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  {["Sem burocracia", "Atendimento remoto", "Honorários no êxito"].map((t, i) => (
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

      {/* CASOS QUE ATENDEMOS — Cards */}
      <div id="casos" className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <span className="text-blue-700 text-xs font-medium tracking-[0.2em] uppercase block mb-4 font-aalto_sans_pro">Nossas especialidades</span>
            <h2 className="text-neutral-900 text-3xl md:text-[40px] font-medium leading-[1.15] font-aalto_sans_pro">
              Casos que atendemos
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: "Medicamentos de Alto Custo",
                desc: "Negativas de medicamentos de uso contínuo, quimioterápicos, imunobiológicos e medicamentos importados não cobertos pelo plano.",
                icon: (<svg className="w-6 h-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>)
              },
              {
                title: "Cirurgias e Internações",
                desc: "Negativas de home care, cirurgias, procedimentos hospitalares, internações e internação psiquiátrica.",
                icon: (<svg className="w-6 h-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" /></svg>)
              },
              {
                title: "Tratamentos Oncológicos",
                desc: "Negativas de quimioterapia, radioterapia, imunoterapia e outros tratamentos para combate ao câncer.",
                icon: (<svg className="w-6 h-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>)
              },
              {
                title: "Terapias para TEA (Autismo)",
                desc: "Negativas de terapias ABA, fonoaudiologia, terapia ocupacional e outras terapias essenciais para crianças com TEA.",
                icon: (<svg className="w-6 h-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" /></svg>)
              },
              {
                title: "Reembolso e Mensalidade",
                desc: "Reembolso de despesas médicas pagas do próprio bolso e combate a aumentos abusivos de mensalidade.",
                icon: (<svg className="w-6 h-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>)
              },
              {
                title: "Danos Morais",
                desc: "Indenização por danos morais causados pela negativa indevida do plano em situações de urgência e sofrimento.",
                icon: (<svg className="w-6 h-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97z" /></svg>)
              }
            ].map((item, i) => (
              <div key={i} className="border border-zinc-200 rounded-2xl p-7 bg-white shadow-[rgba(0,0,0,0.04)_0px_4px_24px_0px] hover:shadow-[rgba(0,0,0,0.08)_0px_8px_32px_0px] transition-shadow duration-300 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-neutral-900 text-lg font-medium mb-3 font-aalto_sans_pro">{item.title}</h3>
                <p className="text-stone-700 text-sm font-montserrat leading-relaxed mb-6 flex-grow">{item.desc}</p>
                <a href="https://wa.me/5521972728787?text=Olá! Preciso de ajuda com uma negativa do meu plano de saúde." target="_blank" rel="noopener noreferrer" className="text-blue-700 text-sm font-medium font-aalto_sans_pro uppercase tracking-wider inline-flex items-center gap-2 hover:text-blue-800 transition-colors">
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
                <p>
                  Advogado inscrito sob o n.o 128.829 na OAB-RJ com <strong className="text-neutral-900">mais de 21 anos de advocacia</strong> e atuação especializada em <strong className="text-neutral-900">Direito da Saúde Suplementar</strong>.
                </p>
                <p>
                  Nosso escritório boutique atua exclusivamente em Direito à Saúde e Propriedade Intelectual, garantindo <strong className="text-neutral-900">profundidade e expertise</strong> em cada caso — não somos um escritório generalista.
                </p>
                <p>
                  Entendemos que por trás de cada processo existe uma pessoa fragilizada. Oferecemos <strong className="text-neutral-900">atendimento acolhedor, transparente e acessível</strong>, com foco total na resolução do seu caso.
                </p>
                <p>
                  Nosso propósito é oferecer serviços jurídicos de excelência, garantindo segurança legal por meio de atendimento individualizado e soluções personalizadas para cada cliente.
                </p>
              </div>
              <a
                href="https://wa.me/5521972728787?text=Olá! Gostaria de falar com o Dr. Marcelo sobre meu caso."
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 text-sm font-medium font-aalto_sans_pro uppercase tracking-wider mt-8 inline-flex items-center gap-2 hover:text-blue-800 transition-colors"
              >
                Entrar em contato <span className="text-lg">&rsaquo;</span>
              </a>
            </div>
            <div className="w-full md:w-[40%]">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-xl">
                  <img src="/images/advogado.jpg" alt="Dr. Marcelo Ávila do Nascimento Souza" className="w-full h-[450px] md:h-[550px] object-cover object-top [transform:scaleX(-1)]" />
                </div>
                <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-blue-700 rounded-xl p-4 md:p-5 shadow-xl">
                  <p className="text-white text-xl md:text-2xl font-medium font-aalto_sans_pro">+21 anos</p>
                  <p className="text-blue-200 text-xs font-montserrat">de advocacia especializada</p>
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
              <span className="text-blue-200 text-xs font-medium tracking-[0.2em] uppercase block mb-2 font-aalto_sans_pro">Não aceite a negativa</span>
              <h3 className="text-white text-2xl md:text-3xl font-medium font-aalto_sans_pro">
                A saúde não espera. Seus direitos também não.
              </h3>
            </div>
            <a
              href="https://wa.me/5521972728787?text=Olá! Preciso de ajuda com uma negativa do meu plano de saúde."
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 text-base font-medium bg-white inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-[100px] font-aalto_sans_pro hover:bg-blue-50 transition-colors duration-200 shrink-0 shadow-lg"
            >
              Falar com Especialista <span>&rsaquo;</span>
            </a>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div id="faq" className="bg-white py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-5">
          <div className="text-center mb-14">
            <span className="text-blue-700 text-xs font-medium tracking-[0.2em] uppercase block mb-4 font-aalto_sans_pro">Ficou com alguma dúvida?</span>
            <h2 className="text-neutral-900 text-3xl md:text-[40px] font-medium leading-[1.15] font-aalto_sans_pro">
              Perguntas Frequentes
            </h2>
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
            <span className="text-blue-700 text-xs font-medium tracking-[0.2em] uppercase block mb-4 font-aalto_sans_pro">Seus direitos importam</span>
            <h2 className="text-neutral-900 text-2xl md:text-[36px] font-medium leading-[1.15] mb-4 font-aalto_sans_pro">
              Não deixe o plano negar o que é seu por direito
            </h2>
            <p className="text-stone-700 text-base font-montserrat mb-8 max-w-xl mx-auto">
              A saúde não espera. Fale agora com um advogado especialista e garanta o tratamento que você merece.
            </p>
            <a
              href="https://wa.me/5521972728787?text=Olá! Preciso de ajuda com uma negativa do meu plano de saúde."
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-base font-medium bg-blue-700 inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-[100px] font-aalto_sans_pro hover:bg-blue-800 transition-colors duration-200"
            >
              <WhatsAppIcon />
              Quero Defender Meus Direitos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
