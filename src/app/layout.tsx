import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import localFont from "@next/font/local";

const bazinga = localFont({ src: "../assets/fonts/bazinga/Bazinga-Regular.otf" })

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shmoney",
  description: ">We robbing banks to pay your $ETH",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bazinga.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
