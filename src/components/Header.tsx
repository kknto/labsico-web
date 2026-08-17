"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle, X } from "lucide-react";

const navItems = [
  { href: "/servicios", label: "Servicios" },
  { href: "/acreditacion", label: "Acreditacion" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
  { href: "/accesos", label: "Accesos" }
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    document.body.classList.add("body--nav-open");

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("body--nav-open");
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

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
            <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="button button--primary" href="/contacto">
          <MessageCircle size={18} aria-hidden="true" />
          Cotizar
        </Link>
        <button
          className="icon-button nav-toggle"
          type="button"
          aria-label={open ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>
      <div className={`mobile-nav ${open ? "mobile-nav--open" : ""}`} id="mobile-nav">
        <nav className="site-shell mobile-nav__panel" aria-label="Navegacion movil">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link className="button button--primary" href="/contacto" onClick={() => setOpen(false)}>
            <MessageCircle size={18} aria-hidden="true" />
            Cotizar
          </Link>
        </nav>
      </div>
    </header>
  );
}
