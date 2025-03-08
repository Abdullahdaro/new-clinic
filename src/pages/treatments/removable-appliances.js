'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useRouter } from "next/router"
import Image from "next/image"
import removableappliances from "../../../public/treatments/removableappliances.jpg"

export default function RemovableAppliances() {
  const router = useRouter()
  const { locale } = router

  const content = {
    en: {
      title: "Dental Appliances",
      introduction: {
        title: "Dental Appliances – What are they?",
        content: "Dental appliances are common parts of dentistry and orthodontics. A dental appliance refers to any device that helps with your treatment plan. These appliances can be permanent or removable. They help to repair damaged teeth, straighten crooked teeth, and replace missing teeth. Dental appliances are fitted to your mouth specifically to give you the best outcome from your orthodontic care."
      },
      permanentAppliances: {
        title: "Types of Permanent Dental Appliances",
        items: [
          {
            title: "Crowns and Fillings",
            content: "Though you may not think of crowns and fillings as \"appliances,\" they're dental devices that replace missing tooth parts once you've had a cavity repaired."
          },
          {
            title: "Bridges",
            content: "A bridge is fixed between your existing teeth when you've had to have a complete tooth extraction or are missing one or more teeth in a row. Unlike partial dentures, you do not remove your bridge. It remains a permanent part of your teeth, both to maintain your bite's existing structure and to keep daily tasks like eating easy and normal for you."
          },
          {
            title: "Braces",
            content: "While not permanent for your entire life, braces are permanent in the sense that they remain on until your teeth have been moved into alignment."
          }
        ]
      },
      removableAppliances: {
        title: "Types of Removable Dental Appliances",
        items: [
          {
            title: "Prosthetic",
            content: "The most common type of prosthetic dental appliance is dentures. Dentures exist in several forms: partial and full. Partial dentures fit in part of your mouth where there are missing teeth. The new style of partial dentures are constructed of a flexible material that moves more naturally and easily with your mouth. Full dentures replace complete tooth loss on the upper jaw, lower jaw, or both jaws."
          },
          {
            title: "Mouth Guards",
            content: "Mouthguard typically means the type of guard you wear during sports events, but there are also nightguards that protect against tooth grinding that happens during sleep. Whether you wear a mouthguard for sport or to keep you from grinding your teeth at night, that guard counts as a dental appliance.\n\nAnother type of guard, called the tongue thrust guard, prevents you from pushing your tongue against your front teeth while your mouth is closed. This kind of behaviour can result in crooked teeth and bite problems."
          },
          {
            title: "Airway and Snoring",
            content: "Nighttime teeth grinding is just one oral problem people face while sleeping. Snoring can signify you're not breathing as well as you should while you sleep, and it can disrupt your partner, too. Snoring dental appliances will change the position of your jaws or tongue while you sleep, opening up your airways and cutting back on the soft tissue that vibrates and causes snoring. As a bonus, you can't grind your teeth while you're wearing one of these devices, either.\n\nSnoring is a sign of sleep apnea, too. If you have sleep apnea, your doctor and dentist might work to come up with a dental appliance solution to this issue. Sleep apnea can be a dangerous condition that leads to heart problems and in extreme cases, death. Dental appliances are only one treatment option for sleep apnea and may be used in conjunction with other treatments."
          },
          {
            title: "Orthodontic Retainers",
            content: "Retainers keep your teeth in place after having orthodontic work done. When you have your braces removed, your orthodontist will fit you with a retainer. Typically you wear the retainer at night to keep your teeth in place, though some patients have to wear it day and night for a while after having braces removed.\n\nIf you've ever considered Invisalign braces, this technology uses a series of retainers that slowly reposition your teeth. You wear Invisalign braces day and night until your treatment is done, removing them only to brush your teeth, clean the retainers, and eat.\n\nIf your child loses a baby tooth too early, your dentist or orthodontist may recommend a removable space maintainer. Without the adult tooth to push through the gum, the space the baby tooth leaves can cause the other tooth to move out of alignment. The removable space maintainer keeps that space open for the adult tooth. Your child only has to wear it until the adult tooth comes in."
          }
        ]
      },
      care: {
        title: "Caring for Dental Appliances",
        content: [
          "You need to carefully brush your permanent dental appliances, the same way you brush your natural teeth. Your dentist will recommend specific brushing techniques, but getting all surfaces of the tooth and brushing for at least two minutes is recommended.",
          "Cleaning removable appliances is a bit different. For some, you can brush them with toothpaste and rinse them before putting them back in. Others you can clean in denture cleaning solution and store in a safe case when you're not using them. Your dentist or orthodontist will go over the cleaning specifics. Always make sure you clean your appliances well because bacteria can grow on them, putting your oral health at risk.",
          "Dental appliances help to fix oral problems that many people face. If you're wondering about getting a dental appliance to straighten your teeth or help with sleep, talk to your dentist today. The right treatment plan and appliance could significantly improve your quality of life."
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
            src={removableappliances}
            alt="Removable Dental Appliances"
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
          <p className="text-gray-600">{pageContent.introduction.content}</p>
        </section>

        {/* Permanent Appliances */}
        <section className="prose max-w-none mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            {pageContent.permanentAppliances.title}
          </h3>
          <div className="space-y-6">
            {pageContent.permanentAppliances.items.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Removable Appliances */}
        <section className="prose max-w-none mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            {pageContent.removableAppliances.title}
          </h3>
          <div className="space-y-6">
            {pageContent.removableAppliances.items.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                {item.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-gray-600 mb-4">{paragraph}</p>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Care Instructions */}
        <section className="prose max-w-none">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            {pageContent.care.title}
          </h3>
          <div className="bg-blue-50 p-6 rounded-lg">
            {pageContent.care.content.map((paragraph, index) => (
              <p key={index} className="text-gray-600 mb-4">{paragraph}</p>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
} 