'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useRouter } from "next/router"
import Image from "next/image"

export default function AestheticFillings() {
  const router = useRouter()
  const { locale } = router

  const content = {
    en: {
      title: "Aesthetic Fillings",
      description: "Aesthetic fillings, also known as tooth-colored or composite fillings, are dental restorations designed to repair and restore teeth while maintaining a natural appearance. These modern materials blend seamlessly with your natural teeth.",
      benefits: [
        "Natural tooth-colored appearance",
        "Preserves more natural tooth structure",
        "Bonds directly to the tooth surface",
        "Mercury-free and safe",
        "Can be repaired if damaged"
      ],
      process: [
        "Examination and diagnosis",
        "Removal of decay",
        "Tooth preparation",
        "Application of composite material",
        "Shaping and polishing"
      ],
      indications: [
        "Cavities and decay",
        "Chipped teeth",
        "Gaps between teeth",
        "Worn teeth",
        "Replacement of old fillings"
      ]
    },
    tr: {
      title: "Estetik Dolgular",
      description: "Estetik dolgular, diş renginde veya kompozit dolgular olarak da bilinen, dişleri doğal görünümü koruyarak onarmak ve restore etmek için tasarlanmış dental restorasyonlardır. Bu modern materyaller doğal dişlerinizle kusursuz bir şekilde uyum sağlar.",
      benefits: [
        "Doğal diş renginde görünüm",
        "Daha fazla doğal diş yapısını korur",
        "Diş yüzeyine direkt bağlanır",
        "Cıva içermez ve güvenlidir",
        "Hasar gördüğünde tamir edilebilir"
      ],
      process: [
        "Muayene ve teşhis",
        "Çürüğün temizlenmesi",
        "Diş hazırlığı",
        "Kompozit materyalin uygulanması",
        "Şekillendirme ve cilalama"
      ],
      indications: [
        "Çürükler ve kaviteler",
        "Kırık dişler",
        "Diş aralarındaki boşluklar",
        "Aşınmış dişler",
        "Eski dolguların değişimi"
      ]
    },
    fr: {
      title: "Obturations Esthétiques",
      description: "Les obturations esthétiques, également connues sous le nom d'obturations de couleur dentaire ou composites, sont des restaurations dentaires conçues pour réparer et restaurer les dents tout en conservant une apparence naturelle. Ces matériaux modernes se fondent parfaitement avec vos dents naturelles.",
      benefits: [
        "Apparence naturelle de la couleur des dents",
        "Préserve plus de structure dentaire naturelle",
        "Se lie directement à la surface de la dent",
        "Sans mercure et sûr",
        "Peut être réparé si endommagé"
      ],
      process: [
        "Examen et diagnostic",
        "Élimination de la carie",
        "Préparation de la dent",
        "Application du matériau composite",
        "Mise en forme et polissage"
      ],
      indications: [
        "Caries et cavités",
        "Dents ébréchées",
        "Espaces entre les dents",
        "Dents usées",
        "Remplacement d'anciennes obturations"
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
              src="/assets/treatments/aesthetic-fillings.jpg"
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