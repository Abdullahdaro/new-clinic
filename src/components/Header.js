import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import en from '@/messages/en.json'
import fr from '@/messages/fr.json'
import tr from '@/messages/tr.json'

export default function Header() {
  const router = useRouter();
  const { locale } = router;
  
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

  const handleLanguageChange = (e) => {
    const newLocale = e.target.value;
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <header className="bg-maincolor shadow-sm font-['Tajawal'] h-28 justify-between items-center flex">
      <div className="w-full flex justify-center mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl flex justify-between items-center h-30">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/mainlogo.png"
              alt="Qualident Logo"
              width={100}
              height={20}
              priority
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 text-sm hover:text-blue-600 font-semibold">
              {content.home}
            </Link>
            <Link href="/hakkimizda" className="text-gray-700 text-sm hover:text-blue-600 font-semibold">
              {content.about}
            </Link>
            <Link href="/tedaviler" className="text-gray-700 text-sm hover:text-blue-600 font-semibold">
              {content.treatments}
            </Link>
            <Link href="/doktorlarimiz" className="text-gray-700 text-sm hover:text-blue-600 font-semibold">
              {content.doctors}
            </Link>
            <Link href="/blog" className="text-gray-700 text-sm hover:text-blue-600 font-semibold">
              {content.blog}
            </Link>
            <Link href="/iletisim" className="text-gray-700 text-sm hover:text-blue-600 font-semibold">
              {content.contact}
            </Link>
          </nav>

          {/* Right Side - Language and Phone */}
          <div className="flex items-center gap-4">
            <select
              value={locale}
              onChange={handleLanguageChange}
              className="bg-transparent border-none text-gray-700 font-medium cursor-pointer focus:outline-none"
            >
              <option value="en">🇬🇧 ENGLISH</option>
              <option value="fr">🇫🇷 FRANÇAIS</option>
              <option value="tr">🇹🇷 TÜRKÇE</option>
            </select>
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