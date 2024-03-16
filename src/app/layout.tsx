import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Daly Games - Descubra jogos incríveis para se divertir.",
  description: "Mais de 10 mil jogos separados e organizados.",
  keywords: ["games", "jogos", "steam"],
  openGraph: {
    images: [`${process.env.PROJECT_URL}/preview.png`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
  icons: {
    icon: [{ url: `${process.env.PROJECT_URL}/logo.svg` }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
