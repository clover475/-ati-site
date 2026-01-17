"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ParticleHero } from "@/components/particle-hero"
import { useLanguage } from "@/contexts/language-context"
import {
  Sparkles,
  Zap,
  Bot,
  Workflow,
  MessageSquare,
  Shield,
  Network,
  Database,
  Gauge,
  CheckCircle2,
  ChevronRight,
} from "lucide-react"

export default function EnterpriseAIPage() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const solutionTypes = [
    {
      title: { EN: "Work Assistant", CN: "工作助手" },
      description: {
        EN: "Based on specific software scenarios, Agent performs software-oriented operations to solve efficiency issues caused by human-machine asymmetry.",
        CN: "基于特定的软件场景，Agent 执行面向软件的操作，解决人机不对称导致的效率问题。",
      },
      icon: <Bot className="w-8 h-8" />,
    },
    {
      title: { EN: "Business Autopilot", CN: "业务自巡航" },
      description: {
        EN: "Automate business process monitoring and execution, reducing manual intervention.",
        CN: "实现业务流程的自动化监控与执行，减少人工干预，提升运营效率。",
      },
      icon: <Gauge className="w-8 h-8" />,
    },
    {
      title: { EN: "Autonomous Agent", CN: "自主智能体" },
      description: {
        EN: "Intelligent agents with autonomous decision-making capabilities that can independently complete complex tasks.",
        CN: "具备自主决策能力的智能体，可独立完成复杂任务，实现端到端自动化。",
      },
      icon: <Sparkles className="w-8 h-8" />,
    },
    {
      title: { EN: "Knowledge Workflow", CN: "知识工作流水线" },
      description: {
        EN: "Automate knowledge-intensive workflows to improve efficiency and accuracy.",
        CN: "将知识密集型工作流程自动化，提升效率与准确性，释放人力价值。",
      },
      icon: <Workflow className="w-8 h-8" />,
    },
    {
      title: { EN: "Natural Language Agent", CN: "自然语言生成智能体" },
      description: {
        EN: "Automatically generate and execute tasks based on natural language instructions.",
        CN: "基于自然语言指令，自动生成并执行任务，降低使用门槛。",
      },
      icon: <MessageSquare className="w-8 h-8" />,
    },
  ]

  const coreCapabilities = [
    {
      title: { EN: "Flexible Development", CN: "灵活构建" },
      subtitle: {
        EN: "Intelligent workflow orchestration for complex tasks",
        CN: "面向复杂任务的智能工作流编排体系",
      },
      icon: <Workflow className="w-12 h-12 text-blue-600" />,
      features: [
        {
          EN: "Visual Canvas Design - Drag-and-drop interface supporting LLM nodes, code nodes, loops/conditions, and multi-agent collaboration",
          CN: "可视化画布式设计 - 采用拖拽式操作，支持串联 LLM 节点、代码节点、循环/条件逻辑以及多智能体协同",
        },
        {
          EN: "Dynamic Task Scheduling - Linear processes, parallel collaboration, and debate-based decision making",
          CN: "动态任务调度 - 支持线性流程、并行协作与辩论决策，灵活适配动态业务需求",
        },
        {
          EN: "100+ Industry Template Library - Auto-generation from natural language descriptions",
          CN: "100+ 行业模板库 - 通过自然语言描述需求，系统可自动生成任务框架，支持快速复用",
        },
        {
          EN: "Prompt Optimization - Auto-refine prompts and recommend plugin parameters",
          CN: "提示词自优化 - 自动润色提示词并推荐插件参数，实现效果调优零代码化",
        },
      ],
    },
    {
      title: { EN: "Open Ecosystem", CN: "开放生态" },
      subtitle: {
        EN: "Flexible integration with various tools and capabilities",
        CN: "灵活对接各类工具与能力组件",
      },
      icon: <Network className="w-12 h-12 text-purple-600" />,
      features: [
        {
          EN: "Multi-Model Integration - OpenAI, Claude, DeepSeek, GLM, Qwen, Llama, etc.",
          CN: "多模型接入 - 支持 OpenAI、Claude、DeepSeek、GLM、Qwen、Llama 等主流大模型",
        },
        {
          EN: "Unified Tool Protocols - Native OpenAI plugin format, compatible with Langchain and OpenAPI",
          CN: "统一工具协议 - 原生支持 OpenAI plugin 格式，兼容 Langchain、OpenAPI 等标准",
        },
        {
          EN: "Third-party App Integration - APIs, Webhooks, MCP/RPA for seamless data flow",
          CN: "第三方应用联动 - 通过 API、Webhook、MCP/RPA 方式无缝打通业务数据流",
        },
        {
          EN: "Custom Components - SDK support for Python/Java/JavaScript, enabling specialized tool development",
          CN: "自定义组件开发 - 提供 Python/Java/JavaScript SDK，支持开发专有工具",
        },
      ],
    },
    {
      title: { EN: "Enterprise Security", CN: "企业级安全" },
      subtitle: {
        EN: "Comprehensive protection and compliance",
        CN: "全方位保护与合规保障",
      },
      icon: <Shield className="w-12 h-12 text-green-600" />,
      features: [
        {
          EN: "Data Encryption - End-to-end encryption with AES-256 for storage and TLS 1.3 for transmission",
          CN: "数据加密 - 采用 AES-256 存储加密和 TLS 1.3 传输加密，保障数据端到端安全",
        },
        {
          EN: "Permission Control - Role-based access control (RBAC) for fine-grained authorization",
          CN: "权限管控 - 基于角色的访问控制（RBAC），实现细粒度权限授权",
        },
        {
          EN: "Audit Logs - Complete operation tracking for security and compliance requirements",
          CN: "审计日志 - 全面记录操作轨迹，满足安全审计与合规要求",
        },
        {
          EN: "Private Deployment - Support for on-premise or cloud deployment to protect sensitive data",
          CN: "私有化部署 - 支持本地或云端私有化部署，保护敏感业务数据不外泄",
        },
      ],
    },
  ]

  const scenarios = {
    enterprise: [
      {
        title: { EN: "Intelligent Customer Service", CN: "智能客服" },
        desc: {
          EN: "7x24 intelligent response, multi-channel integration, significantly improving customer satisfaction",
          CN: "7x24 小时智能应答，多渠道整合，显著提升客户满意度",
        },
      },
      {
        title: { EN: "Smart Operations", CN: "智能运营" },
        desc: {
          EN: "Automated business process orchestration, reducing operational costs and improving efficiency",
          CN: "自动化业务流程编排，降低运营成本，提升效率",
        },
      },
      {
        title: { EN: "Knowledge Management", CN: "知识管理" },
        desc: {
          EN: "Intelligent knowledge base construction, fast retrieval and recommendation for efficient knowledge sharing",
          CN: "智能知识库构建，快速检索推荐，实现高效知识共享",
        },
      },
    ],
    productivity: [
      {
        title: { EN: "Document Processing", CN: "文档处理" },
        desc: {
          EN: "Automated document classification, extraction, and summarization to improve office efficiency",
          CN: "自动化文档分类、提取与总结，提升办公效率",
        },
      },
      {
        title: { EN: "Meeting Assistant", CN: "会议助手" },
        desc: {
          EN: "Real-time transcription, intelligent summary, and automatic task assignment",
          CN: "实时转录记录，智能总结要点，自动分配任务",
        },
      },
      {
        title: { EN: "Data Analysis", CN: "数据分析" },
        desc: {
          EN: "Automated data cleaning, analysis and visualization to support business decisions",
          CN: "自动化数据清洗、分析与可视化，辅助业务决策",
        },
      },
    ],
    vertical: [
      {
        title: { EN: "Financial Services", CN: "金融服务" },
        desc: {
          EN: "Risk assessment, compliance review, intelligent investment advisory",
          CN: "风险评估、合规审查、智能投顾",
        },
      },
      {
        title: { EN: "Healthcare", CN: "医疗健康" },
        desc: {
          EN: "Medical image analysis, diagnosis assistance, patient management",
          CN: "医疗影像分析、诊断辅助、患者管理",
        },
      },
      {
        title: { EN: "Retail", CN: "零售电商" },
        desc: {
          EN: "Product recommendation, inventory optimization, customer insights",
          CN: "商品推荐、库存优化、客户洞察",
        },
      },
    ],
  }

  const industries = [
    {
      title: { EN: "Financial Services", CN: "金融服务" },
      icon: <Database className="w-10 h-10 text-blue-600" />,
      features: [
        { EN: "Intelligent Risk Control", CN: "智能风控" },
        { EN: "Compliance Management", CN: "合规管理" },
        { EN: "Customer Service", CN: "客户服务" },
        { EN: "Investment Advisory", CN: "投资顾问" },
      ],
    },
    {
      title: { EN: "Healthcare", CN: "医疗健康" },
      icon: <Shield className="w-10 h-10 text-green-600" />,
      features: [
        { EN: "Diagnosis Assistance", CN: "诊断辅助" },
        { EN: "Patient Management", CN: "患者管理" },
        { EN: "Medical Research", CN: "医学研究" },
        { EN: "Drug Development", CN: "药物研发" },
      ],
    },
    {
      title: { EN: "Manufacturing", CN: "制造业" },
      icon: <Zap className="w-10 h-10 text-orange-600" />,
      features: [
        { EN: "Quality Inspection", CN: "质量检测" },
        { EN: "Production Scheduling", CN: "生产调度" },
        { EN: "Equipment Maintenance", CN: "设备维护" },
        { EN: "Supply Chain", CN: "供应链优化" },
      ],
    },
    {
      title: { EN: "Retail & E-commerce", CN: "零售电商" },
      icon: <MessageSquare className="w-10 h-10 text-purple-600" />,
      features: [
        { EN: "Product Recommendation", CN: "商品推荐" },
        { EN: "Inventory Management", CN: "库存管理" },
        { EN: "Customer Insights", CN: "客户洞察" },
        { EN: "Marketing Automation", CN: "营销自动化" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <ParticleHero
        title={{ EN: "Enterprise AI Agent Solutions", CN: "企业级智能体解决方案" }}
        subtitle={{ EN: "Build intelligent workflows for the future of work", CN: "构建面向未来的智能化工作流程" }}
        description={{
          EN: "We provide end-to-end AI Agent solutions, from strategic consulting to implementation, helping enterprises automate knowledge workflows and achieve digital transformation.",
          CN: "我们提供从战略咨询到落地实施的全流程 AI Agent 解决方案，帮助企业实现知识工作流程自动化与数字化转型。",
        }}
        showCTA={false}
        primaryColor="#1e40af"
        secondaryColor="#06b6d4"
      />

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t({ EN: "Solution Types", CN: "解决方案形态" })}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t({
                EN: "Five core AI Agent solution types to meet diverse business needs",
                CN: "五大核心 AI Agent 解决方案形态，满足多样化业务需求",
              })}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8 max-w-5xl mx-auto">
            {solutionTypes.slice(0, 2).map((solution, index) => (
              <div
                key={index}
                className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-blue-300 hover:-translate-y-1 group"
              >
                <div className="mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t(solution.title)}</h3>
                <p className="text-gray-600 leading-relaxed">{t(solution.description)}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutionTypes.slice(2).map((solution, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-blue-300 hover:-translate-y-1 group"
              >
                <div className="mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t(solution.title)}</h3>
                <p className="text-gray-600 leading-relaxed">{t(solution.description)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t({ EN: "Core Capabilities", CN: "核心能力" })}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t({
                EN: "Comprehensive AI capabilities for enterprise transformation",
                CN: "全面的 AI 能力，助力企业数字化转型",
              })}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {coreCapabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6">{capability.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t(capability.title)}</h3>
                <p className="text-gray-600 mb-6 text-sm">{t(capability.subtitle)}</p>
                <ul className="space-y-4">
                  {capability.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-relaxed">{t(feature)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t({ EN: "Application Scenarios", CN: "应用场景" })}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t({
                EN: "AI Agent solutions across multiple business scenarios",
                CN: "覆盖多种业务场景的 AI Agent 解决方案",
              })}
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <button
              onClick={() => setActiveTab(0)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === 0 ? "bg-blue-600 text-white shadow-lg" : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {t({ EN: "Enterprise Operations", CN: "企业运营" })}
            </button>
            <button
              onClick={() => setActiveTab(1)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === 1 ? "bg-blue-600 text-white shadow-lg" : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {t({ EN: "Productivity Tools", CN: "生产力工具" })}
            </button>
            <button
              onClick={() => setActiveTab(2)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === 2 ? "bg-blue-600 text-white shadow-lg" : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {t({ EN: "Vertical Industries", CN: "垂直行业" })}
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {(activeTab === 0
              ? scenarios.enterprise
              : activeTab === 1
                ? scenarios.productivity
                : scenarios.vertical
            ).map((scenario, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <ChevronRight className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t(scenario.title)}</h3>
                    <p className="text-gray-600 leading-relaxed">{t(scenario.desc)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t({ EN: "Industry Solutions", CN: "行业解决方案" })}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t({
                EN: "Tailored AI Agent solutions for different industries",
                CN: "针对不同行业的定制化 AI Agent 解决方案",
              })}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{industry.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">{t(industry.title)}</h3>
                <ul className="space-y-3">
                  {industry.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span className="text-sm">{t(feature)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {t({
              EN: "Success Stories",
              CN: "成功案例",
            })}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t({
              EN: "Real-world impact of our AI Agent solutions",
              CN: "真实的 AI Agent 应用案例与成果",
            })}
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-5xl font-bold text-blue-600 mb-4">85%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {t({
                  EN: "Efficiency Improvement",
                  CN: "效率提升",
                })}
              </h3>
              <p className="text-gray-600">
                {t({
                  EN: "Average productivity increase across all implementations",
                  CN: "各类场景平均生产力提升",
                })}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-5xl font-bold text-purple-600 mb-4">70%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {t({
                  EN: "Cost Reduction",
                  CN: "成本降低",
                })}
              </h3>
              <p className="text-gray-600">
                {t({
                  EN: "Significant operational cost savings through automation",
                  CN: "通过自动化实现显著的运营成本节省",
                })}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-5xl font-bold text-green-600 mb-4">95%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {t({
                  EN: "Customer Satisfaction",
                  CN: "客户满意度",
                })}
              </h3>
              <p className="text-gray-600">
                {t({
                  EN: "High satisfaction rate from our enterprise clients",
                  CN: "企业客户的高满意度评价",
                })}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {t({
              EN: "Ready to Transform Your Business?",
              CN: "准备好开启智能化转型了吗？",
            })}
          </h2>
          <p className="text-xl text-white mb-10">
            {t({
              EN: "Contact us today to learn how AI Agent can empower your enterprise",
              CN: "立即联系我们，了解 AI Agent 如何赋能您的企业",
            })}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
            >
              {t({ EN: "Contact Us", CN: "联系我们" })}
            </a>
            <a
              href="/consulting-technology"
              className="px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white hover:bg-white hover:text-blue-600 transition-all"
            >
              {t({ EN: "Learn More", CN: "了解更多" })}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
