'use client'

import { useState } from 'react'
import { Send, Mail, MapPin, MessageSquare, CheckCircle, Github, Twitter, Linkedin, Instagram } from 'lucide-react'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    value: 'hello@neoorbita.com',
    href: 'mailto:hello@neoorbita.com',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Italia 🇮🇹',
    href: null,
  },
  {
    icon: MessageSquare,
    title: 'Social',
    value: '@neoorbita',
    href: 'https://twitter.com/neoorbita',
  },
]

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/neoorbita', label: 'Instagram' },
  { icon: Twitter, href: 'https://twitter.com/neoorbita', label: 'X' },
  { icon: Linkedin, href: 'https://linkedin.com/company/neoorbita', label: 'LinkedIn' },
  //{ icon: Mail, href: 'mailto:hello@neoorbita.com', label: 'Email' },
]

export default function Contatti() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simula invio - sostituisci con la tua logica (es. API route, Formspree, ecc.)
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: '', email: '', subject: '', message: '' })
    
    // Reset success message dopo 5 secondi
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-50" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent-pink/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">
              <span className="text-gradient">Parliamone</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed">
              Hai un&apos;idea, una domanda, o semplicemente vuoi dire ciao? 
              Siamo sempre felici di ascoltare.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="font-display font-semibold text-2xl mb-8">
                Come contattarci
              </h2>

              <div className="space-y-6 mb-12">
                {contactMethods.map((method) => (
                  <div key={method.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 
                                    flex items-center justify-center shrink-0">
                      <method.icon size={20} className="text-accent-cyan" />
                    </div>
                    <div>
                      <p className="text-white/40 text-sm">{method.title}</p>
                      {method.href ? (
                        <a 
                          href={method.href}
                          className="text-white hover:text-accent-cyan transition-colors font-medium"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{method.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div>
                <h3 className="font-display font-semibold text-lg mb-4">Seguici</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl glass hover:bg-neo-gray/50 text-white/60 
                                 hover:text-accent-cyan transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="rounded-3xl glass p-8 md:p-10">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={32} className="text-green-400" />
                    </div>
                    <h3 className="font-display font-semibold text-2xl mb-2">Messaggio inviato!</h3>
                    <p className="text-white/50">Ti risponderemo il prima possibile.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                          Nome
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-neo-gray/50 border border-white/10 
                                     focus:border-accent-cyan/50 focus:outline-none focus:ring-1 focus:ring-accent-cyan/50
                                     text-white placeholder-white/30 transition-all duration-300"
                          placeholder="Il tuo nome"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-neo-gray/50 border border-white/10 
                                     focus:border-accent-cyan/50 focus:outline-none focus:ring-1 focus:ring-accent-cyan/50
                                     text-white placeholder-white/30 transition-all duration-300"
                          placeholder="la@tua.email"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-white/70 mb-2">
                        Oggetto
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-neo-gray/50 border border-white/10 
                                   focus:border-accent-cyan/50 focus:outline-none focus:ring-1 focus:ring-accent-cyan/50
                                   text-white transition-all duration-300"
                      >
                        <option value="" className="bg-neo-dark">Seleziona un argomento</option>
                        <option value="general" className="bg-neo-dark">Domanda generale</option>
                        <option value="business" className="bg-neo-dark">Proposta di business</option>
                        <option value="partnership" className="bg-neo-dark">Partnership</option>
                        <option value="job" className="bg-neo-dark">Opportunità lavorativa</option>
                        <option value="press" className="bg-neo-dark">Stampa/Media</option>
                        <option value="other" className="bg-neo-dark">Altro</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                        Messaggio
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl bg-neo-gray/50 border border-white/10 
                                   focus:border-accent-cyan/50 focus:outline-none focus:ring-1 focus:ring-accent-cyan/50
                                   text-white placeholder-white/30 transition-all duration-300 resize-none"
                        placeholder="Raccontaci tutto..."
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-purple
                                 font-semibold text-white flex items-center justify-center gap-2
                                 hover:shadow-lg hover:shadow-accent-cyan/25 transition-all duration-300
                                 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Invio in corso...
                        </>
                      ) : (
                        <>
                          Invia Messaggio
                          <Send size={18} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
