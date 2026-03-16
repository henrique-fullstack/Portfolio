import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kaiser Portfolio",
  description: "Developer passionate about innovative solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      {/* Adicionei suas cores de fundo e texto aqui no body */}
      <body className="bg-[#222831] text-white antialiased font-sans">
        {children}
      </body>
    </html>
  );
}