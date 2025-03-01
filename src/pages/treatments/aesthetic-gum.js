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
            <ul className="space-y-2">
              {pageContent.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-main" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {benefit}
                </li>
              ))}
            </ul>
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
            <div className="space-y-4">
              {pageContent.process.map((step, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-main text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div className="text-gray-600">{step}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Aftercare Instructions</h2>
            <div className="bg-gray-50 p-6 rounded-xl">
              <ul className="space-y-3">
                {pageContent.aftercare.map((care, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-main" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {care}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
} 