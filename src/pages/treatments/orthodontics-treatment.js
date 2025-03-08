'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useRouter } from "next/router"
import Image from "next/image"
import orthodoniticstreatment from "../../../public/treatments/orthodoniticstreatment.png"

export default function OrthodonticsTreatment() {
  const router = useRouter()
  const { locale } = router

  const content = {
    en: {
      title: "Orthodontics Treatment",
      introduction: "Some people have straight teeth that line up together, but many of us have crooked teeth that don't fit together correctly. Crooked teeth can affect your bite. The good news is you can easily straighten your teeth and correct your bite with the help of the right orthodontic treatment. Find out what orthodontics is and how it can help you.",
      sections: [
        {
          title: "So What Is Orthodontics?",
          content: [
            "Orthodontics is the dentistry branch that addresses the diagnosis, prevention, interception, guidance, and correction of bad bites or dental irregularities, including the use of braces.",
            "A specialist known as an orthodontist is the right person to consult for your orthodontic treatment. These specialists attend two or more additional years of education after four years of dental school."
          ]
        },
        {
          title: "Benefits",
          content: "You might think that straightening your teeth only has aesthetic benefits, but that couldn't be farther from the truth. Crooked teeth can be harder to clean, which can lead to tooth decay or periodontal disease. Teeth that don't fit correctly can make it harder to chew, leading to headaches, shoulder or back pain, and even temporomandibular joint (TMJ) disorders."
        },
        {
          title: "How Do Orthodontic Treatments Work?",
          content: "Orthodontic treatments involve different types of appliances used to retrain muscles, slowly move teeth, and affect your jaw's growth by placing gentle pressure on your teeth and jaw.",
          subsections: [
            {
              title: "Fixed vs. Removable Appliances",
              content: "Orthodontic treatments could involve fixed or removable appliances. Depending on how severe your situation is, your orthodontist will advise you on which approach is the right one for you.",
              fixed: {
                title: "Fixed appliances include:",
                items: [
                  {
                    title: "Braces:",
                    description: "You've most likely heard of braces – they're the most common fixed appliance. They consist of bands, wires, and brackets. How do they work? The bands are the anchors held in place around your teeth. Brackets are attached to the front of your teeth. Arch wires connect the brackets to the bands. Tightening the archwires puts pressure on your teeth, slowly moving them towards their target position. Braces are usually adjusted monthly and are worn for a few months to a few years."
                  },
                  {
                    title: "Special fixed appliances:",
                    description: "These should only be used as a last resort to control thumb sucking or tongue thrusting. Since they're attached to the teeth by bands, they can feel quite uncomfortable while eating."
                  },
                  {
                    title: "Fixed space maintainers:",
                    description: "Sometimes, young children lose their teeth prematurely. In such situations, an orthodontist might place a space maintainer in your child's mouth to keep the space open until a permanent tooth appears."
                  }
                ]
              },
              removable: {
                title: "Removable appliances include:",
                items: [
                  {
                    title: "Aligners:",
                    description: "These are increasingly becoming a popular alternative to traditional braces for adults. Aligners move teeth in the same way as braces, but they are virtually invisible and don't involve metal wires and brackets. If you're using them, you need to remove them while eating, brushing, and flossing."
                  },
                  {
                    title: "Removable space maintainers:",
                    description: "These devices are used for the same reason as fixed space maintainers. They're made up of plastic or wire branches and an acrylic base that fits over the jaw. They're placed in open spaces between teeth to keep the teeth apart."
                  },
                  {
                    title: "Jaw repositioning appliances:",
                    description: "These appliances are also known as splints. They're placed either on the top or lower jaw and are used to treat TMJ disorders by training the jaw to close in a better position."
                  },
                  {
                    title: "Lip and cheek bumpers:",
                    description: "Your lip and cheek muscles might exert pressure on your teeth. In such cases, you can use bumpers to keep your lips and cheeks away from the teeth."
                  },
                  {
                    title: "Palatal expander:",
                    description: "This device is a plastic plate that fits over the roof of the mouth. It's used when the arch of your upper jaw needs to be widened."
                  },
                  {
                    title: "Removable retainers:",
                    description: "These devices, worn on the roof of the mouth, prevent your teeth from shifting back to their previous position."
                  },
                  {
                    title: "Headgear:",
                    description: "These devices slow down the growth of the upper jaw. They also hold the back teeth in place while the front teeth are pulled back."
                  }
                ]
              }
            }
          ]
        },
        {
          title: "How Do I Know If I Need Orthodontic Treatment?",
          introduction: "Here are some problems with your teeth that may require orthodontics:",
          problems: [
            {
              title: "Overbite:",
              description: "In this case, the upper front teeth appear to stick out over the lower teeth."
            },
            {
              title: "Underbite:",
              description: "Here, the lower teeth may appear too far forward, while the upper teeth are set too far back."
            },
            {
              title: "Crossbite:",
              description: "You know you have a crossbite when your upper teeth fit behind your lower teeth when your mouth is closed."
            },
            {
              title: "Open bite:",
              description: "Some people have a vertical gap between the front lower and upper teeth when biting down. This is called an open bite."
            },
            {
              title: "Misplaced midline:",
              description: "Here, the centre of your upper and lower front teeth don't line up."
            },
            {
              title: "Spacing:",
              description: "In this case, your teeth don't seem to fill up your mouth. There appear to be random gaps or spaces between teeth."
            },
            {
              title: "Crowding:",
              description: "This is what happens when the dental ridge in your mouth doesn't have room for all your teeth."
            }
          ]
        },
        {
          title: "What is the best age for orthodontic treatment?",
          content: [
            "When it comes to orthodontic treatment, age isn't an issue. While it is generally recommended that orthodontic treatment should take place during the adolescent years when the patient is still undergoing physical growth, the developments in treatment options in recent years have meant more adults are able to achieve their perfect smiles.",
            "These days, there is no best age for orthodontic treatment.",
            "Rather your willingness to care for your smile and consistently wear any removable devices will result in much better results at any age."
          ]
        },
        {
          title: "Are there any risks with orthodontic treatment?",
          content: [
            "While the orthodontic treatment itself isn't particularly risky, any intervention to your body does carry some minor risks.",
            "Orthodontic treatment risk can include toothache and mild discomfort, scratches and ulcers, gum infections, enamel demineralisation, and root shortening.",
            "To best ensure the health and safety of your teeth it is vital that you always see a registered specialist orthodontist and refrain from attempting any DIY treatment methods as these can damage your teeth and may result in tooth loss.",
            "Whether you're considering traditional braces or an alternative to braces, only an orthodontist has the training, experience and expert knowledge to be able to offer you the full suite of treatment options and give you and your child the confidence that you're in the best hands."
          ]
        }
      ]
    },
    tr: {
        title: "Orthodontics Treatment",
        introduction: "Some people have straight teeth that line up together, but many of us have crooked teeth that don't fit together correctly. Crooked teeth can affect your bite. The good news is you can easily straighten your teeth and correct your bite with the help of the right orthodontic treatment. Find out what orthodontics is and how it can help you.",
        sections: [
          {
            title: "So What Is Orthodontics?",
            content: [
              "Orthodontics is the dentistry branch that addresses the diagnosis, prevention, interception, guidance, and correction of bad bites or dental irregularities, including the use of braces.",
              "A specialist known as an orthodontist is the right person to consult for your orthodontic treatment. These specialists attend two or more additional years of education after four years of dental school."
            ]
          },
          {
            title: "Benefits",
            content: "You might think that straightening your teeth only has aesthetic benefits, but that couldn't be farther from the truth. Crooked teeth can be harder to clean, which can lead to tooth decay or periodontal disease. Teeth that don't fit correctly can make it harder to chew, leading to headaches, shoulder or back pain, and even temporomandibular joint (TMJ) disorders."
          },
          {
            title: "How Do Orthodontic Treatments Work?",
            content: "Orthodontic treatments involve different types of appliances used to retrain muscles, slowly move teeth, and affect your jaw's growth by placing gentle pressure on your teeth and jaw.",
            subsections: [
              {
                title: "Fixed vs. Removable Appliances",
                content: "Orthodontic treatments could involve fixed or removable appliances. Depending on how severe your situation is, your orthodontist will advise you on which approach is the right one for you.",
                fixed: {
                  title: "Fixed appliances include:",
                  items: [
                    {
                      title: "Braces:",
                      description: "You've most likely heard of braces – they're the most common fixed appliance. They consist of bands, wires, and brackets. How do they work? The bands are the anchors held in place around your teeth. Brackets are attached to the front of your teeth. Arch wires connect the brackets to the bands. Tightening the archwires puts pressure on your teeth, slowly moving them towards their target position. Braces are usually adjusted monthly and are worn for a few months to a few years."
                    },
                    {
                      title: "Special fixed appliances:",
                      description: "These should only be used as a last resort to control thumb sucking or tongue thrusting. Since they're attached to the teeth by bands, they can feel quite uncomfortable while eating."
                    },
                    {
                      title: "Fixed space maintainers:",
                      description: "Sometimes, young children lose their teeth prematurely. In such situations, an orthodontist might place a space maintainer in your child's mouth to keep the space open until a permanent tooth appears."
                    }
                  ]
                },
                removable: {
                  title: "Removable appliances include:",
                  items: [
                    {
                      title: "Aligners:",
                      description: "These are increasingly becoming a popular alternative to traditional braces for adults. Aligners move teeth in the same way as braces, but they are virtually invisible and don't involve metal wires and brackets. If you're using them, you need to remove them while eating, brushing, and flossing."
                    },
                    {
                      title: "Removable space maintainers:",
                      description: "These devices are used for the same reason as fixed space maintainers. They're made up of plastic or wire branches and an acrylic base that fits over the jaw. They're placed in open spaces between teeth to keep the teeth apart."
                    },
                    {
                      title: "Jaw repositioning appliances:",
                      description: "These appliances are also known as splints. They're placed either on the top or lower jaw and are used to treat TMJ disorders by training the jaw to close in a better position."
                    },
                    {
                      title: "Lip and cheek bumpers:",
                      description: "Your lip and cheek muscles might exert pressure on your teeth. In such cases, you can use bumpers to keep your lips and cheeks away from the teeth."
                    },
                    {
                      title: "Palatal expander:",
                      description: "This device is a plastic plate that fits over the roof of the mouth. It's used when the arch of your upper jaw needs to be widened."
                    },
                    {
                      title: "Removable retainers:",
                      description: "These devices, worn on the roof of the mouth, prevent your teeth from shifting back to their previous position."
                    },
                    {
                      title: "Headgear:",
                      description: "These devices slow down the growth of the upper jaw. They also hold the back teeth in place while the front teeth are pulled back."
                    }
                  ]
                }
              }
            ]
          },
          {
            title: "How Do I Know If I Need Orthodontic Treatment?",
            introduction: "Here are some problems with your teeth that may require orthodontics:",
            problems: [
              {
                title: "Overbite:",
                description: "In this case, the upper front teeth appear to stick out over the lower teeth."
              },
              {
                title: "Underbite:",
                description: "Here, the lower teeth may appear too far forward, while the upper teeth are set too far back."
              },
              {
                title: "Crossbite:",
                description: "You know you have a crossbite when your upper teeth fit behind your lower teeth when your mouth is closed."
              },
              {
                title: "Open bite:",
                description: "Some people have a vertical gap between the front lower and upper teeth when biting down. This is called an open bite."
              },
              {
                title: "Misplaced midline:",
                description: "Here, the centre of your upper and lower front teeth don't line up."
              },
              {
                title: "Spacing:",
                description: "In this case, your teeth don't seem to fill up your mouth. There appear to be random gaps or spaces between teeth."
              },
              {
                title: "Crowding:",
                description: "This is what happens when the dental ridge in your mouth doesn't have room for all your teeth."
              }
            ]
          },
          {
            title: "What is the best age for orthodontic treatment?",
            content: [
              "When it comes to orthodontic treatment, age isn't an issue. While it is generally recommended that orthodontic treatment should take place during the adolescent years when the patient is still undergoing physical growth, the developments in treatment options in recent years have meant more adults are able to achieve their perfect smiles.",
              "These days, there is no best age for orthodontic treatment.",
              "Rather your willingness to care for your smile and consistently wear any removable devices will result in much better results at any age."
            ]
          },
          {
            title: "Are there any risks with orthodontic treatment?",
            content: [
              "While the orthodontic treatment itself isn't particularly risky, any intervention to your body does carry some minor risks.",
              "Orthodontic treatment risk can include toothache and mild discomfort, scratches and ulcers, gum infections, enamel demineralisation, and root shortening.",
              "To best ensure the health and safety of your teeth it is vital that you always see a registered specialist orthodontist and refrain from attempting any DIY treatment methods as these can damage your teeth and may result in tooth loss.",
              "Whether you're considering traditional braces or an alternative to braces, only an orthodontist has the training, experience and expert knowledge to be able to offer you the full suite of treatment options and give you and your child the confidence that you're in the best hands."
            ]
          }
        ]
      },
    fr: {
        title: "Orthodontics Treatment",
        introduction: "Some people have straight teeth that line up together, but many of us have crooked teeth that don't fit together correctly. Crooked teeth can affect your bite. The good news is you can easily straighten your teeth and correct your bite with the help of the right orthodontic treatment. Find out what orthodontics is and how it can help you.",
        sections: [
          {
            title: "So What Is Orthodontics?",
            content: [
              "Orthodontics is the dentistry branch that addresses the diagnosis, prevention, interception, guidance, and correction of bad bites or dental irregularities, including the use of braces.",
              "A specialist known as an orthodontist is the right person to consult for your orthodontic treatment. These specialists attend two or more additional years of education after four years of dental school."
            ]
          },
          {
            title: "Benefits",
            content: "You might think that straightening your teeth only has aesthetic benefits, but that couldn't be farther from the truth. Crooked teeth can be harder to clean, which can lead to tooth decay or periodontal disease. Teeth that don't fit correctly can make it harder to chew, leading to headaches, shoulder or back pain, and even temporomandibular joint (TMJ) disorders."
          },
          {
            title: "How Do Orthodontic Treatments Work?",
            content: "Orthodontic treatments involve different types of appliances used to retrain muscles, slowly move teeth, and affect your jaw's growth by placing gentle pressure on your teeth and jaw.",
            subsections: [
              {
                title: "Fixed vs. Removable Appliances",
                content: "Orthodontic treatments could involve fixed or removable appliances. Depending on how severe your situation is, your orthodontist will advise you on which approach is the right one for you.",
                fixed: {
                  title: "Fixed appliances include:",
                  items: [
                    {
                      title: "Braces:",
                      description: "You've most likely heard of braces – they're the most common fixed appliance. They consist of bands, wires, and brackets. How do they work? The bands are the anchors held in place around your teeth. Brackets are attached to the front of your teeth. Arch wires connect the brackets to the bands. Tightening the archwires puts pressure on your teeth, slowly moving them towards their target position. Braces are usually adjusted monthly and are worn for a few months to a few years."
                    },
                    {
                      title: "Special fixed appliances:",
                      description: "These should only be used as a last resort to control thumb sucking or tongue thrusting. Since they're attached to the teeth by bands, they can feel quite uncomfortable while eating."
                    },
                    {
                      title: "Fixed space maintainers:",
                      description: "Sometimes, young children lose their teeth prematurely. In such situations, an orthodontist might place a space maintainer in your child's mouth to keep the space open until a permanent tooth appears."
                    }
                  ]
                },
                removable: {
                  title: "Removable appliances include:",
                  items: [
                    {
                      title: "Aligners:",
                      description: "These are increasingly becoming a popular alternative to traditional braces for adults. Aligners move teeth in the same way as braces, but they are virtually invisible and don't involve metal wires and brackets. If you're using them, you need to remove them while eating, brushing, and flossing."
                    },
                    {
                      title: "Removable space maintainers:",
                      description: "These devices are used for the same reason as fixed space maintainers. They're made up of plastic or wire branches and an acrylic base that fits over the jaw. They're placed in open spaces between teeth to keep the teeth apart."
                    },
                    {
                      title: "Jaw repositioning appliances:",
                      description: "These appliances are also known as splints. They're placed either on the top or lower jaw and are used to treat TMJ disorders by training the jaw to close in a better position."
                    },
                    {
                      title: "Lip and cheek bumpers:",
                      description: "Your lip and cheek muscles might exert pressure on your teeth. In such cases, you can use bumpers to keep your lips and cheeks away from the teeth."
                    },
                    {
                      title: "Palatal expander:",
                      description: "This device is a plastic plate that fits over the roof of the mouth. It's used when the arch of your upper jaw needs to be widened."
                    },
                    {
                      title: "Removable retainers:",
                      description: "These devices, worn on the roof of the mouth, prevent your teeth from shifting back to their previous position."
                    },
                    {
                      title: "Headgear:",
                      description: "These devices slow down the growth of the upper jaw. They also hold the back teeth in place while the front teeth are pulled back."
                    }
                  ]
                }
              }
            ]
          },
          {
            title: "How Do I Know If I Need Orthodontic Treatment?",
            introduction: "Here are some problems with your teeth that may require orthodontics:",
            problems: [
              {
                title: "Overbite:",
                description: "In this case, the upper front teeth appear to stick out over the lower teeth."
              },
              {
                title: "Underbite:",
                description: "Here, the lower teeth may appear too far forward, while the upper teeth are set too far back."
              },
              {
                title: "Crossbite:",
                description: "You know you have a crossbite when your upper teeth fit behind your lower teeth when your mouth is closed."
              },
              {
                title: "Open bite:",
                description: "Some people have a vertical gap between the front lower and upper teeth when biting down. This is called an open bite."
              },
              {
                title: "Misplaced midline:",
                description: "Here, the centre of your upper and lower front teeth don't line up."
              },
              {
                title: "Spacing:",
                description: "In this case, your teeth don't seem to fill up your mouth. There appear to be random gaps or spaces between teeth."
              },
              {
                title: "Crowding:",
                description: "This is what happens when the dental ridge in your mouth doesn't have room for all your teeth."
              }
            ]
          },
          {
            title: "What is the best age for orthodontic treatment?",
            content: [
              "When it comes to orthodontic treatment, age isn't an issue. While it is generally recommended that orthodontic treatment should take place during the adolescent years when the patient is still undergoing physical growth, the developments in treatment options in recent years have meant more adults are able to achieve their perfect smiles.",
              "These days, there is no best age for orthodontic treatment.",
              "Rather your willingness to care for your smile and consistently wear any removable devices will result in much better results at any age."
            ]
          },
          {
            title: "Are there any risks with orthodontic treatment?",
            content: [
              "While the orthodontic treatment itself isn't particularly risky, any intervention to your body does carry some minor risks.",
              "Orthodontic treatment risk can include toothache and mild discomfort, scratches and ulcers, gum infections, enamel demineralisation, and root shortening.",
              "To best ensure the health and safety of your teeth it is vital that you always see a registered specialist orthodontist and refrain from attempting any DIY treatment methods as these can damage your teeth and may result in tooth loss.",
              "Whether you're considering traditional braces or an alternative to braces, only an orthodontist has the training, experience and expert knowledge to be able to offer you the full suite of treatment options and give you and your child the confidence that you're in the best hands."
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
            src= {orthodoniticstreatment}
            alt="Orthodontics Treatment"
            width={1500}
            height={1080}
            className="w-full rounded-xl"
          />
        </div>

        <h1 className="text-4xl font-bold text-center mb-12 text-main">
          {pageContent.title}
        </h1>

        <p className="text-gray-600 mb-12 text-lg leading-relaxed">
          {pageContent.introduction}
        </p>

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

              {section.subsections?.map((subsection, idx) => (
                <div key={idx} className="mt-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    {subsection.title}
                  </h4>
                  <p className="text-gray-600 mb-6">{subsection.content}</p>

                  {subsection.fixed && (
                    <div className="mb-6">
                      <p className="font-semibold mb-4">{subsection.fixed.title}</p>
                      <ul className="space-y-4">
                        {subsection.fixed.items.map((item, i) => (
                          <li key={i}>
                            <strong className="text-gray-900">{item.title}</strong>{" "}
                            <span className="text-gray-600">{item.description}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {subsection.removable && (
                    <div className="mb-6">
                      <p className="font-semibold mb-4">{subsection.removable.title}</p>
                      <ul className="space-y-4">
                        {subsection.removable.items.map((item, i) => (
                          <li key={i}>
                            <strong className="text-gray-900">{item.title}</strong>{" "}
                            <span className="text-gray-600">{item.description}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}

              {section.problems && (
                <div className="mt-6">
                  <p className="font-semibold mb-4">{section.introduction}</p>
                  <ul className="space-y-4">
                    {section.problems.map((problem, idx) => (
                      <li key={idx}>
                        <strong className="text-gray-900">{problem.title}</strong>{" "}
                        <span className="text-gray-600">{problem.description}</span>
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