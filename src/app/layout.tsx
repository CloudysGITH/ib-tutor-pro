import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IB Tutor Pro — Your IB Exam Preparation",
  description: "Interactive IB exam preparation: Quizzes, Flashcards, Past Papers with automated marking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full flex">
        <Navigation />
        <main className="flex-1 ml-0 md:ml-64 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
