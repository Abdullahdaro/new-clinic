'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useRouter } from "next/router"
import Image from "next/image"

export default function AestheticGum() {
  const router = useRouter()
  const { locale } = router

  const content = {
    en: {
      title: "Aesthetic Gum Treatment",
      description: "Aesthetic gum treatment, also known as gum contouring or gum reshaping, is a cosmetic dental procedure that improves the appearance of your smile by reshaping the gum line. This treatment can help create a more balanced and harmonious smile.",
      benefits: [
        "Enhanced smile aesthetics",
        "Improved gum symmetry",
        "Correction of 'gummy' smile",
        "Minimal discomfort",
        "Quick recovery",
        "Long-lasting results"
      ],
      process: [
        "Initial consultation and planning",
        "Gum analysis and marking",
        "Local anesthesia application",
        "Gentle gum reshaping",
        "Final contouring and healing"
      ],
      conditions: [
        "Uneven gum line",
        "Excessive gum display",
        "Gum recession",
        "Asymmetrical gum contours",
        "Crown lengthening needs"
      ],
      aftercare: [
        "Gentle brushing techniques",
        "Prescribed oral rinse use",
        "Soft food diet initially",
        "Regular follow-up visits",
        "Maintaining good oral hygiene"
      ]
    },
    tr: {
      // Turkish content
    },
    fr: {
      // French content
    }
  }

  const pageContent = content[locale] || content.en

  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-main">
          {pageContent.title}
        </h1>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              {pageContent.description}
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900">Benefits</h2>
          </div>

          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/assets/treatments/aesthetic-gum.jpg"
              alt={pageContent.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Treatment Process</h2>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Aftercare Instructions</h2>
            <div className="bg-gray-50 p-6 rounded-xl">
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
} 