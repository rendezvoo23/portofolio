import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simon Bedunkevich",
  description:
    "Portfolio of a developer building web products and Telegram Mini Apps."
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return children;
}
