'use client'

import Link from 'next/link'
import { ArrowRight, Target, Lightbulb, Users, Zap } from 'lucide-react'

const values = [
  {
    icon: Lightbulb,
    title: 'Innovazione',
    description: 'Non seguiamo le tendenze, le creiamo. Ogni progetto è un\'opportunità per fare qualcosa di nuovo.',
  },
  {
    icon: Target,
    title: 'Qualità',
    description: 'Ogni dettaglio conta. Non rilasciamo nulla che non useremmo noi stessi con orgoglio.',
  },
  {
    icon: Users,
    title: 'Persone al Centro',
    description: 'Creiamo per le persone. L\'utente finale è sempre la nostra priorità numero uno.',
  },
  {
    icon: Zap,
    title: 'Agilità',
    description: 'Struttura snella, decisioni rapide. Ci adattiamo e evolviamo costantemente.',
  },
]

const timeline = [
  {
    year: 'Early 2026',
    title: 'La Nascita',
    description: 'Neoorbita viene fondata con una visione chiara: creare prodotti digitali che facciano la differenza.',
  },
  {
    year: 'Mid 2026',
    title: 'Primo Lancio',
    description: 'Il nostro primo prodotto vede la luce. Un mobile game che segna una nuova orbita.',
  },
  // Aggiungi altri milestone in futuro
]

export default function ChiSiamo() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-50" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-20 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">
              Chi <span className="text-gradient">Siamo</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed">
              Neoorbita è una software company che crea prodotti digitali innovativi. <br />
              Dalla nostra orbita, puntiamo alle stelle.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <span className="text-accent-cyan text-sm font-medium uppercase tracking-wider">
                La Nostra Missione
              </span>
              <h2 className="font-display font-bold text-4xl mt-4 mb-6">
                Trasformare idee in{' '}
                <span className="text-gradient">esperienze</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Crediamo che la tecnologia debba essere al servizio delle persone, non il contrario. 
                Per questo creiamo prodotti che sono intuitivi, belli, e soprattutto utili.
              </p>
              <p className="text-white/60 leading-relaxed">
                Che si tratti di un gioco che ti fa sorridere, un&apos;app che ti semplifica la vita, 
                o un&apos;AI che potenzia le tue capacità — ogni nostro prodotto nasce dalla stessa domanda: 
                &quot;Come possiamo migliorare la vita delle persone?&quot;
              </p>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="aspect-square rounded-3xl glass p-8 flex items-center justify-center">
                {/* Orbital animation */}
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple glow-cyan" />
                  </div>
                  <div className="absolute inset-8 rounded-full border border-accent-cyan/20 animate-orbit" />
                  <div className="absolute inset-16 rounded-full border border-accent-purple/20 animate-orbit" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
                  <div className="absolute inset-24 rounded-full border border-accent-pink/20 animate-orbit" style={{ animationDuration: '20s' }} />
                  
                  {/* Orbiting dots */}
                  <div className="absolute inset-8 animate-orbit">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent-cyan" />
                  </div>
                  <div className="absolute inset-16 animate-orbit" style={{ animationDirection: 'reverse', animationDuration: '15s' }}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent-purple" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neo-dark/30 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent-purple text-sm font-medium uppercase tracking-wider">
              I Nostri Valori
            </span>
            <h2 className="font-display font-bold text-4xl mt-4">
              Cosa ci <span className="text-gradient">guida</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="p-6 rounded-2xl glass hover:bg-neo-gray/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 
                                flex items-center justify-center mb-4">
                  <value.icon size={24} className="text-accent-cyan" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent-pink text-sm font-medium uppercase tracking-wider">
              Il Nostro Percorso
            </span>
            <h2 className="font-display font-bold text-4xl mt-4">
              La <span className="text-gradient">storia</span> finora
            </h2>
          </div>

          <div className="relative">
            {/* Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan via-accent-purple to-transparent" />
            
            {/* Events */}
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <div key={event.year} className="relative pl-20">
                  {/* Dot */}
                  <div className="absolute left-6 top-1 w-5 h-5 rounded-full border-2 border-accent-cyan bg-neo-black" />
                  
                  {/* Content */}
                  <span className="text-accent-cyan font-mono text-sm">{event.year}</span>
                  <h3 className="font-display font-semibold text-xl mt-1 mb-2">{event.title}</h3>
                  <p className="text-white/50 leading-relaxed">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-3xl mb-4">
            Vuoi far parte del <span className="text-gradient">viaggio</span>?
          </h2>
          <p className="text-white/50 mb-8">
            Siamo sempre alla ricerca di persone talentuose e partner visionari.
          </p>
          <Link
            href="/contatti"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full
                       bg-gradient-to-r from-accent-cyan to-accent-purple font-semibold
                       hover:shadow-lg hover:shadow-accent-cyan/25 transition-all duration-300"
          >
            Contattaci
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
