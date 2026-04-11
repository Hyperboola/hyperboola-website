'use client'

import Image from 'next/image'

interface HyperboolaLogoProps {
  size?: 'sm' | 'lg'
}

export default function HyperboolaLogo({ size = 'sm' }: HyperboolaLogoProps) {
  const isLarge = size === 'lg'
  const iconSize = isLarge ? 64 : 32

  return (
    <div className={`flex items-center ${isLarge ? 'gap-5' : 'gap-3'}`}>
      <Image
        src="/logo-noback.png"
        alt="Hyperboola"
        width={iconSize}
        height={iconSize}
        className="shrink-0"
      />
      <span className={`font-display font-bold ${isLarge ? 'text-[48px] leading-none tracking-tight' : 'text-xl tracking-tight'}`}>
        Hyper<span className="text-gradient">boola</span>
      </span>
    </div>
  )
}