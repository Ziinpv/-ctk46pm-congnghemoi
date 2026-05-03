import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "Simple Blog",
  description: "Supabase blog lab",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${inter.className} min-h-screen bg-gray-50 text-gray-900`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
