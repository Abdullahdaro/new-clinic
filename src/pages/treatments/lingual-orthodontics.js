'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useRouter } from "next/router"
import Image from "next/image"
import lingualorthodontics from "../../../public/treatments/lingualorthodontics.jpg"

export default function LingualOrthodontics() {
  const router = useRouter()
  const { locale } = router

  const content = {
    en: {
      title: "Lingual Orthodontics (Hidden Wires)",
      introduction: [
        "Lingual orthodontics is the most aesthetic orthodontic treatment option which is completely invisible. No one will notice you're wearing braces unless you say so.",
        "Lingual orthodontics is an orthodontic treatment option in which braces are attached to the invisible back surface of the teeth. Since nothing is attached to the front surface of the teeth, you can easily laugh during treatment. During your wedding, engagement or important days such as graduation, your treatment does not interfere with your smile."
      ],
      sections: [
        {
          title: "Are you a good candidate for lingual braces?",
          content: [
            "The only way to know for sure whether lingual braces are right for you is to consult with your orthodontist. Overall, lingual braces can correct the same kinds of alignment issues as conventional (buccal) braces.",
            "A 2016 review of the research showed that lingual braces achieved the treatment goals patients and doctors had planned.",
            "But lingual braces aren't right for everyone. Patients with very deep overbites, for example, might run into some trouble with brackets popping off more frequently.",
            "At your first appointment, your orthodontist will examine your teeth and discuss which treatment options are mostly likely to work well for you. If you're interested in lingual braces, talk to your orthodontist early in the process, because not all orthodontists are trained to apply them."
          ]
        },
        {
          title: "Will lingual braces give me a lisp?",
          content: [
            "The short answer is yes. When you speak, your tongue touches the backs of your teeth to make certain sounds. Since the brackets are on the back sides of your teeth, your speech is going to be affected when you first get lingual braces.",
            "While all types of braces can temporarily interfere with your speech patterns, 2014 research found that your speech could be different for a month or more with lingual braces.",
            "Studies have also shown that the degree of speech impairment could vary depending on which brand of brackets your orthodontist uses.",
            "Some patients have had success correcting the lingual lisp using speech therapy techniques. Eventually, though, your tongue will get accustomed to the braces and your speech should return to normal."
          ]
        },
        {
          title: "Are lingual braces more uncomfortable than other braces?",
          content: [
            "No matter what kind of braces you choose, you will have some discomfort as your teeth begin to move.",
            "Most people experience this pain as a dull ache, and it can generally be relieved with over the counter medications. You'll probably want to eat soft foods like yoghurt, rice, and soft-boiled eggs until the pain subsides.",
            "Braces can also cause pain when brackets come into contact with the soft tissues inside your mouth. With lingual braces, the tongue is a common site of pain because of the location of the brackets.",
            "For some patients, the discomfort of lingual braces is significant. To improve patients' comfort, more manufacturers are making lingual brackets smaller and smoother. The brackets can also be customized, which has been shown to decrease discomfort.",
            "For short term relief of tender spots, you could try a topical tooth pain relief gel or a small amount of wax over any sharp edges on your brackets. If a wire is poking or scratching, contact your orthodontist. Wires can be clipped to keep them from hurting you."
          ]
        },
        {
          title: "What are the pros and cons of lingual braces?",
          prosAndCons: {
            advantages: [
              "Lingual braces are virtually invisible.",
              "They effectively correct most bite problems.",
              "They can be customized to increase your comfort and maximize your efficiency."
            ],
            disadvantages: [
              "Lingual braces may be more expensive than other types of braces.",
              "They can cause considerable discomfort, especially at first.",
              "They can give you a temporary lisp.",
              "They may take longer than conventional braces."
            ]
          }
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
            src={lingualorthodontics}
            alt="Lingual Orthodontics"
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
          {pageContent.introduction.map((paragraph, index) => (
            <p key={index} className="text-gray-600 mb-4">
              {paragraph}
            </p>
          ))}
        </section>

        {/* Main Content Sections */}
        <div className="space-y-12">
          {pageContent.sections.map((section, index) => (
            <section key={index} className="prose max-w-none">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {section.title}
              </h3>

              {section.content && (
                <div className="space-y-4">
                  {section.content.map((paragraph, idx) => (
                    <p key={idx} className="text-gray-600">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}

              {section.prosAndCons && (
                <div className="grid md:grid-cols-2 gap-8 mt-6">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-4">Advantages</h4>
                    <ul className="space-y-2">
                      {section.prosAndCons.advantages.map((pro, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-4">Disadvantages</h4>
                    <ul className="space-y-2">
                      {section.prosAndCons.disadvantages.map((con, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
} 