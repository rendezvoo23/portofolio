import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { LanguageDetector } from "@/components/LanguageDetector";
import { SiteLoader } from "@/components/SiteLoader";

export const metadata: Metadata = {
  title: "Семен Бедункевич — портфолио",
  description:
    "Портфолио разработчика веб-продуктов и Telegram Mini Apps."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html data-scroll-behavior="smooth" lang="ru">
      <body>
        <SiteLoader />
        <LanguageDetector />
        <Header />
        {children}
      </body>
    </html>
  );
}
