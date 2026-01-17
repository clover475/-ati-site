"use client"

import { useEffect, useRef } from "react"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"

interface ParticleHeroProps {
  title?: string | { EN: string; CN: string }
  subtitle?: string | { EN: string; CN: string }
  description?: string | { EN: string; CN: string }
  showCTA?: boolean
  ctaText?: { EN: string; CN: string }
  ctaLink?: string
  bgColor?: string
  particleColor?: string
  lineColor?: string
  textColor?: string
  gradient?: boolean
  gradientStart?: string
  gradientEnd?: string
  primaryColor?: string
  secondaryColor?: string
}

export function ParticleHero({
  title,
  subtitle,
  description,
  showCTA = false,
  ctaText,
  ctaLink = "/contact",
  bgColor = "#0d1117",
  particleColor = "rgba(255, 255, 255, 0.5)",
  lineColor = "rgba(139, 196, 255, 0.3)",
  textColor = "white",
  gradient = false,
  gradientStart,
  gradientEnd,
  primaryColor,
  secondaryColor,
}: ParticleHeroProps) {
  const { t } = useLanguage()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Particle configuration
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
    }> = []

    const particleCount = 60
    const maxDistance = 150

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 2,
      })
    }

    // Animation loop
    let animationFrameId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Move particle
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particleColor
        ctx.fill()

        // Draw connections
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            const opacity =
              (1 - distance / maxDistance) *
              Number.parseFloat(lineColor.match(/[\d.]+\)$/)?.[0].replace(")", "") || "0.3")
            const baseColor =
              lineColor
                .match(/rgba?$$([^)]+)$$/)?.[1]
                .split(",")
                .slice(0, 3)
                .join(",") || "139, 196, 255"
            ctx.strokeStyle = `rgba(${baseColor}, ${opacity})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })
      })

      animationFrameId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [particleColor, lineColor])

  const backgroundStyle =
    gradient && gradientStart && gradientEnd
      ? { background: `linear-gradient(135deg, ${gradientStart} 0%, ${gradientEnd} 100%)` }
      : primaryColor && secondaryColor
        ? { background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)` }
        : { backgroundColor: bgColor }

  return (
    <section className="relative overflow-hidden" style={{ height: "500px", ...backgroundStyle }}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center z-10">
        {title && (
          <h1 className="text-5xl lg:text-6xl font-bold mb-6" style={{ color: textColor }}>
            {typeof title === "string" ? title : t(title)}
          </h1>
        )}
        {subtitle && (
          <p className="text-xl lg:text-2xl mb-4 max-w-3xl mx-auto" style={{ color: textColor, opacity: 0.9 }}>
            {typeof subtitle === "string" ? subtitle : t(subtitle)}
          </p>
        )}
        {description && (
          <p
            className="text-base lg:text-lg mb-8 max-w-2xl mx-auto leading-relaxed"
            style={{ color: textColor, opacity: 0.8 }}
          >
            {typeof description === "string" ? description : t(description)}
          </p>
        )}
        {showCTA && ctaText && (
          <Link
            href={ctaLink}
            className="inline-flex items-center px-8 py-3 text-base font-semibold rounded-full bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {t(ctaText)}
          </Link>
        )}
      </div>
    </section>
  )
}
