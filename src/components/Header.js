'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import en from '@/messages/en.json'
import fr from '@/messages/fr.json'
import tr from '@/messages/tr.json'
import { useState } from 'react'
import logoforheader from '../../public/assets/logoforheader.jpg'

export default function Header() {
  const router = useRouter();
  const { locale } = router;
  const [isOpen, setIsOpen] = useState(false);
  
  const messages = {
    en, 
    fr,
    tr
  };
  
  const content = messages[locale]?.header || messages.en.header;

  const languageFlags = {
    en: '🇬🇧',
    fr: '🇫🇷',
    tr: '🇹🇷'
  };

  const handleLanguageSelect = (newLocale) => {
    router.push(router.pathname, router.asPath, { locale: newLocale });
    setIsOpen(false);
  };

  const flags = {
    en: (
      <svg className="w-6 h-6" viewBox="0 0 640 480">
        <g fillRule="evenodd">
          <path fill="#012169" d="M0 0h640v480H0z"/>
          <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/>
          <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"/>
          <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"/>
          <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"/>
        </g>
      </svg>
    ),
    fr: (
      <svg className="w-6 h-6" viewBox="0 0 640 480">
        <g fillRule="evenodd" strokeWidth="1pt">
          <path fill="#fff" d="M0 0h640v480H0z"/>
          <path fill="#00267f" d="M0 0h213.3v480H0z"/>
          <path fill="#f31830" d="M426.7 0H640v480H426.7z"/>
        </g>
      </svg>
    ),
    tr: (
      <svg className="w-6 h-6" viewBox="0 0 640 480">
        <g fillRule="evenodd">
          <path fill="#e30a17" d="M0 0h640v480H0z"/>
          <path fill="#fff" d="M407 247.5c0 66.2-54.6 119.9-122 119.9s-122-53.7-122-120 54.6-119.8 122-119.8 122 53.7 122 119.9z"/>
          <path fill="#e30a17" d="M413 247.5c0 53-43.6 95.9-97.5 95.9s-97.6-43-97.6-96 43.7-95.8 97.6-95.8 97.6 42.9 97.6 95.9z"/>
          <path fill="#fff" d="m430.7 191.5-1 44.3-41.3 11.2 40.8 14.5-1 40.7 26.5-31.8 40.2 14-23.2-34.1 28.3-33.9-43.5 12-25.8-37z"/>
        </g>
      </svg>
    )
  }

  return (
    <header className="bg-white shadow-sm font-['Tajawal'] h-28 justify-between items-center flex sticky top-0 z-50">
      <div className="w-full flex justify-center mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl flex justify-between items-center h-30">
          {/* Logo */}
          <Link href="/" className="flex items-center mr-20">
            <Image
              src={logoforheader}
              alt="Qualident Logo"
              width={128}
              height={50}
              priority
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 mr-4">
            <Link href="/" className="text-gray-700 text-sm hover:text-main font-semibold">
              {content.home}
            </Link>
            <Link href="/aboutus" className="text-gray-700 text-sm hover:text-main font-semibold">
              {content.about}
            </Link>
            <Link href="/treatments" className="text-gray-700 text-sm hover:text-main font-semibold">
              {content.treatments}
            </Link>
            <Link href="/ourdoctors" className="text-gray-700 text-sm hover:text-main font-semibold">
              {content.doctors}
            </Link>
            <Link href="/blog" className="text-gray-700 text-sm hover:text-main font-semibold">
              {content.blog}
            </Link>
            <Link href="/contactus" className="text-gray-700 text-sm hover:text-main font-semibold">
              {content.contact}
            </Link>
          </nav>

          {/* Right Side - Language and Phone */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg 
                border border-gray-200/20 hover:border-gray-300 focus:outline-none focus:ring-2 
                focus:ring-main/20 transition-all duration-300 ease-in-out"
              >
                {flags[locale]}
                <svg 
                  className="w-4 h-4 text-gray-600" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Custom dropdown menu */}
              {isOpen && (
                <div className="absolute top-full mt-1 w-full bg-white rounded-lg shadow-lg overflow-hidden z-50">
                  {Object.entries(flags).map(([key, flag]) => (
                    <button
                      key={key}
                      onClick={() => handleLanguageSelect(key)}
                      className={`w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition-colors
                        ${locale === key ? 'bg-gray-50' : ''}`}
                    >
                      {flag}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <a 
              href="tel:+905367424119" 
              className="hidden md:flex items-center gap-2 text-gray-700 font-medium"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                />
              </svg>
              +90 536 742 41 19
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}