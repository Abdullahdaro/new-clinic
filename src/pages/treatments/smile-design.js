'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useRouter } from "next/router"
import Image from "next/image"

export default function SmileDesign() {
  const router = useRouter()
  const { locale } = router

  const content = {
    en: {
      title: "Smile Design (Hollywood Smile)",
      description: "Transform your smile with our custom smile design service...",
      benefits: [
        "Natural-looking results",
        "Customized treatment plan",
        "Long-lasting results",
        "Improved confidence"
      ],
      process: [
        "Initial consultation",
        "Digital smile design",
        "Treatment planning",
        "Implementation"
      ],
      images: [
        "/assets/treatments/smile-design-1.jpg",
        "/assets/treatments/smile-design-2.jpg"
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
              src={pageContent.images[0]}
              alt={pageContent.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Process Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Treatment Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {pageContent.process.map((step, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg">
                <div className="text-main font-bold text-xl mb-2">{index + 1}</div>
                <div className="text-gray-600">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
} 