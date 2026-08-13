import Link from "next/link";
import { publicContact } from "@/content/company";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell site-footer__inner">
        <div>
          <strong>LABSICO</strong>
          <p>Laboratorio al servicio de la construccion.</p>
        </div>
        <div>
          <p>{publicContact.phone}</p>
          <p>{publicContact.email}</p>
        </div>
        <Link href="/servicios">Catalogo de servicios</Link>
      </div>
    </footer>
  );
}
