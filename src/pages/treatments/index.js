'use client'

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Specialist from "../../components/main-page/Specialist";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation";
import iconteeth from '../../../public/assets/iconteeth.png'
import iconchild from '../../../public/assets/iconchild.png'
import icontooth from '../../../public/assets/icontooth.png'
import iconconnect from '../../../public/assets/iconconnect.png'
import iconmouth from '../../../public/assets/iconmouth.png'
import iconshine from '../../../public/assets/iconshine.png'
import iconscraw from '../../../public/assets/iconscraw.png'
import iconsiezer from '../../../public/assets/iconsiezer.png'

export default function Treatments() {
    const router = useRouter();
    const {locale} = router 

    const treatments = [
        {
            icon: iconteeth,
            title: locale === 'tr' ? 'KOZMETİK DİŞ HEKİMLİĞİ' : locale === 'fr' ? 'DENTISTERIE COSMÉTIQUE' : 'COSMETIC DENTISTRY',
            items: [
              {
                name: 'SMILE DESIGN (HOLLYWOOD SMILE)',
                slug: 'smile-design'
              },
              {
                name: 'WHITENING / BLEACHING',
                slug: 'teeth-whitening'
              },
              {
                name: 'AESTHETIC FILLINGS',
                slug: 'aesthetic-fillings'
              },
              {
                name: 'INLAY & ONLAY',
                slug: 'inlay-onlay'
              },
              {
                name: 'ZIRCONIUM CROWN',
                slug: 'zirconium-crown'
              },
              {
                name: 'AESTHETIC GUM',
                slug: 'aesthetic-gum'
              }
            ]
          },
          {
            icon: icontooth,
            title: locale === 'tr' ? 'DENTAL İMPLANTLAR' : locale === 'fr' ? 'IMPLANTS DENTAIRES' : 'DENTAL IMPLANTS',
            items: [
              {
                name: 'Dental Implants',
                slug: 'dental-implants'
              },
              {
                name: 'All-On Four Dental Implants',
                slug: 'all-on-four-implants'
              },
              {
                name: 'Immediate Implant',
                slug: 'immediate-implant'
              }
            ]
          },
          {
            icon: iconconnect,
            title: locale === 'tr' ? 'ORTODONTİ' : locale === 'fr' ? 'ORTHODONTIE' : 'ORTHODONTICS',
            items: [
                {
                    name: 'Orthodontics Treatment',
                    slug: "orthodontics-treatment"
                },
                {
                    name: "Invisaling Treatment",
                    slug: "invisling-treatment"
                },
              'Invisalign Treatment',
              'Metal Braces Treatment',
              'Lingual Orthodontics (Hidden Wires)',
              'Porcelain Braces Treatment',
              'Removable Appliances'
            ]
          },
          {
            icon: iconscraw,
            title: locale === 'tr' ? 'KANAL TEDAVİSİ' : locale === 'fr' ? 'TRAITEMENT DU CANAL' : 'ROOT CANAL TREATMENT',
            items: [
              'Root Canal Treatment',
              'Fiber Application'
            ]
          },
          {
            icon: iconchild,
            title: locale === 'tr' ? 'ÇOCUK DİŞ HEKİMLİĞİ' : locale === 'fr' ? 'DENTISTERIE PÉDIATRIQUE' : 'CHILDREN\'S DENTISTRY',
            items: [
              'Fluoride Varnish',
              'Fissure Sealant'
            ]
          },
          {
            icon: iconsiezer,
            title: locale === 'tr' ? 'ÇENE CERRAHİSİ' : locale === 'fr' ? 'CHIRURGIE MAXILLO-FACIALE' : 'MAXILLOFACIAL AND DENTAL SURGERY',
            items: [
              'Impacted Teeth',
              'Temporomandibular Joint Disease - TMJ',
              'Wisdom Teeth'
            ]
          },
          {
            icon: iconmouth,
            title: locale === 'tr' ? 'DİŞ ETİ TEDAVİLERİ' : locale === 'fr' ? 'TRAITEMENTS DES GENCIVES' : 'GUM TREATMENTS',
            items: [
              'Aesthetic Gum Treatment',
              'Gingival Recession',
              'Bleeding Gum'
            ]
          },
          {
            icon: iconshine,
            title: locale === 'tr' ? 'PROTEZ TEDAVİLERİ' : locale === 'fr' ? 'PROTHÈSES DENTAIRES' : 'DENTURES PROSTHESIS',
            items: [
              'Complete & Partial dentures',
              'Precision-Attachment Partial Dentures'
            ]
          },
          {
            icon: iconmouth,
            title: locale === 'tr' ? 'DİĞER TEDAVİLER' : locale === 'fr' ? 'AUTRES TRAITEMENTS' : 'OTHER TREATMENTS',
            items: [
              'Sinus Lifting',
              'Dental Bone Graft',
              'Gingivitis Treatment',
              'Diagnosis Of Oral Cancer',
              'Bad Breath'
            ]
          }
    ]

    return (
        <div>
            <Header />
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {treatments.map((treatment, index) => (
                        <div 
                        key={index}
                        className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                        <div className="flex items-center gap-4 mb-4">
                            <Image
                            src={treatment.icon}
                            alt={treatment.title}
                            width={40}
                            height={40}
                            className="text-main"
                            />
                            <h3 className="text-lg font-semibold text-gray-900">{treatment.title}</h3>
                        </div>
                        <ul className="space-y-2">
                            {treatment.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                                <Link 
                                href={`/treatments/${item.slug}`}
                                className="block text-gray-600 hover:text-main hover:translate-x-1 
                                transition-all duration-200 ease-in-out"
                                >
                                {item.name}
                                </Link>
                            </li>
                            ))}
                        </ul>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

