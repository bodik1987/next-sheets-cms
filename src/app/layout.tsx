import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ButtonUp from "./components/ui/button-up";
import ProgressScroll from "./components/ui/progress-scroll";
import Header from "./components/header";
import Footer from "./components/footer";
import "./globals.css";
import ThemeColor from "./components/ui/theme-color";

const geistSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next 15 01/25",
  description: "Bohdan Shulika",
  keywords: ["Next 15", "Frontend", "Bohdan Shulika"],
  openGraph: {
    siteName: "Next 15 01/25",
    title: "Next 15 01/25",
    description: "Bohdan Shulika",
    url: "https://avtokonder.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeColor />
      <body
        className={`${geistSans.variable} font-[family-name:var(--font-inter)] antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <ButtonUp />
        <ProgressScroll />
        {children}
        <Footer />
      </body>
    </html>
  );
}
