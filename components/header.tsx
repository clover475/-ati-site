"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export function Header() {
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "EN" ? "CN" : "EN")
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-3xl font-bold text-[#0066CC]">ATI</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            <Link href="/" className="text-base text-gray-700 hover:text-[#0066CC] transition-colors">
              {t({ EN: "Home", CN: "首页" })}
            </Link>
            <Link href="/industries" className="text-base text-gray-700 hover:text-[#0066CC] transition-colors">
              {t({ EN: "Industries", CN: "行业" })}
            </Link>
            <Link href="/solutions" className="text-base text-gray-700 hover:text-[#0066CC] transition-colors">
              {t({ EN: "Solutions", CN: "解决方案" })}
            </Link>
            <Link href="/contact" className="text-base text-gray-700 hover:text-[#0066CC] transition-colors">
              {t({ EN: "Contact", CN: "联系我们" })}
            </Link>
          </nav>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="text-sm font-medium text-gray-700 hover:text-[#0066CC] transition-colors"
          >
            {language === "EN" ? "EN" : "中文"} / {language === "EN" ? "中文" : "EN"}
          </button>
        </div>
      </div>
    </header>
  )
}
