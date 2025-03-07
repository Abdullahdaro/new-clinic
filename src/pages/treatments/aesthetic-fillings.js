'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useRouter } from "next/router"
import Image from "next/image"
import aestheticfillings from "../../../public/treatments/aestheticfillings.jpg"

export default function AestheticFillings() {
  const router = useRouter()
  const { locale } = router

  const content = {
    en: {
      title: "Aesthetic Fillings",
      application: {
        title: "How Are Aesthetic Fillings Applied?",
        description: "Aesthetic fillings involve bonding tooth-colored composite material to teeth using a special light. These fillings are applied layer by layer into prepared cavities, shaped, and hardened with halogen light for a chemical bond with the tooth."
      },
      benefits: {
        title: "Benefits of Aesthetic Fillings",
        list: [
          "Removes permanent discoloration on teeth",
          "Repairs cavities and fractured teeth",
          "Closes gaps between teeth or lengthens teeth",
          "Used for smile design by altering the shape of teeth"
        ]
      },
      duration: {
        title: "Application Duration",
        description: "The procedure typically takes between 15 minutes and 1 hour."
      },
      advantages: {
        title: "Advantages of Aesthetic Fillings",
        description: "The greatest advantage of aesthetic fillings is their natural appearance. They adhere well to teeth, supporting dental tissues, preventing fractures, and reducing heat transfer. Composites are used not only for cavity repairs but also for cosmetic enhancements, such as changing the color and shape of teeth."
      }
    },
    tr: {
      title: "Estetik Dolgular",
      application: {
        title: "Estetik Dolgular Nasıl Uygulanır?",
        description: "Estetik dolgular, özel bir ışık kullanılarak diş rengindeki kompozit materyalin dişlere bağlanmasını içerir. Bu dolgular hazırlanmış kavitelere katman katman uygulanır, şekillendirilir ve diş ile kimyasal bağ oluşturmak için halojen ışıkla sertleştirilir."
      },
      benefits: {
        title: "Estetik Dolguların Faydaları",
        list: [
          "Dişlerdeki kalıcı renk değişimlerini giderir",
          "Çürükleri ve kırık dişleri onarır",
          "Dişler arasındaki boşlukları kapatır veya dişleri uzatır",
          "Dişlerin şeklini değiştirerek gülüş tasarımında kullanılır"
        ]
      },
      duration: {
        title: "Uygulama Süresi",
        description: "İşlem genellikle 15 dakika ile 1 saat arasında sürer."
      },
      advantages: {
        title: "Estetik Dolguların Avantajları",
        description: "Estetik dolguların en büyük avantajı doğal görünümleridir. Dişlere iyi tutunur, diş dokularını destekler, kırılmaları önler ve ısı transferini azaltır. Kompozitler sadece çürük onarımları için değil, aynı zamanda dişlerin renk ve şeklini değiştirmek gibi kozmetik iyileştirmeler için de kullanılır."
      }
    },
    fr: {
      title: "Obturations Esthétiques",
      application: {
        title: "Comment Sont Appliquées les Obturations Esthétiques ?",
        description: "Les obturations esthétiques impliquent la liaison d'un matériau composite de la couleur des dents aux dents à l'aide d'une lumière spéciale. Ces obturations sont appliquées couche par couche dans les cavités préparées, modelées et durcies avec une lumière halogène pour une liaison chimique avec la dent."
      },
      benefits: {
        title: "Avantages des Obturations Esthétiques",
        list: [
          "Élimine la décoloration permanente des dents",
          "Répare les caries et les dents fracturées",
          "Ferme les espaces entre les dents ou allonge les dents",
          "Utilisé pour le design du sourire en modifiant la forme des dents"
        ]
      },
      duration: {
        title: "Durée d'Application",
        description: "La procédure prend généralement entre 15 minutes et 1 heure."
      },
      advantages: {
        title: "Avantages des Obturations Esthétiques",
        description: "Le plus grand avantage des obturations esthétiques est leur apparence naturelle. Elles adhèrent bien aux dents, soutiennent les tissus dentaires, préviennent les fractures et réduisent le transfert de chaleur. Les composites sont utilisés non seulement pour les réparations de caries mais aussi pour les améliorations cosmétiques, comme le changement de couleur et de forme des dents."
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
            src={aestheticfillings}
            alt="Aesthetic Fillings"
            width={2500}
            height={1667}
            className="w-full rounded-xl"
          />
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">{pageContent.application.title}</h2>
          <p className="text-gray-600 leading-relaxed">{pageContent.application.description}</p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">{pageContent.benefits.title}</h2>
          <ul className="space-y-4">
            {pageContent.benefits.list.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-600">
                <svg className="w-6 h-6 text-main flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {benefit}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">{pageContent.duration.title}</h2>
          <p className="text-gray-600">{pageContent.duration.description}</p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">{pageContent.advantages.title}</h2>
          <p className="text-gray-600 leading-relaxed">{pageContent.advantages.description}</p>
        </section>
      </div>
      <Footer />
    </div>
  )
} 