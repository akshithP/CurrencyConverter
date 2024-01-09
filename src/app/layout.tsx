import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Currency Converter",
  description: "Convert currencies with our intuitive Currency Converter app.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link
        href="https://fonts.googleapis.com/css2?family=Abel&display=swap"
        rel="stylesheet"
      ></link>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
