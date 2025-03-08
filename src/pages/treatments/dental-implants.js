 'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useRouter } from "next/router"
import Image from "next/image"
import dentalimplants from "../../../public/treatments/dentalimplants.jpg"

export default function DentalImplants() {
  const router = useRouter()
  const { locale } = router

  const content = {
    en: {
      title: "Dental Implants",
      sections: [
        {
          title: "What Are Dental Implants?",
          content: "Dental implants are replacement tooth roots. Implants provide a strong foundation for fixed (permanent) or removable replacement teeth that are made to match your natural teeth."
        },
        {
          title: "What Are the Advantages of Dental Implants?",
          introduction: "There are many advantages to dental implants, including:",
          advantages: [
            {
              title: "Improved appearance:",
              description: "Dental implants look and feel like your own teeth. And because they are designed to fuse with bone, they become permanent."
            },
            {
              title: "Improved speech:",
              description: "With poor-fitting dentures, the teeth can slip within the mouth causing you to mumble or slur your words. Dental implants allow you to speak without the worry that teeth might slip."
            },
            {
              title: "Improved comfort:",
              description: "Because they become part of you, implants eliminate the discomfort of removable dentures."
            },
            {
              title: "Easier eating:",
              description: "Sliding dentures can make chewing difficult. Dental implants function like your own teeth, allowing you to eat your favourite foods with confidence and without pain."
            },
            {
              title: "Improved self-esteem:",
              description: "Dental implants can give you back your smile and help you feel better about yourself."
            },
            {
              title: "Improved oral health:",
              description: "Dental implants don't require reducing other teeth, as a tooth-supported bridge does. Because nearby teeth are not altered to support the implant, more of your own teeth are left intact, improving long-term oral health. Individual implants also allow easier access between teeth, improving oral hygiene."
            },
            {
              title: "Durability:",
              description: "Implants are very durable and will last many years. With good care, many implants last a lifetime."
            },
            {
              title: "Convenience:",
              description: "Removable dentures are just that; removable. Dental implants eliminate the embarrassing inconvenience of removing dentures, as well as the need for messy adhesives to keep them in place."
            }
          ]
        },
        {
          title: "How Successful Are Dental Implants?",
          content: "Success rates of dental implants vary, depending on where in the jaw the implants are placed but, in general, dental implants have a success rate of up to 98%. With proper care, implants can last a lifetime."
        },
        {
          title: "Can Anyone Get Dental Implants?",
          content: "In most cases, anyone healthy enough to undergo a routine dental extraction or oral surgery can be considered for a dental implant. Patients should have healthy gums and enough bone to hold the implant. They also must be committed to good oral hygiene and regular dental visits. Heavy smokers, people suffering from uncontrolled chronic disorders — such as diabetes or heart disease — or patients who have had radiation therapy to the head/neck area need to be evaluated on an individual basis. If you are considering implants, talk to your dentist to see if they are right for you."
        },
        {
          title: "How Painful Are Dental Implants?",
          content: [
            "Most people who have received dental implants say that there is very little discomfort involved in the procedure. Local anesthesia can be used during the procedure, and most patients report that implants involve less pain than a tooth extraction.",
            "After the dental implant, mild soreness can be treated with over-the-counter pain medications"
          ]
        },
        {
          title: "How Do I Care for Dental Implants?",
          content: "Dental implants require the same care as real teeth, including brushing, flossing, rinsing with an antibacterial mouthwash, and regular dental check-ups."
        }
      ]
    },
    tr: {
        title: "Dental Implants",
        sections: [
          {
            title: "What Are Dental Implants?",
            content: "Dental implants are replacement tooth roots. Implants provide a strong foundation for fixed (permanent) or removable replacement teeth that are made to match your natural teeth."
          },
          {
            title: "What Are the Advantages of Dental Implants?",
            introduction: "There are many advantages to dental implants, including:",
            advantages: [
              {
                title: "Improved appearance:",
                description: "Dental implants look and feel like your own teeth. And because they are designed to fuse with bone, they become permanent."
              },
              {
                title: "Improved speech:",
                description: "With poor-fitting dentures, the teeth can slip within the mouth causing you to mumble or slur your words. Dental implants allow you to speak without the worry that teeth might slip."
              },
              {
                title: "Improved comfort:",
                description: "Because they become part of you, implants eliminate the discomfort of removable dentures."
              },
              {
                title: "Easier eating:",
                description: "Sliding dentures can make chewing difficult. Dental implants function like your own teeth, allowing you to eat your favourite foods with confidence and without pain."
              },
              {
                title: "Improved self-esteem:",
                description: "Dental implants can give you back your smile and help you feel better about yourself."
              },
              {
                title: "Improved oral health:",
                description: "Dental implants don't require reducing other teeth, as a tooth-supported bridge does. Because nearby teeth are not altered to support the implant, more of your own teeth are left intact, improving long-term oral health. Individual implants also allow easier access between teeth, improving oral hygiene."
              },
              {
                title: "Durability:",
                description: "Implants are very durable and will last many years. With good care, many implants last a lifetime."
              },
              {
                title: "Convenience:",
                description: "Removable dentures are just that; removable. Dental implants eliminate the embarrassing inconvenience of removing dentures, as well as the need for messy adhesives to keep them in place."
              }
            ]
          },
          {
            title: "How Successful Are Dental Implants?",
            content: "Success rates of dental implants vary, depending on where in the jaw the implants are placed but, in general, dental implants have a success rate of up to 98%. With proper care, implants can last a lifetime."
          },
          {
            title: "Can Anyone Get Dental Implants?",
            content: "In most cases, anyone healthy enough to undergo a routine dental extraction or oral surgery can be considered for a dental implant. Patients should have healthy gums and enough bone to hold the implant. They also must be committed to good oral hygiene and regular dental visits. Heavy smokers, people suffering from uncontrolled chronic disorders — such as diabetes or heart disease — or patients who have had radiation therapy to the head/neck area need to be evaluated on an individual basis. If you are considering implants, talk to your dentist to see if they are right for you."
          },
          {
            title: "How Painful Are Dental Implants?",
            content: [
              "Most people who have received dental implants say that there is very little discomfort involved in the procedure. Local anesthesia can be used during the procedure, and most patients report that implants involve less pain than a tooth extraction.",
              "After the dental implant, mild soreness can be treated with over-the-counter pain medications"
            ]
          },
          {
            title: "How Do I Care for Dental Implants?",
            content: "Dental implants require the same care as real teeth, including brushing, flossing, rinsing with an antibacterial mouthwash, and regular dental check-ups."
          }
        ]
      },
    fr: {
        title: "Dental Implants",
        sections: [
          {
            title: "What Are Dental Implants?",
            content: "Dental implants are replacement tooth roots. Implants provide a strong foundation for fixed (permanent) or removable replacement teeth that are made to match your natural teeth."
          },
          {
            title: "What Are the Advantages of Dental Implants?",
            introduction: "There are many advantages to dental implants, including:",
            advantages: [
              {
                title: "Improved appearance:",
                description: "Dental implants look and feel like your own teeth. And because they are designed to fuse with bone, they become permanent."
              },
              {
                title: "Improved speech:",
                description: "With poor-fitting dentures, the teeth can slip within the mouth causing you to mumble or slur your words. Dental implants allow you to speak without the worry that teeth might slip."
              },
              {
                title: "Improved comfort:",
                description: "Because they become part of you, implants eliminate the discomfort of removable dentures."
              },
              {
                title: "Easier eating:",
                description: "Sliding dentures can make chewing difficult. Dental implants function like your own teeth, allowing you to eat your favourite foods with confidence and without pain."
              },
              {
                title: "Improved self-esteem:",
                description: "Dental implants can give you back your smile and help you feel better about yourself."
              },
              {
                title: "Improved oral health:",
                description: "Dental implants don't require reducing other teeth, as a tooth-supported bridge does. Because nearby teeth are not altered to support the implant, more of your own teeth are left intact, improving long-term oral health. Individual implants also allow easier access between teeth, improving oral hygiene."
              },
              {
                title: "Durability:",
                description: "Implants are very durable and will last many years. With good care, many implants last a lifetime."
              },
              {
                title: "Convenience:",
                description: "Removable dentures are just that; removable. Dental implants eliminate the embarrassing inconvenience of removing dentures, as well as the need for messy adhesives to keep them in place."
              }
            ]
          },
          {
            title: "How Successful Are Dental Implants?",
            content: "Success rates of dental implants vary, depending on where in the jaw the implants are placed but, in general, dental implants have a success rate of up to 98%. With proper care, implants can last a lifetime."
          },
          {
            title: "Can Anyone Get Dental Implants?",
            content: "In most cases, anyone healthy enough to undergo a routine dental extraction or oral surgery can be considered for a dental implant. Patients should have healthy gums and enough bone to hold the implant. They also must be committed to good oral hygiene and regular dental visits. Heavy smokers, people suffering from uncontrolled chronic disorders — such as diabetes or heart disease — or patients who have had radiation therapy to the head/neck area need to be evaluated on an individual basis. If you are considering implants, talk to your dentist to see if they are right for you."
          },
          {
            title: "How Painful Are Dental Implants?",
            content: [
              "Most people who have received dental implants say that there is very little discomfort involved in the procedure. Local anesthesia can be used during the procedure, and most patients report that implants involve less pain than a tooth extraction.",
              "After the dental implant, mild soreness can be treated with over-the-counter pain medications"
            ]
          },
          {
            title: "How Do I Care for Dental Implants?",
            content: "Dental implants require the same care as real teeth, including brushing, flossing, rinsing with an antibacterial mouthwash, and regular dental check-ups."
          }
        ]
      },
  }

  const pageContent = content[locale] || content.en

  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <Image
            src={dentalimplants}
            alt="Dental Implants"
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
              
              {section.introduction && (
                <p className="text-gray-600 font-semibold mb-4">
                  {section.introduction}
                </p>
              )}

              {section.advantages ? (
                <div className="space-y-6">
                  {section.advantages.map((advantage, idx) => (
                    <div key={idx}>
                      <p className="text-gray-600">
                        <strong>{advantage.title}</strong> {advantage.description}
                      </p>
                    </div>
                  ))}
                </div>
              ) : Array.isArray(section.content) ? (
                section.content.map((paragraph, idx) => (
                  <p key={idx} className="text-gray-600 mb-4">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="text-gray-600">
                  {section.content}
                </p>
              )}
            </section>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}