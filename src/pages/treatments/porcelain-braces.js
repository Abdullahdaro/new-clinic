'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useRouter } from "next/router"
import Image from "next/image"
import porcelainbraces from "../../../public/treatments/porcelainbraces.jpg"

export default function PorcelainBraces() {
  const router = useRouter()
  const { locale } = router

  const content = {
    en: {
      title: "Porcelain Braces Treatment",
      sections: [
        {
          title: "What is Porcelain Braces?",
          content: "Braces application is a treatment method that has been used for many years. However, every day, various innovations are introduced to bring this method aesthetics, ease of use and make it more comfortable for the patient. Porcelain braces are one of them. Just like metal braces, there is a wire attached to the tooth horizontally. However, the brackets attached to the teeth are transparent and square. Instead of a metal bracket, it is covered with transparent and more aesthetic porcelain."
        },
        {
          title: "Porcelain Braces Application",
          content: [
            "There is a difference in appearance with traditional metal braces. It is placed on the tooth layer with transparent or tooth-coloured porcelain. This provides a more aesthetic appearance. Any deficiencies, if any, are fixed after the dentist's control. Then the dentist starts his work. The patient's mouth is enlarged by using a material similar to an oval shape or a special tool preferred by the dentist. Thus, the patient cannot close his mouth and does not prevent the dentist's work. Then, an instrument is placed in the mouth to prevent saliva. This is to eliminate the wetness in the mouth.",
            "Then dental braces are placed on the tooth. By creating roughness on the tooth, transparent or porcelain material is placed on the tooth with special glue. Thus, the process is completed."
          ]
        },
        {
          title: "Who Is Porcelain Braces Treatment Applied?",
          introduction: "This procedure can be applied to almost everyone who has oral and dental problems. However, braces are not worn in every dental problem. Especially:",
          list: [
            "It can be applied to patients with trismus problems.",
            "It is applied to patients with perplexing teeth.",
            "It is applied for patients with cleft palate and gum.",
            "It is applied for patients with respiratory and thumbsucking problems.",
            "It is applied to fix the teeth incorrectly positioned after having completely lost the milk tooth.",
            "It is applied for teeth that look bad due to excessive protrusion of the anterior teeth.",
            "It is applied to those who have mouth closing problems.",
            "It is applied to people with missing teeth.",
            "It is applied in patients with wide tooth intervals.",
            "It is applied to people who have smile problems and are uncomfortable with this.",
            "It is applied to patients who have to chew and have speaking difficulties.",
            "It is applied in patients who experience incompatibility between the lower teeth and upper teeth."
          ]
        },
        {
          title: "What are the Advantages of Porcelain Braces Treatment?",
          introduction: "Porcelain braces are very effective in terms of visuality compared to other traditional braces. It provides a great advantage for those who want to have their braces made as porcelain. Some of those:",
          advantages: [
            "It is very good in terms of hardness and durability.",
            "Since it is not metal, it does not cause an allergic reaction.",
            "It is very close to metal brackets in terms of durability.",
            "The time difference between porcelain braces and metal braces is not too much.",
            "They are a bit larger than metal brackets but are not noticeable because they are transparent.",
            "It is easier to clean than metal braces. Metal braces require a lot of effort when brushing teeth. However, this problem is less common with porcelain braces.",
            "Since there is no color change, it always has the same transparency."
          ]
        },
        {
          title: "What are the Disadvantages of Porcelain Braces Treatment?",
          introduction: "Although porcelain braces are advantageous in many ways, they have a small disadvantage. These:",
          disadvantages: [
            "It is necessary to wait 1 or 2 months more than metal braces. However, it is not an intolerable time period because it is not aesthetic and uncomfortable.",
            "On the other hand, comes the solidity issue. Although it is durable, we cannot say that it is as much as metal braces. Actually, this is not a disadvantage. As a matter of fact, it is also a problem for natural teeth. All that's required is to stay away from any hard objects."
          ]
        },
        {
          title: "Porcelain Braces Care",
          content: "Special toothbrushes should be used during this treatment. It will be sufficient to clean your teeth by choosing a brush and toothpaste in line with the physician's recommendation. It will also be important to be sensitive"
        }
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
            src={porcelainbraces}
            alt="Porcelain Braces Treatment"
            width={2500}
            height={1667}
            className="w-full rounded-xl"
          />
        </div>

        <h1 className="text-4xl font-bold text-center mb-12 text-main">
          {pageContent.title}
        </h1>

        <div className="space-y-12">
          {pageContent.sections.map((section, index) => (
            <section key={index} className="prose max-w-none">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {section.title}
              </h3>

              {section.content && (
                <div className="space-y-4">
                  {Array.isArray(section.content) ? 
                    section.content.map((paragraph, idx) => (
                      <p key={idx} className="text-gray-600">{paragraph}</p>
                    )) : 
                    <p className="text-gray-600">{section.content}</p>
                  }
                </div>
              )}

              {section.introduction && (
                <p className="text-gray-600 mb-4">{section.introduction}</p>
              )}

              {section.list && (
                <ul className="space-y-2 list-disc pl-6">
                  {section.list.map((item, idx) => (
                    <li key={idx} className="text-gray-600">{item}</li>
                  ))}
                </ul>
              )}

              {section.advantages && (
                <ul className="space-y-2">
                  {section.advantages.map((advantage, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {advantage}
                    </li>
                  ))}
                </ul>
              )}

              {section.disadvantages && (
                <ul className="space-y-2">
                  {section.disadvantages.map((disadvantage, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      {disadvantage}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
} 