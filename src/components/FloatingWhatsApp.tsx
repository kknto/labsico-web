import { MessageCircle } from "lucide-react";
import { publicContact } from "@/content/company";
import { buildWhatsAppUrl } from "@/lib/contact";

export function FloatingWhatsApp() {
  const href = buildWhatsAppUrl(publicContact.whatsapp, {
    name: "",
    phone: "",
    service: "Cotizacion LABSICO",
    comments: "Me interesa solicitar una cotizacion."
  });

  return (
    <a className="floating-whatsapp" href={href} target="_blank" rel="noreferrer" aria-label="Solicitar cotizacion por WhatsApp">
      <MessageCircle size={22} aria-hidden="true" />
      <span>Cotizar</span>
    </a>
  );
}
