import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Resepku — Atur Resep dan Menu Mingguan",
    template: "%s | Resepku",
  },
  description:
    "Simpan resep favorit, rencanakan menu mingguan, dan buat daftar belanja otomatis dengan Resepku.",
  applicationName: "Resepku",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.className} ${inter.variable}`}>
        {children}
        <Toaster
          position="top-right"
          richColors
          closeButton
          duration={3000}
        />
      </body>
    </html>
  );
}