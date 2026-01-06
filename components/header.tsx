"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export function Header() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-[auto_1fr_auto] items-center h-20 gap-6">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <span className="text-3xl font-bold">
              <span className="text-[#2c3e50]">AT</span>
              <span className="text-[#5b9bd5]">&</span>
              <span className="text-[#2c3e50]">I</span>
            </span>
          </Link>

          {/* Center: Navigation Menu - centered in the middle column */}
          <nav className="hidden md:flex items-center justify-center gap-6">
            <Link href="/" className="text-sm text-gray-700 hover:text-[#0066CC] transition-colors whitespace-nowrap">
              {t({ EN: "Home", CN: "首页" })}
            </Link>
            <Link
              href="/industries"
              className="text-sm text-gray-700 hover:text-[#0066CC] transition-colors whitespace-nowrap"
            >
              {t({ EN: "Industries", CN: "行业" })}
            </Link>
            <Link
              href="/consulting-technology"
              className="text-sm text-gray-700 hover:text-[#0066CC] transition-colors whitespace-nowrap"
            >
              {t({ EN: "Consulting & Technology", CN: "咨询与技术" })}
            </Link>
            <Link
              href="/enterprise-ai"
              className="text-sm text-gray-700 hover:text-[#0066CC] transition-colors whitespace-nowrap"
            >
              {t({ EN: "Enterprise AI Agent", CN: "企业AI智能体" })}
            </Link>
            <Link
              href="/partners"
              className="text-sm text-gray-700 hover:text-[#0066CC] transition-colors whitespace-nowrap"
            >
              {t({ EN: "Partners & Customers", CN: "合作伙伴与客户" })}
            </Link>
            <Link
              href="/about"
              className="text-sm text-gray-700 hover:text-[#0066CC] transition-colors whitespace-nowrap"
            >
              {t({ EN: "About Us", CN: "关于我们" })}
            </Link>
            <Link
              href="/contact"
              className="text-sm text-gray-700 hover:text-[#0066CC] transition-colors whitespace-nowrap"
            >
              {t({ EN: "Contact Us", CN: "联系我们" })}
            </Link>
          </nav>

          {/* Right: Language Switcher */}
          <div className="flex items-center gap-1 border border-gray-300 rounded overflow-hidden flex-shrink-0">
            <button
              onClick={() => setLanguage("EN")}
              className={`px-3 py-1 text-xs font-medium transition-all ${
                language === "EN" ? "bg-[#0066CC] text-white" : "bg-transparent text-gray-600 hover:bg-gray-100"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("CN")}
              className={`px-3 py-1 text-xs font-medium transition-all ${
                language === "CN" ? "bg-[#0066CC] text-white" : "bg-transparent text-gray-600 hover:bg-gray-100"
              }`}
            >
              中
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
