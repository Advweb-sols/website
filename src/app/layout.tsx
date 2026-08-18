import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Advivance - Strategic BPO & ITES for Global Supply Chain",
  description: "Premier Export-Oriented BPO partner specializing in highly efficient and compliant back-office solutions for International Freight Forwarders, NVOCCs, and Logistics Providers.",
  keywords: "BPO, ITES, Supply Chain, Logistics, Freight Forwarding, Back-Office, Documentation, Compliance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main className="pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
