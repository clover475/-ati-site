"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const consultingServices = [
  { EN: "Strategy Consulting", CN: "战略咨询" },
  { EN: "Corporate and Growth Strategy", CN: "企业与增长战略" },
  { EN: "Transaction Strategy and Execution", CN: "交易战略与执行" },
  { EN: "Restructuring and Turnaround", CN: "重组与转型" },
  { EN: "Digital Strategy", CN: "数字化战略" },
]

const technologyServices = [
  { EN: "Cloud", CN: "云计算" },
  { EN: "Data & AI", CN: "数据与人工智能" },
  { EN: "Cybersecurity", CN: "网络安全" },
  { EN: "Learning & Knowledge Management", CN: "学习与知识管理" },
  { EN: "Sales and Commerce", CN: "销售与电商" },
]

export function SolutionsPreview() {
  const { t, language } = useLanguage()

  return (
    <section id="solutions" className="bg-white py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t({ EN: "Consulting and Technology", CN: "咨询与技术" })}
          </h2>
          <p className="text-lg text-gray-600">
            {t({ EN: "Comprehensive consulting and technology services", CN: "全面的咨询和技术服务" })}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-12">
          {/* Consulting Services */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              {t({ EN: "Consulting Services", CN: "咨询服务" })}
            </h3>
            <ul className="space-y-4">
              {consultingServices.map((service) => (
                <li key={service.EN}>
                  <Link
                    href="/consulting-technology"
                    className="flex items-start gap-3 hover:text-[#0066CC] transition-colors cursor-pointer group"
                  >
                    <ArrowRight className="w-5 h-5 text-[#0066CC] flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                    <span className="text-base text-gray-700 group-hover:text-[#0066CC]">{service[language]}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Services */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              {t({ EN: "Technology Services", CN: "技术服务" })}
            </h3>
            <ul className="space-y-4">
              {technologyServices.map((service) => (
                <li key={service.EN}>
                  <Link
                    href="/consulting-technology"
                    className="flex items-start gap-3 hover:text-[#0066CC] transition-colors cursor-pointer group"
                  >
                    <ArrowRight className="w-5 h-5 text-[#0066CC] flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                    <span className="text-base text-gray-700 group-hover:text-[#0066CC]">{service[language]}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/consulting-technology"
            className="inline-flex items-center gap-2 text-[#0066CC] font-medium hover:gap-3 transition-all"
          >
            {t({ EN: "Learn More", CN: "了解更多" })}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
