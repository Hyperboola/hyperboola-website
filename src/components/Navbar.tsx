'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import HyperboolaLogo from '@/components/HyperboolaLogo'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ${
        isScrolled 
          ? 'top-3 left-3 right-3 bg-neo-dark/95 backdrop-blur-xl border border-white/10 py-3 rounded-2xl shadow-lg shadow-black/20' 
          : 'top-0 left-0 right-0 py-5 bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="group">
          <HyperboolaLogo size="sm" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative font-medium transition-colors duration-300 ${
                pathname === link.href
                  ? 'text-accent-cyan'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-accent-cyan to-accent-purple" />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            href="/products"
            className="px-5 py-2.5 rounded-full border-gradient font-medium text-sm
                       hover:glow-cyan transition-all duration-300
                       bg-gradient-to-r from-accent-cyan/10 to-accent-purple/10"
          >
            Download OOrbit
          </Link>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div
        className={`md:hidden absolute top-full left-0 right-0 mt-2 mx-3 bg-neo-dark border border-white/10 rounded-2xl shadow-xl shadow-black/30 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
        }`}
      >
        <div className="px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block py-2 font-medium transition-colors ${
                pathname === link.href
                  ? 'text-accent-cyan'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/products"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block mt-4 px-5 py-3 rounded-full border-gradient text-center font-medium
                       bg-gradient-to-r from-accent-cyan/10 to-accent-purple/10"
          >
            Download OOrbit
          </Link>
        </div>
      </div>
    </header>
  )
}