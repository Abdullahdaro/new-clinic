'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useRouter } from "next/router"
import Image from "next/image"
import zirconiumcrown from "../../../public/treatments/zirconiumcrown.jpg"

export default function ZirconiumCrown() {
  const router = useRouter()
  const { locale } = router

  const content = {
    en: {
      title: "Zirconium Crown",
      introduction: [
        "Zirconium is a metal that is white in color and also has light transmittance. It has a very high resistance against the pressures on it. It is biologically tissue friendly. While zirconium-based porcelains provide an aesthetic and natural appearance in the anterior teeth, they are more preferred today because they are resistant to use in the posterior teeth. Zirconia Crown, which is a problem-free infrastructure option for those with metal allergies, increases the quality of life of people by creating a natural and aesthetic appearance in the patient's mouth.",
        "Zirconium crowns can be applied to all teeth in the anterior and posterior regions."
      ],
      procedure: {
        title: "Treatment Procedure",
        description: "The tooth is slightly reduced as in metal-supported veneers, and when the gingiva becomes healthy, a precise measurement is taken with special impression materials and spoons suitable for the mouth. Reduction procedures are performed under local anaesthesia, and then a temporary tooth-colored coating is applied to prevent stinging in hot and cold temperatures. The model is prepared according to the measurement taken and a wax model of your teeth is created on the model. This model is transferred to the computer environment by means of an optical reader. This information from the model is edited via software. The next step is to transfer the ready draft to the zirconium oxide block. The scraper device gives the final shape to the substructure of your teeth by abrading the zirconium block without fail according to the information given. After the firing stage, it finishes the work by adding ceramic porcelain in the appropriate color on the zirconium substructures."
      },
      features: [
        "It can be applied to teeth of any color. A tooth with very dark color can be covered with a zirconium coating in the desired color. The actual color of the tooth does not affect the color of the zirconium coating. Even after many years, the color of the zirconium tooth coating does not change.",
        "Thanks to its biological compatibility, it does not cause allergies. Some people in the community are allergic to metal. When these people want to have a dental veneer, it is necessary to have a zirconium veneer. Otherwise, it may face many dental and gum diseases such as inflammation of the gums, gingival recession, bleeding in the gums, gingival swelling, redness, etc."
      ],
      advantages: {
        title: "Advantages",
        list: [
          "Lack of sensitivity to cold and hot",
          "Does not cause allergies (fully compatible with tissue)",
          "Color is not dull or dull (not opaque)",
          "Perfect alignment of the gums",
          "Being hygienic (less microorganism retention on its surface)",
          "Fully compatible with body tissues and mouth tissues"
        ]
      }
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
        <div className="mb-12">
          <Image
            src={zirconiumcrown}
            alt="Zirconium Crown"
            width={2500}
            height={1667}
            className="w-full rounded-xl"
          />
        </div>

        <h1 className="text-4xl font-bold text-center mb-12 text-main">
          {pageContent.title}
        </h1>

        <div className="space-y-12">
          <section className="prose max-w-none">
            {pageContent.introduction.map((paragraph, index) => (
              <p key={index} className="text-gray-600 mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {pageContent.procedure.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {pageContent.procedure.description}
            </p>
          </section>

          <section className="prose max-w-none">
            {pageContent.features.map((feature, index) => (
              <p key={index} className="text-gray-600 mb-4 leading-relaxed">
                {feature}
              </p>
            ))}
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