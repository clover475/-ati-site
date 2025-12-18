"use client"

import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer id="contact" className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-[#0066CC] mb-4">ATI</h3>
            <p className="text-gray-600 leading-relaxed">
              {t({
                EN: "Atitans International - Your trusted partner for digital transformation",
                CN: "艾提坦国际 - 您值得信赖的数字化转型合作伙伴",
              })}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">{t({ EN: "Contact Us", CN: "联系我们" })}</h4>
            <div className="space-y-3 text-gray-600">
              <div>
                <p className="font-medium text-gray-900">{t({ EN: "Hong Kong", CN: "香港" })}</p>
                <p>+852 6760 1338</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">{t({ EN: "China", CN: "中国" })}</p>
                <p>+86 188 1163 3601</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">{t({ EN: "Email", CN: "邮箱" })}</p>
                <p>info@atitans.com</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">{t({ EN: "WeChat", CN: "微信" })}</p>
                <p>{t({ EN: "Scan QR code to connect", CN: "扫描二维码添加" })}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()}{" "}
            {t({ EN: "Atitans International. All rights reserved.", CN: "艾提坦国际。保留所有权利。" })}
          </p>
        </div>
      </div>
    </footer>
  )
}
