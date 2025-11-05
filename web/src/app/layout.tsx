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
  title: "PergolaCompare UK ? D2C Pergola Price Comparison",
  description: "Minimal, modern price comparison for UK pergola direct-to-consumer brands.",
  metadataBase: new URL("https://agentic-9af301be.vercel.app"),
  openGraph: {
    title: "PergolaCompare UK",
    description: "Compare prices, materials, and features of UK pergola brands.",
    url: "https://agentic-9af301be.vercel.app",
    siteName: "PergolaCompare UK",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PergolaCompare UK",
    description: "Minimal, modern pergola price comparison in the UK.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
