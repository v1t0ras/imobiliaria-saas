import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Petrus Imóveis",
  description: "Petrus Imóveis - imóveis em Capão da Canoa e região."
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
