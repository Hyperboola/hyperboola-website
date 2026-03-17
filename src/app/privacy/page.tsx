'use client'

import Link from 'next/link'
import { ArrowLeft, Shield } from 'lucide-react'

export default function Privacy() {
  const lastUpdated = 'March 17, 2026'
  
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
            Back to Home
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
            Last updated: {lastUpdated}
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
                This Privacy Policy describes how <strong>{companyName}</strong> collects, 
                uses, and protects information from users of our applications and services. 
                Your privacy is important to us and we are committed to protecting it.
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-8">
              
              {/* 1. Information We Collect */}
              <div className="border-b border-white/10 pb-8">
                <h2 className="font-display font-semibold text-2xl text-white mb-4">
                  1. Information We Collect
                </h2>
                <div className="text-white/60 space-y-4">
                  <p>
                    Our applications may collect the following types of information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong className="text-white/80">Usage data:</strong> anonymous information about how you use the app (levels completed, play time, progress, etc.)</li>
                    <li><strong className="text-white/80">Device identifiers:</strong> advertising ID (GAID/IDFA) for ad personalization</li>
                    <li><strong className="text-white/80">Technical data:</strong> device type, operating system, app version, language, country</li>
                    <li><strong className="text-white/80">Purchase data:</strong> information about in-app purchases made (processed by Google Play / Apple App Store)</li>
                    <li><strong className="text-white/80">Advertising data:</strong> interactions with displayed ads</li>
                  </ul>
                  <p>
                    <strong className="text-white/80">We do not collect</strong> personally identifiable information such as name, email, address, or phone number, 
                    unless you voluntarily provide it to us (e.g. by contacting us via email).
                  </p>
                </div>
              </div>

              {/* 2. How We Use Information */}
              <div className="border-b border-white/10 pb-8">
                <h2 className="font-display font-semibold text-2xl text-white mb-4">
                  2. How We Use Information
                </h2>
                <div className="text-white/60 space-y-4">
                  <p>We use the collected information to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide and improve our services and gaming experience</li>
                    <li>Process and manage in-app purchases</li>
                    <li>Display advertisements, including personalized ads</li>
                    <li>Analyze app usage to improve features</li>
                    <li>Fix bugs and technical issues</li>
                    <li>Prevent fraud and abuse</li>
                  </ul>
                </div>
              </div>

              {/* 3. Advertising (AdMob) */}
              <div className="border-b border-white/10 pb-8">
                <h2 className="font-display font-semibold text-2xl text-white mb-4">
                  3. Advertising
                </h2>
                <div className="text-white/60 space-y-4">
                  <p>
                    Our app displays advertisements provided by <strong className="text-white/80">Google AdMob</strong>. 
                    AdMob may collect and use data to show you relevant ads.
                  </p>
                  
                  <h3 className="text-white/80 font-semibold text-lg mt-6 mb-2">Data collected by AdMob:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Device advertising identifier (GAID on Android, IDFA on iOS)</li>
                    <li>IP address (to determine general location)</li>
                    <li>Device and operating system information</li>
                    <li>Ad interactions (impressions, clicks)</li>
                  </ul>

                  <h3 className="text-white/80 font-semibold text-lg mt-6 mb-2">How to opt out of personalized ads:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Android:</strong> Settings → Google → Ads → Opt out of Ads Personalization</li>
                    <li><strong>iOS:</strong> Settings → Privacy & Security → Apple Advertising → Turn off Personalized Ads</li>
                  </ul>

                  <p className="mt-4">
                    For more information on how Google uses data:{' '}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" 
                       className="text-accent-cyan hover:underline">Google Privacy Policy</a>
                  </p>
                </div>
              </div>

              {/* 4. In-App Purchases */}
              <div className="border-b border-white/10 pb-8">
                <h2 className="font-display font-semibold text-2xl text-white mb-4">
                  4. In-App Purchases
                </h2>
                <div className="text-white/60 space-y-4">
                  <p>
                    Our app offers optional in-app purchases. All purchases are processed through 
                    <strong className="text-white/80"> Google Play Store</strong> (Android) or <strong className="text-white/80">Apple App Store</strong> (iOS).
                  </p>
                  
                  <h3 className="text-white/80 font-semibold text-lg mt-6 mb-2">Important information:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong className="text-white/80">We do not collect payment data:</strong> all transactions are securely handled by Google/Apple</li>
                    <li><strong className="text-white/80">Data we receive:</strong> we only receive purchase confirmation and transaction ID, not card details or payment method information</li>
                    <li><strong className="text-white/80">Refunds:</strong> refund requests must be made through Google Play Store or Apple App Store</li>
                  </ul>

                  <p className="mt-4">
                    For information about purchases and refunds:{' '}
                    <a href="https://support.google.com/googleplay/answer/2479637" target="_blank" rel="noopener noreferrer" 
                       className="text-accent-cyan hover:underline">Google Play Support</a>
                    {' | '}
                    <a href="https://support.apple.com/en-us/HT204084" target="_blank" rel="noopener noreferrer" 
                       className="text-accent-cyan hover:underline">Apple Support</a>
                  </p>
                </div>
              </div>

              {/* 5. Third-Party Services */}
              <div className="border-b border-white/10 pb-8">
                <h2 className="font-display font-semibold text-2xl text-white mb-4">
                  5. Third-Party Services
                </h2>
                <div className="text-white/60 space-y-4">
                  <p>
                    Our app uses the following third-party services, each with its own privacy policy:
                  </p>
                  <ul className="list-none space-y-3 mt-4">
                    <li className="flex items-start gap-3">
                      <span className="text-accent-cyan">•</span>
                      <div>
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" 
                           className="text-white/80 hover:text-accent-cyan font-medium">Google Play Services</a>
                        <p className="text-sm mt-1">Core services for Android apps</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-cyan">•</span>
                      <div>
                        <a href="https://support.google.com/admob/answer/6128543" target="_blank" rel="noopener noreferrer"
                           className="text-white/80 hover:text-accent-cyan font-medium">Google AdMob</a>
                        <p className="text-sm mt-1">Advertising platform for monetization</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-cyan">•</span>
                      <div>
                        <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer"
                           className="text-white/80 hover:text-accent-cyan font-medium">Firebase Analytics</a>
                        <p className="text-sm mt-1">Anonymous app usage analytics</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-cyan">•</span>
                      <div>
                        <a href="https://play.google.com/about/play-terms/" target="_blank" rel="noopener noreferrer"
                           className="text-white/80 hover:text-accent-cyan font-medium">Google Play Billing</a>
                        <p className="text-sm mt-1">Payment system for in-app purchases</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 6. Children's Privacy */}
              <div className="border-b border-white/10 pb-8">
                <h2 className="font-display font-semibold text-2xl text-white mb-4">
                  6. Children&apos;s Privacy
                </h2>
                <div className="text-white/60 space-y-4">
                  <p>
                    We are committed to protecting children&apos;s privacy. Our applications:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Do not knowingly collect personal data from children under the age of 13</li>
                    <li>Do not contain content inappropriate for minors</li>
                    <li>Display ads that comply with children&apos;s advertising regulations (COPPA compliant)</li>
                    <li>Require Google Play / Apple ID account authentication for in-app purchases</li>
                  </ul>
                  <p>
                    <strong className="text-white/80">For parents:</strong> we recommend enabling parental controls 
                    on the device and supervising in-app purchases. You can configure authentication for every purchase 
                    in your Google Play / App Store settings.
                  </p>
                  <p>
                    If you are a parent and believe your child has provided us with personal information, 
                    please contact us and we will promptly delete it.
                  </p>
                </div>
              </div>

              {/* 7. Data Retention */}
              <div className="border-b border-white/10 pb-8">
                <h2 className="font-display font-semibold text-2xl text-white mb-4">
                  7. Data Retention
                </h2>
                <div className="text-white/60 space-y-4">
                  <p>
                    We retain collected data for as long as necessary to provide our services:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Analytics data is retained in aggregated, anonymous form</li>
                    <li>Purchase data is retained for legal and tax obligations</li>
                    <li>You can request deletion of your data by contacting us</li>
                  </ul>
                </div>
              </div>

              {/* 8. Data Security */}
              <div className="border-b border-white/10 pb-8">
                <h2 className="font-display font-semibold text-2xl text-white mb-4">
                  8. Data Security
                </h2>
                <div className="text-white/60 space-y-4">
                  <p>
                    We implement technical and organizational security measures to protect information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Encrypted communications (HTTPS/TLS)</li>
                    <li>Data access restricted to authorized personnel only</li>
                    <li>Use of secure, certified cloud services</li>
                  </ul>
                  <p>
                    However, no method of transmission over the Internet is 100% secure. 
                    In the event of a data breach, we will notify you promptly.
                  </p>
                </div>
              </div>

              {/* 9. Your Rights */}
              <div className="border-b border-white/10 pb-8">
                <h2 className="font-display font-semibold text-2xl text-white mb-4">
                  9. Your Rights
                </h2>
                <div className="text-white/60 space-y-4">
                  <p>In accordance with GDPR and other privacy regulations, you have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong className="text-white/80">Access:</strong> request information about the data we collect about you</li>
                    <li><strong className="text-white/80">Rectification:</strong> correct inaccurate data</li>
                    <li><strong className="text-white/80">Erasure:</strong> request deletion of your data</li>
                    <li><strong className="text-white/80">Objection:</strong> object to the processing of your data</li>
                    <li><strong className="text-white/80">Portability:</strong> receive your data in a readable format</li>
                    <li><strong className="text-white/80">Withdrawal:</strong> withdraw your consent at any time</li>
                  </ul>
                  <p>
                    To exercise these rights, please contact us at the email address listed below.
                  </p>
                </div>
              </div>

              {/* 10. Changes */}
              <div className="border-b border-white/10 pb-8">
                <h2 className="font-display font-semibold text-2xl text-white mb-4">
                  10. Changes to This Privacy Policy
                </h2>
                <div className="text-white/60 space-y-4">
                  <p>
                    We may update this Privacy Policy periodically to reflect changes in our practices 
                    or for other operational, legal, or regulatory reasons.
                  </p>
                  <p>
                    We encourage you to review this page regularly. In case of significant changes, 
                    we may notify you through an in-app notice. Changes are effective from the date of publication.
                  </p>
                </div>
              </div>

              {/* 11. Contact Us */}
              <div className="pb-8">
                <h2 className="font-display font-semibold text-2xl text-white mb-4">
                  11. Contact Us
                </h2>
                <div className="text-white/60 space-y-4">
                  <p>
                    For questions, requests, or complaints regarding privacy and the processing of your data, please contact us:
                  </p>
                  <div className="glass rounded-xl p-6 mt-4">
                    <ul className="list-none space-y-3">
                      <li>
                        <strong className="text-white/80">Data Controller:</strong>{' '}
                        <span>{companyName}</span>
                      </li>
                      <li>
                        <strong className="text-white/80">Email:</strong>{' '}
                        <a href={`mailto:${contactEmail}`} className="text-accent-cyan hover:underline">
                          {contactEmail}
                        </a>
                      </li>
                      <li>
                        <strong className="text-white/80">Website:</strong>{' '}
                        <a href={websiteUrl} className="text-accent-cyan hover:underline">
                          {websiteUrl}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <p className="mt-4 text-sm">
                    We are committed to responding to all requests within 30 days.
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