import Image from 'next/image'
import Link from 'next/link'
import { Apple } from 'lucide-react'
import { SITE } from '@/lib/site'

export const metadata = {
  title: 'OOrbit | Hyperboola',
  description: 'OOrbit is a mobile game built with Flutter and Dart, available on the Apple App Store.',
}

const DESCRIPTION: string[] = [
  'OOrbit is a mobile game built with Flutter and Dart and published on the Apple App Store.',
]
// OOrbit gallery
const SCREENSHOTS: string[] = [
  '/products/1.png',
  '/products/2.png',
  '/products/3.png',
  '/products/4.png',
  '/products/5.png',
  '/products/6.png',
  '/products/7.png',
  '/products/8.png',
  '/products/9.png',
]
// ---------------------------------------------------------------------------

const built = [
  ['Engine', 'Flutter / Dart'],
  ['Platform', 'iOS (App Store)'],
  ['Release', 'Solo project, designed, built and published by Michele Tarantino'],
]

export default function Products() {
  return (
    <>
      <section className="pt-36 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-60" />
        <div className="relative max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[auto,1fr] gap-10 items-center">
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-[2.25rem] overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
            <Image src="/products/oorbit-app-icon.png" alt="OOrbit app icon" fill className="object-cover" priority />
          </div>
          <div>
            <p className="text-accent-cyan font-mono text-sm mb-3">Mobile game</p>
            <h1 className="font-display font-bold text-4xl md:text-6xl mb-5">OOrbit</h1>
            <div className="space-y-3 mb-8 max-w-2xl">
              {DESCRIPTION.map((p) => (
                <p key={p} className="text-lg text-white/65 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
            <a
              href={SITE.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-neo-black font-semibold hover:bg-white/90 transition-colors"
            >
              <Apple size={18} /> Download on the App Store
            </a>
          </div>
        </div>
      </section>

      {SCREENSHOTS.length > 0 && (
        <section className="pb-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-display font-semibold text-2xl mb-6">Screenshots</h2>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {SCREENSHOTS.map((src) => (
                <Image
                  key={src}
                  src={src}
                  alt="OOrbit screenshot"
                  width={390}
                  height={844}
                  className="h-[420px] w-auto rounded-2xl border border-white/10"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display font-semibold text-2xl mb-6">About the project</h2>
          <dl className="rounded-2xl glass divide-y divide-white/5">
            {built.map(([k, v]) => (
              <div key={k} className="px-6 py-4 grid grid-cols-1 sm:grid-cols-[160px,1fr] gap-1 sm:gap-6">
                <dt className="text-white/40 text-sm">{k}</dt>
                <dd className="text-white/80">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="text-white/50 mt-6">
            Questions or feedback about the game?{' '}
            <Link href="/contact" className="text-accent-cyan hover:underline">
              Get in touch
            </Link>
            . See also the <Link href="/privacy" className="text-accent-cyan hover:underline">privacy policy</Link> and{' '}
            <Link href="/terms" className="text-accent-cyan hover:underline">terms</Link>.
          </p>
        </div>
      </section>
    </>
  )
}
