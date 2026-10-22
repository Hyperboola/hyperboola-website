import Link from 'next/link'
import { FileText, Github, Linkedin } from 'lucide-react'
import { SITE } from '@/lib/site'

export const metadata = {
  title: 'About | Hyperboola',
  description: 'Michele Tarantino, senior data engineer in Milan, and the independent projects behind Hyperboola.',
}

const skills = [
  ['Data platform', 'Databricks, Delta Lake, Unity Catalog, Delta Live Tables, Workflows, Asset Bundles'],
  ['Processing', 'Apache Spark (PySpark), Python, SQL'],
  ['Cloud', 'Azure Data Factory, Data Lake Storage, Synapse, Key Vault'],
  ['Practices', 'ETL/ELT, Medallion architecture, CI/CD, Git, data quality and governance'],
  ['Side projects', 'Flutter/Dart, React / Next.js, Vercel'],
]

export default function About() {
  return (
    <>
      <section className="pt-36 pb-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-60" />
        <div className="relative max-w-4xl mx-auto px-6">
          <p className="text-accent-cyan font-mono text-sm mb-4">About</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-6">Hi, I&apos;m Michele.</h1>
          <div className="space-y-4 text-lg text-white/65 leading-relaxed">
            <p>
              I&apos;m a senior data engineer based in Milan. I started in 2020 as an intern and have worked on Azure and,
              since 2023, Databricks projects: ETL/ELT pipelines, Lakehouse architecture, governance with Unity Catalog and
              automated deployment. I&apos;m Databricks Certified Data Engineer Associate.
            </p>
            <p>
              Hyperboola is the name I use for my independent projects. It is not a company: it&apos;s where I build
              things on my own, like Aperidata and the game OOrbit, to learn by shipping and to keep my skills sharp
              outside of client work.
            </p>
            <p>
              The code is public on GitHub. I use AI tools as part of my workflow, and I&apos;m happy to walk through
              the architecture and the decisions behind any of these projects.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href={SITE.cv}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-neo-black font-semibold hover:bg-white/90 transition-colors"
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
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display font-semibold text-2xl mb-6">Skills</h2>
          <dl className="rounded-2xl glass divide-y divide-white/5">
            {skills.map(([k, v]) => (
              <div key={k} className="px-6 py-4 grid grid-cols-1 sm:grid-cols-[160px,1fr] gap-1 sm:gap-6">
                <dt className="text-white/40 text-sm">{k}</dt>
                <dd className="text-white/80">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="pb-28">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display font-semibold text-2xl mb-6">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/data" className="rounded-xl glass p-5 hover:border-white/20 transition-colors">
              <h3 className="font-display font-semibold mb-1">Aperidata</h3>
              <p className="text-white/55 text-sm">ISTAT data pipeline in Python: validation, charts and video.</p>
            </Link>
            <Link href="/products" className="rounded-xl glass p-5 hover:border-white/20 transition-colors">
              <h3 className="font-display font-semibold mb-1">OOrbit</h3>
              <p className="text-white/55 text-sm">Mobile game in Flutter, on the App Store.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
