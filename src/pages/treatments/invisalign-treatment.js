'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useRouter } from "next/router"
import Image from "next/image"
import invisaligntreatment from "../../../public/treatments/invisaligntreatment.jpg"

export default function InvisalignTreatment() {
  const router = useRouter()
  const { locale } = router

  const content = {
    en: {
      title: "Invisalign Treatment",
      introduction: [
        "If you want to straighten your teeth without going through the pain of traditional metal braces, Invisalign treatments are the solution—this type of dental care uses an unconventional approach to fix your teeth alignment while staying virtually invisible efficiently.",
        "Invisalign is well-known for using primarily hygienic clear aligners as orthodontic treatment. Plus, the SmartForce Technology that comes with Invisalign treatments allows the customisation of removable clear aligners that are unique to your teeth.",
        "These virtually invisible plastic aligners will be placed over your teeth so they can gradually move and straighten your teeth alignment without causing too much interruption in your lifestyle. In fact, most people won't even notice that you're wearing such aligners."
      ],
      process: {
        title: "Now, the Invisalign process is pretty simple:",
        steps: [
          "Your dentist will perform a 3D scan of your teeth.",
          "Straightening strategies will be laid out based on your x-rays and scans.",
          "Start smiling with custom-made Invisalign clear aligners!"
        ],
        note: "Typically, you'll have to wear a series of aligners in 3 to 4 sets at a time which you will replace within a two weeks interval until the desired outcome is achieved."
      },
      keyPoints: {
        title: "Here Are the 10 Things You Need to Know Before Getting Invisalign Treatments",
        points: [
          "You'll feel little to no discomfort or pain.",
          "Coloured food and drinks are not advisable.",
          "Invisalign treatments are 2x faster than traditional metal braces.",
          "You'll have button attachments for your clear aligners.",
          "IPR is necessary if your teeth are too packed together.",
          "In rare cases, regular braces may be needed.",
          "Rubber bands may be used along with your aligners.",
          "Several sets of clear aligners will be made for you.",
          "You'll still need retainers after your Invisalign treatments.",
          "You'll sometimes feel your teeth loosening – that's normal."
        ]
      },
      detailedSections: [
        {
          title: "Feel Little to No Discomfort or Pain – Put in 100% Commitment",
          content: [
            "Invisalign treatments have done away with the uncomfortable wires and brackets from traditional metal braces.",
            "Instead, Invisalign lets you realign your teeth using removable clear aligners. But remember that you will need to wear these aligners for about 20 to 22 hours a day—your commitment is essential in getting efficient results.",
            "Questions: what happens if you went out to dinner for a couple of hours and forgot to put your aligners back on?",
            "Answer: you will need to make up for the lost time—if you lost two hours, then you will need to wear your clear aligners for an extra two hours for the rest of the day or the next day."
          ]
        },
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
            src={invisaligntreatment}
            alt="Invisalign Treatment"
            width={1200}
            height={800}
            className="w-full rounded-xl"
          />
        </div>

        <h1 className="text-4xl font-bold text-center mb-12 text-main">
          {pageContent.title}
        </h1>

        <div className="space-y-12">
          {/* Introduction */}
          <section className="prose max-w-none">
            {pageContent.introduction.map((paragraph, index) => (
              <p key={index} className="text-gray-600 mb-4">
                {paragraph}
              </p>
            ))}
          </section>

          {/* Process */}
          <section className="prose max-w-none">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              {pageContent.process.title}
            </h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              {pageContent.process.steps.map((step, index) => (
                <li key={index} className="text-gray-600">
                  {step}
                </li>
              ))}
            </ul>
            <p className="text-gray-600">{pageContent.process.note}</p>
          </section>

          {/* Key Points */}
          <section className="prose max-w-none">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              {pageContent.keyPoints.title}
            </h3>
            <ul className="space-y-3">
              {pageContent.keyPoints.points.map((point, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-main flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
          </section>

          {/* Detailed Sections */}
          {pageContent.detailedSections.map((section, index) => (
            <section key={index} className="prose max-w-none">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {section.title}
              </h3>
              {section.content.map((paragraph, idx) => (
                <p key={idx} className="text-gray-600 mb-4">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
} 