import type { Metadata } from 'next';
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Providers from '@/common/providers';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Shiori',
  description: '당신의 하루를 기록하고 AI가 회고를 도와줘요 - Shiori',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Shiori</title>
        <meta name="application-name" content="Shiori" />
        <meta name="description" content="당신의 하루를 기록하고 AI가 회고를 도와줘요 - Shiori" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#ff7f50" />

        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />

        <meta property="og:title" content="Shiori" />
        <meta property="og:description" content="당신의 하루를 기록하고 AI가 회고를 도와줘요 - Shiori" />
        <meta property="og:image" content="/icons/icon-512x512.png" />
        <meta property="og:type" content="website" />
      </head>
      <body id="app">
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
