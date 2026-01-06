"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ParticleHero } from "@/components/particle-hero"
import { useLanguage } from "@/contexts/language-context"

export default function PartnersPage() {
  const { t } = useLanguage()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const customers = [
    // Pharmaceutical/Healthcare
    { name: "Pfizer", logo: "/images/image.png" },
    { name: "Boehringer Ingelheim", logo: "/images/image.png" },
    { name: "Thermo Fisher Scientific", logo: "/images/image.png" },
    { name: "Fresenius Kabi", logo: "/images/image.png" },
    { name: "AstraZeneca", logo: "/images/image.png" },
    { name: "Johnson & Johnson", logo: "/images/image.png" },
    { name: "MSD", logo: "/images/image.png" },
    { name: "Sanofi", logo: "/images/image.png" },
    { name: "Boston Scientific", logo: "/images/image.png" },
    { name: "Merck", logo: "/images/image.png" },
    { name: "Medtronic", logo: "/images/image.png" },
    { name: "Novartis", logo: "/images/image.png" },
    { name: "Takeda", logo: "/images/image.png" },
    { name: "Mead Johnson Nutrition", logo: "/images/image.png" },
  ]

  const partners = [
    { name: "Microsoft", logo: "/placeholder.svg?height=60&width=150" },
    { name: "ServiceNow", logo: "/placeholder.svg?height=60&width=150" },
    { name: "Splunk", logo: "/placeholder.svg?height=60&width=150" },
    { name: "SkyGuard", logo: "/placeholder.svg?height=60&width=150" },
    { name: "Anheng", logo: "/placeholder.svg?height=60&width=150" },
    { name: "NSFOCUS", logo: "/placeholder.svg?height=60&width=150" },
    { name: "Huawei", logo: "/placeholder.svg?height=60&width=150" },
    { name: "Alibaba Cloud", logo: "/placeholder.svg?height=60&width=150" },
    { name: "IBM", logo: "/placeholder.svg?height=60&width=150" },
    { name: "AWS", logo: "/placeholder.svg?height=60&width=150" },
    { name: "SAP", logo: "/placeholder.svg?height=60&width=150" },
    { name: "Elastic", logo: "/placeholder.svg?height=60&width=150" },
    { name: "Qi-Anxin", logo: "/placeholder.svg?height=60&width=150" },
    { name: "Tencent Cloud", logo: "/placeholder.svg?height=60&width=150" },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <ParticleHero
        title={{ EN: "Partners & Customers", CN: "合作伙伴与客户" }}
        subtitle={{ EN: "Trusted by leading enterprises worldwide", CN: "获得全球领先企业的信赖" }}
        gradient={true}
        gradientStart="#1e3a8a"
        gradientEnd="#3b82f6"
        textColor="white"
        particleColor="rgba(255, 255, 255, 0.6)"
        lineColor="rgba(147, 197, 253, 0.4)"
      />

      <main className="flex-1">
        {/* Our Customers Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
              {t({ EN: "Our Customers", CN: "我们的客户" })}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-x-8 gap-y-12 items-center justify-items-center">
              {customers.map((customer, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                >
                  <img
                    src={customer.logo || "/placeholder.svg"}
                    alt={customer.name}
                    className="w-[140px] h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Partners Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
              {t({ EN: "Our Partners", CN: "我们的合作伙伴" })}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                >
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    className="max-w-full h-auto max-h-12"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
