'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useRouter } from "next/router"
import Image from "next/image"
import aestheticgam from "../../../public/treatments/aestheticgam.jpg"

export default function AestheticGum() {
  const router = useRouter()
  const { locale } = router

  const content = {
    en: {
      title: "Aesthetic Gum Treatment",
      introduction: [
        "Perhaps the most important but often overlooked detail of aesthetic dentistry is gingival aesthetics.",
        "A smile can only be beautiful when it is in harmony. Although these start with the shape of the teeth and the harmony with the face, the closing of the teeth with each other, the harmony of the jaws and nose with them, the lips and gums are the parts that create this harmony.",
        "Normally, healthy gingival tissue is pink in color. It is very limited during laughing and follows the lip line. Changes in these criteria may cause aesthetic problems.",
        "Gum aesthetics are provided by several methods. The use of these methods varies according to the shape and amount of correction to be applied to the case. These are sometimes in the form of reduction and sometimes addition."
      ],
      treatments: {
        gumExfoliation: {
          title: "Gum Exfoliation",
          description: "Some people due to genetics and excessive smoking (due to excess melanin pigment) have dark brown-black spots on the gingiva. These stains, which have no harm in terms of health but can still disturb people aesthetically, can be removed with the 'peeling' method. The skin peeling process that dermatologists do on the face can be applied in such areas in the mouth. The skin inside the mouth is also made up of layers. It is the process of gradually thinning and peeling the layers, removing the colored upper layer and providing a more aesthetic appearance."
        },
        gingivalRecession: {
          title: "Gingival Recession",
          description: "As a result of gingival recession, some teeth may appear too long, and the root surfaces of these teeth are exposed. In such a case, first of all, gingival treatment should be performed and these openings should be closed with soft tissue grafts."
        },
        irregularMargins: {
          title: "Irregular Gingival Margins (Reshaping Gum)",
          description: "The gingival framing of the teeth may be too high or too low in some teeth (due to gingival recession, eruption disorder, defects arising from tooth loss). Irregular gingival margins can be corrected without violating biological intervals, with the advantage of simplifying operative procedures and providing hemostasis, thanks to electrocautery and the lasers used."
        },
        crownLengthening: {
          title: "Crown Lengthening Operation",
          description: "It is a procedure performed to lengthen the parts of the teeth (visible parts of the mouth) above the gingival level. In some cases, caries or fractures progress below the level of the gingiva, or the length of the teeth is very short. In such cases, prosthetic (crown, bridge, etc.) treatments should be extended towards the root part of the gingival level for the retention and gingival health."
        },
        gummySmileBotox: {
          title: "Gummy Smile Botox",
          description: [
            "The appearance of the gingiva; is directly related to the movement, tone and thickness of the lip.",
            "When some people laugh too much, the lip muscle goes up too much and too much gum is visible. In this case, the dentist prevents the lip from going too high by reducing the appearance of the gums with botulinum toxin to be applied."
          ]
        }
      }
    },
    tr: {
      title: "Aesthetic Gum Treatment",
      introduction: [
        "Perhaps the most important but often overlooked detail of aesthetic dentistry is gingival aesthetics.",
        "A smile can only be beautiful when it is in harmony. Although these start with the shape of the teeth and the harmony with the face, the closing of the teeth with each other, the harmony of the jaws and nose with them, the lips and gums are the parts that create this harmony.",
        "Normally, healthy gingival tissue is pink in color. It is very limited during laughing and follows the lip line. Changes in these criteria may cause aesthetic problems.",
        "Gum aesthetics are provided by several methods. The use of these methods varies according to the shape and amount of correction to be applied to the case. These are sometimes in the form of reduction and sometimes addition."
      ],
      treatments: {
        gumExfoliation: {
          title: "Gum Exfoliation",
          description: "Some people due to genetics and excessive smoking (due to excess melanin pigment) have dark brown-black spots on the gingiva. These stains, which have no harm in terms of health but can still disturb people aesthetically, can be removed with the 'peeling' method. The skin peeling process that dermatologists do on the face can be applied in such areas in the mouth. The skin inside the mouth is also made up of layers. It is the process of gradually thinning and peeling the layers, removing the colored upper layer and providing a more aesthetic appearance."
        },
        gingivalRecession: {
          title: "Gingival Recession",
          description: "As a result of gingival recession, some teeth may appear too long, and the root surfaces of these teeth are exposed. In such a case, first of all, gingival treatment should be performed and these openings should be closed with soft tissue grafts."
        },
        irregularMargins: {
          title: "Irregular Gingival Margins (Reshaping Gum)",
          description: "The gingival framing of the teeth may be too high or too low in some teeth (due to gingival recession, eruption disorder, defects arising from tooth loss). Irregular gingival margins can be corrected without violating biological intervals, with the advantage of simplifying operative procedures and providing hemostasis, thanks to electrocautery and the lasers used."
        },
        crownLengthening: {
          title: "Crown Lengthening Operation",
          description: "It is a procedure performed to lengthen the parts of the teeth (visible parts of the mouth) above the gingival level. In some cases, caries or fractures progress below the level of the gingiva, or the length of the teeth is very short. In such cases, prosthetic (crown, bridge, etc.) treatments should be extended towards the root part of the gingival level for the retention and gingival health."
        },
        gummySmileBotox: {
          title: "Gummy Smile Botox",
          description: [
            "The appearance of the gingiva; is directly related to the movement, tone and thickness of the lip.",
            "When some people laugh too much, the lip muscle goes up too much and too much gum is visible. In this case, the dentist prevents the lip from going too high by reducing the appearance of the gums with botulinum toxin to be applied."
          ]
        }
      }
    },
    fr: {
      title: "Aesthetic Gum Treatment",
      introduction: [
        "Perhaps the most important but often overlooked detail of aesthetic dentistry is gingival aesthetics.",
        "A smile can only be beautiful when it is in harmony. Although these start with the shape of the teeth and the harmony with the face, the closing of the teeth with each other, the harmony of the jaws and nose with them, the lips and gums are the parts that create this harmony.",
        "Normally, healthy gingival tissue is pink in color. It is very limited during laughing and follows the lip line. Changes in these criteria may cause aesthetic problems.",
        "Gum aesthetics are provided by several methods. The use of these methods varies according to the shape and amount of correction to be applied to the case. These are sometimes in the form of reduction and sometimes addition."
      ],
      treatments: {
        gumExfoliation: {
          title: "Gum Exfoliation",
          description: "Some people due to genetics and excessive smoking (due to excess melanin pigment) have dark brown-black spots on the gingiva. These stains, which have no harm in terms of health but can still disturb people aesthetically, can be removed with the 'peeling' method. The skin peeling process that dermatologists do on the face can be applied in such areas in the mouth. The skin inside the mouth is also made up of layers. It is the process of gradually thinning and peeling the layers, removing the colored upper layer and providing a more aesthetic appearance."
        },
        gingivalRecession: {
          title: "Gingival Recession",
          description: "As a result of gingival recession, some teeth may appear too long, and the root surfaces of these teeth are exposed. In such a case, first of all, gingival treatment should be performed and these openings should be closed with soft tissue grafts."
        },
        irregularMargins: {
          title: "Irregular Gingival Margins (Reshaping Gum)",
          description: "The gingival framing of the teeth may be too high or too low in some teeth (due to gingival recession, eruption disorder, defects arising from tooth loss). Irregular gingival margins can be corrected without violating biological intervals, with the advantage of simplifying operative procedures and providing hemostasis, thanks to electrocautery and the lasers used."
        },
        crownLengthening: {
          title: "Crown Lengthening Operation",
          description: "It is a procedure performed to lengthen the parts of the teeth (visible parts of the mouth) above the gingival level. In some cases, caries or fractures progress below the level of the gingiva, or the length of the teeth is very short. In such cases, prosthetic (crown, bridge, etc.) treatments should be extended towards the root part of the gingival level for the retention and gingival health."
        },
        gummySmileBotox: {
          title: "Gummy Smile Botox",
          description: [
            "The appearance of the gingiva; is directly related to the movement, tone and thickness of the lip.",
            "When some people laugh too much, the lip muscle goes up too much and too much gum is visible. In this case, the dentist prevents the lip from going too high by reducing the appearance of the gums with botulinum toxin to be applied."
          ]
        }
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
            src={aestheticgam}
            alt="Aesthetic Gum Treatment"
            width={2500}
            height={1667}
            className="w-full rounded-xl"
          />
        </div>

        <div className="prose max-w-none mb-12">
          {pageContent.introduction.map((paragraph, index) => (
            <p key={index} className="text-gray-600 mb-4 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="space-y-12">
          {Object.entries(pageContent.treatments).map(([key, treatment]) => (
            <section key={key} className="border-b border-gray-200 pb-8 last:border-0">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {treatment.title}
              </h3>
              {Array.isArray(treatment.description) ? (
                treatment.description.map((paragraph, index) => (
                  <p key={index} className="text-gray-600 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="text-gray-600 leading-relaxed">{treatment.description}</p>
              )}
            </section>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
} 