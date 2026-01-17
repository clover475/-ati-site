"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ParticleHero } from "@/components/particle-hero"
import { Building2, Cpu, Microscope, Heart, Landmark, Zap, Plane, ShoppingBag, X } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface Industry {
  id: string
  name: { EN: string; CN: string }
  icon: React.ReactNode
  description: { EN: string; CN: string }
  overview: { EN: string; CN: string }
  services: { EN: string; CN: string }[]
}

const industries: Industry[] = [
  {
    id: "automotive",
    name: { EN: "Automotive", CN: "汽车" },
    icon: <Building2 className="w-12 h-12 text-[#0066CC]" />,
    description: { EN: "Digital transformation for the automotive industry", CN: "汽车行业的数字化转型" },
    overview: {
      EN: "We help automotive companies navigate the shift to electric, autonomous, and connected vehicles through strategic consulting and cutting-edge technology solutions.",
      CN: "我们帮助汽车公司通过战略咨询和前沿技术解决方案，应对向电动、自动驾驶和互联汽车的转型。",
    },
    services: [
      { EN: "Digital supply chain optimization", CN: "数字化供应链优化" },
      { EN: "Connected vehicle platform development", CN: "车联网平台开发" },
      { EN: "Manufacturing process automation", CN: "制造流程自动化" },
      { EN: "Customer experience transformation", CN: "客户体验转型" },
    ],
  },
  {
    id: "high-tech",
    name: { EN: "High Tech", CN: "高科技" },
    icon: <Cpu className="w-12 h-12 text-[#0066CC]" />,
    description: { EN: "Innovation and scalability for technology companies", CN: "为科技企业提供创新和可扩展性" },
    overview: {
      EN: "We partner with technology companies to accelerate product innovation, scale operations, and optimize go-to-market strategies in rapidly evolving markets.",
      CN: "我们与科技公司合作，在快速发展的市场中加速产品创新、扩大运营规模和优化市场战略。",
    },
    services: [
      { EN: "Product development acceleration", CN: "产品开发加速" },
      { EN: "Cloud infrastructure optimization", CN: "云基础设施优化" },
      { EN: "Data analytics and AI integration", CN: "数据分析与人工智能集成" },
      { EN: "Agile transformation", CN: "敏捷转型" },
    ],
  },
  {
    id: "life-sciences",
    name: { EN: "Life Sciences", CN: "生命科学" },
    icon: <Microscope className="w-12 h-12 text-[#0066CC]" />,
    description: { EN: "Research and compliance solutions for life sciences", CN: "生命科学研究与合规解决方案" },
    overview: {
      EN: "We support life sciences organizations in accelerating research, ensuring regulatory compliance, and bringing innovative treatments to market faster.",
      CN: "我们支持生命科学组织加速研究、确保合规并更快地将创新疗法推向市场。",
    },
    services: [
      { EN: "Clinical trial management systems", CN: "临床试验管理系统" },
      { EN: "Regulatory compliance automation", CN: "监管合规自动化" },
      { EN: "Research data management", CN: "研究数据管理" },
      { EN: "Supply chain optimization", CN: "供应链优化" },
    ],
  },
  {
    id: "healthcare",
    name: { EN: "Healthcare", CN: "医疗健康" },
    icon: <Heart className="w-12 h-12 text-[#0066CC]" />,
    description: {
      EN: "Patient-centric technology for healthcare providers",
      CN: "为医疗服务提供商提供以患者为中心的技术",
    },
    overview: {
      EN: "We help healthcare organizations deliver better patient outcomes through digital innovation, operational efficiency, and data-driven insights.",
      CN: "我们帮助医疗机构通过数字创新、运营效率和数据驱动的洞察提供更好的患者结果。",
    },
    services: [
      { EN: "Electronic health record systems", CN: "电子健康记录系统" },
      { EN: "Telemedicine platform development", CN: "远程医疗平台开发" },
      { EN: "Healthcare analytics and reporting", CN: "医疗分析与报告" },
      { EN: "Patient engagement solutions", CN: "患者参与解决方案" },
    ],
  },
  {
    id: "financial",
    name: { EN: "Financial Services", CN: "金融服务" },
    icon: <Landmark className="w-12 h-12 text-[#0066CC]" />,
    description: {
      EN: "Secure digital transformation for banking and financial institutions",
      CN: "为银行和金融机构提供安全的数字化转型",
    },
    overview: {
      EN: "We enable financial institutions to modernize operations, enhance security, and deliver superior customer experiences in an increasingly digital landscape.",
      CN: "我们帮助金融机构在日益数字化的环境中实现运营现代化、增强安全性并提供卓越的客户体验。",
    },
    services: [
      { EN: "Digital banking transformation", CN: "数字银行转型" },
      { EN: "Regulatory compliance and risk management", CN: "监管合规与风险管理" },
      { EN: "Payment platform modernization", CN: "支付平台现代化" },
      { EN: "Fraud detection and prevention", CN: "欺诈检测与预防" },
    ],
  },
  {
    id: "energy",
    name: { EN: "Energy & Chemicals", CN: "能源化工" },
    icon: <Zap className="w-12 h-12 text-[#0066CC]" />,
    description: { EN: "Sustainability and efficiency for energy sectors", CN: "能源行业的可持续性与效率" },
    overview: {
      EN: "We assist energy and chemical companies in transitioning to sustainable operations, optimizing production, and leveraging digital technologies for competitive advantage.",
      CN: "我们帮助能源和化工企业转向可持续运营、优化生产并利用数字技术获得竞争优势。",
    },
    services: [
      { EN: "Smart grid and IoT solutions", CN: "智能电网与物联网解决方案" },
      { EN: "Predictive maintenance systems", CN: "预测性维护系统" },
      { EN: "Energy trading platforms", CN: "能源交易平台" },
      { EN: "Environmental compliance monitoring", CN: "环境合规监测" },
    ],
  },
  {
    id: "aerospace",
    name: { EN: "Aerospace and Defense", CN: "航空航天与国防" },
    icon: <Plane className="w-12 h-12 text-[#0066CC]" />,
    description: { EN: "Advanced systems for aerospace and defense", CN: "航空航天与国防的先进系统" },
    overview: {
      EN: "We support aerospace and defense organizations with mission-critical systems, secure communications, and advanced analytics for operational excellence.",
      CN: "我们为航空航天和国防组织提供关键任务系统、安全通信和高级分析以实现卓越运营。",
    },
    services: [
      { EN: "Mission-critical system integration", CN: "关键任务系统集成" },
      { EN: "Supply chain and logistics optimization", CN: "供应链与物流优化" },
      { EN: "Cybersecurity solutions", CN: "网络安全解决方案" },
      { EN: "Data analytics for operations", CN: "运营数据分析" },
    ],
  },
  {
    id: "retail",
    name: { EN: "Retail & Consumer Goods", CN: "零售与消费品" },
    icon: <ShoppingBag className="w-12 h-12 text-[#0066CC]" />,
    description: { EN: "Omnichannel excellence for retail businesses", CN: "零售业务的全渠道卓越" },
    overview: {
      EN: "We help retailers and consumer goods companies create seamless omnichannel experiences, optimize operations, and drive customer loyalty through data-driven strategies.",
      CN: "我们帮助零售商和消费品公司创建无缝的全渠道体验、优化运营并通过数据驱动的策略提高客户忠诚度。",
    },
    services: [
      { EN: "E-commerce platform development", CN: "电商平台开发" },
      { EN: "Inventory and supply chain optimization", CN: "库存与供应链优化" },
      { EN: "Customer data and personalization", CN: "客户数据与个性化" },
      { EN: "Store operations digitalization", CN: "门店运营数字化" },
    ],
  },
]

