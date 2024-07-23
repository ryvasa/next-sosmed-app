import type { Metadata } from 'next';
import { Suspense } from 'react';
import Loading from '../loading';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Auth Page',
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
        <div className="w-full bg-white dark:bg-dark-sm lg:flex lg:gap-2 ">
          <Suspense fallback={<Loading />}>
            <div className="lg:pr-8 lg:pl-24 pl-5 pr-5 pt-10 pb-20 min-h-screen w-full">
              {children}
            </div>
          </Suspense>
        </div>
      </body>
    </html>
  );
}
