import { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

import "./globals.css";

import PageTransition from "@/components/utils/PageTransition";
import Header from "@/components/app/Header";
import { Toaster } from "@/components/ui/toaster";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Matheus da Cruz",
  description: "Professional portfolio of Matheus da Cruz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.variable} antialiased`}>
        <Header />

        <PageTransition>{children}</PageTransition>

        <Toaster />
      </body>
    </html>
  );
}
