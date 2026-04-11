'use client'

import Image from 'next/image'
import HyperboolaLogo from '@/components/HyperboolaLogo'

export default function LogoPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neo-black gap-20 py-20">
      {/* Giant icon mark — for screenshot */}
      <Image
        src="/logo-noback.png"
        alt="Hyperboola"
        width={480}
        height={480}
      />

      {/* Full logo with text */}
      <HyperboolaLogo size="lg" />
    </div>
  )
}