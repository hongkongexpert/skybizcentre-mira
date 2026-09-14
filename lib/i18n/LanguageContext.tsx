"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { dictionaries, type Lang } from "./dictionaries"

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (typeof dictionaries)["en"]
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en")

  useEffect(() => {
    const stored = window.localStorage.getItem("lang")
    if (stored === "zh" || stored === "en") setLangState(stored)
  }, [])

  const setLang = (next: Lang) => {
    setLangState(next)
    window.localStorage.setItem("lang", next)
  }

  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-Hant-HK" : "en"
  }, [lang])

  return <LanguageContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}
