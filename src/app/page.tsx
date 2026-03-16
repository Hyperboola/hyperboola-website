'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles, Rocket, Cpu, Gamepad2, Pen, BrickWall } from 'lucide-react'

const features = [
  {
    icon: Rocket,
    title: 'Development',
    description: 'App innovative e esperienze di Gioco coinvolgenti per mobile e web.',
  },
  {
    icon: Cpu,
    title: 'AI',
    description: 'Soluzioni AI che trasformano il modo di lavorare.',
  },
  {
    icon: BrickWall,
    title: 'Data Engineering',
    description: 'Infrastrutture e flussi dati robusti per alimentare l\'innovazione.',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          {/* Grid */}
          <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-100" />
          
          {/* Gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
          
          {/* Radial gradient overlay */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-neo-black/50 to-neo-black" />
        </div>

        {/* Orbiting elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20">
          <div className="absolute inset-0 rounded-full border border-accent-cyan/30 animate-orbit" />
          <div className="absolute inset-8 rounded-full border border-accent-purple/30 animate-orbit" style={{ animationDirection: 'reverse', animationDuration: '25s' }} />
          <div className="absolute inset-16 rounded-full border border-accent-pink/30 animate-orbit" style={{ animationDuration: '30s' }} />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
            <Sparkles size={16} className="text-accent-cyan" />
            <span className="text-sm font-medium text-white/80">Nuovo prodotto in arrivo</span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-tight mb-6 animate-slide-up">
            Orbiting The{' '}
            <span className="text-gradient">Future</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Games, App, AI e oltre. <br />
            Trasformiamo idee ambiziose in prodotti che le persone amano.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Link
              href="/prodotti"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full
                         bg-gradient-to-r from-accent-cyan to-accent-purple font-semibold
                         hover:shadow-lg hover:shadow-accent-cyan/25 transition-all duration-300"
            >
              Esplora i Prodotti
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/chi-siamo"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full
                         border-gradient font-semibold hover:glow-purple transition-all duration-300"
            >
              Chi Siamo
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '1s' }}>
          <span className="text-xs text-white/40 uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border border-white/20 flex justify-center pt-2">
            <div className="w-1 h-2 bg-accent-cyan rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section header */}
          <div className="text-center mb-20">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
              Cosa <span className="text-gradient">Creiamo</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Prodotti diversi, un&apos;unica missione: innovare e creare valore.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group relative p-8 rounded-2xl glass hover:bg-neo-gray/50 
                           transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-cyan/5 to-accent-purple/5 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 
                                flex items-center justify-center mb-6 group-hover:glow-cyan transition-all duration-500">
                  <feature.icon size={28} className="text-accent-cyan" />
                </div>

                {/* Content */}
                <h3 className="relative font-display font-semibold text-xl mb-3">
                  {feature.title}
                </h3>
                <p className="relative text-white/50 leading-relaxed">
                  {feature.description}
                </p>

                {/* Arrow */}
                <div className="relative mt-6 flex items-center gap-2 text-accent-cyan opacity-0 
                                group-hover:opacity-100 transition-all duration-300">
                  <span className="text-sm font-medium">Scopri di più</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-neo-black via-neo-dark to-neo-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] 
                        bg-gradient-to-r from-accent-cyan/10 via-accent-purple/10 to-accent-pink/10 
                        blur-3xl rounded-full" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
            Pronto a costruire qualcosa di{' '}
            <span className="text-gradient">straordinario</span>?
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
            Che tu sia un investitore, un potenziale partner, o semplicemente curioso, 
            ci piacerebbe sentirti.
          </p>
          <Link
            href="/contatti"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full
                       bg-white text-neo-black font-semibold
                       hover:bg-white/90 hover:shadow-lg hover:shadow-white/10 
                       transition-all duration-300"
          >
            Contattaci
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
