"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ParticleHero } from "@/components/particle-hero"
import { useLanguage } from "@/contexts/language-context"
import { Building2, Globe2, Users2, Shield } from "lucide-react"

export default function AboutPage() {
  const { t } = useLanguage()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const responsibilities = [
    {
      EN: "Businesses have a responsibility to adopt sustainable practices that minimize environmental impact while ensuring long-term growth for future generations.",
      CN: "企业有责任采用可持续实践，在确保子孙后代长期增长的同时将环境影响降至最低。",
    },
    {
      EN: "Corporate responsibility includes upholding ethical standards and fostering safe working conditions for all employees.",
      CN: "企业责任包括坚持道德标准，为所有员工营造安全的工作条件。",
    },
    {
      EN: "A company's success should be measured not only by profits but also by its commitment to social equity and community well-being.",
      CN: "衡量公司成功不仅要看利润，还要看其对社会公平和社区福祉的承诺。",
    },
    {
      EN: "Responsible corporations actively engage in reducing their carbon footprint and supporting initiatives that address global challenges like climate change.",
      CN: "负责任的企业积极参与减少碳足迹并支持应对气候变化等全球挑战的倡议。",
    },
    {
      EN: "Transparency in operations and accountability to stakeholders are fundamental pillars of corporate responsibility in the modern business landscape.",
      CN: "运营透明度和对利益相关者的问责制是现代商业环境中企业责任的基本支柱。",
    },
  ]

  const values = [
    { EN: "Integrity", CN: "诚信" },
    { EN: "Clients come first", CN: "客户至上" },
    { EN: "Partnership", CN: "合作伙伴关系" },
    { EN: "Respect for the individual", CN: "尊重个人" },
    { EN: "The strategic perspective", CN: "战略视角" },
    { EN: "Expanding the art of the possible", CN: "拓展可能性" },
    { EN: "Diversity", CN: "多样性" },
    { EN: "Value delivered", CN: "价值交付" },
    { EN: "Social impact", CN: "社会影响" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <ParticleHero
        title={{ EN: "About Us", CN: "关于我们" }}
        subtitle={{ EN: "Digital transformation partner for global enterprises", CN: "全球企业的数字化转型合作伙伴" }}
      />

      {/* Module 1: Company Introduction */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3 space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                {t({ EN: "Company Introduction", CN: "公司介绍" })}
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  {t({
                    EN: "Atitans International (ATI) is a global provider of management consulting, industry solutions, and information technology services. The company's senior partners have more than 20 years professional experience, they come from the world's first-tier companies such as IBM, Microsoft, McKinsey, Accenture, Deloitte, E&Y, etc.",
                    CN: "Atitans International (ATI) 是一家全球管理咨询、行业解决方案和信息技术服务提供商。公司高级合伙人拥有超过20年的专业经验，他们来自IBM、微软、麦肯锡、埃森哲、德勤、安永等世界一流企业。",
                  })}
                </p>
                <p>
                  {t({
                    EN: "We have multiple offices worldwide, including in Beijing, Shanghai, Hong Kong, Singapore, Tokyo, New York, London, Berlin and Dubai.",
                    CN: "我们在全球设有多个办事处，包括北京、上海、香港、新加坡、东京、纽约、伦敦、柏林和迪拜。",
                  })}
                </p>
                <p>
                  {t({
                    EN: "Our services include strategic consulting, industry solutions, enterprise technology services, and business operations support. Leveraging our extensive expertise in fields such as High-Tech, Internet, Automotive, Energy, Manufacturing, Retail and Life Sciences, we have served many Fortune 500 companies.",
                    CN: "我们的服务包括战略咨询、行业解决方案、企业技术服务和业务运营支持。凭借在高科技、互联网、汽车、能源、制造、零售和生命科学等领域的丰富专业知识，我们已为众多财富500强企业提供服务。",
                  })}
                </p>
                <p>
                  {t({
                    EN: "The company is technology-driven, adhering to in-depth cultivation in the industry and innovative technologies, and is committed to becoming the trusted partner for global enterprises in their digital transformation. With a precise and efficient communication, excellence in delivery quality, and rigorous operation system, we comprehensively support our clients in achieving outstanding value.",
                    CN: "公司以技术为驱动，坚持深耕行业和创新技术，致力于成为全球企业数字化转型的信赖合作伙伴。以精准高效的沟通、卓越的交付品质和严谨的运营体系，全面支持客户实现卓越价值。",
                  })}
                </p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a73e8]/20 to-[#0066CC]/20 rounded-2xl blur-2xl"></div>
                <div className="relative bg-gradient-to-br from-[#1a73e8] to-[#0066CC] rounded-2xl p-12 text-white">
                  <div className="space-y-8">
                    <div className="flex items-center gap-4">
                      <Globe2 className="w-12 h-12" />
                      <div>
                        <p className="text-3xl font-bold">9+</p>
                        <p className="text-white/80">{t({ EN: "Global Offices", CN: "全球办事处" })}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Users2 className="w-12 h-12" />
                      <div>
                        <p className="text-3xl font-bold">20+</p>
                        <p className="text-white/80">{t({ EN: "Years Experience", CN: "年经验" })}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Building2 className="w-12 h-12" />
                      <div>
                        <p className="text-3xl font-bold">500+</p>
                        <p className="text-white/80">{t({ EN: "Fortune 500 Clients", CN: "财富500强客户" })}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Module 2: Corporate Responsibility */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t({ EN: "Corporate Responsibility", CN: "企业责任" })}
            </h2>
            <p className="text-xl text-gray-600">
              {t({
                EN: "Our commitment to sustainable and ethical business practices",
                CN: "我们对可持续和道德商业实践的承诺",
              })}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {responsibilities.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border-t-4 border-[#1a73e8]"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#1a73e8] to-[#0066CC] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
                </div>
                <p className="text-gray-700 leading-relaxed">{t(item)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Module 3: Our Vision */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            {/* Left side: Title and intro (35%) */}
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{t({ EN: "Our Vision", CN: "我们的愿景" })}</h2>
              <p className="text-lg text-gray-600 leading-relaxed border-l-4 border-[#1a73e8] pl-6">
                {t({
                  EN: "Our values are the building blocks of our culture, embedded in everything we do and central to what allows us to be a global consulting firm that leads with integrity.",
                  CN: "我们的价值观是我们文化的基石，融入我们所做的一切，是我们成为以诚信为先的全球咨询公司的核心。",
                })}
              </p>
            </div>

            {/* Right side: Staggered tag cloud (65%) */}
            <div className="lg:col-span-3">
              <div className="space-y-4">
                {/* Row 1: 3 tags */}
                <div className="flex flex-wrap gap-4 justify-start">
                  {[values[0], values[1], values[2]].map((value, index) => (
                    <div
                      key={index}
                      className="group px-6 py-3 bg-white border border-[#1a73e8]/30 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-[#1a73e8] transition-all duration-300 cursor-pointer"
                    >
                      <span className="text-sm font-medium text-gray-800 group-hover:text-[#1a73e8] transition-colors">
                        {t(value)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Row 2: 2 tags (offset) */}
                <div className="flex flex-wrap gap-4 justify-start pl-8">
                  {[values[3], values[4]].map((value, index) => (
                    <div
                      key={index}
                      className="group px-6 py-3 bg-white border border-[#1a73e8]/30 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-[#1a73e8] transition-all duration-300 cursor-pointer"
                    >
                      <span className="text-sm font-medium text-gray-800 group-hover:text-[#1a73e8] transition-colors">
                        {t(value)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Row 3: 2 tags */}
                <div className="flex flex-wrap gap-4 justify-start">
                  {[values[5], values[6]].map((value, index) => (
                    <div
                      key={index}
                      className="group px-6 py-3 bg-white border border-[#1a73e8]/30 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-[#1a73e8] transition-all duration-300 cursor-pointer"
                    >
                      <span className="text-sm font-medium text-gray-800 group-hover:text-[#1a73e8] transition-colors">
                        {t(value)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Row 4: 2 tags (offset) */}
                <div className="flex flex-wrap gap-4 justify-start pl-12">
                  {[values[7], values[8]].map((value, index) => (
                    <div
                      key={index}
                      className="group px-6 py-3 bg-white border border-[#1a73e8]/30 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-[#1a73e8] transition-all duration-300 cursor-pointer"
                    >
                      <span className="text-sm font-medium text-gray-800 group-hover:text-[#1a73e8] transition-colors">
                        {t(value)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Module 4: Code of Conduct */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="flex items-start gap-4">
                <div className="w-1 h-32 bg-gradient-to-b from-[#1a73e8] to-[#0066CC] rounded-full"></div>
                <div>
                  <Shield className="w-12 h-12 text-[#1a73e8] mb-4" />
                  <h2 className="text-4xl font-bold text-gray-900">{t({ EN: "Code of Conduct", CN: "行为准则" })}</h2>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                {t({
                  EN: "Our Code of Conduct encapsulates Atitans's commitment to acting responsibly, backed by individual integrity and professional conduct. It outlines our expectations for behavior to all employees and others working on our behalf, and serves as a bridge between our purpose, our values, and our global processes and policies. It is intended to foster integrity and inform decision making while aligning our actions with expected standards of professional conduct.",
                  CN: "我们的行为准则体现了Atitans以个人诚信和专业行为为支撑的负责任行事承诺。它概述了我们对所有员工和代表我们工作的其他人的行为期望，并作为我们的宗旨、价值观以及全球流程和政策之间的桥梁。它旨在培养诚信、指导决策，同时使我们的行为符合专业行为的预期标准。",
                })}
              </p>
              <p>
                {t({
                  EN: "We periodically review and if needed update the Code of Conduct to reflect developments in corporate ethics and compliance.",
                  CN: "我们会定期审查并在必要时更新行为准则，以反映企业道德和合规方面的发展。",
                })}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
