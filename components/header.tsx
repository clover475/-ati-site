"use client"

import { useState } from "react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { Menu, X } from "lucide-react"

export function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "/", label: { EN: "Home", CN: "首页" } },
    { href: "/industries", label: { EN: "Industries", CN: "行业" } },
    { href: "/consulting-technology", label: { EN: "Consulting & Technology", CN: "咨询与技术" } },
    { href: "/enterprise-ai", label: { EN: "Enterprise AI Agent", CN: "企业AI智能体" } },
    { href: "/partners", label: { EN: "Partners & Customers", CN: "合作伙伴与客户" } },
    { href: "/about", label: { EN: "About Us", CN: "关于我们" } },
    { href: "/contact", label: { EN: "Contact Us", CN: "联系我们" } },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <span className="text-2xl md:text-3xl font-bold">
              <span className="text-[#2c3e50]">AT</span>
              <span className="text-[#5b9bd5]">&</span>
              <span className="text-[#2c3e50]">I</span>
            </span>
          </Link>

          {/* Center: Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center gap-4 xl:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-700 hover:text-[#0066CC] transition-colors whitespace-nowrap"
              >
                {t(link.label)}
              </Link>
            ))}
          </nav>

          {/* Right: Language Switcher + Mobile Menu Button */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center gap-1 border border-gray-300 rounded overflow-hidden flex-shrink-0">
              <button
                onClick={() => setLanguage("EN")}
                className={`px-2 md:px-3 py-1 text-xs font-medium transition-all ${
                  language === "EN" ? "bg-[#0066CC] text-white" : "bg-transparent text-gray-600 hover:bg-gray-100"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("CN")}
                className={`px-2 md:px-3 py-1 text-xs font-medium transition-all ${
                  language === "CN" ? "bg-[#0066CC] text-white" : "bg-transparent text-gray-600 hover:bg-gray-100"
                }`}
              >
                中
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-[#0066CC] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-base text-gray-700 hover:text-[#0066CC] hover:bg-gray-50 rounded-lg transition-colors"
              >
                {t(link.label)}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
