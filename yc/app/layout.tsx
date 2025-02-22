import type { Metadata } from "next";
import "./globals.css";
import {Josefin_Sans,Blinker } from "next/font/google";

// Define fonts

const josefin = Josefin_Sans(
  { subsets: ["latin"], 
    weight: ["400", "700"], 
    variable: "--font-josefin" });

const blinker = Blinker(
  { subsets: ["latin"], 
    weight: ["400", "700"], 
    variable: "--font-blinker" });

// Add some metadata for SEO

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefin.variable} ${blinker.variable}`}
      >
        {children}
      </body>
      
    </html>
  );
}
