'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useRouter } from "next/router"
import Image from "next/image"

export default function InlayOnlay() {
  const router = useRouter()
  const { locale } = router

  const content = {
    en: {
      title: "Inlay & Onlay",
      description: "Inlays and onlays are custom-made fillings that offer a strong, long-lasting solution for tooth decay or similar damage. They are more durable than traditional fillings and less extensive than a crown.",
      benefits: [
        "Preserves more natural tooth structure",
        "More durable than traditional fillings",
        "Perfect fit and contact with adjacent teeth",
        "Excellent longevity",
        "Easy to clean and maintain"
      ],
      types: {
        inlay: "Fits within the cusps (bumps) of the tooth surface",
        onlay: "Covers one or more cusps of the tooth"
      },
      process: [
        "Initial consultation and examination",
        "Tooth preparation and impressions",
        "Custom fabrication in dental laboratory",
        "Fitting and bonding",
        "Final adjustments and polishing"
      ],
      indications: [
        "Large cavities",
        "Broken or fractured teeth",
        "Replacement of old fillings",
        "Cosmetic enhancement",
        "Teeth requiring additional strength"
      ]
    },
    tr: {
      title: "Inley & Onley",
      description: "İnley ve onleyler, diş çürüğü veya benzer hasarlar için güçlü, uzun ömürlü bir çözüm sunan özel yapım dolgulardır. Geleneksel dolgulardan daha dayanıklıdır ve krondan daha az kapsamlıdır.",
      benefits: [
        "Daha fazla doğal diş yapısını korur",
        "Geleneksel dolgulardan daha dayanıklı",
        "Komşu dişlerle mükemmel uyum ve temas",
        "Mükemmel uzun ömürlülük",
        "Temizlemesi ve bakımı kolay"
      ],
      types: {
        inlay: "Diş yüzeyindeki tümseklerin (cups) içine oturur",
        onlay: "Dişin bir veya daha fazla tümseğini kaplar"
      },
      process: [
        "İlk konsültasyon ve muayene",
        "Diş hazırlığı ve ölçü alma",
        "Diş laboratuvarında özel üretim",
        "Yerleştirme ve yapıştırma",
        "Son ayarlamalar ve cilalama"
      ],
      indications: [
        "Büyük çürükler",
        "Kırık veya çatlak dişler",
        "Eski dolguların değişimi",
        "Kozmetik iyileştirme",
        "Ek güç gerektiren dişler"
      ]
    },
    fr: {
      title: "Inlay & Onlay",
      description: "Les inlays et onlays sont des obturations sur mesure qui offrent une solution solide et durable pour les caries ou les dommages similaires. Ils sont plus durables que les obturations traditionnelles et moins extensifs qu'une couronne.",
      benefits: [
        "Préserve plus de structure dentaire naturelle",
        "Plus durable que les obturations traditionnelles",
        "Ajustement et contact parfaits avec les dents adjacentes",
        "Excellente longévité",
        "Facile à nettoyer et à entretenir"
      ],
      types: {
        inlay: "S'adapte dans les cuspides (bosses) de la surface de la dent",
        onlay: "Couvre une ou plusieurs cuspides de la dent"
      },
      process: [
        "Consultation et examen initial",
        "Préparation de la dent et empreintes",
        "Fabrication sur mesure en laboratoire dentaire",
        "Ajustement et collage",
        "Ajustements finaux et polissage"
      ],
      indications: [
        "Grandes cavités",
        "Dents cassées ou fracturées",
        "Remplacement d'anciennes obturations",
        "Amélioration cosmétique",
        "Dents nécessitant une résistance supplémentaire"
      ]
    }
  }

  const pageContent = content[locale] || content.en

  console.log(pageContent.types.inlay)

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
            
            <div className="bg-gray-50 p-6 rounded-xl space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">Types</h2>
              <div className="grid gap-4">
                <div className="p-4 bg-white rounded-lg">
                  <h3 className="font-semibold text-main">Inlay</h3>
                  <p className="text-gray-600">{pageContent.types.inlay}</p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <h3 className="font-semibold text-main">Onlay</h3>
                  <p className="text-gray-600">{pageContent.types.onlay}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/assets/treatments/inlay-onlay.jpg"
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
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Indications</h2>
            <div className="bg-gray-50 p-6 rounded-xl">
              <ul className="space-y-3">
                {pageContent.indications.map((indication, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-main" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {indication}
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