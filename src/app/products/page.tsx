'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ExternalLink, Apple, Play } from 'lucide-react'

const products = [
  {
    id: 'oorbit',
    name: 'OOrbit',
    tagline: 'Coming Soon',
    description: 'A unique mobile gaming experience that redefines the genre. Get ready for something special.',
    category: 'Mobile Game',
    status: 'coming-soon',
    image: '/products/oorbit-app-icon.png',
    color: 'cyan',
    links: {
      appStore: '#',
      playStore: '#',
      website: '#',
    },
  },
]

const statusLabels = {
  'coming-soon': { label: 'Coming Soon', class: 'bg-accent-cyan/20 text-accent-cyan' },
  'available': { label: 'Available', class: 'bg-green-500/20 text-green-400' },
  'beta': { label: 'Beta', class: 'bg-accent-purple/20 text-accent-purple' },
}

const colorClasses = {
  cyan: {
    glow: 'group-hover:shadow-accent-cyan/20',
    gradient: 'from-accent-cyan to-accent-blue',
    bg: 'bg-[#0a1628]',
  },
  purple: {
    glow: 'group-hover:shadow-accent-purple/20',
    gradient: 'from-accent-purple to-accent-pink',
    bg: 'bg-accent-purple/10',
  },
  pink: {
    glow: 'group-hover:shadow-accent-pink/20',
    gradient: 'from-accent-pink to-accent-purple',
    bg: 'bg-accent-pink/10',
  },
}

export default function Products() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">
              Our <span className="text-gradient">Products</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed">
              Every product starts with a simple idea: build something people will love to use. 
              Here&apos;s what we&apos;re working on.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          {products.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {products.map((product) => {
                const colors = colorClasses[product.color as keyof typeof colorClasses]
                const status = statusLabels[product.status as keyof typeof statusLabels]
                
                return (
                  <article
                    key={product.id}
                    className={`group relative rounded-3xl glass overflow-hidden
                                transition-all duration-500 hover:-translate-y-2
                                hover:shadow-2xl ${colors.glow}`}
                  >
                    {/* Product Image */}
                    <div className={`relative h-72 ${colors.bg} flex items-center justify-center overflow-hidden`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-10`} />
                      
                      {/* App Icon */}
                      <div className="relative w-40 h-40 rounded-[2rem] overflow-hidden shadow-2xl shadow-black/50
                                      group-hover:scale-105 transition-transform duration-500">
                        <Image
                          src={product.image}
                          alt={`${product.name} app icon`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      
                      {/* Status badge */}
                      <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${status.class}`}>
                        {status.label}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <span className="text-sm text-white/40 uppercase tracking-wider">
                        {product.category}
                      </span>

                      <h2 className="font-display font-bold text-2xl mt-2 mb-2">
                        {product.name}
                      </h2>

                      <p className={`text-lg font-medium bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent mb-4`}>
                        {product.tagline}
                      </p>

                      <p className="text-white/50 leading-relaxed mb-6">
                        {product.description}
                      </p>

                      <div className="flex flex-wrap gap-3">
                        {product.status === 'available' ? (
                          <>
                            <a
                              href={product.links.appStore}
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                                         bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium"
                            >
                              <Apple size={16} />
                              App Store
                            </a>
                            <a
                              href={product.links.playStore}
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                                         bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium"
                            >
                              <Play size={16} />
                              Play Store
                            </a>
                          </>
                        ) : (
                          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                                          border border-white/10 text-sm text-white/50">
                            Coming soon
                          </div>
                        )}
                        
                        {product.links.website !== '#' && (
                          <a
                            href={product.links.website}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                                       border border-white/10 hover:border-white/20 
                                       transition-colors text-sm font-medium"
                          >
                            Website
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-white/50 text-lg">No products yet. We&apos;re working on it!</p>
            </div>
          )}
        </div>
      </section>

      {/* Stay Updated */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neo-dark/50 to-transparent" />
        
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-3xl mb-4">
            Stay <span className="text-gradient">Updated</span>
          </h2>
          <p className="text-white/50 mb-8">
            New products on the way. Follow us on social media so you don&apos;t miss a thing.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-gradient 
                       font-medium hover:glow-cyan transition-all duration-300"
          >
            Get in touch to learn more
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}