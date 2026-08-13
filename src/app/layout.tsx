import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-serif"
});

export const metadata: Metadata = {
  title: "LABSICO | Control de calidad para construccion",
  description:
    "Laboratorio de control de calidad para concreto, agregados, acero, soldadura, terraceria, agua y mecanica de suelos."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${merriweather.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
