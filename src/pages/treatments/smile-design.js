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
      description: "Transform your smile with our custom smile design service. Using advanced digital technology and artistic expertise, we create personalized treatment plans to achieve your ideal smile while maintaining natural aesthetics and optimal function.",
      benefits: [
        "Natural-looking results",
        "Customized treatment plan",
        "Long-lasting results",
        "Improved confidence",
        "Enhanced facial aesthetics",
        "Better oral function"
      ],
      process: [
        "Initial consultation",
        "Digital smile design",
        "Treatment planning",
        "Mock-up preview",
        "Implementation",
        "Final adjustments"
      ],
      features: [
        "Digital smile simulation",
        "Comprehensive approach",
        "Multiple treatment options",
        "Precise measurements",
        "Harmony with facial features"
      ],
      images: [
        "/assets/treatments/smile-design-1.jpg",
        "/assets/treatments/smile-design-2.jpg"
      ]
    },
    tr: {
      title: "Gülüş Tasarımı (Hollywood Smile)",
      description: "Özel gülüş tasarımı hizmetimizle gülüşünüzü dönüştürün. İleri dijital teknoloji ve sanatsal uzmanlık kullanarak, doğal estetiği ve optimal işlevi korurken ideal gülüşünüzü elde etmek için kişiselleştirilmiş tedavi planları oluşturuyoruz.",
      benefits: [
        "Doğal görünümlü sonuçlar",
        "Kişiselleştirilmiş tedavi planı",
        "Uzun ömürlü sonuçlar",
        "Artırılmış özgüven",
        "Geliştirilmiş yüz estetiği",
        "Daha iyi ağız fonksiyonu"
      ],
      process: [
        "İlk konsültasyon",
        "Dijital gülüş tasarımı",
        "Tedavi planlaması",
        "Ön izleme",
        "Uygulama",
        "Son ayarlamalar"
      ],
      features: [
        "Dijital gülüş simülasyonu",
        "Kapsamlı yaklaşım",
        "Çoklu tedavi seçenekleri",
        "Hassas ölçümler",
        "Yüz özellikleriyle uyum"
      ],
      images: [
        "/assets/treatments/smile-design-1.jpg",
        "/assets/treatments/smile-design-2.jpg"
      ]
    },
    fr: {
      title: "Design du Sourire (Sourire Hollywood)",
      description: "Transformez votre sourire avec notre service personnalisé de design du sourire. En utilisant une technologie numérique avancée et une expertise artistique, nous créons des plans de traitement personnalisés pour obtenir votre sourire idéal tout en maintenant une esthétique naturelle et une fonction optimale.",
      benefits: [
        "Résultats d'apparence naturelle",
        "Plan de traitement personnalisé",
        "Résultats durables",
        "Confiance améliorée",
        "Esthétique faciale améliorée",
        "Meilleure fonction buccale"
      ],
      process: [
        "Consultation initiale",
        "Design numérique du sourire",
        "Planification du traitement",
        "Aperçu préliminaire",
        "Mise en œuvre",
        "Ajustements finaux"
      ],
      features: [
        "Simulation numérique du sourire",
        "Approche complète",
        "Options de traitement multiples",
        "Mesures précises",
        "Harmonie avec les traits du visage"
      ],
      images: [
        "/assets/treatments/smile-design-1.jpg",
        "/assets/treatments/smile-design-2.jpg"
      ]
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
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Key Features</h2>
            <div className="bg-gray-50 p-6 rounded-xl">
              <ul className="space-y-3">
                {pageContent.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-main" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
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