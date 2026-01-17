"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ParticleHero } from "@/components/particle-hero"
import { ChevronDown } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const consultingServices = [
  {
    id: "strategy-consulting",
    name: { EN: "Strategy Consulting", CN: "战略咨询" },
    description: {
      EN: "Transform your business with strategic insights and actionable roadmaps tailored to your industry.",
      CN: "通过针对您行业量身定制的战略洞察和可执行路线图转型您的业务。",
    },
    capabilities: [
      { EN: "Market analysis and competitive positioning", CN: "市场分析与竞争定位" },
      { EN: "Business model innovation", CN: "商业模式创新" },
      { EN: "Strategic planning and execution", CN: "战略规划与执行" },
      { EN: "Performance optimization", CN: "绩效优化" },
    ],
  },
  {
    id: "corporate-growth",
    name: { EN: "Corporate and Growth Strategy", CN: "企业与增长战略" },
    description: {
      EN: "Drive sustainable growth through data-driven strategies and market expansion opportunities.",
      CN: "通过数据驱动的战略和市场扩张机会推动可持续增长。",
    },
    capabilities: [
      { EN: "Growth opportunity identification", CN: "增长机会识别" },
      { EN: "Market entry strategies", CN: "市场进入策略" },
      { EN: "Portfolio optimization", CN: "投资组合优化" },
      { EN: "Organic and inorganic growth planning", CN: "有机和无机增长规划" },
    ],
  },
  {
    id: "transaction-strategy",
    name: { EN: "Transaction Strategy and Execution", CN: "交易战略与执行" },
    description: {
      EN: "Navigate complex transactions with confidence through expert M&A advisory and execution support.",
      CN: "通过专业的并购咨询和执行支持，自信地应对复杂的交易。",
    },
    capabilities: [
      { EN: "M&A strategy and due diligence", CN: "并购战略与尽职调查" },
      { EN: "Valuation and deal structuring", CN: "估值与交易结构设计" },
      { EN: "Post-merger integration", CN: "并购后整合" },
      { EN: "Carve-out and divestiture support", CN: "业务剥离与资产剥离支持" },
    ],
  },
  {
    id: "restructuring",
    name: { EN: "Restructuring and Turnaround", CN: "重组与转型" },
    description: {
      EN: "Restore business health and profitability through comprehensive restructuring and turnaround solutions.",
      CN: "通过全面的重组和转型解决方案恢复业务健康和盈利能力。",
    },
    capabilities: [
      { EN: "Financial restructuring", CN: "财务重组" },
      { EN: "Operational improvement", CN: "运营改进" },
      { EN: "Stakeholder management", CN: "利益相关者管理" },
      { EN: "Change management and implementation", CN: "变革管理与实施" },
    ],
  },
  {
    id: "digital-strategy",
    name: { EN: "Digital Strategy", CN: "数字化战略" },
    description: {
      EN: "Lead digital transformation initiatives that create competitive advantage and unlock new value.",
      CN: "领导创造竞争优势和释放新价值的数字化转型计划。",
    },
    capabilities: [
      { EN: "Digital maturity assessment", CN: "数字化成熟度评估" },
      { EN: "Technology roadmap development", CN: "技术路线图开发" },
      { EN: "Digital operating model design", CN: "数字化运营模式设计" },
      { EN: "Innovation and emerging technology adoption", CN: "创新与新兴技术采用" },
    ],
  },
]

