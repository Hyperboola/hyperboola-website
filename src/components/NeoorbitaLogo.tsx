'use client'

interface NeoOrbitaLogoProps {
  size?: 'sm' | 'lg'
}

export default function NeoOrbitaLogo({ size = 'sm' }: NeoOrbitaLogoProps) {
  const isLarge = size === 'lg'
  const iconSize = isLarge ? 64 : 32
  const textClass = isLarge
    ? 'text-[48px] leading-none tracking-tight'
    : 'text-xl tracking-tight'
  const gap = isLarge ? 'gap-5' : 'gap-3'

  return (
    <div className={`flex items-center ${gap}`}>
      <div className="relative shrink-0" style={{ width: iconSize, height: iconSize }}>
        <div className="absolute inset-0 rounded-full border border-accent-cyan/50 animate-orbit" />
        <div
          className="absolute rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple"
          style={{ inset: iconSize * 0.25 }}
        />
      </div>
      <span className={`font-display font-bold ${textClass}`}>
        Neo<span className="text-gradient">orbita</span>
      </span>
    </div>
  )
}