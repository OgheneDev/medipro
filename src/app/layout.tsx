import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout components/Navbar";
import Footer from "@/components/layout components/Footer";
import TawkMessenger from '@/components/TawkMessenger'

const poppins = Poppins({subsets: ["latin"], weight: "400"});

export const metadata: Metadata = {
  title: "MediPro",
  description: "Our is to deliver the highest quality healthcare services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        <Navbar />
        {children}
        <Footer />
        <TawkMessenger />
      </body>
    </html>
  );
}
