"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const industries = [
  { name: { EN: "Automotive", CN: "汽车" }, icon: "🚗" },
  { name: { EN: "High Tech", CN: "高科技" }, icon: "💻" },
  { name: { EN: "Life Sciences", CN: "生命科学" }, icon: "🧬" },
  { name: { EN: "Healthcare", CN: "医疗健康" }, icon: "🏥" },
  { name: { EN: "Financial Industry", CN: "金融业" }, icon: "🏦" },
  { name: { EN: "Energy & Chemicals", CN: "能源化工" }, icon: "⚡" },
  { name: { EN: "Aerospace and Defense", CN: "航空航天与国防" }, icon: "✈️" },
  { name: { EN: "Retail & Consumer Goods", CN: "零售与消费品" }, icon: "🛒" },
]

export function IndustriesPreview() {
  const { t, language } = useLanguage()

  return (
    <section id="industries" className="bg-gray-50 py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t({ EN: "Industries", CN: "行业" })}</h2>
          <p className="text-lg text-gray-600">
            {t({ EN: "Serving diverse sectors with specialized expertise", CN: "为多个行业提供专业服务" })}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {industries.map((industry) => (
            <Link key={industry.name.EN} href="/industries">
              <Card className="bg-white p-8 h-32 hover:shadow-lg hover:border-[#0066CC] transition-all cursor-pointer border border-gray-200 flex flex-col items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-sm font-medium text-gray-900">{industry.name[language]}</h3>
                </div>
              </Card>
            </Link>
          ))}
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
