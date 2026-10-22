import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Github, Linkedin, FileText } from 'lucide-react'
import { SITE } from '@/lib/site'

export default function Home() {
  return (
    <>
      {/* Intro */}
      <section className="pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-60" />
        <div className="relative max-w-5xl mx-auto px-6">
          <p className="text-accent-cyan font-mono text-sm mb-4">Hyperboola · independent projects by {SITE.owner}</p>
          <h1 className="font-display font-bold text-4xl md:text-6xl leading-tight mb-6">
            Data engineer who also <span className="text-gradient">builds and ships</span> products.
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed mb-10">
            I&apos;m Michele, a senior data engineer based in Milan. By day I build data pipelines on Databricks and Azure.
            Here are my personal projects: a mobile game on the App Store and a data pipeline that turns official
            ISTAT statistics into daily posts.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/data"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-neo-black font-semibold hover:bg-white/90 transition-colors"
            >
              See Aperidata <ArrowRight size={18} />
            </Link>
            <a
              href={SITE.cv}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 hover:border-white/30 transition-colors font-medium"
            >
              <FileText size={18} /> Download CV
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 hover:border-white/30 transition-colors font-medium"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display font-semibold text-2xl mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/data"
              className="group rounded-2xl glass p-6 hover:border-white/20 transition-colors flex flex-col"
            >
              <div className="rounded-xl overflow-hidden mb-5 border border-white/5">
                <Image
                  src="/aperidata/esempio-serie.jpg"
                  alt="Three slides of an Aperidata post: cover, chart and closing"
                  width={1640}
                  height={675}
                  className="w-full h-auto"
                />
              </div>
              <span className="text-xs uppercase tracking-wider text-white/40">Data engineering · Python</span>
              <h3 className="font-display font-semibold text-xl mt-1 mb-2">Aperidata</h3>
              <p className="text-white/55 leading-relaxed mb-4">
                A pipeline that picks one official ISTAT statistic a day, validates it and turns it into an Instagram
                carousel and an animated video. No AI in the loop: every number is computed from the data.
              </p>
              <span className="mt-auto inline-flex items-center gap-2 text-accent-cyan text-sm font-medium">
                How it works <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/products"
              className="group rounded-2xl glass p-6 hover:border-white/20 transition-colors flex flex-col"
            >
              <div className="rounded-xl overflow-hidden mb-5 border border-white/5 bg-[#0a1628] h-[220px] flex items-center justify-center">
                <div className="w-32 h-32 rounded-[1.75rem] overflow-hidden shadow-xl shadow-black/50 relative">
                  <Image src="/products/oorbit-app-icon.png" alt="OOrbit app icon" fill className="object-cover" />
                </div>
              </div>
              <span className="text-xs uppercase tracking-wider text-white/40">Mobile game · Flutter</span>
              <h3 className="font-display font-semibold text-xl mt-1 mb-2">OOrbit</h3>
              <p className="text-white/55 leading-relaxed mb-4">
                A mobile game built with Flutter and Dart and published on the Apple App Store.
              </p>
              <span className="mt-auto inline-flex items-center gap-2 text-accent-cyan text-sm font-medium">
                About the game <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* About + contact strip */}
      <section className="pb-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-2xl glass p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="font-display font-semibold text-2xl mb-2">Want to talk?</h2>
              <p className="text-white/55 max-w-xl">
                I&apos;m open to senior data engineering roles, including opportunities in Ticino, Switzerland.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-neo-black font-semibold hover:bg-white/90 transition-colors"
              >
                Contact <ArrowRight size={18} />
              </Link>
              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 hover:border-white/30 transition-colors font-medium"
              >
                <Github size={18} /> GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
