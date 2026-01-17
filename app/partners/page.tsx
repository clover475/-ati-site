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

  // Customer industries with their logos
  const customerIndustries = [
    {
      id: "financial",
      nameEN: "Financial Services",
      nameCN: "金融服务行业",
      icon: "💼",
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      logos: Array.from({ length: 14 }, (_, i) => ({
        id: i + 1,
        src: `/customers/financial/${String(i + 1).padStart(2, '0')}.png`
      }))
    },
    {
      id: "automotive",
      nameEN: "Automotive Manufacturing",
      nameCN: "汽车制造行业",
      icon: "🚗",
      color: "from-slate-600 to-zinc-800",
      bgColor: "bg-slate-50",
      borderColor: "border-slate-200",
      logos: [
        { id: 1, src: "/customers/automotive/01.png" },
        { id: 2, src: "/customers/automotive/02.png" },
        { id: 3, src: "/customers/automotive/03.png" },
        { id: 4, src: "/customers/automotive/04.png" },
        { id: 5, src: "/customers/automotive/05.png" },
        { id: 6, src: "/customers/automotive/06.png" },
        { id: 7, src: "/customers/automotive/07.png" },
        { id: 8, src: "/customers/automotive/08.avif" },
        { id: 9, src: "/customers/automotive/09.png" },
        { id: 10, src: "/customers/automotive/10.jpeg" },
        { id: 11, src: "/customers/automotive/11.png" },
        { id: 12, src: "/customers/automotive/12.png" },
        { id: 13, src: "/customers/automotive/13.png" },
        { id: 14, src: "/customers/automotive/14.jpeg" },
        { id: 15, src: "/customers/automotive/15.jpeg" },
        { id: 16, src: "/customers/automotive/16.png" },
        { id: 17, src: "/customers/automotive/17.png" },
        { id: 18, src: "/customers/automotive/18.jpeg" },
        { id: 19, src: "/customers/automotive/19.png" },
        { id: 20, src: "/customers/automotive/20.png" },
        { id: 21, src: "/customers/automotive/21.svg" },
        { id: 22, src: "/customers/automotive/22.png" },
        { id: 23, src: "/customers/automotive/23.png" },
        { id: 24, src: "/customers/automotive/24.png" },
        { id: 25, src: "/customers/automotive/25.jpeg" },
        { id: 26, src: "/customers/automotive/26.png" },
        { id: 27, src: "/customers/automotive/27.png" },
        { id: 28, src: "/customers/automotive/28.png" },
      ]
    },
    {
      id: "energy",
      nameEN: "Energy & Chemical",
      nameCN: "能源化工行业",
      icon: "⚡",
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      logos: Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        src: `/customers/energy/${String(i + 1).padStart(2, '0')}.png`
      }))
    },
    {
      id: "retail",
      nameEN: "Retail & Consumer Goods",
      nameCN: "零售快消行业",
      icon: "🛒",
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      logos: Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        src: `/customers/retail/${String(i + 1).padStart(2, '0')}.png`
      }))
    },
    {
      id: "lifescience",
      nameEN: "Life Sciences",
      nameCN: "生命科学行业",
      icon: "🧬",
      color: "from-rose-500 to-pink-600",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-200",
      logos: Array.from({ length: 15 }, (_, i) => ({
        id: i + 1,
        src: `/customers/lifescience/${String(i + 1).padStart(2, '0')}.png`
      }))
    }
  ]

  // Partner logos
  const partners = Array.from({ length: 14 }, (_, i) => ({
    id: i + 1,
    src: `/partners/${String(i + 1).padStart(2, '0')}.png`
  }))

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
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t({ EN: "Our Customers", CN: "我们的客户" })}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t({ 
                  EN: "Trusted by industry leaders across multiple sectors", 
                  CN: "深受多行业领军企业信赖" 
                })}
              </p>
            </div>

            {/* Industry Cards */}
            <div className="space-y-12">
              {customerIndustries.map((industry, industryIndex) => (
                <div 
                  key={industry.id}
                  className={`rounded-2xl border ${industry.borderColor} ${industry.bgColor} p-8 transition-all duration-300 hover:shadow-lg`}
                  style={{
                    animationDelay: `${industryIndex * 100}ms`
                  }}
                >
                  {/* Industry Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <h3 className="text-2xl font-bold text-gray-800">
                      {t({ EN: industry.nameEN, CN: industry.nameCN })}
                    </h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
                  </div>

                  {/* Logos Grid */}
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
                    {industry.logos.map((logo) => (
                      <div
                        key={logo.id}
                        className="group relative bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className="aspect-[3/2] flex items-center justify-center bg-white rounded-lg">
                          <img
                            src={logo.src}
                            alt={`Customer ${logo.id}`}
                            className="max-w-full max-h-full object-contain opacity-90 group-hover:opacity-100 transition-all duration-300"
                            style={{ backgroundColor: 'white' }}
                            loading="lazy"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Partners Section */}
        <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                {t({ EN: "Our Partners", CN: "我们的合作伙伴" })}
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                {t({ 
                  EN: "Strategic alliances with world-class technology providers", 
                  CN: "与世界一流技术提供商建立战略联盟" 
                })}
              </p>
            </div>

            {/* Partners Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
              {partners.map((partner, index) => (
                <div
                  key={partner.id}
                  className="group relative bg-white rounded-xl p-5 border border-gray-200 hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  <div className="aspect-[3/2] flex items-center justify-center">
                    <img
                      src={partner.src}
                      alt={`Partner ${partner.id}`}
                      className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">79+</div>
                <div className="text-gray-600">{t({ EN: "Enterprise Customers", CN: "企业客户" })}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">14+</div>
                <div className="text-gray-600">{t({ EN: "Technology Partners", CN: "技术合作伙伴" })}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">5</div>
                <div className="text-gray-600">{t({ EN: "Industry Sectors", CN: "行业领域" })}</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
