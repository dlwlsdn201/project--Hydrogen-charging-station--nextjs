import RootNav from '@app/components/Nav';
import './globals.css';
import { Inter } from 'next/font/google';
import React from 'react';
import DashboardPage from './page';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={`${inter.className}`}>
        <RootNav />
        <main className="flex min-h-screen flex-col items-center justify-between py-16 px-32">
          <DashboardPage/>
        </main>
      </body>
    </html>
  );
}
