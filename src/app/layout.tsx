import type { Metadata } from 'next';
import React from 'react';
import Providers from '@/app/providers';

export const metadata: Metadata = {
  title: '코코로',
  description: '커플의 지출과 정산을 함께 관리해요 - 코코로',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>코코로</title>
        <meta name="application-name" content="코코로" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="코코로" />
        <meta name="description" content="커플의 지출과 정산을 함께 관리해요 - 코코로" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />

        <meta name="theme-color" content="#ff7f50" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/icons/icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-192x192.png" />

        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />

        <meta property="og:title" content="코코로" />
        <meta property="og:description" content="커플의 지출과 정산을 함께 관리해요 - 코코로" />
        <meta property="og:image" content="/icons/icon-512x512.png" />
        <meta property="og:type" content="website" />
      </head>
      <body id="app">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
