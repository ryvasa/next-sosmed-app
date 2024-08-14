import type { Metadata } from "next";
import { Suspense } from "react";
import "../globals.css";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "Auth Page",
  description: "This is description of SosmedApp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-96">
      <body>
        <div className="w-screen h-screen bg-gray-100 dark:bg-dark-lg lg:flex lg:gap-2 ">
          <Suspense fallback={<Loading />}>
            <div className="flex justify-center items-center lg:pr-8 lg:pl-24 pl-5 pr-5 pt-10 pb-20 min-h-screen w-full">
              {children}
            </div>
          </Suspense>
        </div>
      </body>
    </html>
  );
}
