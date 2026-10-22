import type { Metadata } from 'next'
import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://hyperboola.com'),
  title: 'Michele Tarantino | Senior Data Engineer & indie projects',
  description:
    'Senior data engineer in Milan. Personal projects: Aperidata, a Python pipeline for ISTAT data, and OOrbit, a mobile game built with Flutter.',
  authors: [{ name: 'Michele Tarantino' }],
  openGraph: {
    title: 'Michele Tarantino | Senior Data Engineer & indie projects',
    description: 'Aperidata (ISTAT data pipeline) and OOrbit (mobile game).',
    type: 'website',
    url: 'https://hyperboola.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="noise-overlay">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}