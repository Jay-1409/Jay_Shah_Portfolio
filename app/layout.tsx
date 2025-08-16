import { Analytics } from '@vercel/analytics/react'
import { IBM_Plex_Mono, Inter } from 'next/font/google'
import { ReactNode } from 'react'
import { BackToTop } from './components/back-to-top'
import { ContactForm } from './components/contact-form'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { Toaster } from './components/toaster'
import './globals.css'

export const metadata = {
  title: {
    default: 'Jay Shah',
    template: '%s',
  },
  authors: [
    { name: 'Jay Shah', url: 'https://www.linkedin.com/in/jay-shah-dev/' },
  ],
  creator: 'Jay Shah',
  // icons: { icon: '' },
  openGraph: {
    title: 'Jays Portfolio',
    description:
      'Backend development by jay',
    type: 'website',
    locale: 'en_US',
    url: 'will-update',
  },
  applicationName: 'Portfolio-jay',
  description:
    'Backend development by jay',
  category: 'Web Development',
  keywords:
    'Backend development by jay',
  classification: 'Backend development',
  robots: 'index, follow',
  publisher: 'jay',
  referrer: 'no-referrer-when-downgrade',
  alternates: {
    canonical: '',
    languages: {
      'en-US': '',
    },
  },
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-US" className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        <Toaster />
        <BackToTop />
        <Header />
        {children}
        {/* <ContactForm /> */}
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
