import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio showcasing projects and skills of a full-stack developer and software architect.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={"dark " + `${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      style={{ colorScheme: 'dark'}}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
