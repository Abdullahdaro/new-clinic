'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useRouter } from "next/router"
import Image from "next/image"
import immediateimplants from "../../../public/treatments/immediateimplants.jpg"

export default function ImmediateImplant() {
  const router = useRouter()
  const { locale } = router

  const content = {
    en: {
      title: "Immediate Implant",
      sections: [
        {
          title: "What Is Immediate Implant Placement?",
          content: "Immediate implant placement is a procedure by which dental implants are placed in the jaw immediately following tooth extraction. By placing the root of the implant in a spot that has been recently vacated, you simplify the process and increase the implant's likelihood of successful osseointegration. Immediate implant placement essentially takes care of two important steps during one appointment."
        },
        {
          title: "What Are the Benefits of Immediate Placement?",
          content: "Immediate implant placement benefits both patients and clinicians. Some of the benefits of using this procedure over conventional methods of dental implant placement include:",
          benefits: [
            "Shorter dental implant procedure timeline.",
            "The simpler surgical procedure to perform.",
            "Fewer invasive surgeries and recoveries for the patient.",
            "Satisfied consumer base that draws patients to your practice."
          ],
          drawbacks: {
            introduction: "As with any procedure, immediate implant placement comes with some risks and drawbacks, though the benefits typically outweigh them:",
            list: [
              "Requires coordination between the surgeon and restorative dentist.",
              "May still require healing time before loading.",
              "Not all patients make good candidates."
            ]
          },
          conclusion: "Compared to other forms of tooth replacement, immediate placement has the potential to simplify your workflow and give patients a better experience overall."
        }
      ]
    },
    tr: {
        title: "Immediate Implant",
        sections: [
          {
            title: "What Is Immediate Implant Placement?",
            content: "Immediate implant placement is a procedure by which dental implants are placed in the jaw immediately following tooth extraction. By placing the root of the implant in a spot that has been recently vacated, you simplify the process and increase the implant's likelihood of successful osseointegration. Immediate implant placement essentially takes care of two important steps during one appointment."
          },
          {
            title: "What Are the Benefits of Immediate Placement?",
            content: "Immediate implant placement benefits both patients and clinicians. Some of the benefits of using this procedure over conventional methods of dental implant placement include:",
            benefits: [
              "Shorter dental implant procedure timeline.",
              "The simpler surgical procedure to perform.",
              "Fewer invasive surgeries and recoveries for the patient.",
              "Satisfied consumer base that draws patients to your practice."
            ],
            drawbacks: {
              introduction: "As with any procedure, immediate implant placement comes with some risks and drawbacks, though the benefits typically outweigh them:",
              list: [
                "Requires coordination between the surgeon and restorative dentist.",
                "May still require healing time before loading.",
                "Not all patients make good candidates."
              ]
            },
            conclusion: "Compared to other forms of tooth replacement, immediate placement has the potential to simplify your workflow and give patients a better experience overall."
          }
        ]
      },
    fr: {
        title: "Immediate Implant",
        sections: [
          {
            title: "What Is Immediate Implant Placement?",
            content: "Immediate implant placement is a procedure by which dental implants are placed in the jaw immediately following tooth extraction. By placing the root of the implant in a spot that has been recently vacated, you simplify the process and increase the implant's likelihood of successful osseointegration. Immediate implant placement essentially takes care of two important steps during one appointment."
          },
          {
            title: "What Are the Benefits of Immediate Placement?",
            content: "Immediate implant placement benefits both patients and clinicians. Some of the benefits of using this procedure over conventional methods of dental implant placement include:",
            benefits: [
              "Shorter dental implant procedure timeline.",
              "The simpler surgical procedure to perform.",
              "Fewer invasive surgeries and recoveries for the patient.",
              "Satisfied consumer base that draws patients to your practice."
            ],
            drawbacks: {
              introduction: "As with any procedure, immediate implant placement comes with some risks and drawbacks, though the benefits typically outweigh them:",
              list: [
                "Requires coordination between the surgeon and restorative dentist.",
                "May still require healing time before loading.",
                "Not all patients make good candidates."
              ]
            },
            conclusion: "Compared to other forms of tooth replacement, immediate placement has the potential to simplify your workflow and give patients a better experience overall."
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
            src={immediateimplants}
            alt="Immediate Implant"
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
                <p className="text-gray-600 mb-6">
                  {section.content}
                </p>
              )}

              {section.benefits && (
                <ul className="space-y-3 list-disc pl-6 mb-8">
                  {section.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-gray-600">
                      {benefit}
                    </li>
                  ))}
                </ul>
              )}

              {section.drawbacks && (
                <div className="mb-8">
                  <p className="text-gray-600 mb-4">
                    {section.drawbacks.introduction}
                  </p>
                  <ul className="space-y-3 list-disc pl-6">
                    {section.drawbacks.list.map((drawback, idx) => (
                      <li key={idx} className="text-gray-600">
                        {drawback}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {section.conclusion && (
                <p className="text-gray-600 mt-6">
                  {section.conclusion}
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