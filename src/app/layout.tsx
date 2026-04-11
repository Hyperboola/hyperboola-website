import type { Metadata } from 'next'
import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Hyperboola | Digital Innovation',
  description: 'Hyperboola - Software company building innovative digital products: mobile games, applications, artificial intelligence and more.',
  keywords: ['software', 'tech', 'games', 'AI', 'app', 'innovation', 'Hyperboola'],
  authors: [{ name: 'Hyperboola' }],
  openGraph: {
    title: 'Hyperboola | Digital Innovation',
    description: 'Beyond the curve, into the future.',
    type: 'website',
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