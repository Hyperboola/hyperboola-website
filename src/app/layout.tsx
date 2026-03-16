import type { Metadata } from 'next'
import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Neoorbita | Innovazione Digitale',
  description: 'Neoorbita - Software company che crea prodotti digitali innovativi: mobile games, applicazioni, intelligenza artificiale e molto altro.',
  keywords: ['software', 'tech', 'games', 'AI', 'app', 'innovazione', 'Neoorbita'],
  authors: [{ name: 'Neoorbita' }],
  openGraph: {
    title: 'Neoorbita | Innovazione Digitale',
    description: 'Creiamo il futuro, un prodotto alla volta.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
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
