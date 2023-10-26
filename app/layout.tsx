"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/shared/Topbar";
import Bottombar from "@/components/shared/Bottombar";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "SosmedApp",
//   description: "This is description of SosmedApp",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localTheme = localStorage.getItem("theme");

  return (
    <html lang="en" className={`${localTheme}`}>
      <body className={inter.className}>
        <Topbar />
        <div className="w-full bg-white dark:bg-dark-sm">
          <div className="px-5 pt-10 pb-20 min-h-screen">{children}</div>
        </div>
        <Bottombar />
      </body>
    </html>
  );
}
