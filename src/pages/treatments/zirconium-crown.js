'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useRouter } from "next/router"
import Image from "next/image"

export default function ZirconiumCrown() {
  const router = useRouter()
  const { locale } = router

  const content = {
    en: {
      title: "Zirconium Crown",
      description: "Zirconium crowns represent the latest advancement in dental crown technology, offering superior aesthetics and durability. Made from medical-grade zirconium oxide, these crowns provide a natural appearance while maintaining exceptional strength.",
      benefits: [
        "Natural tooth-like appearance",
        "Exceptional durability",
        "Biocompatible material",
        "Metal-free solution",
        "Resistant to temperature changes",
        "Long-lasting results"
      ],
      process: [
        "Initial consultation and examination",
        "Tooth preparation",
        "Digital impression taking",
        "Custom crown fabrication",
        "Final fitting and adjustment"
      ],
      indications: [
        "Severely damaged teeth",
        "After root canal treatment",
        "Aesthetic improvement",
        "Replacement of old metal crowns",
        "Large fillings replacement",
        "Bite correction"
      ],
      advantages: [
        "No dark line at the gum margin",
        "Suitable for both front and back teeth",
        "Minimal tooth reduction required",
        "Excellent fit and comfort",
        "Resistant to staining"
      ]
    },
    tr: {
      title: "Zirkonyum Kaplama",
      description: "Zirkonyum kaplamalar, diş kaplama teknolojisindeki en son gelişmeyi temsil eder ve üstün estetik ve dayanıklılık sunar. Tıbbi sınıf zirkonyum oksitten üretilen bu kaplamalar, olağanüstü dayanıklılığı korurken doğal bir görünüm sağlar.",
      benefits: [
        "Doğal diş görünümü",
        "Olağanüstü dayanıklılık",
        "Biyouyumlu materyal",
        "Metal içermeyen çözüm",
        "Isı değişimlerine dayanıklı",
        "Uzun ömürlü sonuçlar"
      ],
      process: [
        "İlk konsültasyon ve muayene",
        "Diş hazırlığı",
        "Dijital ölçü alma",
        "Özel kaplama üretimi",
        "Son yerleştirme ve ayarlama"
      ],
      indications: [
        "Ciddi hasarlı dişler",
        "Kanal tedavisi sonrası",
        "Estetik iyileştirme",
        "Eski metal kaplamaların değişimi",
        "Büyük dolguların değişimi",
        "Kapanış düzeltme"
      ],
      advantages: [
        "Diş eti hattında koyu çizgi olmaması",
        "Hem ön hem arka dişler için uygun",
        "Minimum diş kesimi gereksinimi",
        "Mükemmel uyum ve konfor",
        "Lekelenmeye karşı dirençli"
      ]
    },
    fr: {
      title: "Couronne en Zirconium",
      description: "Les couronnes en zirconium représentent la dernière avancée en matière de technologie des couronnes dentaires, offrant une esthétique et une durabilité supérieures. Fabriquées en oxyde de zirconium de qualité médicale, ces couronnes offrent une apparence naturelle tout en maintenant une résistance exceptionnelle.",
      benefits: [
        "Apparence naturelle des dents",
        "Durabilité exceptionnelle",
        "Matériau biocompatible",
        "Solution sans métal",
        "Résistant aux changements de température",
        "Résultats durables"
      ],
      process: [
        "Consultation et examen initial",
        "Préparation de la dent",
        "Prise d'empreinte numérique",
        "Fabrication de couronne personnalisée",
        "Ajustement et pose finale"
      ],
      indications: [
        "Dents gravement endommagées",
        "Après traitement de canal",
        "Amélioration esthétique",
        "Remplacement d'anciennes couronnes métalliques",
        "Remplacement de grandes obturations",
        "Correction de l'occlusion"
      ],
      advantages: [
        "Pas de ligne sombre à la gencive",
        "Convient aux dents avant et arrière",
        "Réduction minimale de la dent nécessaire",
        "Excellent ajustement et confort",
        "Résistant aux taches"
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
              src="/assets/treatments/zirconium-crown.jpg"
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