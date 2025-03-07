'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useRouter } from "next/router"
import Image from "next/image"
import smiledesign from "../../../public/treatments/smiledesign.jpg"

export default function SmileDesign() {
  const router = useRouter()
  const { locale } = router

  const content = {
    en: {
      title: "Hollywood Smile Design",
      whatIs: {
        title: "What is a Hollywood Smile?",
        description: "Hollywood Smile is a treatment that uses thin porcelain shells (porcelain veneers) applied to the front surface of teeth to achieve a perfect, aesthetic smile. This procedure permanently alters the shape, color, and size of your teeth to create a natural, radiant smile."
      },
      whoShould: {
        title: "Who Should Consider a Hollywood Smile?",
        description: "If you are experiencing any of the following issues, a Hollywood Smile may be the ideal solution for you:",
        list: [
          "Discoloration or staining on teeth",
          "Crooked or misaligned teeth",
          "Teeth darkened by large restorations",
          "A general desire for a more aesthetic smile"
        ],
        note: "Our team is ready to provide solutions tailored to your needs. However, redesigning a smile involves more than just aligning teeth. It requires a comprehensive evaluation of facial structure and proportions to create a personalized smile design."
      },
      process: {
        title: "How is a Hollywood Smile Achieved?",
        description: "The process:",
        steps: [
          "The treatment typically takes 30-40 minutes",
          "Our expert dentists analyze your smile by taking photos and videos of your face",
          "The measurements of your teeth are then taken",
          "During this stage, patients can discuss their expectations and the procedure in detail with their specialist"
        ],
        timeNote: "Time to results: The treatment can usually be completed in just two appointments, providing immediate results."
      },
      benefits: {
        title: "Benefits of a Hollywood Smile",
        list: [
          "Permanent transformation: Permanently improves the size, shape, and color of your teeth",
          "Natural appearance: Results in a highly natural and aesthetic smile",
          "Minimally invasive: Porcelain veneers require less preparation compared to crowns",
          "Stain resistance: The materials used are resistant to stains and retain their brightness over time",
          "Quick results: Achieve your dream Hollywood Smile in just two appointments"
        ]
      }
    },
    tr: {
      title: "Hollywood Gülüş Tasarımı",
      whatIs: {
        title: "Hollywood Gülüşü Nedir?",
        description: "Hollywood Gülüşü, mükemmel ve estetik bir gülüş elde etmek için dişlerin ön yüzeyine uygulanan ince porselen kaplamalar (porselen veneerler) kullanan bir tedavidir. Bu işlem, doğal ve parlak bir gülümseme yaratmak için dişlerinizin şeklini, rengini ve boyutunu kalıcı olarak değiştirir."
      },
      whoShould: {
        title: "Hollywood Gülüş Tasarımı İçin Kimleri Önerir?",
        description: "Aşağıdaki sorunlardan birini yaşıyorsanız, Hollywood Gülüş Tasarımı için mükemmel bir çözüm olabilir:",
        list: [
          "Dişlerinizdeki renk kayması veya lekeler",
          "Kırık veya hatalı dişler",
          "Büyük restorasyonlar nedeniyle dişlerinizin koyuya dönmüş olması",
          "Daha estetik bir gülüş arıyorsunuz"
        ],
        note: "Takımımız, ihtiyaçlarınıza uygun çözümler sunmaya hazırdır. Ancak gülüş tasarımı, dişlerin hizalı olmasından ibaret değildir. İdeal gülüş tasarımını oluşturmak için yüz yapısını ve oranlarını tam bir değerlendirme ile değerlendirmeniz gerekir."
      },
      process: {
        title: "Hollywood Gülüş Tasarımı Nasıl Sağlanır?",
        description: "İşlem:",
        steps: [
          "Tedavi genellikle 30-40 dakika sürer",
          "Uzun fotoğraflarınızı ve videolarınızı alarak gülüşünüzü uzmanımızla detaylı bir şekilde tartışabilirsiniz",
          "Dişlerinizin ölçümleri alınır",
          "Bu aşamada hastalar, beklentilerini ve işlemi detaylı bir şekilde uzmanıyla tartışabilir"
        ],
        timeNote: "Sonuçların zamanı: Tedavi genellikle iki randevuda tamamlanabilir, anında sonuçlar sağlar."
      },
      benefits: {
        title: "Hollywood Gülüş Tasarımının Faydaları",
        list: [
          "Kalıcı dönüşüm: Dişlerinizin boyutunu, şeklini ve rengini kalıcı olarak iyileştirir",
          "Doğal görünüm: Yüksek düzeyde doğal ve estetik bir gülüş sonucu elde eder",
          "Minimal invazyon: Porcelen kaplamaları, kronlarla karşılaştırıldığında daha az hazırlık gerektirir",
          "Stain direnci: Kullanılan malzemeler renkleri ve zaman içinde parlaklığını koruma için dirençli",
          "Hızlı sonuçlar: İdeal Hollywood Gülüşünüzü iki randevuda elde edebilirsiniz"
        ]
      }
    },
    fr: {
      title: "Design du Sourire Hollywood",
      whatIs: {
        title: "Qu'est-ce qu'un Sourire Hollywood ?",
        description: "Le Sourire Hollywood est un traitement qui utilise de fines coquilles en porcelaine (facettes en porcelaine) appliquées sur la surface avant des dents pour obtenir un sourire parfait et esthétique. Cette procédure modifie de façon permanente la forme, la couleur et la taille de vos dents pour créer un sourire naturel et radieux."
      },
      whoShould: {
        title: "Qui devrait considérer un Sourire Hollywood ?",
        description: "Si vous rencontrez l'un des problèmes suivants, un Sourire Hollywood pourrait être la solution idéale pour vous :",
        list: [
          "Taches ou tâches sur les dents",
          "Dents croisées ou désaxées",
          "Dents teintées par des restaurations importantes",
          "Un général désir d'un sourire plus esthétique"
        ],
        note: "Notre équipe est prête à vous fournir des solutions adaptées à vos besoins. Cependant, redéfinir un sourire implique plus que d'aligner les dents. Il nécessite une évaluation complète de la structure et des proportions du visage pour créer un design de sourire personnalisé."
      },
      process: {
        title: "Comment un Sourire Hollywood est réalisé ?",
        description: "Le processus :",
        steps: [
          "Le traitement prend généralement 30 à 40 minutes",
          "Nos experts dentaires analysent votre sourire en prenant des photos et des vidéos de votre visage",
          "Les mesures de vos dents sont ensuite prises",
          "Pendant cette étape, les patients peuvent discuter de leurs attentes et du procédé avec leur spécialiste"
        ],
        timeNote: "Temps pour les résultats : Le traitement peut généralement être terminé en deux rendez-vous, fournissant des résultats immédiats."
      },
      benefits: {
        title: "Avantages d'un Sourire Hollywood",
        list: [
          "Transformation permanente : Améliore de manière permanente la taille, la forme et la couleur de vos dents",
          "Apparence naturelle : Résulte en un sourire naturel et esthétique",
          "Invasivité minimale : Les facettes en porcelaine nécessitent moins de préparation que les couronnes",
          "Résistance aux taches : Les matériaux utilisés sont résistants aux taches et conservent leur brillance au fil du temps",
          "Résultats rapides : Réalisez votre rêve Hollywood Smile en deux rendez-vous"
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
            src={smiledesign}
            alt="Hollywood Smile"
            width={1920}
            height={1100}
            className="w-full rounded-xl"
          />
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">{pageContent.whatIs.title}</h2>
          <p className="text-gray-600 leading-relaxed">{pageContent.whatIs.description}</p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">{pageContent.whoShould.title}</h2>
          <p className="text-gray-600 mb-4">{pageContent.whoShould.description}</p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600">
            {pageContent.whoShould.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className="text-gray-600">{pageContent.whoShould.note}</p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">{pageContent.process.title}</h2>
          <p className="text-gray-600 mb-4">{pageContent.process.description}</p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600">
            {pageContent.process.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
          <p className="text-gray-600 font-medium">{pageContent.process.timeNote}</p>
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
      </div>
      <Footer />
    </div>
  )
} 