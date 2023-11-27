import { createI18n } from 'vue-i18n'
import fr from '@/locales/fr.json'
import en from '@/locales/en.json'

export default createI18n({
  locale: 'fr',
  fallbackLocale: 'en',
  messages: {
    fr,
    en
  },
  numberFormats: {
    fr: {
      currency: {
        style: 'currency',
        currency: 'EUR'
      }
    },
    en: {
      currency: {
        style: 'currency',
        currency: 'USD'
      }
    }
  }
})
