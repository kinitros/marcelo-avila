export const FooterApp = () => {
  return (
    <div className="relative items-center box-border caret-transparent gap-x-4 flex flex-wrap justify-center min-h-[auto] gap-y-4 w-full md:[align-items:normal] md:justify-start md:w-[370px]">
      <div className="relative box-border caret-transparent gap-x-4 max-w-full min-h-[auto] gap-y-4 text-center w-full md:text-start">
        <p className="text-neutral-900 font-medium box-border caret-transparent leading-4 text-center font-aalto_sans_pro md:text-start">
          Fale Conosco
        </p>
      </div>
      <div className="relative box-border caret-transparent gap-x-4 max-w-full min-h-[auto] gap-y-4 text-center md:text-start">
        <p className="text-stone-700 text-sm box-border caret-transparent leading-5 font-aalto_sans_pro">
          Seg - Dom: 09:00 - 18:00
        </p>
        <p className="text-stone-700 text-sm box-border caret-transparent leading-5 font-aalto_sans_pro mt-2">
          <a href="https://wa.me/5521972728787?text=Olá! Gostaria de mais informações." className="text-stone-700 hover:text-blue-700 transition-colors">+55 (21) 97272-8787</a>
        </p>
        <p className="text-stone-700 text-sm box-border caret-transparent leading-5 font-aalto_sans_pro mt-1">
          info@avilanascimento.adv.br
        </p>
      </div>
      <div className="relative box-border caret-transparent gap-x-4 max-w-full min-h-[auto] gap-y-4 text-center md:text-start">
        <p className="text-stone-700 text-sm box-border caret-transparent leading-5 font-aalto_sans_pro">
          Av. José Silva de Azevedo Neto, 200<br />Bloco V Cobertura 419, Barra da Tijuca<br />Rio de Janeiro - RJ
        </p>
      </div>
      <div className="relative box-border caret-transparent gap-x-4 max-w-full min-h-[auto] gap-y-4 w-full mt-4">
        <ul className="box-border caret-transparent justify-end list-none pl-0">
          <li className="relative items-center box-border caret-transparent flex justify-end text-end">
            <a
              href="#"
              className="text-blue-700 text-sm font-medium items-center box-border caret-transparent flex flex-row-reverse justify-start leading-[21px] min-h-[auto] min-w-[auto] w-fit font-aalto_sans_pro"
            >
              <span className="relative box-border caret-transparent flex min-h-[auto] min-w-[auto] top-0">
                <img
                  src="/icons/icon-41.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-3.5 align-baseline w-3.5 mr-[3.5px]"
                />
              </span>
              <span className="text-stone-400 self-center box-border caret-transparent block min-h-[auto] min-w-[auto] pl-[5px]">
                Voltar ao topo
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
