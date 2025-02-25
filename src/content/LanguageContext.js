import { createContext, useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const router = useRouter()
  const { locale } = router
  const [activeLang, setActiveLang] = useState(locale || 'en')

  useEffect(() => {
    if (locale) {
      setActiveLang(locale)
    }
  }, [locale])

  const changeLanguage = (newLocale) => {
    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale: newLocale })
  }

  return (
    <LanguageContext.Provider value={{ activeLang, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext) 