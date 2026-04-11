'use client'

import Link from 'next/link'
import { ArrowLeft, FileText } from 'lucide-react'

export default function Terms() {
  const lastUpdated = 'April 10, 2026'
  
  const companyName = 'Hyperboola'
  const contactEmail = 'privacy@hyperboola.com'
  const websiteUrl = 'https://hyperboola.com'

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
              <FileText size={24} className="text-accent-cyan" />
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl">
              Terms of Service
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
                Welcome to <strong>{companyName}</strong>. By downloading, installing, or using any of our 
                applications or services, you agree to be bound by these Terms of Service. 
                If you do not agree, please do not use our services.
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-8">
              
              {/* 1. Definitions */}
              <div className="border-b border-white/10 pb-8">
                <h2 className="font-display font-semibold text-2xl text-white mb-4">
                  1. Definitions
                </h2>
                <div className="text-white/60 space-y-4">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong className="text-white/80">&quot;Service&quot;</strong> refers to any application, game, website, or digital product published by {companyName}.</li>
                    <li><strong className="text-white/80">&quot;User&quot;</strong> or <strong className="text-white/80">&quot;You&quot;</strong> refers to any person who accesses or uses the Service.</li>
                    <li><strong className="text-white/80">&quot;Content&quot;</strong> refers to all text, graphics, audio, video, code, and other materials included in the Service.</li>
                  </ul>
                </div>
              </div>

              {/* 2. Use of the Service */}
              <div className="border-b border-white/10 pb-8">
                <h2 className="font-display font-semibold text-2xl text-white mb-4">
                  2. Use of the Service
                </h2>
                <div className="text-white/60 space-y-4">
                  <p>By using our Service, you agree to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Use the Service only for lawful purposes and in accordance with these Terms</li>
                    <li>Not attempt to reverse engineer, decompile, or disassemble the Service</li>
                    <li>Not use bots, hacks, mods, or any unauthorized third-party software</li>
                    <li>Not exploit bugs or glitches for unfair advantage</li>
                    <li>Not use the Service to harass, abuse, or harm others</li>
                    <li>Not interfere with or disrupt the Service or its servers</li>
                  </ul>
                  <p>
                    We reserve the right to suspend or terminate access for users who violate these Terms.
                  </p>
                </div>
              </div>

              {/* 3. Intellectual Property */}
              <div className="border-b border-white/10 pb-8">
                <h2 className="font-display font-semibold text-2xl text-white mb-4">
                  3. Intellectual Property
                </h2>
                <div className="text-white/60 space-y-4">
                  <p>
                    All Content within the Service — including but not limited to graphics, designs, 
                    animations, sounds, music, code, and trademarks — is the exclusive property 
                    of <strong className="text-white/80">{companyName}</strong> or its licensors and is protected 
                    by copyright, trademark, and other intellectual property laws.
                  </p>
                  <p>
                    You are granted a limited, non-exclusive, non-transferable, revocable license to use 
                    the Service for personal, non-commercial purposes. This license does not allow you to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Copy, modify, or distribute any part of the Service</li>
                    <li>Use the Service&apos;s Content for commercial purposes</li>
                    <li>Create derivative works based on the Service</li>
                  </ul>
                </div>
              </div>

              {/* 4. In-App Purchases */}
              <div className="border-b border-white/10 pb-8">
                <h2 className="font-display font-semibold text-2xl text-white mb-4">
                  4. In-App Purchases
                </h2>
                <div className="text-white/60 space-y-4">
                  <p>
                    Our applications may offer optional in-app purchases. By making a purchase, you acknowledge that:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>All purchases are processed by <strong className="text-white/80">Google Play Store</strong> or <strong className="text-white/80">Apple App Store</strong></li>
                    <li>Purchases are final and generally non-refundable, unless required by applicable law or platform policy</li>
                    <li>Virtual items have no real-world monetary value and cannot be exchanged or transferred</li>
                    <li>We reserve the right to modify pricing, availability, and content of purchasable items at any time</li>
                  </ul>
                  <p>
                    For refund requests, please refer to{' '}
                    <a href="https://support.google.com/googleplay/answer/2479637" target="_blank" rel="noopener noreferrer" 
                       className="text-accent-cyan hover:underline">Google Play</a>
                    {' '}or{' '}
                    <a href="https://support.apple.com/en-us/HT204084" target="_blank" rel="noopener noreferrer" 
                       className="text-accent-cyan hover:underline">Apple</a>
                    {' '}refund policies.
                  </p>
                </div>
              </div>

              {/* 5. Advertising */}
              <div className="border-b border-white/10 pb-8">
                <h2 className="font-display font-semibold text-2xl text-white mb-4">
                  5. Advertising
                </h2>
                <div className="text-white/60 space-y-4">
                  <p>
                    Our applications may display advertisements provided by third-party ad networks 
                    (such as Google AdMob). By using the Service, you acknowledge and accept that:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Ads may be displayed during your use of the Service</li>
                    <li>Ad content is provided by third parties and is not controlled by {companyName}</li>
                    <li>You may opt out of personalized advertising through your device settings</li>
                  </ul>
                  <p>
                    For more details, please see our{' '}
                    <Link href="/privacy" className="text-accent-cyan hover:underline">Privacy Policy</Link>.
                  </p>
                </div>
              </div>

              {/* 6. Availability */}
              <div className="border-b border-white/10 pb-8">
                <h2 className="font-display font-semibold text-2xl text-white mb-4">
                  6. Service Availability
                </h2>
                <div className="text-white/60 space-y-4">
                  <p>
                    We strive to keep our services available at all times, but we do not guarantee 
                    uninterrupted or error-free access. We may:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Temporarily suspend the Service for maintenance or updates</li>
                    <li>Modify, update, or discontinue features at any time</li>
                    <li>Discontinue a Service entirely, with reasonable notice when possible</li>
                  </ul>
                </div>
              </div>

              {/* 7. Disclaimer of Warranties */}
              <div className="border-b border-white/10 pb-8">
                <h2 className="font-display font-semibold text-2xl text-white mb-4">
                  7. Disclaimer of Warranties
                </h2>
                <div className="text-white/60 space-y-4">
                  <p>
                    The Service is provided <strong className="text-white/80">&quot;as is&quot;</strong> and{' '}
                    <strong className="text-white/80">&quot;as available&quot;</strong> without warranties of any kind, 
                    whether express or implied, including but not limited to implied warranties of 
                    merchantability, fitness for a particular purpose, and non-infringement.
                  </p>
                  <p>
                    {companyName} does not warrant that the Service will be uninterrupted, secure, 
                    or free of errors, viruses, or other harmful components.
                  </p>
                </div>
              </div>

              {/* 8. Limitation of Liability */}
              <div className="border-b border-white/10 pb-8">
                <h2 className="font-display font-semibold text-2xl text-white mb-4">
                  8. Limitation of Liability
                </h2>
                <div className="text-white/60 space-y-4">
                  <p>
                    To the fullest extent permitted by applicable law, <strong className="text-white/80">{companyName}</strong> shall 
                    not be liable for any indirect, incidental, special, consequential, or punitive damages, 
                    including but not limited to loss of data, profits, or goodwill, arising out of or 
                    related to your use of the Service.
                  </p>
                  <p>
                    Our total liability for any claim related to the Service shall not exceed the amount 
                    you paid to us (if any) in the 12 months prior to the event giving rise to the claim.
                  </p>
                </div>
              </div>

              {/* 9. Governing Law */}
              <div className="border-b border-white/10 pb-8">
                <h2 className="font-display font-semibold text-2xl text-white mb-4">
                  9. Governing Law
                </h2>
                <div className="text-white/60 space-y-4">
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of 
                    <strong className="text-white/80"> Italy</strong> and the European Union, 
                    without regard to conflict of law provisions.
                  </p>
                  <p>
                    Any disputes arising from these Terms shall be subject to the exclusive jurisdiction 
                    of the courts of Milan, Italy, unless otherwise required by applicable consumer protection laws.
                  </p>
                </div>
              </div>

              {/* 10. Changes */}
              <div className="border-b border-white/10 pb-8">
                <h2 className="font-display font-semibold text-2xl text-white mb-4">
                  10. Changes to These Terms
                </h2>
                <div className="text-white/60 space-y-4">
                  <p>
                    We may update these Terms from time to time. When we do, we will revise the 
                    &quot;Last updated&quot; date at the top of this page.
                  </p>
                  <p>
                    Continued use of the Service after changes constitutes acceptance of the new Terms. 
                    If you do not agree with the updated Terms, you should stop using the Service.
                  </p>
                </div>
              </div>

              {/* 11. Contact */}
              <div className="pb-8">
                <h2 className="font-display font-semibold text-2xl text-white mb-4">
                  11. Contact Us
                </h2>
                <div className="text-white/60 space-y-4">
                  <p>
                    If you have any questions about these Terms, please contact us:
                  </p>
                  <div className="glass rounded-xl p-6 mt-4">
                    <ul className="list-none space-y-3">
                      <li>
                        <strong className="text-white/80">Company:</strong>{' '}
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
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}