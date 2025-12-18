"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { IndustriesPreview } from "@/components/industries-preview"
import { SolutionsPreview } from "@/components/solutions-preview"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <IndustriesPreview />
        <SolutionsPreview />
      </main>
      <Footer />
    </div>
  )
}
