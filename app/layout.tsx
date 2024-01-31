/* eslint-disable @next/next/no-before-interactive-script-outside-document */

import RootNav from '@app/components/Nav';
import './globals.css';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import { InnerContainer, RootContainer } from '../components/Modules/StyleComponents';
import Script from 'next/script';
import StyledComponentsRegistry from '@app/lib/registry';

const inter = Inter({ subsets: ['latin'] });
const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&autoload=false`;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={`${inter.className}`} style={{ height: '100vh' }}>
        <StyledComponentsRegistry>
          <Providers>
            <RootNav />
            <main>
              <RootContainer>
                <InnerContainer>{children}</InnerContainer>
              </RootContainer>
            </main>
          </Providers>
          {/* 카카오 맵 스크립트 */}
          <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
          <Script id="kakaoScript_sdk" src="https://developers.kakao.com/sdk/js/kakao.js" async />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
