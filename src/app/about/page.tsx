'use client'

import Link from 'next/link'
import { ArrowRight, Target, Lightbulb, Users, Zap } from 'lucide-react'

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We don\'t follow trends, we create them. Every project is a chance to build something new.',
  },
  {
    icon: Target,
    title: 'Quality',
    description: 'Every detail matters. We never ship anything we wouldn\'t proudly use ourselves.',
  },
  {
    icon: Users,
    title: 'People First',
    description: 'We build for people. The end user is always our number one priority.',
  },
  {
    icon: Zap,
    title: 'Agility',
    description: 'Lean structure, fast decisions. We adapt and evolve constantly.',
  },
]

const timeline = [
  {
    year: 'Early 2026',
    title: 'The Beginning',
    description: 'Neoorbita is founded with a clear vision: create digital products that make a difference.',
  },
  {
    year: 'Mid 2026',
    title: 'First Launch',
    description: 'Our first product sees the light. A mobile game that marks a new orbit.',
  },
]

export default function About() {
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
              About <span className="text-gradient">Us</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed">
              Neoorbita is a software company that builds innovative digital products. <br />
              From our orbit, we aim for the stars.
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
                Our Mission
              </span>
              <h2 className="font-display font-bold text-4xl mt-4 mb-6">
                Turning ideas into{' '}
                <span className="text-gradient">experiences</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                We believe technology should serve people, not the other way around. 
                That&apos;s why we build products that are intuitive, beautiful, and above all useful.
              </p>
              <p className="text-white/60 leading-relaxed">
                Whether it&apos;s a game that makes you smile, an app that simplifies your life, 
                or an AI that amplifies your abilities — every product we build starts with the same question: 
                &quot;How can we make people&apos;s lives better?&quot;
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
              Our Values
            </span>
            <h2 className="font-display font-bold text-4xl mt-4">
              What <span className="text-gradient">drives</span> us
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
              Our Journey
            </span>
            <h2 className="font-display font-bold text-4xl mt-4">
              The <span className="text-gradient">story</span> so far
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
            Want to join the <span className="text-gradient">journey</span>?
          </h2>
          <p className="text-white/50 mb-8">
            We&apos;re always looking for talented people and visionary partners.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full
                       bg-gradient-to-r from-accent-cyan to-accent-purple font-semibold
                       hover:shadow-lg hover:shadow-accent-cyan/25 transition-all duration-300"
          >
            Get in Touch
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}