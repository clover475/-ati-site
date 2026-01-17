"use client"

import { Header } from "@/components/header"
import { ParticleHero } from "@/components/particle-hero"
import { IndustriesPreview } from "@/components/industries-preview"
import { SolutionsPreview } from "@/components/solutions-preview"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ParticleHero
          title={{ EN: "Atitans International", CN: "埃坦国际" }}
          subtitle={{
            EN: "Digital transformation partner for global enterprises",
            CN: "全球企业的数字化转型合作伙伴",
          }}
          bgColor="#0a1628"
          particleColor="rgba(91, 155, 213, 0.6)"
          lineColor="rgba(91, 155, 213, 0.3)"
          textColor="white"
        />
        <IndustriesPreview />
        <SolutionsPreview />
      </main>
      <Footer />
    </div>
  )
}