const technologyServices = [
  {
    id: "cloud",
    name: { EN: "Cloud", CN: "云计算" },
    description: {
      EN: "Accelerate your cloud journey with scalable infrastructure and modern cloud-native solutions.",
      CN: "通过可扩展的基础设施和现代云原生解决方案加速您的云之旅。",
    },
    capabilities: [
      { EN: "Cloud migration and modernization", CN: "云迁移与现代化" },
      { EN: "Multi-cloud architecture design", CN: "多云架构设计" },
      { EN: "DevOps and automation", CN: "DevOps与自动化" },
      { EN: "Cloud cost optimization", CN: "云成本优化" },
    ],
  },
  {
    id: "data-ai",
    name: { EN: "Data & AI", CN: "数据与人工智能" },
    description: {
      EN: "Harness the power of data and artificial intelligence to drive intelligent decision-making.",
      CN: "利用数据和人工智能的力量推动智能决策。",
    },
    capabilities: [
      { EN: "Data platform and architecture", CN: "数据平台与架构" },
      { EN: "Advanced analytics and BI", CN: "高级分析与商业智能" },
      { EN: "Machine learning and AI solutions", CN: "机器学习与人工智能解决方案" },
      { EN: "Data governance and quality", CN: "数据治理与质量" },
    ],
  },
  {
    id: "cybersecurity",
    name: { EN: "Cybersecurity", CN: "网络安全" },
    description: {
      EN: "Protect your digital assets with comprehensive security strategies and advanced threat protection.",
      CN: "通过全面的安全战略和先进的威胁防护保护您的数字资产。",
    },
    capabilities: [
      { EN: "Security assessment and strategy", CN: "安全评估与战略" },
      { EN: "Identity and access management", CN: "身份与访问管理" },
      { EN: "Threat detection and response", CN: "威胁检测与响应" },
      { EN: "Compliance and risk management", CN: "合规与风险管理" },
    ],
  },
  {
    id: "learning-knowledge",
    name: { EN: "Learning & Knowledge Management", CN: "学习与知识管理" },
    description: {
      EN: "Empower your workforce with modern learning platforms and intelligent knowledge management systems.",
      CN: "通过现代学习平台和智能知识管理系统赋能您的员工。",
    },
    capabilities: [
      { EN: "Learning management systems", CN: "学习管理系统" },
      { EN: "Knowledge base development", CN: "知识库开发" },
      { EN: "Content management and delivery", CN: "内容管理与交付" },
      { EN: "Training program design", CN: "培训计划设计" },
    ],
  },
  {
    id: "sales-commerce",
    name: { EN: "Sales and Commerce", CN: "销售与电商" },
    description: {
      EN: "Transform customer experiences with digital commerce platforms and sales enablement tools.",
      CN: "通过数字商务平台和销售赋能工具转型客户体验。",
    },
    capabilities: [
      { EN: "E-commerce platform development", CN: "电商平台开发" },
      { EN: "Sales force automation", CN: "销售自动化" },
      { EN: "Customer experience optimization", CN: "客户体验优化" },
      { EN: "Omnichannel commerce strategies", CN: "全渠道商务策略" },
    ],
  },
]

export default function SolutionsPage() {
  const [expandedConsulting, setExpandedConsulting] = useState<string | null>(null)
  const [expandedTechnology, setExpandedTechnology] = useState<string | null>(null)
  const { t, language } = useLanguage()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const toggleConsulting = (id: string) => {
    setExpandedConsulting(expandedConsulting === id ? null : id)
  }

  const toggleTechnology = (id: string) => {
    setExpandedTechnology(expandedTechnology === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <ParticleHero
        title={{ EN: "Consulting & Technology", CN: "咨询与技术" }}
        subtitle={{
          EN: "Strategic consulting and technology solutions",
          CN: "战略咨询和技术解决方案",
        }}
        bgColor="#0d47a1"
        particleColor="rgba(255, 255, 255, 0.7)"
        lineColor="rgba(255, 255, 255, 0.25)"
        textColor="white"
      />

      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Consulting Services Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t({ EN: "Consulting Services", CN: "咨询服务" })}</h2>
          <div className="space-y-4">
            {consultingServices.map((service) => (
              <div
                key={service.id}
                className="border border-gray-200 rounded-lg overflow-hidden hover:border-[#0066CC] transition-colors"
              >
                <button
                  onClick={() => toggleConsulting(service.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-xl font-semibold text-gray-900">{service.name[language]}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-[#0066CC] transition-transform ${
                      expandedConsulting === service.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedConsulting === service.id && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <p className="text-gray-700 mb-4 mt-4 leading-relaxed">{service.description[language]}</p>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      {t({ EN: "Key Capabilities:", CN: "核心能力：" })}
                    </h4>
                    <ul className="space-y-2">
                      {service.capabilities.map((capability, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-[#0066CC] mt-1">•</span>
                          <span className="text-gray-700">{capability[language]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Technology Services Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t({ EN: "Technology Services", CN: "技术服务" })}</h2>
          <div className="space-y-4">
            {technologyServices.map((service) => (
              <div
                key={service.id}
                className="border border-gray-200 rounded-lg overflow-hidden hover:border-[#0066CC] transition-colors"
              >
                <button
                  onClick={() => toggleTechnology(service.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-xl font-semibold text-gray-900">{service.name[language]}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-[#0066CC] transition-transform ${
                      expandedTechnology === service.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedTechnology === service.id && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <p className="text-gray-700 mb-4 mt-4 leading-relaxed">{service.description[language]}</p>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      {t({ EN: "Key Capabilities:", CN: "核心能力：" })}
                    </h4>
                    <ul className="space-y-2">
                      {service.capabilities.map((capability, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-[#0066CC] mt-1">•</span>
                          <span className="text-gray-700">{capability[language]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
