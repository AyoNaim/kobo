import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "KŌBŌ | Coffee & Matcha",
    template: "%s | KŌBŌ",
  },
  description:
    "Specialty coffee, ceremonial matcha, and good things made slowly.",
  applicationName: "KŌBŌ",
  keywords: [
    "KŌBŌ",
    "specialty coffee",
    "matcha",
    "coffee bar",
    "ceremonial matcha",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#ebe6df",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}