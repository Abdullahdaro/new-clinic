'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useRouter } from "next/router"
import Image from "next/image"
import metalbraces from "../../../public/treatments/metalbraces.jpg"

export default function MetalBraces() {
  const router = useRouter()
  const { locale } = router

  const content = {
    en: {
      title: "Metal Braces Treatment",
      introduction: {
        title: "What are metal braces?",
        content: [
          "Metal braces are the tried and tested method for teeth straightening, correcting the alignment of teeth and facial asymmetries.",
          "They consist of metal brackets which are bonded on the outer/front surface of the teeth.",
          "Metallic braces were among the first orthodontic appliances that were introduced for orthodontic treatment of misaligned or crooked teeth. Still, they are being commonly used in orthodontics, besides other types of braces such as ceramic braces and lingual braces."
        ]
      },
      components: {
        title: "What are metal braces made of?",
        introduction: "Since the braces remain in the oral cavity for an extended time duration, they are prepared from materials that possess sufficient strength and excellent resistance to corrosion. Therefore, conventional metal braces are made of high-quality stainless steel or titanium alloys. Metallic braces consist of the following components:",
        parts: [
          {
            title: "Metallic brackets",
            content: [
              "Brackets are the appliances that are attached to the teeth and are the ones that become visible whenever you open your mouth for speech or smiling.",
              "Metal brackets are made up of stainless steel, gold, titanium, nickel. Chromium is added to prevent the corrosion of stainless and molybdenum is added to prevent crevice and pitting corrosion.",
              "Brackets are attached to the teeth with the help of special dental cement that is polymerized with the help of visible light. Orthodontic braces contain slots through which an archwire passes."
            ]
          },
          {
            title: "Metallic archwires",
            content: [
              "An archwire is simply a metallic wire that passes through specially designed slots within the brackets. Metallic archwires are either prepared from stainless steel, nickel-titanium, or β-titanium alloys.",
              "Currently, Ni-Ti (55% nickel and 45% titanium) alloys are used more commonly than stainless steel alloys because of their super-elasticity and memory. Stainless steel alloys include 18% chromium and 8% nickel.",
              "The thickness and rigidity of the archwires determine the force that is generated onto the teeth. Usually, flexible wires are used initially to gradually align the teeth followed by using rigid wires (like stainless steel) to bring about major orthodontic movements of teeth."
            ]
          },
          {
            title: "Orthodontic ligatures",
            content: [
              "Also commonly known as rubber bands, these are simply elastics that are used for holding archwires into their places in the brackets. Ligatures come in a variety of colors and patients can choose the color of their ligatures at every appointment, when they are replaced with fresh ones."
            ]
          }
        ]
      },
      comparison: {
        title: "Difference between traditional braces and self-ligating braces",
        differences: [
          {
            traditional: "use brackets made of stainless steel and bonded to the teeth.",
            selfLigating: "consist of metal brackets bonded on the surface of the teeth."
          },
          {
            traditional: "require a ligature tie to secure the wire in place in the slot of the bracket.",
            selfLigating: "consist of brackets that have a flap of metal. It is opened when the archwire is to be placed. Closing the flap secures the archwire in the bracket."
          },
        ]
      },
    },
    tr: {
        title: "Metal Braces Treatment",
        introduction: {
          title: "What are metal braces?",
          content: [
            "Metal braces are the tried and tested method for teeth straightening, correcting the alignment of teeth and facial asymmetries.",
            "They consist of metal brackets which are bonded on the outer/front surface of the teeth.",
            "Metallic braces were among the first orthodontic appliances that were introduced for orthodontic treatment of misaligned or crooked teeth. Still, they are being commonly used in orthodontics, besides other types of braces such as ceramic braces and lingual braces."
          ]
        },
        components: {
          title: "What are metal braces made of?",
          introduction: "Since the braces remain in the oral cavity for an extended time duration, they are prepared from materials that possess sufficient strength and excellent resistance to corrosion. Therefore, conventional metal braces are made of high-quality stainless steel or titanium alloys. Metallic braces consist of the following components:",
          parts: [
            {
              title: "Metallic brackets",
              content: [
                "Brackets are the appliances that are attached to the teeth and are the ones that become visible whenever you open your mouth for speech or smiling.",
                "Metal brackets are made up of stainless steel, gold, titanium, nickel. Chromium is added to prevent the corrosion of stainless and molybdenum is added to prevent crevice and pitting corrosion.",
                "Brackets are attached to the teeth with the help of special dental cement that is polymerized with the help of visible light. Orthodontic braces contain slots through which an archwire passes."
              ]
            },
            {
              title: "Metallic archwires",
              content: [
                "An archwire is simply a metallic wire that passes through specially designed slots within the brackets. Metallic archwires are either prepared from stainless steel, nickel-titanium, or β-titanium alloys.",
                "Currently, Ni-Ti (55% nickel and 45% titanium) alloys are used more commonly than stainless steel alloys because of their super-elasticity and memory. Stainless steel alloys include 18% chromium and 8% nickel.",
                "The thickness and rigidity of the archwires determine the force that is generated onto the teeth. Usually, flexible wires are used initially to gradually align the teeth followed by using rigid wires (like stainless steel) to bring about major orthodontic movements of teeth."
              ]
            },
            {
              title: "Orthodontic ligatures",
              content: [
                "Also commonly known as rubber bands, these are simply elastics that are used for holding archwires into their places in the brackets. Ligatures come in a variety of colors and patients can choose the color of their ligatures at every appointment, when they are replaced with fresh ones."
              ]
            }
          ]
        },
        comparison: {
          title: "Difference between traditional braces and self-ligating braces",
          differences: [
            {
              traditional: "use brackets made of stainless steel and bonded to the teeth.",
              selfLigating: "consist of metal brackets bonded on the surface of the teeth."
            },
            {
              traditional: "require a ligature tie to secure the wire in place in the slot of the bracket.",
              selfLigating: "consist of brackets that have a flap of metal. It is opened when the archwire is to be placed. Closing the flap secures the archwire in the bracket."
            },
          ]
        },
      },
      fr: {
        title: "Metal Braces Treatment",
        introduction: {
          title: "What are metal braces?",
          content: [
            "Metal braces are the tried and tested method for teeth straightening, correcting the alignment of teeth and facial asymmetries.",
            "They consist of metal brackets which are bonded on the outer/front surface of the teeth.",
            "Metallic braces were among the first orthodontic appliances that were introduced for orthodontic treatment of misaligned or crooked teeth. Still, they are being commonly used in orthodontics, besides other types of braces such as ceramic braces and lingual braces."
          ]
        },
        components: {
          title: "What are metal braces made of?",
          introduction: "Since the braces remain in the oral cavity for an extended time duration, they are prepared from materials that possess sufficient strength and excellent resistance to corrosion. Therefore, conventional metal braces are made of high-quality stainless steel or titanium alloys. Metallic braces consist of the following components:",
          parts: [
            {
              title: "Metallic brackets",
              content: [
                "Brackets are the appliances that are attached to the teeth and are the ones that become visible whenever you open your mouth for speech or smiling.",
                "Metal brackets are made up of stainless steel, gold, titanium, nickel. Chromium is added to prevent the corrosion of stainless and molybdenum is added to prevent crevice and pitting corrosion.",
                "Brackets are attached to the teeth with the help of special dental cement that is polymerized with the help of visible light. Orthodontic braces contain slots through which an archwire passes."
              ]
            },
            {
              title: "Metallic archwires",
              content: [
                "An archwire is simply a metallic wire that passes through specially designed slots within the brackets. Metallic archwires are either prepared from stainless steel, nickel-titanium, or β-titanium alloys.",
                "Currently, Ni-Ti (55% nickel and 45% titanium) alloys are used more commonly than stainless steel alloys because of their super-elasticity and memory. Stainless steel alloys include 18% chromium and 8% nickel.",
                "The thickness and rigidity of the archwires determine the force that is generated onto the teeth. Usually, flexible wires are used initially to gradually align the teeth followed by using rigid wires (like stainless steel) to bring about major orthodontic movements of teeth."
              ]
            },
            {
              title: "Orthodontic ligatures",
              content: [
                "Also commonly known as rubber bands, these are simply elastics that are used for holding archwires into their places in the brackets. Ligatures come in a variety of colors and patients can choose the color of their ligatures at every appointment, when they are replaced with fresh ones."
              ]
            }
          ]
        },
        comparison: {
          title: "Difference between traditional braces and self-ligating braces",
          differences: [
            {
              traditional: "use brackets made of stainless steel and bonded to the teeth.",
              selfLigating: "consist of metal brackets bonded on the surface of the teeth."
            },
            {
              traditional: "require a ligature tie to secure the wire in place in the slot of the bracket.",
              selfLigating: "consist of brackets that have a flap of metal. It is opened when the archwire is to be placed. Closing the flap secures the archwire in the bracket."
            },
          ]
        },
      },
  }

  const pageContent = content[locale] || content.en

  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <Image
            src={metalbraces}
            alt="Metal Braces Treatment"
            width={2500}
            height={1667}
            className="w-full rounded-xl"
          />
        </div>

        <h1 className="text-4xl font-bold text-center mb-12 text-main">
          {pageContent.title}
        </h1>

        {/* Introduction */}
        <section className="prose max-w-none mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            {pageContent.introduction.title}
          </h3>
          {pageContent.introduction.content.map((paragraph, index) => (
            <p key={index} className="text-gray-600 mb-4">
              {paragraph}
            </p>
          ))}
        </section>

        {/* Components */}
        <section className="prose max-w-none mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            {pageContent.components.title}
          </h3>
          <p className="text-gray-600 mb-6">
            {pageContent.components.introduction}
          </p>
          <div className="space-y-8">
            {pageContent.components.parts.map((part, index) => (
              <div key={index}>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {part.title}
                </h4>
                {part.content.map((paragraph, idx) => (
                  <p key={idx} className="text-gray-600 mb-3">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Comparison */}
        <section className="prose max-w-none mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            {pageContent.comparison.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-4">Traditional Braces</h4>
              <ul className="space-y-3">
                {pageContent.comparison.differences.map((diff, index) => (
                  <li key={index} className="text-gray-600">
                    {diff.traditional}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-4">Self-Ligating Braces</h4>
              <ul className="space-y-3">
                {pageContent.comparison.differences.map((diff, index) => (
                  <li key={index} className="text-gray-600">
                    {diff.selfLigating}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
} 