'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useRouter } from "next/router"
import Image from "next/image"
import inlayonay from "../../../public/treatments/inlayonay.jpg"

export default function InlayOnlay() {
  const router = useRouter()
  const { locale } = router

  const content = {
    en: {
      title: "Inlay and Onlay",
      what: {
        title: "What Are Inlay and Onlay?",
        description: "Inlay and Onlay fillings are ceramic or porcelain restorations used to repair teeth affected by decay, root canal treatments, or trauma by replacing the missing tooth structure."
      },
      when: {
        title: "When Are They Needed?",
        description: "They are ideal when there is not enough tooth structure to support regular fillings, but the damage does not require a full crown."
      },
      benefits: {
        title: "What Are Their Benefits?",
        description: "Inlays and Onlays preserve healthy tooth tissue, ensure contact with neighboring teeth, and prevent food accumulation, reducing the risk of dental problems."
      },
      application: {
        title: "How Are They Applied?",
        description: "They are crafted using computer-aided systems to fit the missing parts without extensive tooth reduction, making them a cost-effective alternative to crowns."
      },
      advantages: {
        title: "Advantages of Inlay and Onlay",
        list: [
          "Aesthetic and durable solution",
          "Preserves natural tooth structure",
          "Prevents bacterial accumulation",
          "Provides excellent chewing efficiency"
        ]
      }
    },
    tr: {
      title: "İnley ve Onley",
      what: {
        title: "İnley ve Onley Nedir?",
        description: "İnley ve Onley dolgular, çürük, kanal tedavisi veya travmadan etkilenen dişleri onarmak için kullanılan, eksik diş yapısını değiştiren seramik veya porselen restorasyonlardır."
      },
      when: {
        title: "Ne Zaman İhtiyaç Duyulur?",
        description: "Normal dolguları desteklemek için yeterli diş yapısı olmadığında, ancak hasarın tam bir kron gerektirmediği durumlarda idealdir."
      },
      benefits: {
        title: "Faydaları Nelerdir?",
        description: "İnley ve Onley'ler sağlıklı diş dokusunu korur, komşu dişlerle teması sağlar ve diş problemleri riskini azaltarak yiyecek birikimini önler."
      },
      application: {
        title: "Nasıl Uygulanır?",
        description: "Kapsamlı diş kesimi gerektirmeden eksik parçalara uyacak şekilde bilgisayar destekli sistemler kullanılarak üretilir ve kronlara ekonomik bir alternatif oluşturur."
      },
      advantages: {
        title: "İnley ve Onley'in Avantajları",
        list: [
          "Estetik ve dayanıklı çözüm",
          "Doğal diş yapısını korur",
          "Bakteriyel birikimi önler",
          "Mükemmel çiğneme verimliliği sağlar"
        ]
      }
    },
    fr: {
      title: "Inlay et Onlay",
      what: {
        title: "Que Sont les Inlay et Onlay ?",
        description: "Les inlays et onlays sont des restaurations en céramique ou en porcelaine utilisées pour réparer les dents affectées par la carie, les traitements de canal ou les traumatismes en remplaçant la structure dentaire manquante."
      },
      when: {
        title: "Quand Sont-ils Nécessaires ?",
        description: "Ils sont idéaux lorsqu'il n'y a pas assez de structure dentaire pour supporter les obturations régulières, mais que les dommages ne nécessitent pas une couronne complète."
      },
      benefits: {
        title: "Quels Sont Leurs Avantages ?",
        description: "Les inlays et onlays préservent le tissu dentaire sain, assurent le contact avec les dents voisines et empêchent l'accumulation de nourriture, réduisant ainsi le risque de problèmes dentaires."
      },
      application: {
        title: "Comment Sont-ils Appliqués ?",
        description: "Ils sont fabriqués à l'aide de systèmes assistés par ordinateur pour s'adapter aux parties manquantes sans réduction dentaire extensive, ce qui en fait une alternative économique aux couronnes."
      },
      advantages: {
        title: "Avantages des Inlay et Onlay",
        list: [
          "Solution esthétique et durable",
          "Préserve la structure naturelle des dents",
          "Prévient l'accumulation bactérienne",
          "Offre une excellente efficacité de mastication"
        ]
      }
    }
  }

  const pageContent = content[locale] || content.en

  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <Image
            src={inlayonay}
            alt="Inlay and Onlay Treatment"
            width={2500}
            height={1667}
            className="w-full rounded-xl"
          />
        </div>

        <h1 className="text-4xl font-bold text-center mb-12 text-main">
          {pageContent.title}
        </h1>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {pageContent.what.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {pageContent.what.description}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {pageContent.when.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {pageContent.when.description}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {pageContent.benefits.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {pageContent.benefits.description}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {pageContent.application.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {pageContent.application.description}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {pageContent.advantages.title}
            </h2>
            <ul className="space-y-3">
              {pageContent.advantages.list.map((advantage, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-main" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {advantage}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
} 