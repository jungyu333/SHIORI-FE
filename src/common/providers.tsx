'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useState } from 'react';
// import { GoogleAnalytics } from '@/components/ga/GoogleAnalytics';
import theme from '@/styles/theme';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
// import ErrorBoundary from '@/components/errors/ErrorBoundary';
// import ErrorPage from '@/app/error';

export default function Providers({ children, dehydratedState }: { children: ReactNode; dehydratedState?: unknown }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            useErrorBoundary: true,
            retry: 0,
            refetchOnMount: false,
            keepPreviousData: true,
          },
          mutations: {
            useErrorBoundary: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>
        <ChakraProvider theme={theme} resetCSS cssVarsRoot="#app">
          {/*<Fonts />*/}
          {/*<GoogleAnalytics />*/}
          {/*<ErrorBoundary fallback={<ErrorPage />}>{children}</ErrorBoundary>*/}
          {children}
        </ChakraProvider>
        <ReactQueryDevtools initialIsOpen={false} position={'bottom-right'} />
      </Hydrate>
      {/*<VercelAnalytics />*/}
    </QueryClientProvider>
  );
}
