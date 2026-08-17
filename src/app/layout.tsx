import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Header } from "@/components/Header";
import { StructuredData } from "@/components/StructuredData";
import { publicContact } from "@/content/company";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-serif"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://labsico.tech"),
  title: "LABSICO | Control de calidad para construccion",
  description:
    "Laboratorio de control de calidad para concreto, agregados, acero, soldadura, terraceria, agua y mecanica de suelos.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "LABSICO | Control de calidad para construccion",
    description:
      "Laboratorio de control de calidad para concreto, agregados, acero, soldadura, terraceria, agua y mecanica de suelos.",
    url: "https://labsico.tech",
    siteName: "LABSICO",
    locale: "es_MX",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${merriweather.variable}`}>
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido">{children}</main>
        <FloatingWhatsApp />
        <Footer />
        <StructuredData
          data={{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "LABSICO",
            url: "https://labsico.tech",
            telephone: publicContact.phone,
            email: publicContact.email,
            address: publicContact.address,
            areaServed: "Quintana Roo",
            description:
              "Laboratorio de control de calidad para concreto, agregados, acero, soldadura, terraceria, agua y mecanica de suelos."
          }}
        />
      </body>
    </html>
  );
}
