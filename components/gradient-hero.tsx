"use client"

import { useLanguage } from "@/contexts/language-context"

interface GradientHeroProps {
  title: { EN: string; CN: string }
  subtitle: { EN: string; CN: string }
}

export function GradientHero({ title, subtitle }: GradientHeroProps) {
  const { t } = useLanguage()

  return (
    <section className="relative bg-gradient-to-br from-[#0a1628] via-[#1a73e8] to-[#00bcd4] py-24 overflow-hidden">
      <div className="absolute top-[-50px] right-[10%] w-[300px] h-[300px] bg-[rgba(0,188,212,0.3)] rounded-full blur-[80px] animate-float"></div>
      <div className="absolute bottom-[-100px] left-[5%] w-[400px] h-[400px] bg-[rgba(255,255,255,0.15)] rounded-full blur-[80px] animate-float-delayed"></div>
      <div className="absolute top-[30%] left-[30%] w-[250px] h-[250px] bg-[rgba(26,115,232,0.2)] rounded-full blur-[60px] animate-float-slow"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center z-10">
        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">{t(title)}</h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto">{t(subtitle)}</p>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(20px, -20px) scale(1.1);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-30px, 30px) scale(1.15);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(15px, 15px) scale(1.05);
          }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
          animation-delay: -4s;
        }

        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
          animation-delay: -2s;
        }
      `}</style>
    </section>
  )
}
