
"use client";

import { useState, useEffect } from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { AppLoader } from '@/components/app-loader';
import { SmoothScroller } from '@/components/smooth-scroller';
import { BackToTopButton } from '@/components/back-to-top-button';


// Since we're using client-side state for the loader, we can't export metadata directly.
// export const metadata: Metadata = {
//   title: 'Versafolio',
//   description: 'A modern portfolio for a versatile developer.',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading process
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Versafolio</title>
        <meta name="description" content="A modern portfolio for a versatile developer." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-code antialiased", "min-h-screen bg-background font-sans")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {loading ? (
            <AppLoader onFinished={() => setLoading(false)} />
          ) : (
            <>
              <SmoothScroller>
                {children}
              </SmoothScroller>
              <Toaster />
              <BackToTopButton />
            </>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
