import { useState } from "react";

export const NavbarActions = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative items-center box-border caret-transparent gap-x-2.5 flex flex-wrap justify-end min-h-[auto] gap-y-2 w-fit md:flex-nowrap md:justify-normal">
      <div className="relative hidden max-w-full md:block">
        <a
          href="https://wa.me/5521972728787?text=Olá! Gostaria de registrar minha marca."
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#1a6b2a] to-[#228B3B] text-white text-[11px] font-bold uppercase tracking-wider pl-2.5 pr-5 py-2 rounded-xl font-aalto_sans_pro shadow-[0_2px_8px_rgba(26,107,42,0.3)] hover:shadow-[0_4px_16px_rgba(26,107,42,0.4)] hover:scale-[1.02] transition-all duration-200"
        >
          <img src="/images/advogado-marcas.jpg" alt="Brasil" className="w-9 h-7 flex-shrink-0 object-cover rounded-lg shadow-sm" />
          <span className="leading-tight text-left">REGISTRE SUA<br/>MARCA ONLINE</span>
        </a>
      </div>
      <div className="relative hidden max-w-full md:block">
        <a
          href="https://wa.me/5521972728787?text=Olá! Preciso de uma liminar contra meu plano de saúde."
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#1a3a6b] to-[#2555a0] text-white text-[11px] font-bold uppercase tracking-wider pl-2.5 pr-5 py-2 rounded-xl font-aalto_sans_pro shadow-[0_2px_8px_rgba(26,58,107,0.3)] hover:shadow-[0_4px_16px_rgba(26,58,107,0.4)] hover:scale-[1.02] transition-all duration-200"
        >
          <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 bg-white/90 rounded-lg shadow-sm">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <rect x="9.5" y="4" width="5" height="16" rx="1" fill="#dc2626"/>
              <rect x="4" y="9.5" width="16" height="5" rx="1" fill="#dc2626"/>
            </svg>
          </span>
          <span className="leading-tight text-left">LIMINAR CONTRA<br/>O PLANO DE SAÚDE</span>
        </a>
      </div>
      {/* Mobile menu toggle */}
      <div className="relative self-center block md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center justify-center w-10 h-10 cursor-pointer bg-transparent border-none"
          aria-label="Abrir menu"
        >
          <svg className={`w-6 h-6 text-blue-700 transition-transform duration-300 ${menuOpen ? "rotate-90" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="fixed left-0 right-0 top-[52px] bg-white shadow-lg border-t border-gray-100 z-[100] md:hidden">
          <nav className="flex flex-col px-5 py-4 gap-1">
            <a href="#escritorio" onClick={() => setMenuOpen(false)} className="text-neutral-800 text-base font-medium font-aalto_sans_pro py-3 border-b border-gray-100">
              O Escritório
            </a>
            <a href="#propriedade-intelectual" onClick={() => setMenuOpen(false)} className="text-neutral-800 text-base font-medium font-aalto_sans_pro py-3 border-b border-gray-100">
              Propriedade Intelectual
            </a>
            <a href="#direito-saude" onClick={() => setMenuOpen(false)} className="text-neutral-800 text-base font-medium font-aalto_sans_pro py-3 border-b border-gray-100">
              Direito à Saúde
            </a>
            <a href="#contato" onClick={() => setMenuOpen(false)} className="text-neutral-800 text-base font-medium font-aalto_sans_pro py-3 border-b border-gray-100">
              Contato
            </a>
            <div className="flex flex-col gap-2 mt-3">
              <a
                href="https://wa.me/5521972728787?text=Olá! Gostaria de registrar minha marca."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#1a6b2a] to-[#228B3B] text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xl font-aalto_sans_pro"
              >
                <img src="/images/advogado-marcas.jpg" alt="Brasil" className="w-8 h-6 object-cover rounded-lg" />
                REGISTRE SUA MARCA ONLINE
              </a>
              <a
                href="https://wa.me/5521972728787?text=Olá! Preciso de uma liminar contra meu plano de saúde."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#1a3a6b] to-[#2555a0] text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xl font-aalto_sans_pro"
              >
                <span className="flex items-center justify-center w-7 h-7 bg-white/90 rounded-lg">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <rect x="9.5" y="4" width="5" height="16" rx="1" fill="#dc2626"/>
                    <rect x="4" y="9.5" width="16" height="5" rx="1" fill="#dc2626"/>
                  </svg>
                </span>
                LIMINAR CONTRA O PLANO DE SAÚDE
              </a>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};
