import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from './context/ThemeContext';
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

const plusJakartaSans = localFont({
  src: "./fonts/PlusJakartaSans.ttf",
  variable: "--font-plus-jakarta-sans",
  weight: "100 900",
});
const workSans = localFont({
  src: "./fonts/WorkSans.ttf",
  variable: "--font-work-sans",
  weight: "100 900",
});
const sourceSerif = localFont({
  src: "./fonts/SourceSerif.ttf",
  variable: "--font-source-serif",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MetaBlog",
  description: "MetaBlog is a platform where you can read and share insightful blogs on various topics.",
  keywords: "MetaBlog, blogs, articles, insights, platform",
  authors: [{ name: "MetaBlog Team" }],
  robots: "index, follow",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body
          className={`${plusJakartaSans.variable} ${workSans.variable} ${sourceSerif.variable} antialiased duration-300`}
        >
            <Nav />
            <div className="pt-[100px]">
              {children}
            </div>
            <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
