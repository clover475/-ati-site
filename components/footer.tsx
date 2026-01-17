"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { useState } from "react"

export function Footer() {
  const { t } = useLanguage()
  const [showWeChatQR, setShowWeChatQR] = useState(false)

  return (
    <footer className="bg-[#334155] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Left Column - Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-white">AT</span>
              <span className="text-[#5b9bd5]">&</span>
              <span className="text-white">I</span>
            </h3>
            <p className="text-sm text-gray-300">
              {t({
                EN: "Your trusted partner for digital transformation",
                CN: "您值得信赖的数字化转型合作伙伴",
              })}
            </p>
          </div>

          {/* Right Column - Navigation and Contact */}
          <div className="space-y-4">
            <nav className="text-sm">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors whitespace-nowrap">
                {t({ EN: "Home", CN: "首页" })}
              </Link>
              <span className="mx-2 text-gray-500">·</span>
              <Link href="/industries" className="text-gray-300 hover:text-white transition-colors whitespace-nowrap">
                {t({ EN: "Industries", CN: "行业" })}
              </Link>
              <span className="mx-2 text-gray-500">·</span>
              <Link
                href="/consulting-technology"
                className="text-gray-300 hover:text-white transition-colors whitespace-nowrap"
              >
                {t({ EN: "Consulting & Technology", CN: "咨询与技术" })}
              </Link>
              <span className="mx-2 text-gray-500">·</span>
              <Link
                href="/enterprise-ai"
                className="text-gray-300 hover:text-white transition-colors whitespace-nowrap"
              >
                {t({ EN: "AI Agent", CN: "AI智能体" })}
              </Link>
              <span className="mx-2 text-gray-500">·</span>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors whitespace-nowrap">
                {t({ EN: "About Us", CN: "关于我们" })}
              </Link>
              <span className="mx-2 text-gray-500">·</span>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors whitespace-nowrap">
                {t({ EN: "Contact Us", CN: "联系我们" })}
              </Link>
            </nav>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
              <div className="flex items-center gap-1.5">
                <span>📞</span>
                <span>+86 188 1163 3601</span>
              </div>
              <span className="text-gray-500">·</span>
              <div className="flex items-center gap-1.5">
                <span>✉️</span>
                <a href="mailto:ericguo@atitans.com" className="hover:text-white transition-colors">
                  ericguo@atitans.com
                </a>
              </div>
              <span className="text-gray-500">·</span>
              <div
                className="relative flex items-center gap-1.5 cursor-pointer"
                onMouseEnter={() => setShowWeChatQR(true)}
                onMouseLeave={() => setShowWeChatQR(false)}
              >
                <span>💬</span>
                <span className="hover:text-white transition-colors">WeChat</span>
                {showWeChatQR && (
                  <div 
                    className="fixed z-[9999]"
                    style={{
                      bottom: '100px',
                      right: '50px',
                      backgroundColor: 'white',
                      borderRadius: '16px',
                      padding: '12px',
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                    }}
                  >
                    <img
                      src="/wechat-qr.png"
                      alt="WeChat QR Code"
                      style={{ width: '260px', height: 'auto', display: 'block' }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-gray-600 text-center">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()}{" "}
            {t({ EN: "Atitans International. All rights reserved.", CN: "埃坦国际。保留所有权利。" })}
          </p>
        </div>
      </div>
    </footer>
  )
}
