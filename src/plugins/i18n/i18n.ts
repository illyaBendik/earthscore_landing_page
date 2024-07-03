import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import de from './locales/de.json'
const localStorageLang = localStorage.getItem('lang')

type MessageSchema = typeof en
export const i18n = createI18n<[MessageSchema], 'en' | 'de'>({
  locale: localStorageLang || 'de',
  fallbackLocale: 'de',
  messages: {
    en: en,
    de: de
  },
  legacy: false
})
