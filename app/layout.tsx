import type { Metadata } from 'next';
import './globals.css';
import Topbar from '@/components/shared/Topbar';
import Bottombar from '@/components/shared/Bottombar';
import Sidebar from '@/components/shared/Sidebar';
import { Suspense } from 'react';
import Loading from './loading';

export const metadata: Metadata = {
  title: 'SosmedApp',
  description: 'This is description of SosmedApp',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-96">
      <body>
        <Topbar />
        <div className="w-full bg-white dark:bg-dark-sm lg:flex lg:gap-2 ">
          <Sidebar />
          <Suspense fallback={<Loading />}>
            <div className="lg:pr-8 lg:pl-24 pl-5 pr-5 pt-10 pb-20 min-h-screen w-full">
              {children}
            </div>
          </Suspense>
        </div>
        {/* <div className="bottombar-gradient"></div> */}
        <Bottombar />
      </body>
    </html>
  );
}
