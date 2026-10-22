import Link from 'next/link'
import Image from 'next/image'
import { Github, Linkedin, Mail } from 'lucide-react'
import { SITE } from '@/lib/site'

const footerLinks = {
  projects: [
    { label: 'Aperidata', href: '/data' },
    { label: 'OOrbit', href: '/products' },
  ],
  me: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
}

const socialLinks = [
  { icon: Github, href: SITE.github, label: 'GitHub' },
  { icon: Linkedin, href: SITE.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${SITE.email}`, label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image src="/logo-noback.png" alt="Hyperboola" width={32} height={32} className="shrink-0" />
              <span className="font-display font-bold text-xl">
                Hyper<span className="text-gradient">boola</span>
              </span>
            </Link>
            <p className="text-white/50 max-w-xs leading-relaxed text-sm">
              Independent projects by Michele Tarantino, senior data engineer in Milan.
            </p>
            <div className="flex gap-3 mt-5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  {...(social.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/50 hover:text-accent-cyan transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {([['Projects', footerLinks.projects], ['Me', footerLinks.me], ['Legal', footerLinks.legal]] as const)
            .map(([title, links]) => (
              <div key={title}>
                <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white/80 mb-4">{title}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-white/50 hover:text-white transition-colors text-sm">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>

        <div className="mt-12 pt-6 border-t border-white/5">
          <p className="text-white/30 text-sm">© {new Date().getFullYear()} Hyperboola · Michele Tarantino</p>
        </div>
      </div>
    </footer>
  )
}
