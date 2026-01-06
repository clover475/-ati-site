"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ParticleHero } from "@/components/particle-hero"
import { useLanguage } from "@/contexts/language-context"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", phone: "", email: "", message: "" })
  }

  const offices = [
    {
      city: { EN: "Beijing", CN: "北京" },
      address: {
        EN: "6th Floor, Block 2, China World Trade Center, 79 Jianguo Road, Chaoyang District, Beijing",
        CN: "北京市朝阳区建国路79号华贸写字楼2座6层",
      },
    },
    {
      city: { EN: "Germany", CN: "德国" },
      address: {
        EN: "Oberliederbacher Weg 25, 65843 Sulzbach, Germany",
        CN: "Oberliederbacher Weg 25, 65843 Sulzbach, Germany",
      },
    },
    {
      city: { EN: "Saudi Arabia", CN: "沙特阿拉伯" },
      address: {
        EN: "RGMA2827, Abdulmunem bin Abi Nasser Street, Al Mather Al Shamali, Riyadh 12314, Saudi Arabia",
        CN: "RGMA2827, Abdulmunem bin Abi Nasser Street, Al Mather Al Shamali, Riyadh 12314, Saudi Arabia",
      },
    },
    {
      city: { EN: "Hong Kong", CN: "香港" },
      address: {
        EN: "Room 704, 7/F, Tower A, New Mandarin Plaza, 14 Science Museum Road, TST East, Kowloon, Hong Kong",
        CN: "Room 704, 7/F, Tower A, New Mandarin Plaza, 14 Science Museum Road, TST East, Kowloon, Hong Kong",
      },
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <ParticleHero
        title={{ EN: "Contact Us", CN: "联系我们" }}
        subtitle={{ EN: "Get in touch with our global team", CN: "与我们的全球团队取得联系" }}
        bgColor="#f0f2f5"
        particleColor="rgba(26, 115, 232, 0.4)"
        lineColor="rgba(0, 102, 204, 0.2)"
        textColor="#1a202c"
      />

      {/* Contact Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <div className="flex items-center gap-4 bg-white rounded-xl p-6 shadow-sm">
              <Phone className="w-8 h-8 text-[#0066CC] flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-500 mb-1">{t({ EN: "Phone", CN: "电话" })}</p>
                <a
                  href="tel:+8618811633601"
                  className="text-lg font-medium text-gray-900 hover:text-[#0066CC] transition-colors"
                >
                  +86 188 1163 3601
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white rounded-xl p-6 shadow-sm">
              <Mail className="w-8 h-8 text-[#0066CC] flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-500 mb-1">{t({ EN: "Email", CN: "邮箱" })}</p>
                <a
                  href="mailto:ericguo@atitans.com"
                  className="text-lg font-medium text-gray-900 hover:text-[#0066CC] transition-colors"
                >
                  ericguo@atitans.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t({ EN: "Our Global Offices", CN: "全球办公室" })}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {offices.map((office, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#0066CC] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{t(office.city)}</h3>
                    <p className="text-gray-600 leading-relaxed">{t(office.address)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t({ EN: "Send Us a Message", CN: "给我们留言" })}
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-2xl p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                  {t({ EN: "Name", CN: "姓名" })}
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#0066CC] focus:outline-none focus:ring-2 focus:ring-[#0066CC]/20 transition-all"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                  {t({ EN: "Phone", CN: "电话" })}
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#0066CC] focus:outline-none focus:ring-2 focus:ring-[#0066CC]/20 transition-all"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                {t({ EN: "Email", CN: "邮箱" })}
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#0066CC] focus:outline-none focus:ring-2 focus:ring-[#0066CC]/20 transition-all"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                {t({ EN: "Message", CN: "留言" })}
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#0066CC] focus:outline-none focus:ring-2 focus:ring-[#0066CC]/20 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#0066CC] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#0052a3] transition-colors text-lg"
            >
              {t({ EN: "Submit", CN: "提交" })}
            </button>

            {submitted && (
              <p className="text-center text-green-600 font-medium">
                {t({ EN: "Message sent successfully!", CN: "消息发送成功！" })}
              </p>
            )}
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}
