"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="bg-white py-32 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance">
          {t({ EN: "Digital Transformation Partner", CN: "数字化转型合作伙伴" })}
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto text-pretty leading-relaxed">
          {t({
            EN: "Global provider of management consulting, industry solutions, and information technology services",
            CN: "全球领先的管理咨询、行业解决方案和信息技术服务提供商",
          })}
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-[#0066CC] hover:bg-[#0052A3] text-white px-8 py-6 text-base">
            {t({ EN: "Contact Us", CN: "联系我们" })}
          </Button>
        </Link>
      </div>
    </section>
  )
}
