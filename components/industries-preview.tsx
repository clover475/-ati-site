"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { ArrowRight, Building2, Cpu, Microscope, Heart, Landmark, Zap, Plane, ShoppingBag } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const industries = [
  { name: { EN: "Automotive", CN: "汽车" }, Icon: Building2 },
  { name: { EN: "High Tech", CN: "高科技" }, Icon: Cpu },
  { name: { EN: "Life Sciences", CN: "生命科学" }, Icon: Microscope },
  { name: { EN: "Healthcare", CN: "医疗健康" }, Icon: Heart },
  { name: { EN: "Financial Services", CN: "金融服务" }, Icon: Landmark },
  { name: { EN: "Energy & Chemicals", CN: "能源化工" }, Icon: Zap },
  { name: { EN: "Aerospace & Defense", CN: "航空航天与国防" }, Icon: Plane },
  { name: { EN: "Retail & Consumer", CN: "零售与消费品" }, Icon: ShoppingBag },
]

export function IndustriesPreview() {
  const { t, language } = useLanguage()

  return (
    <section id="industries" className="bg-gray-50 py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t({ EN: "Industries We Serve", CN: "我们服务的行业" })}
          </h2>
          <p className="text-lg text-gray-600">
            {t({ EN: "Delivering specialized expertise across key sectors", CN: "深耕核心行业，提供专业解决方案" })}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {industries.map((industry) => {
            const IconComponent = industry.Icon
            return (
              <Link key={industry.name.EN} href="/industries">
                <Card className="bg-white p-8 h-36 hover:shadow-lg hover:border-[#0066CC] transition-all cursor-pointer border border-gray-200 flex flex-col items-center justify-center group">
                  <div className="text-center">
                    <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-12 h-12 text-[#0066CC]" />
                    </div>
                    <h3 className="text-sm font-medium text-gray-900">{industry.name[language]}</h3>
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>

        <div className="text-center">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-[#0066CC] font-medium hover:gap-3 transition-all"
          >
            {t({ EN: "View All Industries", CN: "查看所有行业" })}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
