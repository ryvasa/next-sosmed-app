import type { Metadata } from "next";
import "../globals.css";
import Topbar from "@/components/shared/Topbar";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "SosmedApp",
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
        <div className="lg:relative lg:-z-20">{<Topbar />}</div>
        <div className="w-scree flex bg-gray-50 justify-center items-center dark:bg-dark-lg lg:gap-10  relative">
          <div className="lg:flex-[15] lg:relative w-11/12">
            <Suspense fallback={<Loading />}>
              <div className=" lg:px-0 lg:pt-0 pt-10 lg:pb-0 pb-20 min-h-screen">
                {children}
              </div>
            </Suspense>
          </div>
        </div>
        {/* <div className="bottombar-gradient"></div> */}
      </body>
    </html>
  );
}
