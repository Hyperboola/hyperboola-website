import Link from 'next/link'
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react'

const footerLinks = {
  prodotti: [
    { label: 'Tutti i Prodotti', href: '/prodotti' },
    { label: 'Mobile Games', href: '/prodotti#games' },
    { label: 'App', href: '/prodotti#apps' },
  ],
  azienda: [
    { label: 'Chi Siamo', href: '/chi-siamo' },
    { label: 'Contatti', href: '/contatti' },
    { label: 'Lavora con noi', href: '/contatti' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Termini di Servizio', href: '/termini' },
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
              Creiamo prodotti digitali innovativi che plasmano il futuro. 
              Games, Apps, AI e oltre.
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

          {/* Prodotti */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white/80 mb-4">
              Prodotti
            </h4>
            <ul className="space-y-3">
              {footerLinks.prodotti.map((link) => (
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

          {/* Azienda */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white/80 mb-4">
              Azienda
            </h4>
            <ul className="space-y-3">
              {footerLinks.azienda.map((link) => (
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
            © {new Date().getFullYear()} Neoorbita. Tutti i diritti riservati.
          </p>
          <p className="text-white/30 text-sm">
            Costruito con 💜 per il futuro
          </p>
        </div>
      </div>
    </footer>
  )
}
