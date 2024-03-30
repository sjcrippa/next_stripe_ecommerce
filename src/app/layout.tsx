import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/components/navbar";
import CartModal from "@/components/cart-modal";
import CartProvider from "./providers";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce",
  description: "E-commerce using Next JS, Stripe for payment and Sanity for Headless CMS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>
        <CartProvider>
          <Navbar />
          <CartModal />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
