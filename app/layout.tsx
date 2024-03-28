import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Providers} from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maruška's shop",
  description: "New Maruška's web app is here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Providers are added because of nextui package which should have some components ready to use */}
        <Providers>    
          <Header />
            {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
