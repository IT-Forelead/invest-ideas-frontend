import { createI18n } from 'vue-i18n'
import en from './assets/lang/english.json'
import ru from './assets/lang/russian.json'
import uz from './assets/lang/uzbek.json'

export default createI18n({
  legacy: false,
  globalInjection: true,
  allowComposition: true,
  globals: true,
  locale: localStorage.getItem('lang') || 'en',
  messages: {
    en: en,
    ru: ru,
    uz: uz,
  },
})
