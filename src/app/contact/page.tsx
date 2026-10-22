import { Mail, MapPin, Linkedin, Github, FileText } from 'lucide-react'
import { SITE } from '@/lib/site'

export const metadata = {
  title: 'Contact | Hyperboola',
  description: 'Get in touch with Michele Tarantino.',
}

const methods = [
  { icon: Mail, title: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: Linkedin, title: 'LinkedIn', value: 'Michele Tarantino', href: SITE.linkedin },
  { icon: Github, title: 'GitHub', value: 'github.com/Hyperboola', href: SITE.github },
  { icon: FileText, title: 'CV', value: 'Download (PDF)', href: SITE.cv },
  { icon: MapPin, title: 'Location', value: 'Milan, Italy', href: null as string | null },
]

export default function Contact() {
  return (
    <section className="pt-36 pb-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-60" />
      <div className="relative max-w-3xl mx-auto px-6">
        <p className="text-accent-cyan font-mono text-sm mb-4">Contact</p>
        <h1 className="font-display font-bold text-4xl md:text-5xl mb-5">Let&apos;s talk</h1>
        <p className="text-lg text-white/65 leading-relaxed mb-10">
          I&apos;m open to senior data engineering roles, including opportunities in Ticino, Switzerland. For anything
          else (questions about the projects, feedback on the game) email is the fastest way.
        </p>

        <div className="rounded-2xl glass divide-y divide-white/5">
          {methods.map((m) => (
            <div key={m.title} className="flex items-center gap-4 px-6 py-4">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                <m.icon size={18} className="text-accent-cyan" />
              </div>
              <div className="min-w-0">
                <p className="text-white/40 text-sm">{m.title}</p>
                {m.href ? (
                  <a
                    href={m.href}
                    {...(m.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="text-white hover:text-accent-cyan transition-colors font-medium break-words"
                  >
                    {m.value}
                  </a>
                ) : (
                  <p className="text-white font-medium">{m.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
