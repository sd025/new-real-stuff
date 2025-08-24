import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aanav Healthcare - Premium Wellness & Healthcare Products',
  description: 'Discover premium healthcare and wellness products from Aanav Healthcare. High-quality supplements, vitamins, and wellness solutions for your health journey.',
  keywords: 'healthcare, wellness, supplements, vitamins, probiotics, omega-3, collagen, turmeric, magnesium, zinc',
  authors: [{ name: 'Aanav Healthcare' }],
  creator: 'Aanav Healthcare',
  publisher: 'Aanav Healthcare',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://aanavhealthcare.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Aanav Healthcare - Premium Wellness & Healthcare Products',
    description: 'Discover premium healthcare and wellness products from Aanav Healthcare. High-quality supplements, vitamins, and wellness solutions for your health journey.',
    url: 'https://aanavhealthcare.com',
    siteName: 'Aanav Healthcare',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aanav Healthcare - Premium Wellness Products',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aanav Healthcare - Premium Wellness & Healthcare Products',
    description: 'Discover premium healthcare and wellness products from Aanav Healthcare.',
    images: ['/images/twitter-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#e53e3e" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
