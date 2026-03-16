'use client'

import Link from 'next/link'
import { ArrowLeft, Shield } from 'lucide-react'

export default function Privacy() {
  // Data ultimo aggiornamento - AGGIORNA QUANDO MODIFICHI
  const lastUpdated = '11 Marzo 2025'
  
  // INFO DA PERSONALIZZARE
  const companyName = 'NeoOrbita'
  const contactEmail = 'privacy@neoorbita.com'
  const websiteUrl = 'https://neoorbita.com'

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
        
        <div className="relative max-w-4xl mx-auto px-6">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Torna alla Home
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 
                            flex items-center justify-center">
              <Shield size={24} className="text-accent-cyan" />
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl">
              Privacy Policy
            </h1>
          </div>
          
          <p className="text-white/50">
            Ultimo aggiornamento: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-32 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-invert prose-lg max-w-none">
            
            {/* Intro */}
            <div className="glass rounded-2xl p-8 mb-8">
              <p className="text-white/70 leading-relaxed m-0">
                La presente Privacy Policy descrive le modalità con cui <strong>{companyName}</strong> raccoglie, 
                utilizza e protegge le informazioni degli utenti che utilizzano le nostre applicazioni e servizi. 
                La tua privacy è importante per noi e ci impegniamo a proteggerla.
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-8">
              
              {/* 1. Informazioni raccolte */}
              <div className="border-b border-white/10 pb-8">
                <h2 className="font-display font-semibold text-2xl text-white mb-4">
                  1. Informazioni che raccogliamo
                </h2>
                <div className="text-white/60 space-y-4">
                  <p>
                    Le nostre applicazioni possono raccogliere le seguenti tipologie di informazioni:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong className="text-white/80">Dati di utilizzo:</strong> informazioni anonime su come utilizzi l&apos;app (livelli completati, tempo di gioco, progressi, ecc.)</li>
                    <li><strong className="text-white/80">Identificatori del dispositivo:</strong> ID pubblicitario (GAID/IDFA) per la personalizzazione degli annunci</li>
                    <li><strong className="text-white/80">Dati tecnici:</strong> tipo di dispositivo, sistema operativo, versione dell&apos;app, lingua, paese</li>
                    <li><strong className="text-white/80">Dati sugli acquisti:</strong> informazioni sugli acquisti in-app effettuati (gestiti da Google Play)</li>
                    <li><strong className="text-white/80">Dati pubblicitari:</strong> interazioni con gli annunci visualizzati</li>
                  </ul>
                  <p>
                    <strong className="text-white/80">Non raccogliamo</strong> informazioni personali identificabili come nome, email, indirizzo o numero di telefono, 
                    a meno che tu non ce le fornisca volontariamente (es. contattandoci via email).
                  </p>
                </div>
              </div>

              {/* 2. Come utilizziamo le informazioni */}
              <div className="border-b border-white/10 pb-8">
                <h2 className="font-display font-semibold text-2xl text-white mb-4">
                  2. Come utilizziamo le informazioni
                </h2>
                <div className="text-white/60 space-y-4">
                  <p>Utilizziamo le informazioni raccolte per:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Fornire e migliorare i nostri servizi e l&apos;esperienza di gioco</li>
                    <li>Elaborare e gestire gli acquisti in-app</li>
                    <li>Mostrare annunci pubblicitari, inclusi annunci personalizzati</li>
                    <li>Analizzare l&apos;utilizzo dell&apos;app per migliorare le funzionalità</li>
                    <li>Correggere bug e problemi tecnici</li>
                    <li>Prevenire frodi e abusi</li>
                  </ul>
                </div>
              </div>

              {/* 3. Pubblicità (AdMob) */}
              <div className="border-b border-white/10 pb-8">
                <h2 className="font-display font-semibold text-2xl text-white mb-4">
                  3. Pubblicità
                </h2>
                <div className="text-white/60 space-y-4">
                  <p>
                    La nostra app mostra annunci pubblicitari forniti da <strong className="text-white/80">Google AdMob</strong>. 
                    AdMob può raccogliere e utilizzare dati per mostrarti annunci pertinenti.
                  </p>
                  
                  <h3 className="text-white/80 font-semibold text-lg mt-6 mb-2">Dati raccolti da AdMob:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Identificatore pubblicitario del dispositivo (GAID su Android, IDFA su iOS)</li>
                    <li>Indirizzo IP (per determinare la posizione generale)</li>
                    <li>Informazioni sul dispositivo e sul sistema operativo</li>
                    <li>Interazioni con gli annunci (visualizzazioni, clic)</li>
                  </ul>

                  <h3 className="text-white/80 font-semibold text-lg mt-6 mb-2">Come disattivare gli annunci personalizzati:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Android:</strong> Impostazioni → Google → Annunci → Disattiva personalizzazione annunci</li>
                    <li><strong>iOS:</strong> Impostazioni → Privacy → Pubblicità Apple → Disattiva annunci personalizzati</li>
                  </ul>

                  <p className="mt-4">
                    Per maggiori informazioni su come Google utilizza i dati:{' '}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" 
                       className="text-accent-cyan hover:underline">Privacy Policy di Google</a>
                  </p>
                </div>
              </div>

              {/* 4. Acquisti in-app */}
              <div className="border-b border-white/10 pb-8">
                <h2 className="font-display font-semibold text-2xl text-white mb-4">
                  4. Acquisti in-app
                </h2>
                <div className="text-white/60 space-y-4">
                  <p>
                    La nostra app offre acquisti in-app opzionali. Tutti gli acquisti sono elaborati attraverso 
                    <strong className="text-white/80"> Google Play Store</strong> (Android) o <strong className="text-white/80">Apple App Store</strong> (iOS).
                  </p>
                  
                  <h3 className="text-white/80 font-semibold text-lg mt-6 mb-2">Informazioni importanti:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong className="text-white/80">Non raccogliamo dati di pagamento:</strong> tutte le transazioni sono gestite in modo sicuro da Google/Apple</li>
                    <li><strong className="text-white/80">Dati ricevuti:</strong> riceviamo solo la conferma dell&apos;acquisto e l&apos;ID della transazione, non i dati della carta o del metodo di pagamento</li>
                    <li><strong className="text-white/80">Rimborsi:</strong> le richieste di rimborso devono essere effettuate tramite Google Play Store o Apple App Store</li>
                  </ul>

                  <p className="mt-4">
                    Per informazioni sugli acquisti e i rimborsi:{' '}
                    <a href="https://support.google.com/googleplay/answer/2479637" target="_blank" rel="noopener noreferrer" 
                       className="text-accent-cyan hover:underline">Supporto Google Play</a>
                  </p>
                </div>
              </div>

              {/* 5. Servizi di terze parti */}
              <div className="border-b border-white/10 pb-8">
                <h2 className="font-display font-semibold text-2xl text-white mb-4">
                  5. Servizi di terze parti
                </h2>
                <div className="text-white/60 space-y-4">
                  <p>
                    La nostra app utilizza i seguenti servizi di terze parti, ognuno con la propria privacy policy:
                  </p>
                  <ul className="list-none space-y-3 mt-4">
                    <li className="flex items-start gap-3">
                      <span className="text-accent-cyan">•</span>
                      <div>
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" 
                           className="text-white/80 hover:text-accent-cyan font-medium">Google Play Services</a>
                        <p className="text-sm mt-1">Servizi di base per app Android</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-cyan">•</span>
                      <div>
                        <a href="https://support.google.com/admob/answer/6128543" target="_blank" rel="noopener noreferrer"
                           className="text-white/80 hover:text-accent-cyan font-medium">Google AdMob</a>
                        <p className="text-sm mt-1">Piattaforma pubblicitaria per la monetizzazione</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-cyan">•</span>
                      <div>
                        <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer"
                           className="text-white/80 hover:text-accent-cyan font-medium">Firebase Analytics</a>
                        <p className="text-sm mt-1">Analisi anonime sull&apos;utilizzo dell&apos;app</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-cyan">•</span>
                      <div>
                        <a href="https://play.google.com/about/play-terms/" target="_blank" rel="noopener noreferrer"
                           className="text-white/80 hover:text-accent-cyan font-medium">Google Play Billing</a>
                        <p className="text-sm mt-1">Sistema di pagamento per acquisti in-app</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 6. Privacy dei minori */}
              <div className="border-b border-white/10 pb-8">
                <h2 className="font-display font-semibold text-2xl text-white mb-4">
                  6. Privacy dei minori
                </h2>
                <div className="text-white/60 space-y-4">
                  <p>
                    Ci impegniamo a proteggere la privacy dei minori. Le nostre applicazioni:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Non raccolgono consapevolmente dati personali da bambini di età inferiore ai 13 anni</li>
                    <li>Non contengono contenuti inappropriati per i minori</li>
                    <li>Gli annunci mostrati sono conformi alle normative sulla pubblicità per minori (COPPA compliant)</li>
                    <li>Gli acquisti in-app richiedono l&apos;autenticazione dell&apos;account Google Play/Apple ID</li>
                  </ul>
                  <p>
                    <strong className="text-white/80">Per i genitori:</strong> consigliamo di attivare i controlli parentali 
                    sul dispositivo e di supervisionare gli acquisti in-app. Puoi configurare l&apos;autenticazione per ogni acquisto 
                    nelle impostazioni di Google Play/App Store.
                  </p>
                  <p>
                    Se sei un genitore e ritieni che tuo figlio ci abbia fornito informazioni personali, 
                    contattaci e provvederemo a eliminarle tempestivamente.
                  </p>
                </div>
              </div>

              {/* 7. Conservazione dei dati */}
              <div className="border-b border-white/10 pb-8">
                <h2 className="font-display font-semibold text-2xl text-white mb-4">
                  7. Conservazione dei dati
                </h2>
                <div className="text-white/60 space-y-4">
                  <p>
                    Conserviamo i dati raccolti per il tempo necessario a fornire i nostri servizi:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>I dati di analytics vengono conservati in forma aggregata e anonima</li>
                    <li>I dati sugli acquisti vengono conservati per obblighi legali e fiscali</li>
                    <li>Puoi richiedere la cancellazione dei tuoi dati contattandoci</li>
                  </ul>
                </div>
              </div>

              {/* 8. Sicurezza */}
              <div className="border-b border-white/10 pb-8">
                <h2 className="font-display font-semibold text-2xl text-white mb-4">
                  8. Sicurezza dei dati
                </h2>
                <div className="text-white/60 space-y-4">
                  <p>
                    Adottiamo misure di sicurezza tecniche e organizzative per proteggere le informazioni:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Comunicazioni crittografate (HTTPS/TLS)</li>
                    <li>Accesso ai dati limitato al personale autorizzato</li>
                    <li>Utilizzo di servizi cloud sicuri e certificati</li>
                  </ul>
                  <p>
                    Tuttavia, nessun metodo di trasmissione su Internet è sicuro al 100%. 
                    In caso di violazione dei dati, ti informeremo tempestivamente.
                  </p>
                </div>
              </div>

              {/* 9. I tuoi diritti */}
              <div className="border-b border-white/10 pb-8">
                <h2 className="font-display font-semibold text-2xl text-white mb-4">
                  9. I tuoi diritti
                </h2>
                <div className="text-white/60 space-y-4">
                  <p>In conformità con il GDPR e altre normative sulla privacy, hai il diritto di:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong className="text-white/80">Accesso:</strong> richiedere informazioni sui dati che raccogliamo su di te</li>
                    <li><strong className="text-white/80">Rettifica:</strong> correggere dati inesatti</li>
                    <li><strong className="text-white/80">Cancellazione:</strong> richiedere la cancellazione dei tuoi dati</li>
                    <li><strong className="text-white/80">Opposizione:</strong> opporti al trattamento dei tuoi dati</li>
                    <li><strong className="text-white/80">Portabilità:</strong> ricevere i tuoi dati in formato leggibile</li>
                    <li><strong className="text-white/80">Revoca:</strong> revocare il consenso in qualsiasi momento</li>
                  </ul>
                  <p>
                    Per esercitare questi diritti, contattaci all&apos;indirizzo email indicato sotto.
                  </p>
                </div>
              </div>

              {/* 10. Modifiche */}
              <div className="border-b border-white/10 pb-8">
                <h2 className="font-display font-semibold text-2xl text-white mb-4">
                  10. Modifiche alla Privacy Policy
                </h2>
                <div className="text-white/60 space-y-4">
                  <p>
                    Potremmo aggiornare questa Privacy Policy periodicamente per riflettere modifiche alle nostre pratiche 
                    o per altri motivi operativi, legali o normativi.
                  </p>
                  <p>
                    Ti consigliamo di consultare regolarmente questa pagina. In caso di modifiche sostanziali, 
                    potremmo informarti tramite un avviso nell&apos;app. Le modifiche sono effettive dalla data di pubblicazione.
                  </p>
                </div>
              </div>

              {/* 11. Contatti */}
              <div className="pb-8">
                <h2 className="font-display font-semibold text-2xl text-white mb-4">
                  11. Contattaci
                </h2>
                <div className="text-white/60 space-y-4">
                  <p>
                    Per domande, richieste o reclami relativi alla privacy e al trattamento dei tuoi dati, contattaci:
                  </p>
                  <div className="glass rounded-xl p-6 mt-4">
                    <ul className="list-none space-y-3">
                      <li>
                        <strong className="text-white/80">Titolare del trattamento:</strong>{' '}
                        <span>{companyName}</span>
                      </li>
                      <li>
                        <strong className="text-white/80">Email:</strong>{' '}
                        <a href={`mailto:${contactEmail}`} className="text-accent-cyan hover:underline">
                          {contactEmail}
                        </a>
                      </li>
                      <li>
                        <strong className="text-white/80">Sito web:</strong>{' '}
                        <a href={websiteUrl} className="text-accent-cyan hover:underline">
                          {websiteUrl}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <p className="mt-4 text-sm">
                    Ci impegniamo a rispondere a tutte le richieste entro 30 giorni.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}