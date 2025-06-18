import type { Metadata } from 'next';
import '../styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ThemeProvider from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';

// We'll use system fonts instead of loading Inter to avoid font loading issues

export const metadata: Metadata = {
  title: {
    default: 'Kazi Tanvir Ahmed - Frontend Developer',
    template: '%s | Kazi Tanvir Ahmed'
  },
  description: 'Portfolio of Kazi Tanvir Ahmed - Frontend Developer. Explore my projects, skills, and professional journey.',
  keywords: ['Kazi Tanvir Ahmed', 'Frontend Developer', 'Portfolio', 'Web Development', 'React', 'Next.js'],
  authors: [{ name: 'Kazi Tanvir Ahmed' }],
  creator: 'Kazi Tanvir Ahmed',
  publisher: 'Kazi Tanvir Ahmed',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kazi-tanvir-folio.vercel.app/',
    title: 'Kazi Tanvir Ahmed - Frontend Developer',
    description: 'Portfolio of Kazi Tanvir Ahmed - Frontend Developer',
    siteName: 'Kazi Tanvir Ahmed Portfolio',
    images: [
      {
        url: '',
        width: 1200,
        height: 630,
        alt: 'Kazi Tanvir Ahmed - Frontend Developer',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="font-sans bg-white dark:bg-[#0a0a23] text-gray-900 dark:text-white">
        <ThemeProvider>
          <Navbar />
          <div className="pt-16">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
