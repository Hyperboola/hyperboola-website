import type { Metadata } from 'next'
import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Neoorbita | Digital Innovation',
  description: 'Neoorbita - Software company building innovative digital products: mobile games, applications, artificial intelligence and more.',
  keywords: ['software', 'tech', 'games', 'AI', 'app', 'innovation', 'Neoorbita'],
  authors: [{ name: 'Neoorbita' }],
  openGraph: {
    title: 'Neoorbita | Digital Innovation',
    description: 'Making the future closer, one product at a time.',
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