"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Phone, Mail, MapPin } from "lucide-react"
import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-16">
          {t({ EN: "Contact Us", CN: "联系我们" })}
        </h1>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">{t({ EN: "Get in Touch", CN: "联系方式" })}</h2>

            <div className="space-y-6">
              {/* Phone Numbers */}
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-[#0066CC] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-900 font-medium">{t({ EN: "Phone (HK)", CN: "电话（香港）" })}</p>
                  <a href="tel:+85267601338" className="text-gray-600 hover:text-[#0066CC] transition-colors">
                    +852 6760 1338
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-[#0066CC] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-900 font-medium">{t({ EN: "Phone (China)", CN: "电话（中国）" })}</p>
                  <a href="tel:+8618811633601" className="text-gray-600 hover:text-[#0066CC] transition-colors">
                    +86 188 1163 3601
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-[#0066CC] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-900 font-medium">{t({ EN: "Email", CN: "邮箱" })}</p>
                  <a href="mailto:info@atitans.com" className="text-gray-600 hover:text-[#0066CC] transition-colors">
                    info@atitans.com
                  </a>
                </div>
              </div>

              {/* Office */}
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#0066CC] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-900 font-medium">{t({ EN: "Office", CN: "办公室" })}</p>
                  <p className="text-gray-600">{t({ EN: "Hong Kong", CN: "香港" })}</p>
                  <p className="text-gray-600">{t({ EN: "Central Business District", CN: "中环商务区" })}</p>
                </div>
              </div>

              {/* WeChat QR Code */}
              <div className="pt-4">
                <p className="text-gray-900 font-medium mb-3">{t({ EN: "WeChat", CN: "微信" })}</p>
                <div className="w-40 h-40 bg-gray-100 border border-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white border-2 border-gray-300 mb-2"></div>
                    <p className="text-xs text-gray-500">{t({ EN: "QR Code", CN: "二维码" })}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">{t({ EN: "Send a Message", CN: "发送消息" })}</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[#0066CC] focus:outline-none focus:ring-1 focus:ring-[#0066CC] transition-colors"
                />
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
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[#0066CC] focus:outline-none focus:ring-1 focus:ring-[#0066CC] transition-colors"
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
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[#0066CC] focus:outline-none focus:ring-1 focus:ring-[#0066CC] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#0066CC] text-white px-8 py-3 font-medium hover:bg-[#0052a3] transition-colors"
              >
                {t({ EN: "Send Message", CN: "发送" })}
              </button>

              {submitted && (
                <p className="text-center text-green-600 text-sm">
                  {t({ EN: "Message sent successfully!", CN: "消息发送成功！" })}
                </p>
              )}
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
