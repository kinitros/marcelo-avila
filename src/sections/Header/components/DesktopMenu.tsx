import { Link, useLocation } from "react-router-dom";

const linkClass = "text-blue-700 font-medium items-center box-border caret-transparent flex min-h-0 min-w-0 w-full font-aalto_sans_pro md:min-h-[auto] md:min-w-[auto]";
const spanClass = "text-zinc-600 box-border caret-transparent block min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]";
const liClass = "relative items-center box-border caret-transparent flex min-h-0 min-w-0 mx-2 md:min-h-[auto] md:min-w-[auto]";

const homeLinks = [
  { href: "/#escritorio", label: "O Escritório" },
  { to: "/registro-de-marcas", label: "Registro de Marcas" },
  { to: "/direito-saude", label: "Direito à Saúde" },
  { href: "/#contato", label: "Contato" },
];

const registroMarcasLinks = [
  { href: "#por-que-registrar", label: "Por que Registrar" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#servicos", label: "Serviços" },
  { href: "#advogado", label: "Sobre" },
  { href: "#faq", label: "FAQ" },
];

const direitoSaudeLinks = [
  { href: "#seus-direitos", label: "Seus Direitos" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#casos", label: "Casos" },
  { href: "#advogado", label: "Sobre" },
  { href: "#faq", label: "FAQ" },
];

export const DesktopMenu = () => {
  const location = useLocation();

  const links = location.pathname === "/registro-de-marcas"
    ? registroMarcasLinks
    : location.pathname === "/direito-saude"
    ? direitoSaudeLinks
    : homeLinks;

  return (
    <div className="relative box-border caret-transparent gap-x-5 hidden max-w-full min-h-0 gap-y-5 border-stone-300 pl-4 border-l border-solid md:block md:min-h-[auto]">
      <ul className="box-border caret-transparent flex flex-wrap list-none -mx-2 pl-0">
        {links.map((link, i) => (
          <li key={i} className={liClass}>
            {"to" in link && link.to ? (
              <Link to={link.to} className={linkClass}>
                <span className={spanClass}>{link.label}</span>
              </Link>
            ) : (
              <a href={link.href} className={linkClass}>
                <span className={spanClass}>{link.label}</span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
