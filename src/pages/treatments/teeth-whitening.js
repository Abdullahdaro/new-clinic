'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useRouter } from "next/router"
import Image from "next/image"

export default function TeethWhitening() {
  const router = useRouter()
  const { locale } = router

  const content = {
    en: {
      title: "Teeth Whitening",
      description: "Professional teeth whitening is a safe and effective way to enhance your smile by removing stains and discoloration. Our advanced whitening treatments can help you achieve a brighter, more confident smile.",
      benefits: [
        "Immediate visible results",
        "Professional-grade whitening agents",
        "Safe and controlled procedure",
        "Long-lasting results",
        "Customized treatment plans",
        "Minimal sensitivity"
      ],
      process: [
        "Initial consultation and examination",
        "Professional cleaning",
        "Shade assessment",
        "Application of whitening agent",
        "Light activation (if applicable)",
        "Post-treatment care instructions"
      ],
      indications: [
        "Age-related discoloration",
        "Coffee and tea stains",
        "Tobacco stains",
        "Fluorosis",
        "Medication-related discoloration"
      ],
      aftercare: [
        "Avoid staining foods and drinks for 48 hours",
        "Use sensitive toothpaste if needed",
        "Maintain good oral hygiene",
        "Regular dental check-ups",
        "Touch-up treatments as recommended"
      ]
    },
    tr: {
      title: "Diş Beyazlatma",
      description: "Profesyonel diş beyazlatma, lekeleri ve renk değişimini gidererek gülüşünüzü geliştirmenin güvenli ve etkili bir yoludur. Gelişmiş beyazlatma tedavilerimiz, daha parlak ve özgüvenli bir gülümseme elde etmenize yardımcı olabilir.",
      benefits: [
        "Anında görünür sonuçlar",
        "Profesyonel sınıf beyazlatma ajanları",
        "Güvenli ve kontrollü prosedür",
        "Uzun ömürlü sonuçlar",
        "Kişiselleştirilmiş tedavi planları",
        "Minimum hassasiyet"
      ],
      process: [
        "İlk konsültasyon ve muayene",
        "Profesyonel temizlik",
        "Renk değerlendirmesi",
        "Beyazlatma ajanının uygulanması",
        "Işık aktivasyonu (uygulanabilirse)",
        "Tedavi sonrası bakım talimatları"
      ],
      indications: [
        "Yaşa bağlı renk değişimi",
        "Kahve ve çay lekeleri",
        "Sigara lekeleri",
        "Fluorozis",
        "İlaçlara bağlı renk değişimi"
      ],
      aftercare: [
        "48 saat boyunca lekeleyici yiyecek ve içeceklerden kaçının",
        "Gerekirse hassas diş macunu kullanın",
        "İyi ağız hijyenini sürdürün",
        "Düzenli diş kontrolleri",
        "Önerilen şekilde rötuş tedavileri"
      ]
    },
    fr: {
      title: "Blanchiment des Dents",
      description: "Le blanchiment professionnel des dents est un moyen sûr et efficace d'améliorer votre sourire en éliminant les taches et la décoloration. Nos traitements de blanchiment avancés peuvent vous aider à obtenir un sourire plus éclatant et plus confiant.",
      benefits: [
        "Résultats visibles immédiats",
        "Agents de blanchiment de qualité professionnelle",
        "Procédure sûre et contrôlée",
        "Résultats durables",
        "Plans de traitement personnalisés",
        "Sensibilité minimale"
      ],
      process: [
        "Consultation et examen initial",
        "Nettoyage professionnel",
        "Évaluation de la teinte",
        "Application de l'agent blanchissant",
        "Activation lumineuse (si applicable)",
        "Instructions de soins post-traitement"
      ],
      indications: [
        "Décoloration liée à l'âge",
        "Taches de café et de thé",
        "Taches de tabac",
        "Fluorose",
        "Décoloration liée aux médicaments"
      ],
      aftercare: [
        "Éviter les aliments et boissons colorants pendant 48 heures",
        "Utiliser un dentifrice sensible si nécessaire",
        "Maintenir une bonne hygiène bucco-dentaire",
        "Contrôles dentaires réguliers",
        "Retouches selon les recommandations"
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
              src="/assets/treatments/teeth-whitening.jpg"
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