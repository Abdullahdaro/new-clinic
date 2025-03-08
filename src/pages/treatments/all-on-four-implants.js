'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useRouter } from "next/router"
import Image from "next/image"
import allonfourdentalimplants from "../../../public/treatments/allonfourdentalimplants.jpg"

export default function AllOnFourImplants() {
  const router = useRouter()
  const { locale } = router

  const content = {
    en: {
      title: "All-on-4 Dental Implants",
      sections: [
        {
          title: "What Are All-on-4 Dental Implants?",
          content: "All-on-4 dental implants are a full set of implants designed to replace your entire upper or lower set of teeth. They act as a more permanent and natural-looking alternative to dentures."
        },
        {
          title: "Dentists recommend All-on-4 for a variety of reasons, including:",
          list: [
            "They can restore teeth after chronic tooth decay or infection.",
            "Replace teeth after failed root canals.",
            "Removing and replacing teeth that are not salvageable."
          ]
        },
        {
          title: "Pros and cons of getting an All-on-4 dental implant",
          advantages: {
            introduction: "All-on-4 dental implants have gained lots of popularity in recent years due to advantages like:",
            list: [
              {
                title: "The patient gets a new smile after a single visit:",
                description: "During the installation of All-on-4 implants, the implants and prosthetic teeth are installed during the same visit. This means a patient that walked into the clinic missing most of their teeth walks out with a full set of teeth."
              },
              {
                title: "It saves the patient money:",
                description: "The price of replacing a full set of missing teeth with implants rules out that option for most people. All-on-4 allows those who would typically have been forced to settle for dentures to get a permanent, more comfortable solution to their missing teeth problem."
              },
              {
                title: "Treatment takes only one appointment:",
                description: "This means the patient has to spend less time going back and forth from the clinic and having to take time off work or school."
              },
              {
                title: "Implants are inserted deep in the jaw:",
                description: "This provides a more stable base for the prosthetic teeth and reduces the chance of implant failure."
              },
              {
                title: "Bone grafts are rarely needed:",
                description: "The implants are placed into the best locations in the patient's jaw, so there is usually no need for bone grafts. Some people who are ineligible for implants might be cleared for All-on-4 without having to get grafts."
              }
            ]
          }
        },
        {
          title: "The disadvantages that come with All-on-4 implants include:",
          list: [
            "The patient will need to stick to a liquid diet for the first two weeks after surgery. They can move on to semi-solid foods after the first two weeks, but they will need to stick to that for up to six months while the implant fuses with bone tissue.",
            "All-on-4 implants cannot be placed in the back of the mouth due to the great bite forces.",
            "The prosthetic needs to be inserted deep to ensure a stable base."
          ]
        },
        {
          title: "Length of Treatment Time",
          content: [
            "One of the biggest differences when it comes to All on Four vs. Traditional Implants is the length of treatment required for each.",
            "When it comes to an All on Four treatment the length of the treatment time can be much shorter overall. This is because the roots and teeth are all installed in one sitting. Whereas, if you were seeking several individual implants then you would have to wait between appointments to allow your jaw to heal. This can take weeks or even months, which extends the treatment period significantly.",
            "Though if you are seeking to only replace one tooth, then a traditional implant treatment length will likely be the same as All on Four."
          ]
        },
        {
          title: "Jaw Bone Structure",
          content: "Dental implants require healthy bone in which to place the root of the implant. For All on Four, this is rarely a problem, as your dental surgeon will select the best areas of your jaw to place the necessary implants. Whereas, a traditional implant requires an implant in a specific position. Meaning the bone there may not be immediately ready for the procedure, requiring the addition of a bone graft and extending the treatment period. Bone grafts are much more commonly needed when placing an individual dental implant."
        },
        {
          title: "Recovery",
          content: [
            "The typical recovery period for an All on Four treatment is around one week. During which you will need to eat soft foods and may require some level of pain relief. But, if you choose to have several dental implants instead you create a need for several recovery periods as well.",
            "In some cases, you may find yourself having to stick to a soft diet for as many as six (6) weeks after the initial procedure. This means that time between implants and full recovery of your smile could take months, rather than the one comprehensive procedure for an All on Four treatment."
          ]
        }
      ]
    },
    tr: {
        title: "All-on-4 Dental Implants",
        sections: [
          {
            title: "What Are All-on-4 Dental Implants?",
            content: "All-on-4 dental implants are a full set of implants designed to replace your entire upper or lower set of teeth. They act as a more permanent and natural-looking alternative to dentures."
          },
          {
            title: "Dentists recommend All-on-4 for a variety of reasons, including:",
            list: [
              "They can restore teeth after chronic tooth decay or infection.",
              "Replace teeth after failed root canals.",
              "Removing and replacing teeth that are not salvageable."
            ]
          },
          {
            title: "Pros and cons of getting an All-on-4 dental implant",
            advantages: {
              introduction: "All-on-4 dental implants have gained lots of popularity in recent years due to advantages like:",
              list: [
                {
                  title: "The patient gets a new smile after a single visit:",
                  description: "During the installation of All-on-4 implants, the implants and prosthetic teeth are installed during the same visit. This means a patient that walked into the clinic missing most of their teeth walks out with a full set of teeth."
                },
                {
                  title: "It saves the patient money:",
                  description: "The price of replacing a full set of missing teeth with implants rules out that option for most people. All-on-4 allows those who would typically have been forced to settle for dentures to get a permanent, more comfortable solution to their missing teeth problem."
                },
                {
                  title: "Treatment takes only one appointment:",
                  description: "This means the patient has to spend less time going back and forth from the clinic and having to take time off work or school."
                },
                {
                  title: "Implants are inserted deep in the jaw:",
                  description: "This provides a more stable base for the prosthetic teeth and reduces the chance of implant failure."
                },
                {
                  title: "Bone grafts are rarely needed:",
                  description: "The implants are placed into the best locations in the patient's jaw, so there is usually no need for bone grafts. Some people who are ineligible for implants might be cleared for All-on-4 without having to get grafts."
                }
              ]
            }
          },
          {
            title: "The disadvantages that come with All-on-4 implants include:",
            list: [
              "The patient will need to stick to a liquid diet for the first two weeks after surgery. They can move on to semi-solid foods after the first two weeks, but they will need to stick to that for up to six months while the implant fuses with bone tissue.",
              "All-on-4 implants cannot be placed in the back of the mouth due to the great bite forces.",
              "The prosthetic needs to be inserted deep to ensure a stable base."
            ]
          },
          {
            title: "Length of Treatment Time",
            content: [
              "One of the biggest differences when it comes to All on Four vs. Traditional Implants is the length of treatment required for each.",
              "When it comes to an All on Four treatment the length of the treatment time can be much shorter overall. This is because the roots and teeth are all installed in one sitting. Whereas, if you were seeking several individual implants then you would have to wait between appointments to allow your jaw to heal. This can take weeks or even months, which extends the treatment period significantly.",
              "Though if you are seeking to only replace one tooth, then a traditional implant treatment length will likely be the same as All on Four."
            ]
          },
          {
            title: "Jaw Bone Structure",
            content: "Dental implants require healthy bone in which to place the root of the implant. For All on Four, this is rarely a problem, as your dental surgeon will select the best areas of your jaw to place the necessary implants. Whereas, a traditional implant requires an implant in a specific position. Meaning the bone there may not be immediately ready for the procedure, requiring the addition of a bone graft and extending the treatment period. Bone grafts are much more commonly needed when placing an individual dental implant."
          },
          {
            title: "Recovery",
            content: [
              "The typical recovery period for an All on Four treatment is around one week. During which you will need to eat soft foods and may require some level of pain relief. But, if you choose to have several dental implants instead you create a need for several recovery periods as well.",
              "In some cases, you may find yourself having to stick to a soft diet for as many as six (6) weeks after the initial procedure. This means that time between implants and full recovery of your smile could take months, rather than the one comprehensive procedure for an All on Four treatment."
            ]
          }
        ]
      },
    fr: {
        title: "All-on-4 Dental Implants",
        sections: [
          {
            title: "What Are All-on-4 Dental Implants?",
            content: "All-on-4 dental implants are a full set of implants designed to replace your entire upper or lower set of teeth. They act as a more permanent and natural-looking alternative to dentures."
          },
          {
            title: "Dentists recommend All-on-4 for a variety of reasons, including:",
            list: [
              "They can restore teeth after chronic tooth decay or infection.",
              "Replace teeth after failed root canals.",
              "Removing and replacing teeth that are not salvageable."
            ]
          },
          {
            title: "Pros and cons of getting an All-on-4 dental implant",
            advantages: {
              introduction: "All-on-4 dental implants have gained lots of popularity in recent years due to advantages like:",
              list: [
                {
                  title: "The patient gets a new smile after a single visit:",
                  description: "During the installation of All-on-4 implants, the implants and prosthetic teeth are installed during the same visit. This means a patient that walked into the clinic missing most of their teeth walks out with a full set of teeth."
                },
                {
                  title: "It saves the patient money:",
                  description: "The price of replacing a full set of missing teeth with implants rules out that option for most people. All-on-4 allows those who would typically have been forced to settle for dentures to get a permanent, more comfortable solution to their missing teeth problem."
                },
                {
                  title: "Treatment takes only one appointment:",
                  description: "This means the patient has to spend less time going back and forth from the clinic and having to take time off work or school."
                },
                {
                  title: "Implants are inserted deep in the jaw:",
                  description: "This provides a more stable base for the prosthetic teeth and reduces the chance of implant failure."
                },
                {
                  title: "Bone grafts are rarely needed:",
                  description: "The implants are placed into the best locations in the patient's jaw, so there is usually no need for bone grafts. Some people who are ineligible for implants might be cleared for All-on-4 without having to get grafts."
                }
              ]
            }
          },
          {
            title: "The disadvantages that come with All-on-4 implants include:",
            list: [
              "The patient will need to stick to a liquid diet for the first two weeks after surgery. They can move on to semi-solid foods after the first two weeks, but they will need to stick to that for up to six months while the implant fuses with bone tissue.",
              "All-on-4 implants cannot be placed in the back of the mouth due to the great bite forces.",
              "The prosthetic needs to be inserted deep to ensure a stable base."
            ]
          },
          {
            title: "Length of Treatment Time",
            content: [
              "One of the biggest differences when it comes to All on Four vs. Traditional Implants is the length of treatment required for each.",
              "When it comes to an All on Four treatment the length of the treatment time can be much shorter overall. This is because the roots and teeth are all installed in one sitting. Whereas, if you were seeking several individual implants then you would have to wait between appointments to allow your jaw to heal. This can take weeks or even months, which extends the treatment period significantly.",
              "Though if you are seeking to only replace one tooth, then a traditional implant treatment length will likely be the same as All on Four."
            ]
          },
          {
            title: "Jaw Bone Structure",
            content: "Dental implants require healthy bone in which to place the root of the implant. For All on Four, this is rarely a problem, as your dental surgeon will select the best areas of your jaw to place the necessary implants. Whereas, a traditional implant requires an implant in a specific position. Meaning the bone there may not be immediately ready for the procedure, requiring the addition of a bone graft and extending the treatment period. Bone grafts are much more commonly needed when placing an individual dental implant."
          },
          {
            title: "Recovery",
            content: [
              "The typical recovery period for an All on Four treatment is around one week. During which you will need to eat soft foods and may require some level of pain relief. But, if you choose to have several dental implants instead you create a need for several recovery periods as well.",
              "In some cases, you may find yourself having to stick to a soft diet for as many as six (6) weeks after the initial procedure. This means that time between implants and full recovery of your smile could take months, rather than the one comprehensive procedure for an All on Four treatment."
            ]
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
            src={allonfourdentalimplants}
            alt="All-on-4 Dental Implants"
            width={1200}
            height={950}
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
                Array.isArray(section.content) ? (
                  section.content.map((paragraph, idx) => (
                    <p key={idx} className="text-gray-600 mb-4">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className="text-gray-600 mb-4">{section.content}</p>
                )
              )}

              {section.list && (
                <ul className="space-y-3 list-disc pl-6">
                  {section.list.map((item, idx) => (
                    <li key={idx} className="text-gray-600">
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {section.advantages && (
                <div className="space-y-6">
                  <p className="text-gray-600 font-semibold">
                    {section.advantages.introduction}
                  </p>
                  <ul className="space-y-4">
                    {section.advantages.list.map((advantage, idx) => (
                      <li key={idx} className="text-gray-600">
                        <strong>{advantage.title}</strong> {advantage.description}
                      </li>
                    ))}
                  </ul>
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