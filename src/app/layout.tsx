import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Header } from "@/components/Header";
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
    <html lang="es">
      <body className={`${inter.variable} ${merriweather.variable}`}>
        <Header />
        <main>{children}</main>
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