export default function IndustriesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | null>(null)
  const { t, language } = useLanguage()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <ParticleHero
        title={{ EN: "Industries", CN: "服务行业" }}
        subtitle={{ EN: "Expertise across key sectors", CN: "深耕核心行业，提供专业解决方案" }}
        bgColor="#1a1a2e"
        particleColor="rgba(200, 150, 255, 0.5)"
        lineColor="rgba(200, 150, 255, 0.3)"
        textColor="white"
      />

      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setSelectedIndustry(industry)}
              className="bg-white border border-gray-200 rounded-lg p-8 h-56 text-left transition-all hover:border-[#0066CC] hover:shadow-lg group flex flex-col justify-center"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform">{industry.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{industry.name[language]}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{industry.description[language]}</p>
            </button>
          ))}
        </div>
      </main>

      {/* Modal */}
      {selectedIndustry && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                {selectedIndustry.icon}
                <h2 className="text-2xl font-bold text-gray-900">{selectedIndustry.name[language]}</h2>
              </div>
              <button
                onClick={() => setSelectedIndustry(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="px-8 py-6">
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{t({ EN: "Overview", CN: "概述" })}</h3>
                <p className="text-gray-600 leading-relaxed">{selectedIndustry.overview[language]}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {t({ EN: "Our Services", CN: "我们的服务" })}
                </h3>
                <ul className="space-y-3">
                  {selectedIndustry.services.map((service, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0066CC] mt-2 flex-shrink-0" />
                      <span className="text-gray-600">{service[language]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-gray-50 px-8 py-6 border-t border-gray-200">
              <button
                onClick={() => setSelectedIndustry(null)}
                className="w-full bg-[#0066CC] text-white px-6 py-3 rounded-md font-medium hover:bg-[#0052a3] transition-colors"
              >
                {t({ EN: "Close", CN: "关闭" })}
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
