'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useRouter } from "next/router"
import Image from "next/image"
import teethwhiting from "../../../public/treatments/teethwhiting.jpg"

export default function TeethWhitening() {
  const router = useRouter()
  const { locale } = router

  const content = {
    en: {
      title: "Teeth Whitening",
      importance: {
        title: "Why First Impressions Matter",
        description: "A bright, radiant smile can boost your confidence and enhance your personality, making a lasting impression."
      },
      types: {
        title: "Types of Teeth Whitening",
        list: [
          "Professional Whitening",
          "At-Home Whitening"
        ]
      },
      professional: {
        title: "Professional Whitening",
        description: "Professional whitening is an effective way to lighten your teeth's natural color without removing the surface. Achieve up to 8 shades lighter in one session!"
      },
      atHome: {
        title: "At-Home Whitening",
        description: "With at-home kits designed by your dentist, you can whiten your teeth effectively within 10-14 days using customized whitening trays."
      }
    },
    tr: {
      title: "Diş Beyazlatma",
      importance: {
        title: "İlk İzlenimler Neden Önemlidir",
        description: "Parlak, ışıltılı bir gülüş özgüveninizi artırabilir ve kişiliğinizi güçlendirerek kalıcı bir izlenim bırakabilir."
      },
      types: {
        title: "Diş Beyazlatma Türleri",
        list: [
          "Profesyonel Beyazlatma",
          "Evde Beyazlatma"
        ]
      },
      professional: {
        title: "Profesyonel Beyazlatma",
        description: "Profesyonel beyazlatma, dişlerinizin yüzeyini çıkarmadan doğal rengini açmanın etkili bir yoludur. Tek seansta 8 tona kadar açılma elde edin!"
      },
      atHome: {
        title: "Evde Beyazlatma",
        description: "Diş hekiminiz tarafından tasarlanan ev tipi kitlerle, özel hazırlanmış beyazlatma plakları kullanarak 10-14 gün içinde dişlerinizi etkili bir şekilde beyazlatabilirsiniz."
      }
    },
    fr: {
      title: "Blanchiment des Dents",
      importance: {
        title: "Pourquoi les Premières Impressions Sont Importantes",
        description: "Un sourire éclatant et radieux peut augmenter votre confiance et améliorer votre personnalité, laissant une impression durable."
      },
      types: {
        title: "Types de Blanchiment des Dents",
        list: [
          "Blanchiment Professionnel",
          "Blanchiment à Domicile"
        ]
      },
      professional: {
        title: "Blanchiment Professionnel",
        description: "Le blanchiment professionnel est un moyen efficace d'éclaircir la couleur naturelle de vos dents sans enlever la surface. Obtenez jusqu'à 8 teintes plus claires en une seule séance !"
      },
      atHome: {
        title: "Blanchiment à Domicile",
        description: "Avec les kits à domicile conçus par votre dentiste, vous pouvez blanchir efficacement vos dents en 10-14 jours en utilisant des gouttières de blanchiment personnalisées."
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
            src={teethwhiting}
            alt="Teeth Whitening"
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
              {pageContent.importance.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {pageContent.importance.description}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {pageContent.types.title}
            </h2>
            <ul className="space-y-3">
              {pageContent.types.list.map((type, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-main" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {type}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {pageContent.professional.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {pageContent.professional.description}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {pageContent.atHome.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {pageContent.atHome.description}
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
} 