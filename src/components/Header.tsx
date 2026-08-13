import Link from "next/link";
import { MessageCircle } from "lucide-react";

const navItems = [
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
  { href: "/accesos", label: "Accesos" }
];

export function Header() {
  return (
    <header className="site-header">
      <div className="site-shell site-header__inner">
        <Link className="brand" href="/">
          <span className="brand-mark">LAB</span>
          <span>
            LABSICO
            <span>Control de calidad</span>
          </span>
        </Link>
        <nav className="nav" aria-label="Navegacion principal">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="button button--primary" href="/contacto">
          <MessageCircle size={18} aria-hidden="true" />
          Cotizar
        </Link>
      </div>
    </header>
  );
}
