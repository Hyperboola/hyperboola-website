import Link from 'next/link'
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react'

const footerLinks = {
  products: [
    { label: 'All Products', href: '/products' },
    { label: 'Mobile Games', href: '/products#games' },
    { label: 'Apps', href: '/products#apps' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Careers', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
}

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/neoorbita', label: 'Instagram' },
  { icon: Twitter, href: 'https://twitter.com/neoorbita', label: 'X' },
  { icon: Linkedin, href: 'https://linkedin.com/company/neoorbita', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:hello@neoorbita.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      {/* Gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-accent-cyan/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 rounded-full border border-accent-cyan/50 animate-orbit" />
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple" />
              </div>
              <span className="font-display font-bold text-xl">
                Neo<span className="text-gradient">orbita</span>
              </span>
            </Link>
            <p className="text-white/50 max-w-xs leading-relaxed">
              Building innovative digital products that shape the future. 
              Games, Apps, AI and beyond.
            </p>
            {/* Social */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/50 
                             hover:text-accent-cyan transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white/80 mb-4">
              Products
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white/80 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white/80 mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Neoorbita. All rights reserved.
          </p>
          <p className="text-white/30 text-sm">
            Built with 💜 for the future
          </p>
        </div>
      </div>
    </footer>
  )
}