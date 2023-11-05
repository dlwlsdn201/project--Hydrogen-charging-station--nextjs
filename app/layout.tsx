import RootNav from '@app/components/Nav';
import './globals.css';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import { RootContainer } from '../components/Modules/StyleComponents';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={`${inter.className}`} style={{ height: '100vh' }}>
        <Providers>
          <RootNav />
          <main>
            <RootContainer>{children}</RootContainer>
          </main>
        </Providers>
      </body>
    </html>
  );
}
